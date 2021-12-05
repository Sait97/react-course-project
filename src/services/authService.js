const baseUrl = 'http://localhost:3030';

export const login = async(email, password) => {
    let res = await fetch(`${baseUrl}/users/login`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({email, password})
    });

    let jsonData = await res.json();

    if(res.ok) {
        return jsonData;
    }else {
        throw jsonData.message;
    }
};

export const register = async(email, password) => {

    return fetch(`${baseUrl}/users/register`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        }, 
        body: JSON.stringify({ email, password})
    })
        .then(res => res.json());
};

export const logout = async(token) => {
    return fetch(`${baseUrl}/users/logout`, {
        headers: {
            'X-Authorization': token
        }
    })


};

