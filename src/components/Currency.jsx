import React, { useState } from 'react'
import '../css/currency.css'
import { FaCircleArrowRight, FaStackExchange } from "react-icons/fa6";
import axios from 'axios';

function Currency() {

    let BASE_URL = `https://api.freecurrencyapi.com/v1/latest`;
    let API_KEY = `ADD YOUR freecurrencyapi.com API KEY`;
    
    const [amount, setAmount] = useState();
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('TRY');
    const [result, setResult] = useState();

    const exchange = async () => {
        const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`);
        const result = (response.data.data[toCurrency] * amount).toFixed(3);
        setResult(result);
    }

  return (

    <div className='currency-div'>
          <div style={{marginTop: '-20px', fontFamily: 'arial', backgroundColor: 'black', color: '#fff', width: '100%', textAlign: 'center'}}>
             <h3>Exchange Rate Application</h3>
          </div>
        <div style={{marginTop: '25px'}}>
        <input 
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        type="number" className='amount'/>
        <select onChange={(e) => setFromCurrency(e.target.value)} className='from-currency-option'>

            <option>USD</option>
            <option>EUR</option>
            <option>TRY</option>

        </select>
        <FaCircleArrowRight style={{ fontSize: '25px', marginRight: '10px', marginTop: '25px'}}/>
        <select onChange={(e) => setToCurrency(e.target.value)} className='to-currency-option'>

            <option>TRY</option>
            <option>USD</option>
            <option>EUR</option>
        </select>
        <input value={result} type="number" className='result'/>
        </div>
        <div>
            <button 
            onClick={exchange}
            style={{marginTop: '25px', width: '200px', height: '42px'}}> Çevir </button>
        
        </div>
   
    </div>
  )
}

export default Currency
