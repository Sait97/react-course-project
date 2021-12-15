import * as request from './requester';

const baseUrl = 'http://localhost:3030/data';


export const getAll = async () => {
    let response = await fetch(`${baseUrl}/watches`)

    let watches = await response.json();

    let result = Object.values(watches);

    return result;
}
export const getMyWatches = (ownerId) => {
    let query = encodeURIComponent(`_ownerId="${ownerId}"`);

    return request.get(`${baseUrl}/watches?where=${query}`);

};

export const create = async (watchData, token) => {

    let response = await fetch(`${baseUrl}/watches`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': token,
        },
        body: JSON.stringify({...watchData})
    })


    let result = await response.json();

    return result;
};

export const getOne = async (watchId) => {
    let response = await fetch(`${baseUrl}/watches/${watchId}`) 
    let watches = await response.json();

    return watches
      
};

export const update = async( watchId, watchData, token) => {
    let response = await fetch(`${baseUrl}/watches/${watchId}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': token,

        },
        body: JSON.stringify(watchData)
    })
    let result = await response.json();
    return result;
    
}

export const wishlist = async( userId, addtoWishlist, token) => {
    let response = await fetch(`http://localhost:3030/users/me`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': token,

        },
        body: JSON.stringify(addtoWishlist)
    })
   console.log(await response);
    let result = await response.json();
    return result;
    
}

export const destroy = async(watchId, token) => {
    let response = await fetch(`${baseUrl}/watches/${watchId}`, {
        method: 'DELETE',
        headers: {
           'X-Authorization': token
        }
    })
    let result = await response.json();
    return result
}