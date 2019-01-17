import { IBearerToken, Region, Locale } from "./api";
import { HttpRequest } from './httpRequest'
import { ApiException } from "./exceptions";

/**
 * Wow API Reference 
 * @link https://develop.battle.net/documentation/api-reference/
 */
export namespace Wow
{
    /**
     * ConnectedRealm requests all the connected realms
     * 
     * @author Enigma
     * @package Wow
     * @link https://develop.battle.net/documentation/api-reference/world-of-warcraft-game-data-api
     */
    export class ConnectedRealm
    {
        /**
         * Authorization token instance
         */
        private token: IBearerToken

        /**
         * Initializes our bearer token
         * @param IBearerToken bearerToken 
         */
        constructor(bearerToken: IBearerToken){
            this.token = bearerToken
        }

        /**
         * Initializes the authorization token for this profile can operate
         */
        set bearerToken (token: IBearerToken) {
            this.token = token
        }

        /**
         * Returns an index of connected realms.
         * 
         * @param string region
         * @param string namespace
         * @param string locale
         * 
         * @return Promise
         */
        getConnectedRealmIndex = (region: Region, namespace: string, locale: Locale): Promise<JSON | ApiException> => {
            return HttpRequest.get(`https://${region}.api.blizzard.com/data/wow/connected-realm/?namespace=${namespace}&locale=${locale}&access_token=${this.token.identifier}`)
        }

        /**
         * Returns a single connected realm by ID.
         * 
         * @param string region
         * @param number connRealmId
         * @param string namespace
         * @param string locale
         * 
         * @return Promise
         */
        getConnectedRealm = (region: Region, connRealmId: number, namespace: string, locale: Locale): Promise<JSON | ApiException> => {
            return HttpRequest.get(`https://${region}.api.blizzard.com/data/wow/connected-realm/${connRealmId}?namespace=${namespace}&locale=${locale}&access_token=${this.token.identifier}`)
        }


    }

    /**
     * Mythic requests keystones, leaderboards and modes data
     * 
     * @author Enigma
     * @package Wow
     * @link https://develop.battle.net/documentation/api-reference/world-of-warcraft-game-data-api
     */
    export class Mythic
    {
        /**
         * Authorization token instance
         */
        private token: IBearerToken

        /**
         * Initializes our bearer token
         * @param IBearerToken bearerToken 
         */
        constructor(bearerToken: IBearerToken){
            this.token = bearerToken
        }

        /**
         * Initializes the authorization token for this profile can operate
         */
        set bearerToken (token: IBearerToken) {
            this.token = token
        }

        /**
         * Returns an index of Mythic Keystone Leaderboard dungeon instances for a connected realm.
         * 
         * @param string region
         * @param number connRealmid
         * @param string namespace
         * @param string locale
         * 
         * @return Promise
         */
        getMythicLeaderboardIndex = (region: Region, connRealmId: number, namespace: string, locale: Locale): Promise<JSON | ApiException> => {
            return HttpRequest.get(`https://${region}.api.blizzard.com/data/wow/connected-realm/${connRealmId}/mythic-leaderboard/?namespace=${namespace}&locale=${locale}&access_token=${this.token.identifier}`)
        }

        /**
         * Returns a weekly Mythic Keystone Leaderboard by period.
         * @param string region
         * @param number connRealmid
         * @param number dungeonId
         * @param number period
         * @param string namespace
         * @param string locale
         * 
         * @return Promise
         */
        getMythicLeaderboard = (region: Region, connRealmId: number, dungeonId: number, period: number, 
                namespace: string, locale: Locale): Promise<JSON | ApiException> => {
            return HttpRequest.get(`https://${region}.api.blizzard.com/data/wow/connected-realm/${connRealmId}/mythic-leaderboard/${dungeonId}/period/${period}?namespace=${namespace}&locale=${locale}&access_token=${this.token.identifier}`)
        }

        /**
         * Returns the leaderboard for a given raid and faction.
         * 
         * @param string region
         * @param string raid
         * @param string faction
         * @param string namespace
         * @param string locale
         * 
         * @return Promise
         */
        getMythicRaidLeaderboard = (region: Region, raid: string, faction: string, namespace: string, locale: Locale): Promise<JSON | ApiException> => {
            return HttpRequest.get(`https://${region}.api.blizzard.com/data/wow/leaderboard/hall-of-fame/${raid}/${faction}?namespace=${namespace}&locale=${locale}&access_token=${this.token.identifier}`)
        }

        /**
         * Returns current period information about the Mythic Challenge Mode relevant to Mythic Keystone Leaderboards.
         * 
         * @param string region
         * @param string namespace
         * @param string locale
         * 
         * @return Promise
         */
        getMythicChallengeModeIndex = (region: Region, namespace: string, locale: Locale): Promise<JSON | ApiException> => {
            return HttpRequest.get(`https://${region}.api.blizzard.com/data/wow/mythic-challenge-mode/?namespace=${namespace}&locale=${locale}&access_token=${this.token.identifier}`)
        }
    }

    /**
     * PlayableSpecialization requests class specs data
     * 
     * @author Enigma
     * @package Wow
     * @link https://develop.battle.net/documentation/api-reference/world-of-warcraft-game-data-api
     */
    export class PlayableSpecialization
    {
        /**
         * Authorization token instance
         */
        private token: IBearerToken

        /**
         * Initializes our bearer token
         * @param IBearerToken bearerToken 
         */
        constructor(bearerToken: IBearerToken){
            this.token = bearerToken
        }

        /**
         * Initializes the authorization token for this profile can operate
         */
        set bearerToken (token: IBearerToken) {
            this.token = token
        }

        /**
         * Returns an index of playable specializations.
         * 
         * @param string region
         * @param string namespace
         * @param string locale
         * 
         * @return Promise
         */
        getPlayableSpecializationIndex = (region: Region, namespace: string, locale: Locale): Promise<JSON | ApiException> => {
            return HttpRequest.get(`https://${region}.api.blizzard.com/data/wow/playable-specialization/?namespace=${namespace}&locale=${locale}&access_token=${this.token.identifier}`)
        }
        
