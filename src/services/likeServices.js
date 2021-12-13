import * as request from './requester';

const baseUrl = 'http://localhost:3030/data';

export const like = (userId, watchId) => request.post(`${baseUrl}/likes`, {userId, watchId});

export const getWatchLikes = (watchId) => {
    const query = encodeURIComponent(`watchId="${watchId}"`);

    return request.get(`${baseUrl}/likes?select=userId&where=${query}`)
        .then(res => res.map(x => x.userId));
}

// export const like = async (userId, watchId, token) => {

    
//     let response = await fetch(`${baseUrl}/likes`, {
//         method: 'POST',
//         headers: {
//             'content-type': 'application/json',
//             'X-Authorization': token,
//         },
//         body: JSON.stringify({userId, watchId})
//     })
    
    
//     let result = await response.json();
    
//     return result;
// }

// export const getWatchLikes = async (watchId) => {
//     const query = encodeURIComponent(`watchId="${watchId}"`);

//     let response = await fetch(`${baseUrl}/likes?select=userId&where=${query}`)
//         let jsonData = await response.json()
//         Object.values(jsonData).map(x => x.userId);
        
// };