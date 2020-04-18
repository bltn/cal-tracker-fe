export default class RequestUtils {

    static submitPostRequest = async (url, body) => {
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: body
        };

        return fetch(url, requestOptions);
    };

    static submitDeleteRequest = async (url) => {
        const requestOptions = {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'}
        };

        return fetch(url, requestOptions);
    };
}

