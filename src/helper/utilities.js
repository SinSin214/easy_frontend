export const utilities = {
    checkIsLogged: () => {
        let token = localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')).token : null;
        return token;
    }
}