        /**
         * Returns a playable specialization by ID.
         * 
         * @param string region
         * @param number specId
         * @param string namespace
         * @param string locale
         * 
         * @return Promise
         */
        getPlayableSpecialization = (region: Region, specId: number, namespace: string, locale: Locale): Promise<JSON | ApiException> => {
            return HttpRequest.get(`https://${region}.api.blizzard.com/data/wow/playable-specialization/${specId}?namespace=${namespace}&locale=${locale}&access_token=${this.token.identifier}`)
        }
    }

    /**
     * Realm requests all the realm data
     * 
     * @author Enigma
     * @package Wow
     * @link https://develop.battle.net/documentation/api-reference/world-of-warcraft-game-data-api
     */
    export class Realm
    {
        /**
         * Authorization token instance
         */
        private token: IBearerToken

        /**
         * Initializes our bearer token
         * @param IBearerToken bearerToken 
         */
        constructor(bearerToken: IBearerToken){
            this.token = bearerToken
        }

        /**
         * Initializes the authorization token for this profile can operate
         */
        set bearerToken (token: IBearerToken) {
            this.token = token
        }

        /**
         * Returns an index of realms.
         * 
         * @param string region
         * @param string namespace
         * @param string locale
         * 
         * @return Promise
         */
        getRealmIndex = (region: Region, namespace: string, locale: Locale): Promise<JSON | ApiException> => {
            return HttpRequest.get(`https://${region}.api.blizzard.com/data/wow/realm/?namespace=${namespace}&locale=${locale}&access_token=${this.token.identifier}`)
        }

        /**
         * Returns a single realm by slug or ID.
         * 
         * @param string region
         * @param string realmSlug
         * @param string namespace
         * @param string locale
         * 
         * @return Promise
         */
        getRealm = (region: Region, realmSlug: string, namespace: string, locale: Locale): Promise<JSON | ApiException> => {
            return HttpRequest.get(`https://${region}.api.blizzard.com/data/wow/realm/${realmSlug}?namespace=${namespace}&locale=${locale}&access_token=${this.token.identifier}`)
        }

        /**
         * The realm status API allows developers to retrieve realm status information. 
         * This information is limited to whether or not the realm is up, the type and state of the realm, and the current population.
         * Although this endpoint has no required query string parameters, use the optional realms parameter to limit the realms returned to a specific set of realms.
         * 
         * @param string region
         * @param string locale
         * 
         * @return Promise
         */
        getRealmStatus = (region: Region, locale: Locale): Promise<JSON | ApiException> => {
            return HttpRequest.get(`https://${region}.api.blizzard.com/wow/realm/status?locale=${locale}&access_token=${this.token.identifier}`)
        }
    }

    /**
     * Region requests all the region data
     * 
     * @author Enigma
     * @package Wow
     * @link https://develop.battle.net/documentation/api-reference/world-of-warcraft-game-data-api
     */
    export class Region
    {
        /**
         * Authorization token instance
         */
        private token: IBearerToken

        /**
         * Initializes our bearer token
         * @param IBearerToken bearerToken 
         */
        constructor(bearerToken: IBearerToken){
            this.token = bearerToken
        }

        /**
         * Initializes the authorization token for this profile can operate
         */
        set bearerToken (token: IBearerToken) {
            this.token = token
        }

        /**
         * Returns an index of regions.
         * 
         * @param string region
         * @param string namespace
         * @param string locale
         * 
         * @return Promise
         */
        getRegionIndex = (region: Region, namespace: string, locale: Locale): Promise<JSON | ApiException> => {
            return HttpRequest.get(`https://${region}.api.blizzard.com/data/wow/region/?namespace=${namespace}&locale=${locale}&access_token=${this.token.identifier}`)
        }

        /**
         * Returns a single region by ID.
         * 
         * @param string region
         * @param number regionId
         * @param string namespace
         * @param string locale
         * 
         * @return Promise
         */
        getRegion = (region: Region, regionId: number, namespace: string, locale: Locale): Promise<JSON | ApiException> => {
            return HttpRequest.get(`https://${region}.api.blizzard.com/data/wow/region/${regionId}?namespace=${namespace}&locale=${locale}&access_token=${this.token.identifier}`)
        }
    }

    /**
     * Token requests all the time token data
     * 
     * @author Enigma
     * @package Wow
     * @link https://develop.battle.net/documentation/api-reference/world-of-warcraft-game-data-api
     */
    export class Token 
    {
        /**
         * Authorization token instance
         */
        private token: IBearerToken

        /**
         * Initializes our bearer token
         * @param IBearerToken bearerToken 
         */
        constructor(bearerToken: IBearerToken){
            this.token = bearerToken
        }

        /**
         * Initializes the authorization token for this profile can operate
         */
        set bearerToken (token: IBearerToken) {
            this.token = token
        }

        /**
         * Returns the WoW Token index.
         * 
         * @param string region
         * @param string namespace
         * @param string locale
         * 
         * @return Promise
         */
        getTokenIndex = (region: Region, namespace: string, locale: Locale): Promise<JSON | ApiException> => {
            return HttpRequest.get(`https://${region}.api.blizzard.com/data/wow/token/?namespace=${namespace}&locale=${locale}&access_token=${this.token.identifier}`)
        }
    }

    /**
     * Achivement requests to retrieve in-game achivement id
     * 
     * @author Enigma
     * @package Wow
     * @link https://develop.battle.net/documentation/api-reference/world-of-warcraft-community-api
     */
    export class Achievement
    {
        /**
         * Authorization token instance
         */
        private token: IBearerToken

        /**
         * Initializes our bearer token
         * @param IBearerToken bearerToken 
         */
        constructor(bearerToken: IBearerToken){
            this.token = bearerToken
        }

        /**
         * Initializes the authorization token for this profile can operate
         */
        set bearerToken (token: IBearerToken) {
            this.token = token
        }

        /**
         * Returns data about an individual achievement.
         * 
         * @param string region
         * @param string id
         * @param string locale
         * 
         * @return Promise
         */
        getAchivement = (region: Region, id: string, locale: Locale): Promise<JSON | ApiException> => {
            return HttpRequest.get(`https://${region}.api.blizzard.com/wow/achievement/${id}?locale=${locale}&access_token=${this.token.identifier}`)
        }
    }

