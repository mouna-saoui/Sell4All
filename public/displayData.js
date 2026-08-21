
import {medianAge} from "./statistic.js"

export function displayData(data){
    const table = document.getElementById("table");

for (let i = 0; i < 5; i++) {
    
    const row = document.createElement("tr");

        row.innerHTML = `
            <td>${data[i].Name}</td>
            <td>${data[i].Phone_Number}</td>
            <td>${data[i].Email}</td>
            <td>${data[i].Country}</td>
            <td>${data[i].Age}</td>
            <td>${data[i].Gender}</td>
            <td>${data[i].Customer_spendings}</td>
        `;

        table.appendChild(row);
}



    let obj = {}

    data.forEach(e=>{
        if(obj[e.Country]){
            obj[e.Country].push(e);
        }else{
            obj[e.Country] = [e]
        }
    })

        const medianArr = [];
        for(const key in obj){
            medianArr.push({
                Country : key,
                MedianAge: medianAge(obj[key])
            })
        }
    console.log(medianArr);
    

}

