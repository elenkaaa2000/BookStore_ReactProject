const request = async (method, url, data, options = {}) => {
    try {
        if (method !== 'GET') {
            options.method = method;
        }

        if (data) {
            options = {
                ...options,
                headers: {
                    'Content-Type': 'application/json',
                    ...options.headers,
                },
                body: JSON.stringify(data),
            }
        }

        const response = await fetch(url, options);
        const responseContentType = response.headers.get('Content-Type');
        if (!responseContentType) {
            throw new Error("No Content-Type in response.");
        }

        let result;
        if (responseContentType.includes('application/json')) {
            result = await response.json();
        } else {
            result = await response.text();
        }

        if (!response.ok) {
            throw new Error(result.message || `HTTP error! Status: ${response.status}`);
            
        }

        return result


    } catch (error) {
        throw error
    }

};

export default {
    get: request.bind(null, 'GET'),
    // get: (...params) => request('GET', ...params)
    post: request.bind(null, 'POST'),
    put: request.bind(null, 'PUT'),
    delete: request.bind(null, 'DELETE'),
    baseRequest: request,
}
