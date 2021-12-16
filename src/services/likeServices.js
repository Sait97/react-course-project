import * as request from './requester';

const baseUrl = 'http://localhost:3030/data';

export const like = (userId, watchId) => request.post(`${baseUrl}/likes`, {userId, watchId});

export const getWatchLikes = (watchId) => {
    const query = encodeURIComponent(`watchId="${watchId}"`);

    return request.get(`${baseUrl}/likes?select=userId&where=${query}`)
        .then(res => res.map(x => x.userId));
}

export const wishlist = (userId, watchId) => request.post(`${baseUrl}/users`, {userId, watchId});

export const getWishlistItem = (watchId) => {
    

    return request.get(`${baseUrl}`)
    // return request.get(`${baseUrl}/wishlist?select=userId&where=${query}`)
    //     .then(res => res.map(x => x.userId));
}

