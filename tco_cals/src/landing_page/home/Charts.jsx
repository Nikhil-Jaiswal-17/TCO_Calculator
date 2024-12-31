import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';

const Charts = ({ evTotalCost, iceTotalCost }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    chartInstance.current = new Chart(chartRef.current, {
      type: 'bar',
      data: {
        labels: ['EV Total Cost', 'ICE Total Cost'],
        datasets: [
          {
            label: 'Total Cost Comparison (₹)',
            data: [evTotalCost, iceTotalCost],
            backgroundColor: ['#4CAF50', '#FF5722'],
            borderColor: ['#388E3C', '#D32F2F'],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: true,
            position: 'top',
          },
          tooltip: {
            callbacks: {
              label: (context) => `₹${context.raw.toFixed(2)}`,
            },
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Cost (₹)',
            },
          },
        },
      },
    });
  }, [evTotalCost, iceTotalCost]);

  return (
    <div className="comparison-chart container p-3">
      <h3 className="text-center mt-4 p-2" style={{ width: "100%", margin: "0 auto", borderRadius: "5px", backgroundColor: "#19AEA5", color: "white" }}>Cost Comparison (EV vs ICE)</h3>
      <canvas ref={chartRef} id="comparisonChart"></canvas>
    </div>
  );
};

export default Charts;
