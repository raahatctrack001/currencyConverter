import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { currencyData } from '../currency';

const Home = () => {
    const [sourceCurrency, setSourceCurrency] = useState(currencyData[0]);
    const [targetCurrency, setTargetCurrency] = useState(currencyData[0]);
    const [amount, setAmount] = useState(1);
    const [convertedAmount, setConvertedAmount] = useState(null);
    const [conversionRate, setConversionRate] = useState(null);
    const [error, setError] = useState(null);

    const apiKey = 'YOUR_API_KEY'; // Add your API key here
    const apiUrl = `https://api.exchangerate-api.com/v4/latest/${sourceCurrency}`;


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
    useEffect(() => {
        fetchConversionRate();
    }, [sourceCurrency, targetCurrency]);

    const fetchConversionRate = async () => {
        try {
            const response = await axios.get(apiUrl);
            const rate = response.data.rates[targetCurrency];
            setConversionRate(rate);
        } catch (err) {
            setError('Failed to fetch conversion rate');
        }
    };

    const handleConvert = () => {
        if (conversionRate) {
            setConvertedAmount(amount * conversionRate);
        }
    };

    return (
        <div className="container mx-auto my-6 p-6 min-h-screen">
            {/* Currency Selection */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <select
                    className="p-2 border rounded w-full"
                    value={sourceCurrency}
                    onChange={(e) => setSourceCurrency(e.target.value)}
                >
                    {currencyData.map(currency => (
                        <option value={currency.code} key={currency.code + Math.random()*100}>
                            {currency.country} || {currency.code} || {currency.name}
                        </option>
                    ))}
                </select>

                <select
                    className="p-2 border rounded w-full"
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

            {/* Amount Input and Convert Button */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <input
                    type="number"
                    className="p-2 border rounded w-full"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Enter amount"
                />
                <button
                    className="bg-blue-600 text-white p-2 rounded w-full"
                    onClick={handleConvert}
                >
                    Convert
                </button>
            </div>

            {/* Conversion Results */}
            {convertedAmount !== null && (
                <div className="text-center">
                    <p className="text-2xl">{amount} {sourceCurrency} = {convertedAmount.toFixed(2)} {targetCurrency}</p>
                    <p className="text-gray-600">Conversion rate: {conversionRate.toFixed(4)}</p>
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
