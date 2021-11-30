const baseUrl = 'http://localhost:3030/jsonstore';


export const getAll = async () => {
    let response = await fetch(`${baseUrl}/watches`)

    let watches = await response.json();

    let result = Object.values(watches);

    return result;
}