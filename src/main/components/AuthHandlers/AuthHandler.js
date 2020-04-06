import CookieHandler from "../DataHandlers/CookieHandler"
import AuthNet from "../Networking/AuthNet"

class AuthHandler{

    static async isLoggedIn()
    {
        return CookieHandler.getCookies()["ssid"] !== null && CookieHandler.getCookies()["ssid"] !== '' && await AuthNet.is_valid_ssid(CookieHandler.getCookies()["ssid"]);
    }

    static login()
    {
    }

    static logout()
    {
        CookieHandler.setCookie("ssid", '')
    }

}

export default AuthHandler;