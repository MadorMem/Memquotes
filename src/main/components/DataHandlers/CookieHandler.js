
class CookieHandler{
    static getCookies()
    {
        var cookies = document.cookie;
        var cookieMap = {}
        cookies.split('; ').reduce(this.cookieFilterer, cookieMap)
        return cookieMap
    }

    static cookieFilterer(map, cookieData)
    {
        try{
            var splitCookie = cookieData.split('=');
            if(splitCookie.length <= 1)
                return;
            map[splitCookie[0]] = splitCookie[1]
            return map
        }catch(err){}
    }

    static setCookie(name, value)
    {
        document.cookie = `${name}=${value};`
    }

    static clearCookies()
    {
        document.cookie =""
    }
}

export default CookieHandler;