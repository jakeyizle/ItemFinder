import * as request from 'request-promise'
import { isUndefined } from 'util';

/**
 * Isolated interface only exclusive
 * for this API class
 */
export interface IBearerToken {
    identifier: string,
    type: string,
    expires_in: number,
    scope?: string
}

/**
 * Available regions
 */
export enum Region {
    Europe = 'eu',
    UnitedStates = 'us',
    Korea = 'kr',
    Taiwan = 'tw',
    China = 'cn'
}

/**
 * Available locales
 */
export enum Locale {
    American = "en_US",
    Mexican = "es_MX",
    Brazilian = "pt_BR",
    British = "en_GB",
    Spanish = "es_ES",
    French = "fr_FR",
    Russian = "ru_RU",
    Germany = "de_DE",
    Portuguese = "pt_PT",
    Italian = "it_IT",
    Korean = "ko_KR",
    Taiwan = "zh_TW",
    Chinese = "zh_CN" 
}

/**
 * Callback when creating a new API object to be provided
 */
export interface IResultFunction {
    (error: any, bearerToken: IBearerToken | null) : void
}

/**
 * Implements all the requests interfaces in order to proceed
 * blizzard valid requests
 * (Mentioned to be scope only for the individual games)
 * 
 * @author Enigma
 * @package BlizzardTypo
 */
export class API
{
    private hasToken: boolean = false

    //API Language 
    private region: Region
    private locale: Locale 

    //API workaround data
    private client_id: string
    private client_secret: string
    private authToken?: IBearerToken

    private callbackOnConnect: IResultFunction

    /**
     * Initializes our api with the given credentials
     * @param clientId 
     * @param clientSecret 
     * @param region    default europe
     * @param locale    default eu_GB
     */
    constructor(clientId: string, clientSecret: string, callbackOnConnect: IResultFunction, region?: Region, locale?: Locale) {
        this.region = region || Region.Europe
        this.locale = locale || Locale.British
        this.client_id = clientId
        this.client_secret = clientSecret
        this.callbackOnConnect = callbackOnConnect
        this.retrieveToken()
    }


    /**
     * Sets the Authorization Bearer token
     * (Just set if you have a valid one)
     * 
     * @param {BearerToken} token
     * 
     * @return void
     */
    setBearerToken = (token: IBearerToken) => {
        this.authToken = token
    }

    /**
     * Returns the Authorization Bearer Token
     * 
     * @return IBearer
     */
    get getBearerToken (){
        return this.authToken
    }

    /**
     * Returns whether the authorization token has been
     * initialized
     * 
     * @return boolean
     */
    hasAuthorizationToken () : boolean {
        return this.hasToken
    }

    /**
     * Retrieves our Authorization Bearer Token in order to proceed
     * further requests
     * 
     * @return void
     */
    private retrieveToken = () => {
        request.get(`https://${this.region}.battle.net/oauth/token?client_id=${this.client_id}&client_secret=${this.client_secret}&grant_type=client_credentials`)
            .then(JSON.parse)
            .then(body => {
                this.authToken = {
                    identifier: body.access_token,
                    type: body.token_type,
                    expires_in: body.expires_in,
                    scope: body.scope
                }
                this.hasToken = true
                this.callbackOnConnect(null, this.authToken)
            })
            .catch(err => {
                this.callbackOnConnect(err, null)
            })
    }


}