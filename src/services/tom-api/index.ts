import axios from 'axios';
import getConfig from 'next/config';

class TomApi {
    _client = axios.create({
        baseURL: getConfig().publicRuntimeConfig.app.api.host,
    });
    _routes = getConfig().publicRuntimeConfig.app.api.routes;

    /*
     * Status
     */

    async getStatus() {
        return await this._client.get(this._routes.search);
    }
}

export default new TomApi();