    /**
     * Auction request all auction house listed items
     * 
     * @author Enigma
     * @package Wow
     * @link https://develop.battle.net/documentation/api-reference/world-of-warcraft-community-api
     */
    export class Auction
    {
        /**
         * Authorization token instance
         */
        private token: IBearerToken

        /**
         * Initializes our bearer token
         * @param IBearerToken bearerToken 
         */
        constructor(bearerToken: IBearerToken){
            this.token = bearerToken
        }

        /**
         * Initializes the authorization token for this profile can operate
         */
        set bearerToken (token: IBearerToken) {
            this.token = token
        }

        /**
         * Auction APIs currently provide rolling batches of data about current auctions. Fetching auction dumps is a two-step process that involves checking a per-realm index file to determine if a recent dump has been generated and then fetching the most recently generated dump file (if necessary).
         * This API resource provides a per-realm list of recently generated auction house data dumps.
         * 
         * @param string region
         * @param string realm
         * @param string locale
         * 
         * @return Promise
         */
        getAuctionData = (region: Region, realm: string, locale: Locale): Promise<JSON | ApiException> => {
            return HttpRequest.get(`https://${region}.api.blizzard.com/wow/auction/data/${realm}?locale=${locale}&access_token=${this.token.identifier}`)
        }
    }

    /**
     * Boss request all the bosses data or single
     * 
     * @author Enigma
     * @package Wow
     * @link https://develop.battle.net/documentation/api-reference/world-of-warcraft-community-api
     */
    export class Boss
    {
        /**
         * Authorization token instance
         */
        private token: IBearerToken

        /**
         * Initializes our bearer token
         * @param IBearerToken bearerToken 
         */
        constructor(bearerToken: IBearerToken){
            this.token = bearerToken
        }

        /**
         * Initializes the authorization token for this profile can operate
         */
        set bearerToken (token: IBearerToken) {
            this.token = token
        }

        /**
         * Returns a list of all supported bosses. A "boss" in this context should be considered a boss encounter, which may include more than one NPC.
         * 
         * @param string region
         * @param string locale
         * 
         * @return Promise
         */
        getMasterList = (region: Region, locale: Locale): Promise<JSON | ApiException> => {
            return HttpRequest.get(`https://${region}.api.blizzard.com/wow/boss/?locale=${locale}&access_token=${this.token.identifier}`)
        }

        /**
         * The boss API provides information about bosses. A "boss" in this context should be considered a boss encounter, which may include more than one NPC.
         * 
         * @param string region
         * @param string bossId
         * @param string locale
         * 
         * @return Promise
         */
        getBoss = (region: Region, bossId: string, locale: Locale): Promise<JSON | ApiException> => {
            return HttpRequest.get(`https://${region}.api.blizzard.com/wow/boss/${bossId}?locale=${locale}&access_token=${this.token.identifier}`)
        }
    }

    /**
     * Challenge request all challenge data
     * 
     * @author Enigma
     * @package Wow
     * @link https://develop.battle.net/documentation/api-reference/world-of-warcraft-community-api
     */
    export class Challenge
    {
        /**
         * Authorization token instance
         */
        private token: IBearerToken

        /**
         * Initializes our bearer token
         * @param IBearerToken bearerToken 
         */
        constructor(bearerToken: IBearerToken){
            this.token = bearerToken
        }

        /**
         * Initializes the authorization token for this profile can operate
         */
        set bearerToken (token: IBearerToken) {
            this.token = token
        } 

        /**
         * The request returns data for all nine challenge mode maps (currently). The map field includes the current medal times for each dungeon. Each ladder provides data about each character that was part of each run. The character data includes the current cached specialization of the character while the member field includes the specialization of the character during the challenge mode run.
         * 
         * @param string region
         * @param string realm
         * @param string locale
         * 
         * @return Promise
         */
        getChallengeRealmLeaderboard = (region: Region, realm: string, locale: Locale): Promise<JSON | ApiException> => {
            return HttpRequest.get(`https://${region}.api.blizzard.com/wow/challenge/${realm}?locale=${locale}&access_token=${this.token.identifier}`)
        }

        /**
         * The region leaderboard has the exact same data format as the realm leaderboards except there is no realm field. Instead, the response has the top 100 results gathered for each map for all of the available realm leaderboards in a region.
         * 
         * @param string region
         * @param string locale
         * 
         * @return Promise
         */
        getChallengeRegionLeaderboard = (region: Region, locale: Locale): Promise<JSON | ApiException> => {
            return HttpRequest.get(`https://${region}.api.blizzard.com/wow/challenge/region?locale=${locale}&access_token=${this.token.identifier}`)
        }
    }

     /**
     * CharacterProfile request all the character profile
     * 
     * @author Enigma
     * @package Wow
     * @link https://develop.battle.net/documentation/api-reference/world-of-warcraft-community-api
     */
    export class CharacterProfile
    {
        /**
         * Authorization token instance
         */
        private token: IBearerToken

        /**
         * Initializes our bearer token
         * @param IBearerToken bearerToken 
         */
        constructor(bearerToken: IBearerToken){
            this.token = bearerToken
        }

        /**
         * Initializes the authorization token for this profile can operate
         */
        set bearerToken (token: IBearerToken) {
            this.token = token
        } 

        /**
         * The Character Profile API is the primary way to access character information. This API can be used to fetch a single character at a time through an HTTP GET request to a URL describing the character profile resource. By default, these requests return a basic dataset, and each request can return zero or more additional fields. 
         * To access this API, craft a resource URL pointing to the desired character for which to retrieve information.
         * 
         * @param string region
         * @param string realm
         * @param string characterName
         * @param string fields
         * @param string locale
         * 
         * @return Promise
         */
        getCharacterProfile = (region: Region, realm: string, characterName: string, locale: Locale, fields?: string): Promise<JSON | ApiException> => {
            if (typeof fields == 'undefined' || fields == "")
                return HttpRequest.get(`https://${region}.api.blizzard.com/wow/character/${realm}/${characterName}?locale=${locale}&access_token=${this.token.identifier}`)
            else
                return HttpRequest.get(`https://${region}.api.blizzard.com/wow/character/${realm}/${characterName}?fields=${escape(fields)}&locale=${locale}&access_token=${this.token.identifier}`)
        }

