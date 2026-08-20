import fs from "fs";
import {parse} from "csv-parse/sync"


export function readData(fileName){
    const csv = fs.readFileSync(fileName , "utf8");

    const result = parse(csv , {
        header :true ,
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
    return cleanResult ;
}





