const baseUrl = 'http://localhost:3030/jsonstore';


export const getAll = async () => {
    let response = await fetch(`${baseUrl}/watches`)

    let watches = await response.json();

    let result = Object.values(watches);

    return result;
}

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

export const destroy = async(watchId, token) => {
    let response = await fetch(`${baseUrl}/watch/${watchId}`, {
        method: 'DELETE',
        headers: {
           'X-Authorization': token
        }
    })
    let result = await response.json();
    return result
}