        /**
         * Returns a map of achievement data including completion timestamps and criteria information.
         * 
         * @param string region
         * @param string realm
         * @param string characterName
         * @param string locale
         * 
         * @return Promise
         */
        getAchivements = (region: Region, realm: string, characterName: string, locale: Locale): Promise<JSON | ApiException> => {
            return HttpRequest.get(`https://${region}.api.blizzard.com/wow/character/${realm}/${characterName}?fields=achivements&locale=${locale}&access_token=${this.token.identifier}`)
        }

        /**
         * Returns a map of a character's appearance settings, such as which face texture they've selected and whether or not a helm is visible.
         * 
         * @param string region
         * @param string realm
         * @param string characterName
         * @param string locale
         * 
         * @return Promise
         */
        getAppearance = (region: Region, realm: string, characterName: string, locale: Locale): Promise<JSON | ApiException> => {
            return HttpRequest.get(`https://${region}.api.blizzard.com/wow/character/${realm}/${characterName}?fields=appearance&locale=${locale}&access_token=${this.token.identifier}`)
        }

        /**
         * The character's activity feed.
         * 
         * @param string region
         * @param string realm
         * @param string characterName
         * @param string locale
         * 
         * @return Promise
         */
        getFeed = (region: Region, realm: string, characterName: string, locale: Locale): Promise<JSON | ApiException> => {
            return HttpRequest.get(`https://${region}.api.blizzard.com/wow/character/${realm}/${characterName}?fields=feed&locale=${locale}&access_token=${this.token.identifier}`)
        }

        /**
         * A summary of the guild to which the character belongs. 
         * If the character does not belong to a guild and this field is requested, this field will not be exposed.
         * When a guild is requested, this resource returns a map with key-value pairs that describe a basic set of guild information. Note that the rank of the character is not included in this block as it describes a guild and not a membership of the guild. 
         * To retrieve the character's rank within the guild, make a specific, separate request to the guild profile resource.
         * 
         * @param string region
         * @param string realm
         * @param string characterName
         * @param string locale
         * 
         * @return Promise
         */
        getGuild = (region: Region, realm: string, characterName: string, locale: Locale): Promise<JSON | ApiException> => {
            return HttpRequest.get(`https://${region}.api.blizzard.com/wow/character/${realm}/${characterName}?fields=guild&locale=${locale}&access_token=${this.token.identifier}`)
        }

        /**
         * Returns a list of all combat pets the character has obtained.
         * 
         * @param string region
         * @param string realm
         * @param string characterName
         * @param string locale
         * 
         * @return Promise
         */
        getHunterPets = (region: Region, realm: string, characterName: string, locale: Locale): Promise<JSON | ApiException> => {
            return HttpRequest.get(`https://${region}.api.blizzard.com/wow/character/${realm}/${characterName}?fields=hunterPets&locale=${locale}&access_token=${this.token.identifier}`)
        }

        /**
         * Returns a list of items equipped by the character. Use of this field will also include the average item level and average item level equipped for the character.
         * When the items field is used, this resource returns a map structure containing information about the character's equipped items as well as their average item level.
         * 
         * @param string region
         * @param string realm
         * @param string characterName
         * @param string locale
         * 
         * @return Promise
         */
        getItems = (region: string, realm: string, characterName: string, locale: Locale): Promise<JSON | ApiException> => {
            return HttpRequest.get(`https://${region}.api.blizzard.com/wow/character/${realm}/${characterName}?fields=items&locale=${locale}&access_token=${this.token.identifier}`)
        }

        /**
         * Returns a list of all mounts the character has obtained.
         * 
         * @param string region
         * @param string realm
         * @param string characterName
         * @param string locale
         * 
         * @return Promise
         */
        getMounts = (region: Region, realm: string, characterName: string, locale: Locale): Promise<JSON | ApiException> => {
            return HttpRequest.get(`https://${region}.api.blizzard.com/wow/character/${realm}/${characterName}?fields=mounts&locale=${locale}&access_token=${this.token.identifier}`)
        }

        /**
         * Returns a list of the battle pets the character has obtained.
         * 
         * @param string region
         * @param string realm
         * @param string characterName
         * @param string locale
         * 
         * @return Promise
         */
        getPets = (region: Region, realm: string, characterName: string, locale: Locale): Promise<JSON | ApiException> => {
            return HttpRequest.get(`https://${region}.api.blizzard.com/wow/character/${realm}/${characterName}?fields=pets&locale=${locale}&access_token=${this.token.identifier}`)
        }

        /**
         * Data about the character's current battle pet slots.
         * The response contains which slot a pet is in and whether the slot is empty or locked. 
         * The response also includes the battlePetId, which is unique for the character and can be used to match a battlePetId in the pets field for the character. 
         * The ability list is the list of three active abilities on a pet. 
         * If the pet is not high enough level for multiple abilities it will always be the pet's first three abilities.
         * 
         * @param string region
         * @param string realm
         * @param string characterName
         * @param string locale
         * 
         * @return Promise
         */
        getPetSlots = (region: Region, realm: string, characterName: string, locale: Locale): Promise<JSON | ApiException> => {
            return HttpRequest.get(`https://${region}.api.blizzard.com/wow/character/${realm}/${characterName}?fields=petSlots&locale=${locale}&access_token=${this.token.identifier}`)
        }

        /**
         * Returns a list of the character's professions. Does not include class professions.
         * 
         * @param string region
         * @param string realm
         * @param string characterName
         * @param string locale
         * 
         * @return Promise
         */
        getProfessions = (region: Region, realm: string, characterName: string, locale: Locale): Promise<JSON | ApiException> => {
            return HttpRequest.get(`https://${region}.api.blizzard.com/wow/character/${realm}/${characterName}?fields=professions&locale=${locale}&access_token=${this.token.identifier}`)
        }
                
