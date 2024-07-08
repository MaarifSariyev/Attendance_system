import React, { useEffect, useRef } from 'react'
import  Chart  from 'chart.js/auto'
import './ChartRadar.css'

const ChartRadar = () => {
    const data = {
        labels: [
          'Sales',
          'Marketing',
          'Development',
          'Customer Support',
          'Technology',
          'Administration',
          
        ],
        datasets: [{
          label: 'Allocated Budget',
          data: [62, 72, 98, 96, 70, 21, ],
          fill: false,
          borderColor: '#0000ff',
          pointBackgroundColor: '#0000ff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: '#0000ff'
        }, {
          label: 'Actual Spending',
          data: [78, 83, 80, 70, 96, 88, ],
          fill: false,
          borderColor: '#38b000',
          pointBackgroundColor: '#38b000',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: '#38b000'
        }]
      };
    const chartRef = useRef(null);
    const chartInstance = useRef(null);


    useEffect(()=>{
        if(chartInstance.current){
            chartInstance.current.destroy()
        }
        const myChartRef = chartRef.current.getContext("2d");

        chartInstance.current = new Chart(myChartRef, {
            type: 'radar',
            data: data,
            options: {scales: {
                r: {
                    max: 100,
                  min: 0,
                  ticks: {
                         stepSize: 20
                     }
                }
            },
            elements: {
            line: {
                     borderWidth: 1,
                     
                }
             }
            },
        });
        return(()=>{
            if (chartInstance.current) {
                chartInstance.current.destroy()
            }
        })
    },[])


  return (
    <div className='chart-radar'>
        <canvas ref={chartRef} style={{width:"100%"}}/>
    </div>
  )
}

export default ChartRadar