import express from "express" ;
import { readData } from "./readData.js";
import { cleanData , creatCSV} from "./cleanData.js";
import cors from "cors";


    const app = express();
    const PORT = 3000;
    app.use(cors())

    
    app.get("/api/getData" , (req , res)=>{
        const data = readData("dataset-sell4all.csv")
        return res.json(data)
    })

    app.get("/api/cleanData" , (req , res)=>{
        const data = readData("dataset-sell4all.csv")
        const cleanedData = cleanData(data)
        creatCSV(cleanedData)
        return res.json({
            msg : "data is cleaned ^_^"
        })
    })

    app.listen(PORT , ()=>{
        console.log(`Server running at http://localhost:${PORT}`)
    })
