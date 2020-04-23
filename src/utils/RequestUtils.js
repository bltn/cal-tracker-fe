export default class RequestUtils {

    static submitGetRequest = async (url, includeJwt = true) => {
        const userToken = includeJwt ? sessionStorage.getItem('userToken') : '';
        const requestOptions = {
            method: 'GET',
            headers: {'Content-Type': 'application/json', 'Authorization': userToken}
        };

        return fetch(url, requestOptions);
    };

    static submitPostRequest = async (url, body, includeJwt = true) => {
        const userToken = includeJwt ? sessionStorage.getItem('userToken') : '';
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json', 'Authorization': userToken},
            body: body
        };

        return fetch(url, requestOptions);
    };

    static submitDeleteRequest = async (url, includeJwt = true) => {
        const userToken = includeJwt ? sessionStorage.getItem('userToken') : '';
        const requestOptions = {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json', 'Authorization': userToken}
        };

        return fetch(url, requestOptions);
    };
}

