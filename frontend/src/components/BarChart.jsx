import React, { useEffect, useState } from 'react';
import Chart from 'chart.js/auto';
import { currencyData } from '../currency';

const BarChart = ({ exchangeRates }) => {
    const [chart, setChart] = useState(null);

    useEffect(() => {
        if (exchangeRates && exchangeRates.length > 0) {

            const labels = exchangeRates.map(rate => rate.country);
            const data = exchangeRates.map(rate => rate.rate);

            if (!chart) {
                const ctx = document.getElementById('barChart');
                const newChart = new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: labels,
                        datasets: [{
                            label: 'Exchange Rate',
                            data: data,
                            backgroundColor: 'rgba(75, 192, 192, 0.2)',
                            borderColor: 'rgba(75, 192, 192, 1)',
                            borderWidth: 1
                        }]
                    },
                    options: {
                        scales: {
                            y: {
                                beginAtZero: true
                            }
                        }
                    }
                });
                setChart(newChart);
            } else {
                chart.data.labels = labels;
                chart.data.datasets[0].data = data;
                chart.update();
            }
        }
    }, [exchangeRates, chart]);

    return (
        <div>
            <canvas id="barChart"></canvas>
        </div>
    );
};

export default BarChart;
