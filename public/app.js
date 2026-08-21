import { displayData } from "./displayData.js";

async function fetchData(){
    const res = await fetch("http://localhost:3000/api/getData")
    if(!res.ok){
        throw new Error(`${res.status}`)
    }

    const data = await res.json()
    return data
}
async function fetchCleanData(){
    const res = await fetch("http://localhost:3000/api/cleanData")
    if(!res.ok){
        throw new Error(`${res.status}`)
    }

    const data = await res.json()
    console.log(data.msg)
}

async function main() {

    try {
        const data = await fetchData();
        await fetchCleanData();
        displayData(data);


    } catch (error) {

        console.error("Error fetching data:", error);

    }
}


main();

