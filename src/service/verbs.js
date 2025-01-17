import Client from "./instance";



export async function getRequest(URL, params) {
    console.log(`Testing URL: ${URL}`);
    console.log("Testing Params:", params);

    try {
        const responce = await Client.get(URL, { params: params })
        return responce.data
    } catch (error) {
        console.error("API Error:", error);
        throw error;
    }
}