const asyncRedis = require("async-redis");

class Memory {
    constructor() {
        this.client = asyncRedis.createClient()
    }

    /**
     * Add method get obj { functionName: string, params: Object, result: any }
     * @param obj
     * @returns {Promise<void>}
     */
    async add(obj) {
        await this.client.set(obj.functionName, JSON.stringify(obj))
    }

    /**
     * Del method get obj { functionName: string }
     * @param obj
     * @returns {Promise<void>}
     */
    async del(obj) {
        await this.client.del(obj.functionName)
    }

    /**
     * Get method get obj { functionName: string }
     * @param obj
     * @returns {Promise<any>}
     */
    async get(obj) {
        return JSON.parse(await this.client.get(obj.functionName))
    }
}
