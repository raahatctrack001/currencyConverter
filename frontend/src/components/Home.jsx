import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { currencyData } from '../currency';
import dotenv from 'dotenv'



const Home = () => {
    const [sourceCurrency, setSourceCurrency] = useState(currencyData[0].code);
    const [targetCurrency, setTargetCurrency] = useState(currencyData[0].code);
    const [amount, setAmount] = useState(1);
    const [convertedAmount, setConvertedAmount] = useState(null);
    const [conversionRate, setConversionRate] = useState(null);
    const [error, setError] = useState(null);

    // const apiKey = 'YOUR_API_KEY'; // Add your API key here
    const YOUR_APP_ID = import.meta.env.VITE_OPEN_EXCHANGE_API ///VITE in caps in must
    // import.meta.env.OPEN_EXCHANGE_API;
    // console.log('appid', YOUR_APP_ID)
    const apiURL = `https://openexchangerates.org/api/latest.json?app_id=${YOUR_APP_ID}`

    currencyData.sort((a, b) => {
        const countryA = a.country.toUpperCase(); // Convert to uppercase for case-insensitive comparison
        const countryB = b.country.toUpperCase();
        if (countryA < countryB) {
            return -1;
        } else if (countryA > countryB) {
            return 1;
        } else {
            return 0;
        }
    });
    const sortedDataJson = JSON.stringify(currencyData, null, 4);

    // Fetch conversion rate when source or target currency changes
    // useEffect(() => {
    //     fetchConversionRate();
    // }, [sourceCurrency, targetCurrency]);

    const fetchConversionRate = async () => {
        try {
            const response = await fetch(apiURL, {method: 'GET'});
            const data = response.json();
            data
            .then((data)=>{
                // console.log(data.rates)
                const rate =  data.rates[targetCurrency]
                // console.log(targetCurrency);
                setConversionRate(rate)
                // console.log('targetrate', data.rates[targetCurrency])
            })
           
            // setConversionRate(rate);
        } catch (err) {
            setError('Failed to fetch conversion rate');
        }
    };
    // console.log('converion rate: ', conversionRate)
    // console.log('source currency',sourceCurrency)
    // console.log('target currency', targetCurrency)

    const handleConvert = () => {
        fetchConversionRate();
        if (conversionRate) {
            const convertedAmount = amount*conversionRate;
            setConvertedAmount(convertedAmount);
        }
    };
    // console.log(sourceCurrency)
    // console.log(targetCurrency)
    const handleAmountChange = (e)=>{
        setAmount(e.target.value)
        if (conversionRate) {
            const convertedAmount = amount*conversionRate;
            setConvertedAmount(convertedAmount);
        }
    }
    // console.log(amount)
    return (
        <div className="container mx-auto my-6 p-6 min-h-screen">
            {/* Currency Selection */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className='flex'>
                    <label className='my-auto mr-2 font-semibold'> From </label>
                    <select
                        className="p-2 border rounded w-full"
                        id='source'
                        value={sourceCurrency}
                        onChange={(e) => setSourceCurrency(e.target.value)}
                        
                    >
                        {currencyData.map(currency => (
                            <option value={currency.code} key={currency.code + Math.random()*100}>
                                {currency.country} || {currency.code} || {currency.name}
                            </option>
                        ))}
                    </select>
                </div>
                
                <div className='flex'>
                <label className='my-auto mr-2 font-semibold'> To </label>
                <select
                    className="p-2 border rounded w-full"
                    id='target'
                    value={targetCurrency}
                    onChange={(e) => setTargetCurrency(e.target.value)}
                >
                    {currencyData.map(currency => (
                        <option value={currency.code} key={currency.code + Math.random()*100}>
                            {currency.country} || {currency.code} || {currency.name}
                        </option>
                    ))}
                </select>
                </div>
            </div>

            {/* Amount Input and Convert Button */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <input
                    type="number"
                    className="p-2 border rounded w-full"
                    value={amount}
                    onChange={handleAmountChange}
                    placeholder="Enter amount"
                    default='Enter amount'
                />
                <button
                    className="bg-blue-600 text-white p-2 rounded w-full"
                    onClick={handleConvert}
                >
                    Convert
                </button>
            </div>

            {/* Conversion Results */}
            {convertedAmount && (
                <div className="text-center">
                    <p className="text-2xl">{amount || 1} {sourceCurrency} = {convertedAmount} {targetCurrency}</p>
                    <p className="text-gray-600">Conversion rate: {conversionRate}</p>
                </div>
            )}

            {/* Error Handling */}
            {error && (
                <div className="text-red-500 text-center mt-4">{error}</div>
            )}
        </div>
    );
};

export default Home;
