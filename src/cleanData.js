import { stringify } from "csv-stringify/sync";
import fs from "fs"
import { text } from "stream/consumers"

export function cleanData(data){
   let greaterThan10 = data.filter(e => e.Customer_spendings > 10)

   let uniqueData = [
        ...new Set(greaterThan10.map(e => JSON.stringify(e)))
    ].map(e => JSON.parse(e))

   let result = uniqueData.map(item => {
            return {
                Country:item.Country ,
                Age:item.Age ,
                Gender:item.Gender ,
                CustomerSpendings:item.Customer_spendings
            }
   })
   return result ;
}


export function creatCSV(data){
    const csv = stringify(data , {
        header: true,
        columns: ["Country","Age","Gender","CustomerSpendings"]
    })
    fs.writeFileSync("cleanData.csv", csv)
}