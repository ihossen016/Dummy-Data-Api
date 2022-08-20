const apiBase = "http://localhost:8000";

// You don't need to use node-fetch module to fetch data in react
const fetch = (...args) => import("node-fetch").then(({ default: fetch }) => fetch(...args));

const getData = async () => {
    try {
        let response = await fetch(`${apiBase}/data`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        });
        const result = await response.json();

        // Log only one object
        console.log(result.data.influencers[0]);
        return result;
    } catch (error) {
        console.error(error);
    }
};

getData();
