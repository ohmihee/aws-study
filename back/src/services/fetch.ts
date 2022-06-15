import fetch from 'node-fetch'

export const post = async (url: string, body: object,) => {
    const response = await fetch(url,{
        method: 'POST',
        body: JSON.stringify(body),
        headers: {'Content-Type': 'application/json'}
    });
    const data = await response.json();
    return data
}