        /**
         * Returns a list of raids and bosses indicating raid progression and completeness.
         * 
         * @param string region
         * @param string realm
         * @param string characterName
         * @param string locale
         * 
         * @return Promise
         */
        getProgression = (region: Region, realm: string, characterName: string, locale: Locale): Promise<JSON | ApiException> => {
            return HttpRequest.get(`https://${region}.api.blizzard.com/wow/character/${realm}/${characterName}?fields=progression&locale=${locale}&access_token=${this.token.identifier}`)
        }

        /**
         * Returns a map of PvP information, including arena team membership and rated battlegrounds information.
         * 
         * @param string region
         * @param string realm
         * @param string characterName
         * @param string locale
         * 
         * @return Promise
         */
        getPVP = (region: Region, realm: string, characterName: string, locale: Locale): Promise<JSON | ApiException> => {
            return HttpRequest.get(`https://${region}.api.blizzard.com/wow/character/${realm}/${characterName}?fields=pvp&locale=${locale}&access_token=${this.token.identifier}`)
        }

        /**
         * Returns a list of quests the character has completed.
         * 
         * @param string region
         * @param string realm
         * @param string characterName
         * @param string locale
         * 
         * @return Promise
         */
        getQuests = (region: Region, realm: string, characterName: string, locale: Locale): Promise<JSON | ApiException> => {
            return HttpRequest.get(`https://${region}.api.blizzard.com/wow/character/${realm}/${characterName}?fields=quests&locale=${locale}&access_token=${this.token.identifier}`)
        }

        /**
         * Returns a list of the factions with which the character has an associated reputation.
         * 
         * @param string region
         * @param string realm
         * @param string characterName
         * @param string locale
         * 
         * @return Promise
         */
        getReputations = (region: Region, realm: string, characterName: string, locale: Locale): Promise<JSON | ApiException> => {
            return HttpRequest.get(`https://${region}.api.blizzard.com/wow/character/${realm}/${characterName}?fields=reputation&locale=${locale}&access_token=${this.token.identifier}`)
        }

        /**
         * Returns a map of character statistics.
         * 
         * @param string region
         * @param string realm
         * @param string characterName
         * @param string locale
         * 
         * @return Promise
         */
        getStatistics = (region: Region, realm: string, characterName: string, locale: Locale): Promise<JSON | ApiException> => {
            return HttpRequest.get(`https://${region}.api.blizzard.com/wow/character/${realm}/${characterName}?fields=statistics&locale=${locale}&access_token=${this.token.identifier}`)
        }

        /**
         * Returns a map of character attributes and stats.
         * 
         * @param string region
         * @param string realm
         * @param string characterName
         * @param string locale
         * 
         * @return Promise
         */
        getStats = (region: Region, realm: string, characterName: string, locale: Locale): Promise<JSON | ApiException> => {
            return HttpRequest.get(`https://${region}.api.blizzard.com/wow/character/${realm}/${characterName}?fields=stats&locale=${locale}&access_token=${this.token.identifier}`)
        }

        /**
         * Returns a list of the character's talent structures.
         * 
         * @param string region
         * @param string realm
         * @param string characterName
         * @param string locale
         * 
         * @return Promise
         */
        getTalents = (region: Region, realm: string, characterName: string, locale: Locale): Promise<JSON | ApiException> => {
            return HttpRequest.get(`https://${region}.api.blizzard.com/wow/character/${realm}/${characterName}?fields=talents&locale=${locale}&access_token=${this.token.identifier}`)
        }

        /**
         * Returns a list of titles the character has obtained, including the currently selected title.
         * 
         * @param string region
         * @param string realm
         * @param string characterName
         * @param string locale
         * 
         * @return Promise
         */
        getTitles = (region: Region, realm: string, characterName: string, locale: Locale): Promise<JSON | ApiException> => {
            return HttpRequest.get(`https://${region}.api.blizzard.com/wow/character/${realm}/${characterName}?fields=titles&locale=${locale}&access_token=${this.token.identifier}`)
        }

        /**
         * Raw character audit data that powers the character audit on the game site.
         * 
         * @param string region
         * @param string realm
         * @param string characterName
         * @param string locale
         * 
         * @return Promise
         */
        getAudit = (region: Region, realm: string, characterName: string, locale: Locale): Promise<JSON | ApiException> => {
            return HttpRequest.get(`https://${region}.api.blizzard.com/wow/character/${realm}/${characterName}?fields=audit&locale=${locale}&access_token=${this.token.identifier}`)
        }
    }

    /**
     * GuildProfile request all the guild profile
     * 
     * @author Enigma
     * @package Wow
     * @link https://develop.battle.net/documentation/api-reference/world-of-warcraft-community-api
     */
    export class GuildProfile
    {       
        /**
        * Authorization token instance
        */
        private token: IBearerToken

        /**
        * Initializes our bearer token
        * @param IBearerToken bearerToken 
        */
        constructor(bearerToken: IBearerToken){
           this.token = bearerToken
        }

        /**
        * Initializes the authorization token for this profile can operate
        */
        set bearerToken (token: IBearerToken) {
           this.token = token
        } 

        /**
        * The guild profile API is the primary way to access guild information. This API can fetch a single guild at a time through an HTTP GET request to a URL describing the guild profile resource. 
        * By default, these requests return a basic dataset and each request can retrieve zero or more additional fields.
        * 
        * @param string region
        * @param string realm
        * @param string guildName
        * @param string locale
        * 
        * @return Promise
        */
        getProfile = (region: Region, realm: string, guildName: string, locale: Locale): Promise<JSON | ApiException> => {
            return HttpRequest.get(`https://${region}.api.blizzard.com/wow/guild/${realm}/${guildName}?fields=achievements%2Cchallenge&locale=${locale}&access_token=${this.token.identifier}`)
        }

        /**
        * Returns a list of characters that are members of the guild. When the members list is requested, a list of character objects is returned. 
        * Each object in the returned members list contains a character block as well as a rank field.
        * 
        * @param string region
        * @param string realm
        * @param string guildName
        * @param string locale
        * 
        * @return Promise
        */
        getMembers = (region: Region, realm: string, guildName: string, locale: Locale): Promise<JSON | ApiException> => {
            return HttpRequest.get(`https://${region}.api.blizzard.com/wow/guild/${realm}/${guildName}?fields=members&locale=${locale}&access_token=${this.token.identifier}`)
        }

