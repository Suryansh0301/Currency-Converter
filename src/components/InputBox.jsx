import React,{useId} from "react";
// useId hook:- react hooks for generating unique ID that can be passed to accessibility attributes


function InputBox({
    label, /*from pass kar rahe ho ya phir to*/
    amount,
    onAmountChange, /*amount aur onAmountChange hum use karenge apni app.jsx mein through hooks jo ki yaha transfer hogi */
    onCurrencyChange,
    currencyOptions = [], /*saare currency jo hain ek array format mein humaare pass aayega hum ussi ko loop through karenge */
    selectCurrency ="usd", /*by default usd le rahe hain */
    amountDisable = false, /*user amount change kar skta hain ya nahi , chahe toh isse ignore kar skte ho */
    currencyDisable=false, /*user currency ko change kar skta hain ya ni , chahe toh isse ignore kar skte ho */
    
    className = "",
}) {
    const amountInputId = useId()




    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}> 
        {/* 
         yaha pe ${className} ye keh raha hain ki agar user ko koi CSS inject karni hain toh voh kar skta hain vrna
         upar jo empty string di hain voh store kar do 
        */}
            <div className="w-1/2">
                <label htmlFor={amountInputId} 
                 className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disbled={amountDisable}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                    // ab ye 2 baar kyu likha hain? -> agar onAmountChange user ne pass kiya hi na ho toh hum usse call ni kar skte , 
                    // isliye humne 2 baar likha first time ye check karne ke liye ki value exist karti hain ya nahi dusri baar agar exist karti hain
                    // toh call karne ke liye

                    // chahe humaari value number mein ho javascript thodi notorious hain voh chizze string mein return kar deti hain , ab ye cheez error
                    // na de isliye humne usse number mein wrap kar diya hain.
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e)=> onCurrencyChange && onCurrencyChange(e.target.value)}//iss baar toh string hi aarahi hain
                    disabled={currencyDisable}
                >
                    
                    {currencyOptions.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}   
                </select>
            </div>
        </div>
    );
}

export default InputBox;
//chote project mein theek hain yaha export kiya aur app vaale mein import kar liya , but badde projects mein hum ek index.js bana lete hain aur usmein sabko import karva lete hain . aur phir uss index file ko hum app.jsx mein import kar lenge