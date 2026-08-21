import fs from "fs";
import {parse} from "csv-parse/sync"


export function readData(fileName){
    const csv = fs.readFileSync(fileName , "utf8");

    const result = parse(csv , {
        columns : true,
        skip_empty_lines: true,
        trim : true
    })
    const cleanResult = result.map(r =>{
        return{
            Name: String(r.Name),
            Phone_Number: String( r['Phone Number']),
            Email: String( r.Email),
            Address: String( r.Address),
            Country: String( r.Country),
            Postal_code: String( r['Postal code']),
            Last_date_of_connection: String( r['Last date of connection']),
            Last_time_of_connection: String( r['Last time of connection']),
            Age:Number( r.Age),
            Gender: String( r.Gender),
            Customer_spendings:Number( r['Customer spendings'])
        }
    })
    return cleanResult ;
}