        /**
        * A set of data structures that describe the achievements earned by the guild. When requesting achievement data, several sets of data will be returned.
        * Read more at blizz web
        * 
        * @param string region
        * @param string realm
        * @param string guildName
        * @param string locale
        * 
        * @return Promise
        */
        getAchivements = (region: Region, realm: string, guildName: string, locale: Locale): Promise<JSON | ApiException> => {
            return HttpRequest.get(`https://${region}.api.blizzard.com/wow/guild/${realm}/${guildName}?fields=achievements&locale=${locale}&access_token=${this.token.identifier}`)
        }

        /**
        * A set of data structures that describe the guild's news feed. When the news feed is requested, this resource returns a list of news objects. 
        * Each one has a type, a timestamp, and some other data depending on the type: itemId, an achievement object, and so on.
        * 
        * @param string region
        * @param string realm
        * @param string guildName
        * @param string locale
        * 
        * @return Promise
        */
        getNews = (region: Region, realm: string, guildName: string, locale: Locale): Promise<JSON | ApiException> => {
            return HttpRequest.get(`https://${region}.api.blizzard.com/wow/guild/${realm}/${guildName}?fields=news&locale=${locale}&access_token=${this.token.identifier}`)
        }

        /**
        * The top three challenge mode guild run times for each challenge mode map.
        * 
        * @param string region
        * @param string realm
        * @param string guildName
        * @param string locale
        * 
        * @return Promise
        */
        getChallenge = (region: Region, realm: string, guildName: string, locale: Locale): Promise<JSON | ApiException> => {
            return HttpRequest.get(`https://${region}.api.blizzard.com/wow/guild/${realm}/${guildName}?fields=challenge&locale=${locale}&access_token=${this.token.identifier}`)
        }
    }

    /**
     * Item requests all the items and specific item data
     * 
     * @author Enigma
     * @package Wow
     * @link https://develop.battle.net/documentation/api-reference/world-of-warcraft-community-api
     */
    export class Item
    {
        /**
        * Authorization token instance
        */
        private token: IBearerToken

        /**
        * Initializes our bearer token
        * @param IBearerToken bearerToken 
        */
        constructor(bearerToken: IBearerToken){
           this.token = bearerToken
        }

        /**
        * Initializes the authorization token for this profile can operate
        */
        set bearerToken (token: IBearerToken) {
           this.token = token
        }
        
        /**
         * The item API provides detailed item information, including item set information.
         * 
         * @param string region
         * @param number itemId
         * @param string locale
         * 
         * @return Promise
         */
        getItem = (region: Region, itemId: number, locale: Locale): Promise<JSON | ApiException> => {
            return HttpRequest.get(`https://${region}.api.blizzard.com/wow/item/${itemId}?locale=${locale}&access_token=${this.token.identifier}`)
        }

        /**
         * The item API provides detailed item information, including item set information.
         * 
         * @param string region
         * @param number setId
         * @param string locale
         * 
         * @return Promise
         */
        getItemSet = (region: Region, setId: number, locale: Locale): Promise<JSON | ApiException> => {
            return HttpRequest.get(`https://${region}.api.blizzard.com/wow/set/${setId}?locale=${locale}&access_token=${this.token.identifier}`)
        } 
    }

    /**
     * Mount requests all the list of mounts
     * 
     * @author Enigma
     * @package Wow
     * @link https://develop.battle.net/documentation/api-reference/world-of-warcraft-community-api
     */
    export class Mount
    {
        /**
        * Authorization token instance
        */
        private token: IBearerToken

        /**
        * Initializes our bearer token
        * @param IBearerToken bearerToken 
        */
        constructor(bearerToken: IBearerToken){
           this.token = bearerToken
        }

        /**
        * Initializes the authorization token for this profile can operate
        */
        set bearerToken (token: IBearerToken) {
           this.token = token
        }
        
        /**
         * Returns a list of all supported mounts.
         * 
         * @param string region
         * @param string locale
         * 
         * @return Promise
         */
        getMount = (region: Region, locale: Locale): Promise<JSON | ApiException> => {
            return HttpRequest.get(`https://${region}.api.blizzard.com/wow/mount/?locale=${locale}&access_token=${this.token.identifier}`)
        }
        
    }

    /**
     * Pet requests all the list of pets
     * 
     * @author Enigma
     * @package Wow
     * @link https://develop.battle.net/documentation/api-reference/world-of-warcraft-community-api
     */
    export class Pet
    {
        /**
        * Authorization token instance
        */
        private token: IBearerToken

        /**
        * Initializes our bearer token
        * @param IBearerToken bearerToken 
        */
        constructor(bearerToken: IBearerToken){
           this.token = bearerToken
        }

        /**
        * Initializes the authorization token for this profile can operate
        */
        set bearerToken (token: IBearerToken) {
           this.token = token
        }
        
        /**
         * Returns a list of all supported battle and vanity pets.
         * 
         * @param string region
         * @param string locale
         * 
         * @return Promise
         */
        getMasterList = (region: Region, locale: Locale): Promise<JSON | ApiException> => {
            return HttpRequest.get(`https://${region}.api.blizzard.com/wow/pet/?locale=${locale}&access_token=${this.token.identifier}`)
        }

        /**
         * Returns data about a individual battle pet ability ID. This resource does not provide ability tooltips.
         * 
         * @param string region
         * @param string abilityId
         * @param string locale
         * 
         * @return Promise
         */
        getAbilities = (region: Region, abilityId: string, locale: Locale): Promise<JSON | ApiException> => {
            return HttpRequest.get(`https://${region}.api.blizzard.com/wow/pet/ability/${abilityId}?locale=${locale}&access_token=${this.token.identifier}`)
        }
        
        /**
         * Returns data about an individual pet species. Use pets as the field value in a character profile request to get species IDs. 
         * Each species also has data about its six abilities.
         * 
         * @param string region
         * @param string speciesID
         * @param string locale
         * 
         * @return Promise
         */
        getSpecs = (region: Region, speciesID: string, locale: Locale): Promise<JSON | ApiException> => {
            return HttpRequest.get(`https://${region}.api.blizzard.com/wow/pet/species/${speciesID}?locale=${locale}&access_token=${this.token.identifier}`)
        }

