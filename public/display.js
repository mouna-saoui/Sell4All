import { color } from "chart.js/helpers";
import {
  infoCSV,
  ageAVG,
  cstAVG,
  medianAge,
  medianCst,
  dataByPays,
  medianAgeByPays,
  totalDepenceByPays
} from "./statistic.js";
import Chart from "chart.js/auto";

export function displayInfo(data) {
  const info = infoCSV(data);
//=======================table totale customers============================
  document.querySelectorAll(".totalCustomers").forEach(e =>{
        e.innerHTML = `${info.ligneNb}`;
  })


//=====================Age average================================================
document.getElementById("AVGage").innerHTML = `${ageAVG(data).toFixed(2)}`


//=====================Cst average================================================
document.getElementById("AVGcost").innerHTML = `${cstAVG(data).toFixed(2)}`


//=====================median age================================================
document.getElementById("mAge").innerHTML = `${medianAge(data)}`


//=====================median cst================================================
document.getElementById("mCost").innerHTML = `${medianCst(data)}`


//=======================table data type============================
const tableInfo = document.getElementById("columns");
info.datatype.forEach(e=>{
    const row = document.createElement("tr");
    row.className = "border-1 border-white ";
    row.innerHTML = `
            <td class="font-bold p-1 text-[#7854D3] text-[15px] ">${e.column}</td>
            <td class="text-[15px]">${e.type}</td>
        `;

    tableInfo.appendChild(row);
})

}
export function displayData(data) {
  const table = document.getElementById("table");

  for (let i = 0; i < 5; i++) {
    const row = document.createElement("tr");
    row.className = "border-2 border-white ";
    row.innerHTML = `
            <td class=" text-[15px] p-4">${data[i].Name}</td>
            <td class=" text-[15px] p-4">${data[i].Phone_Number}</td>
            <td class=" text-[15px] p-4">${data[i].Email}</td>
            <td class=" text-[15px] p-4">${data[i].Country}</td>
            <td class=" text-[15px] p-4">${data[i].Age}</td>
            <td class=" text-[15px] p-4">${data[i].Gender}</td>
            <td class=" text-[15px] p-4">${data[i].Customer_spendings}</td>
        `;

    table.appendChild(row);
  }
}

export function displayMedianAgeByPays(data) {
  const obj = dataByPays(data);
  const medianAgeArr = medianAgeByPays(obj)
const tableMedian = document.getElementById("mediamAgePay");


   medianAgeArr.forEach(e=>{
    const row = document.createElement("tr");

    row.className = "border-2 border-white ";
    row.innerHTML = `
            <td class="font-bold p-1 text-[#7854D3] text-[15px] border-2 border-white p-2">${e.Country}</td>
            <td class="text-[15px] border-2 border-white p-2">${e.MedianAge}</td>
        `;

    tableMedian.appendChild(row);
})

}
export function displayGraph(data) {
  const obj = dataByPays(data);
  const depenceArr = totalDepenceByPays(obj);

  const divChart = document.getElementById("chart");
  new Chart(divChart, {
    type: "bar",
    data: {
      labels: depenceArr.map((e) => e.Country),
      datasets: [
        {
          label: "Dépence client par pays",
          data: depenceArr.map((e) => e.totalDepence),
          borderWidth: -2,
          borderColor : '#f8f7fa',
          backgroundColor:'#7854D3',

          font:{
            family:'Helvetica Neue',
            size: 10 ,
            color: '#7854D3',
          }
          
        },
      ],
    },
  });
}


