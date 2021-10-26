import data from "./articles";

const mockApi = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(data())
        }, 500);
    })
}

export default mockApi;