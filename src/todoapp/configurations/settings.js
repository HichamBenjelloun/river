
class Settings {

    static API = {
        baseUrl: '',
        apiUrl: '/api/v1',
        logoutUrl: '/auth/logout'
    };

    static getApplicationUrl() {
        return Settings.API.baseUrl;
    }

    static getApiUrl() {
        return Settings.API.baseUrl + Settings.API.apiUrl;
    }

    static getLogoutUrl() {
        return Settings.API.baseUrl + Settings.API.logoutUrl;
    }
}

export default Settings;
