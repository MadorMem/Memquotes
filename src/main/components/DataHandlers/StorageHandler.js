
class StorageHandler{
    static getSessionStorageItem(item)
    {
        return sessionStorage.getItem(item);
    }

    static removeSessionStorageItem(item)
    {
        return sessionStorage.removeItem(item);
    }

    static addSessionStorageItem(item, value)
    {
        sessionStorage.setItem(item, value);
    }

    static getLocalStorageItem(item)
    {
        return localStorage.getItem(item);
    }

    static removeLocalStorageItem(item)
    {
        return localStorage.removeItem(item);
    }

    static addLocalStorageItem(item, value)
    {
        localStorage.setItem(item, value);
    }

}

export default StorageHandler;