        /**
         * Returns detailed information about a given species of pet.
         * 
         * @param string region
         * @param string speciesID
         * @param number level
         * @param number breedId
         * @param number qualityId
         * @param string locale
         * 
         * @return Promise
         */
        getStats = (region: Region, speciesID: string, level: number, breedId: number, 
            qualityId: number, locale: Locale): Promise<JSON | ApiException> => {
            return HttpRequest.get(`https://${region}.api.blizzard.com/wow/pet/stats/${speciesID}?level=${level}&breedId=${breedId}&qualityId=${qualityId}&locale=${locale}&access_token=${this.token.identifier}`)
        }
    }

    /**
     * PVP requests the leaderboars only
     * 
     * @author Enigma
     * @package Wow
     * @link https://develop.battle.net/documentation/api-reference/world-of-warcraft-community-api
     */
    export class PvP
    {
        /**
        * Authorization token instance
        */
        private token: IBearerToken

        /**
        * Initializes our bearer token
        * @param IBearerToken bearerToken 
        */
        constructor(bearerToken: IBearerToken){
           this.token = bearerToken
        }

        /**
        * Initializes the authorization token for this profile can operate
        */
        set bearerToken (token: IBearerToken) {
           this.token = token
        }

        /**
         * The Leaderboard API endpoint provides leaderboard information for the 2v2, 3v3, 5v5, and Rated Battleground leaderboards.
         * 
         * @param string region
         * @param string bracket
         * @param string locale
         * 
         * @return Promise
         */
        getLeaderboards = (region: Region, bracket: string, locale: Locale): Promise<JSON | ApiException> => {
            return HttpRequest.get(`https://${region}.api.blizzard.com/wow/leaderboard/${bracket}?locale=${locale}&access_token=${this.token.identifier}`)
        }
    }

    /**
     * Quest requests the quest by id
     * 
     * @author Enigma
     * @package Wow
     * @link https://develop.battle.net/documentation/api-reference/world-of-warcraft-community-api
     */
    export class Quest
    {
        /**
        * Authorization token instance
        */
        private token: IBearerToken

        /**
        * Initializes our bearer token
        * @param IBearerToken bearerToken 
        */
        constructor(bearerToken: IBearerToken){
           this.token = bearerToken
        }

        /**
        * Initializes the authorization token for this profile can operate
        */
        set bearerToken (token: IBearerToken) {
           this.token = token
        }

        /**
         * Returns metadata for a specified quest.
         * 
         * @param string region
         * @param string questId
         * @param string locale
         * 
         * @return Promise
         */
        getQuest = (region: Region, questId: string, locale: Locale): Promise<JSON | ApiException> => {
            return HttpRequest.get(`https://${region}.api.blizzard.com/wow/quest/${questId}?locale=${locale}&access_token=${this.token.identifier}`)
        }
    }

    /**
     * Recipe requests single recipe only
     * 
     * @author Enigma
     * @package Wow
     * @link https://develop.battle.net/documentation/api-reference/world-of-warcraft-community-api
     */
    export class Recipe
    {
        /**
        * Authorization token instance
        */
        private token: IBearerToken

        /**
        * Initializes our bearer token
        * @param IBearerToken bearerToken 
        */
        constructor(bearerToken: IBearerToken){
           this.token = bearerToken
        }

        /**
        * Initializes the authorization token for this profile can operate
        */
        set bearerToken (token: IBearerToken) {
           this.token = token
        }

        /**
         * Returns basic recipe information.
         * 
         * @param string region
         * @param string recipeId
         * @param string locale
         * 
         * @return Promise 
         */
        getRecipe = (region: Region, recipeId: string, locale: Locale): Promise<JSON | ApiException> => {
            return HttpRequest.get(`https://${region}.api.blizzard.com/wow/recipe/${recipeId}?locale=${locale}&access_token=${this.token.identifier}`)
        }
    
    }

    /**
     * Spell requests all spells information
     * 
     * @author Enigma
     * @package Wow
     * @link https://develop.battle.net/documentation/api-reference/world-of-warcraft-community-api
     */
    export class Spell
    {
        /**
        * Authorization token instance
        */
        private token: IBearerToken

        /**
        * Initializes our bearer token
        * @param IBearerToken bearerToken 
        */
        constructor(bearerToken: IBearerToken){
           this.token = bearerToken
        }

        /**
        * Initializes the authorization token for this profile can operate
        */
        set bearerToken (token: IBearerToken) {
           this.token = token
        }

        /**
         * Returns information about spells.
         * 
         * @param string region
         * @param string spellId
         * @param string locale
         * 
         * @return Promise
         */
        getSpell = (region: Region, spellId: string, locale: Locale): Promise<JSON | ApiException> => {
            return HttpRequest.get(`https://${region}.api.blizzard.com/wow/spell/${spellId}?locale=${locale}&access_token=${this.token.identifier}`)
        }
    }

    /**
     * User request to get the user characters list
     * 
     * @author Enigma
     * @package Wow
     * @link https://develop.battle.net/documentation/api-reference/world-of-warcraft-community-api
     */
    export class User
    {
        /**
        * Authorization token instance
        */
        private token: IBearerToken

        /**
        * Initializes our bearer token
        * @param IBearerToken bearerToken 
        */
        constructor(bearerToken: IBearerToken){
           this.token = bearerToken
        }

        /**
        * Initializes the authorization token for this profile can operate
        */
        set bearerToken (token: IBearerToken) {
           this.token = token
        }

        /**
         * Returns a list of characters for an account.
         * 
         * @param string region
         * @param string locale
         * 
         * @return Promise
         */
        getCharacters = (region: Region, locale: Locale): Promise<JSON | ApiException> => {
            return HttpRequest.get(`https://${region}.api.blizzard.com/wow/user/characters?locale=${locale}&access_token=${this.token.identifier}`)
        }
    }

    /**
     * Zone requests to get all zone details
     * 
     * @author Enigma
     * @package Wow
     * @link https://develop.battle.net/documentation/api-reference/world-of-warcraft-community-api
     */
    export class Zone
    {
        /**
        * Authorization token instance
        */
        private token: IBearerToken

