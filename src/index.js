const express = require("express");
const fs = require("fs");
const {parse} = require("csv-parse/sync");

const csv = fs.readFileSync("dataset-sell4all.csv" , "utf8");

const app = express() ;
const PORT = 3000 ;

const result = parse(csv , {
    columns : true,
    skip_empty_lines: true,
    trim : true
})

const cleanResult = result.map(r =>{
    return{
        Name: r.Name,
        Phone_Number: r['Phone Number'],
        Email: r.Email,
        Address: r.Address,
        Country: r.Country,
        Postal_code: r['Postal code'],
        Last_date_of_connection: r['Last date of connection'],
        Last_time_of_connection: r['Last time of connection'],
        Age: r.Age,
        Gender: r.Gender,
        Customer_spendings: r['Customer spendings']
    }
})

app.use(express.static("public"));
app.get("/api/dataCSV", (req, res) => {
    res.json(cleanResult);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

