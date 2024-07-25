// hooks majority of the time pure javascript hi return karte hain toh ek achi practice yahi hain ki jo cheez
// voh return kar rahe hain vahi uska file extension ho isliye yaha pe humne .js li hain file

// ek standardized approach hain ki hooks ke aage use laga do

import {useEffect , useState} from 'react'

function useCurrencyInfo(currency){
    const [data,setData] = useState({})
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`)
        .then((res)=>res.json())//data json mein converted
        .then((res) => setData(res[currency]))//dusre .then se jo data humne json mein convert kar diya hain (dono .then order mein
        //                                      chalenge) usko hum data mein setData ke through set karenge isse saare conversion rate
        //                                      aajayenge humaare paas (jo API pe data present hain voh key(humaari currency) aur 
        //                                      value(currency:conversion rates) ki tarah stored hain isliye humaara res[currency] voh 
        //                                      res.currency se humme conversion object ke form mein dedega) 
        console.log(data);
    },[currency]) // jab currency ke andar change aaye toh mein call karvaana chahta hun , currency change hogi toh data change hoga
    return data
}

export default useCurrencyInfo;