        /**
        * Initializes our bearer token
        * @param IBearerToken bearerToken 
        */
        constructor(bearerToken: IBearerToken){
           this.token = bearerToken
        }

        /**
        * Initializes the authorization token for this profile can operate
        */
        set bearerToken (token: IBearerToken) {
           this.token = token
        } 

        /**
         * Returns a list of all supported zones and their bosses. 
         * A "zone" in this context should be considered a dungeon or a raid, not a world zone. 
         * A "boss" in this context should be considered a boss encounter, which may include more than one NPC.
         * 
         * @param string region
         * @param string locale
         * 
         * @return Promise
         */
        getList = (region: Region, locale: Locale): Promise<JSON | ApiException> => {
            return HttpRequest.get(`https://${region}.api.blizzard.com/wow/zone/?locale=${locale}&access_token=${this.token.identifier}`)
        }
        
        /**
         * Returns information about zones.
         * 
         * @param string region
         * @param string zoneId
         * @param string locale
         * 
         * @return Promise
         */
        getZoneById = (region: Region, zoneId: string, locale: Locale): Promise<JSON | ApiException> => {
            return HttpRequest.get(`https://${region}.api.blizzard.com/wow/zone/${zoneId}?locale=${locale}&access_token=${this.token.identifier}`)
        }
    }

    /**
     * DataResources handles requests for game data (Not binded to any account)
     * 
     * @author Enigma
     * @package Wow
     * @link https://develop.battle.net/documentation/api-reference/world-of-warcraft-community-api
     */
    export class DataResouces
    {
        /**
        * Authorization token instance
        */
        private token: IBearerToken

        /**
        * Initializes our bearer token
        * @param IBearerToken bearerToken 
        */
        constructor(bearerToken: IBearerToken){
           this.token = bearerToken
        }

        /**
        * Initializes the authorization token for this profile can operate
        */
        set bearerToken (token: IBearerToken) {
           this.token = token
        } 

        /**
         * Returns a list of battlegroups for the specified region. Note the trailing / on this request path.
         * 
         * @param string region
         * @param string locale
         * 
         * @return Promise
         */
        getBattlegrounds = (region: Region, locale: Locale): Promise<JSON | ApiException> => {
            return HttpRequest.get(`https://${region}.api.blizzard.com/wow/data/battlegroups/?locale=${locale}&access_token=${this.token.identifier}`)
        }

        
        /**
         * Returns a list of races and their associated faction, name, unique ID, and skin.
         * 
         * @param string region
         * @param string locale
         * 
         * @return Promise
         */
        getCharacterRaces = (region: Region, locale: Locale): Promise<JSON | ApiException> => {
            return HttpRequest.get(`https://${region}.api.blizzard.com/wow/data/character/races?locale=${locale}&access_token=${this.token.identifier}`)
        }

        /**
         * Returns a list of character classes.
         * 
         * @param string region
         * @param string locale
         * 
         * @return Promise
         */
        getCharacterClasses = (region: Region, locale: Locale): Promise<JSON | ApiException> => {
            return HttpRequest.get(`https://${region}.api.blizzard.com/wow/data/character/classes?locale=${locale}&access_token=${this.token.identifier}`)
        }

        /**
         * Returns a list of all achievements that characters can earn as well as the category structure and hierarchy.
         * 
         * @param string region
         * @param string locale
         * 
         * @return Promise
         */
        getCharacterAchivements = (region: Region, locale: Locale): Promise<JSON | ApiException> => {
            return HttpRequest.get(`https://${region}.api.blizzard.com/wow/data/character/achievements?locale=${locale}&access_token=${this.token.identifier}`)
        }

        /**
         * The guild rewards data API provides a list of all guild rewards.
         * 
         * @param string region
         * @param string locale
         * 
         * @return Promise
         */
        getGuildRewards = (region: Region, locale: Locale): Promise<JSON | ApiException> => {
            return HttpRequest.get(`https://${region}.api.blizzard.com/wow/data/guild/rewards?locale=${locale}&access_token=${this.token.identifier}`)
        }

        /**
         * Returns a list of all guild perks.
         * 
         * @param string region
         * @param string locale
         * 
         * @return Promise
         */
        getGuildPerks = (region: Region, locale: Locale): Promise<JSON | ApiException> => {
            return HttpRequest.get(`https://${region}.api.blizzard.com/wow/data/guild/perks?locale=${locale}&access_token=${this.token.identifier}`)
        }

        /**
         * Returns a list of all guild achievements as well as the category structure and hierarchy.
         * 
         * @param string region
         * @param string locale
         * 
         * @return Promise
         */
        getGuildAchivements = (region: Region, locale: Locale): Promise<JSON | ApiException> => {
            return HttpRequest.get(`https://${region}.api.blizzard.com/wow/data/guild/achievements?locale=${locale}&access_token=${this.token.identifier}`)
        }

        /**
         * Returns a list of item classes.
         * 
         * @param string region
         * @param string locale
         * 
         * @return Promise
         */
        getItemClasses = (region: Region, locale: Locale): Promise<JSON | ApiException> => {
            return HttpRequest.get(`https://${region}.api.blizzard.com/wow/data/item/classes?locale=${locale}&access_token=${this.token.identifier}`)
        }

        /**
         * Returns a list of talents, specs, and glyphs for each class.
         * 
         * @param string region
         * @param string locale
         * 
         * @return Promise
         */
        getTalents = (region: Region, locale: Locale): Promise<JSON | ApiException> => {
            return HttpRequest.get(`https://${region}.api.blizzard.com/wow/data/talents?locale=${locale}&access_token=${this.token.identifier}`)
        }

        /**
         * Returns a list of the different battle pet types, including what they are strong and weak against.
         * 
         * @param string region
         * @param string locale
         * 
         * @return Promise
         */
        getPetTypes = (region: Region, locale: Locale): Promise<JSON | ApiException> => {
            return HttpRequest.get(`https://${region}.api.blizzard.com/wow/data/pet/types?locale=${locale}&access_token=${this.token.identifier}`)
        }
    }
}