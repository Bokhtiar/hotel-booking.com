/* Set token */
export const setToken = async (token) => {
    localStorage.setItem("token", token);
    return true;
};

/* Get token */
export const getToken = () => {
    return localStorage.getItem("token");
};

/* Remove token */
export const removeToken = () => {
    localStorage.removeItem("token");
    return true;
};