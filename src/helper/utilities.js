export const utilities = {
    checkIsLogged: () => {
        let token = JSON.parse(localStorage.getItem('token')).token;
        return token;
    }
}