import React, { useEffect, useState } from 'react';
import Chart from 'chart.js/auto';

const LineChart = ({ exchangeRates }) => {
    const [chart, setChart] = useState(null);

    useEffect(() => {
        if (exchangeRates && exchangeRates.length > 0) {
            const labels = exchangeRates.map(rate => rate.currency);
            const data = exchangeRates.map(rate => rate.rate);

            if (!chart) {
                const ctx = document.getElementById('lineChart');
                const newChart = new Chart(ctx, {
                    type: 'line', // Use line chart type
                    data: {
                        labels: labels,
                        datasets: [{
                            label: 'Exchange Rate',
                            data: data,
                            backgroundColor: 'rgba(75, 192, 192, 0.2)',
                            borderColor: 'rgba(255, 99, 132, 1)',
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
        <div style={{ overflowX: 'auto', width: '100%' }}>
            <canvas id="lineChart"></canvas>
        </div>
    );
};

export default LineChart;
