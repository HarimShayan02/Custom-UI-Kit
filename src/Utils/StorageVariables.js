export const getCookie = (key) => {
    return sessionStorage.getItem(key);
};
export const setCookie = (key, value) => {
    return sessionStorage.setItem(key, value);
};

export const removeCookie = (key) => {
    return sessionStorage.removeItem(key);
};

export const removeAllCookie = () => {
    sessionStorage.removeItem("accessToken");


    return;
};