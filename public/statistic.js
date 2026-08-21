export function infoCSV(data){
    const ligneNb = data.length ; 

    const columns = Object.keys(data[0]);

    const values = Object.values(data[0]);

    const datatype = columns.map(key =>{
        return{
            column: key,
            type: typeof data[0][key]
        }
    })

    return {ligneNb , columns , values ,datatype};
}

export function ageAVG(data){
    let sum = 0 ;
    let aAvg = 0;
    data.forEach(e => {
        sum += e.Age
    });
    aAvg = sum / data.length
    return aAvg ;
}

export function cstAVG(data){
    let sum = 0 ;
    let cAvg = 0;
    data.forEach(e => {
        sum += e.Customer_spendings
    });
    cAvg = sum / data.length

    return cAvg ;
}

export function medianAge(data){
    let arr = [];
    let med ;
    let center ;

   const sortedData= [...data].sort((a, b) => a.Age - b.Age);

    if(sortedData.length%2 == 0){
        center = sortedData.length / 2 
        arr.push(sortedData[center-1].Age)   
        arr.push(sortedData[center].Age) 
        med = (arr[0] + arr[1])/2
    }else{
          center = sortedData.length / 2
         let int = Math.floor(center)
        med = sortedData[int].Age
    }      

    return med ;
}

export function medianCst(data){
    let arr = [];
    let med ;
    let center ;

   const sortedData= [...data].sort((a, b) => a.Customer_spendings - b.Customer_spendings);

    if(sortedData.length%2 == 0){
        center = sortedData.length / 2 
        arr.push(sortedData[center-1].Customer_spendings)   
        arr.push(sortedData[center].Customer_spendings) 
        med = (arr[0] + arr[1])/2
    }else{
          center = sortedData.length / 2
         let int = Math.floor(center)
        med = sortedData[int].Customer_spendings
    }      

    return med ;
}

export function dataByPays(data){
    let obj = {}

    data.forEach(e=>{
        if(obj[e.Country]){
            obj[e.Country].push(e);
        }else{
            obj[e.Country] = [e]
        }
    })
    return obj
}

export function medianAgeByPays(obj){
    const medianArr = [];
    for(const key in obj){
        medianArr.push({
            Country : key,
            MedianAge: medianAge(obj[key])
        })
    }

    return medianArr;
}

export function totalDepence(data){
    let sum = 0 ;
    data.forEach(e => {
        sum += e.Customer_spendings
    });
    return sum ;
}

export function totalDepenceByPays(obj){
    const depenceArr = [];

    for(const key in obj){
        depenceArr.push({
            Country : key,
            totalDepence: totalDepence(obj[key])
        })
    }

    return depenceArr;
}

