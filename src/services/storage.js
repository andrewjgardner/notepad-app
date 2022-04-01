//local storage service
//gets value from local storage as json or returns default value
function getLocalStorage(key, defaultValue) {
    var value = localStorage.getItem(key)
    if (value) {
        return JSON.parse(value)
    }
    return defaultValue
}
//sets value to local storage as json
function setLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
}
//removes value from local storage
function removeLocalStorage(key) {
    localStorage.removeItem(key)
}

//session storage services
//gets value from session storage as json or returns default value
function getSessionStorage(key, defaultValue) {
    var value = sessionStorage.getItem(key)
    if (value) {
        return JSON.parse(value)
    }
    return defaultValue
}
//sets value to session storage as json
function setSessionStorage(key, value) {
    sessionStorage.setItem(key, JSON.stringify(value))
}
//removes value from session storage
function removeSessionStorage(key) {
    sessionStorage.removeItem(key)
}

const storage = {
    getLocalStorage,
    setLocalStorage,
    removeLocalStorage,
    getSessionStorage,
    setSessionStorage,
    removeSessionStorage,
}
export default storage
