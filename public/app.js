async function getData(){
    console.log("hello")
    const response = await fetch("/api/dataCSV")
    const data = await response.json();
    console.log(data)
    displayData(data)
}


function displayData(data){
    const table = document.getElementById("Table");
console.log("heeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeelo ")
    data.forEach(data => {

        const row = document.createElement("tr");

        row.innerHTML = `
        <td> </td>
            <td>${data.Name}</td>
            <td>${data.Phone_Number}</td>
            <td>${data.Email}</td>
            <td>${data.Country}</td>
            <td>${data.Age}</td>
            <td>${data.Gender}</td>
            <td>${data.Customer_spendings}</td>
        `;

        table.appendChild(row);
    });
}

getData();