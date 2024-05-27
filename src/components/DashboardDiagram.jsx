import React, { useEffect, useRef } from 'react'
import  Chart  from 'chart.js/auto'
import './Chart.css'

const DashboardDiagram = () => {
    const data = {
        labels: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00'],
        datasets: [{
          label: 'Present',
          data: [30, 40, 28, 50, 42, 82, 58],
          fill: true,
          borderColor: '#0000ff',
          tension: 0.3,
          backgroundColor: 'rgba(00, 00, 255, 0.1)',
          pointBackgroundColor: '#0000ff',
          pointBorderColor: '#fff',
          pointRadius: '5',
          borderWidth: '2'
          
        },{
            label: 'Absense',
            data: [15, 13, 30, 18, 15, 22, 16],
            fill: true,
            borderColor: '#ff7b00',
            tension: 0.4,
            backgroundColor:'rgba(255, 124, 00, 0.1)',
            pointBackgroundColor: '#ff7b00',
            pointBorderColor: '#fff',
            pointRadius: '5',
            borderWidth: '2'
          },{
            label: 'Attendance',
            data: [13, 30, 43, 30, 31, 50, 41],
            fill: true,
            borderColor: '#38b000',
            tension: 0.4,
            backgroundColor:'rgba(56, 176, 00, 0.1)',
            pointBackgroundColor: '#38b000',
            pointBorderColor: '#fff',
            pointRadius: '5',
            borderWidth: '2'
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
            type: 'line',
            data: data,
            options: {scales: {
                y: {
                  border: {
                    color: '#F0F4FB'
                  },
                  max: 100,
                  min: 0,
                  ticks: {
                         stepSize: 20
                     }
                },
                x: {
                    grid: {
                      color: '#fff',
                      borderColor: '#fff',
                      tickColor: '#fff'
                    }
                  }
              },
             
              transitions: {
                show: {
                  animations: {
                    x: {
                      from: 0
                    },
                    y: {
                      from: 0
                    }
                  }
                }, hide: {
                    animations: {
                      x: {
                        to: 0
                      },
                      y: {
                        to: 0
                      }
                    }
                  }
                }
              }
        });
        return(()=>{
            if (chartInstance.current) {
                chartInstance.current.destroy()
            }
        })
    },[])


  return (
    <div className='chart'>
        <canvas ref={chartRef} style={{width:"100%"}}/>
    </div>
  )
}

export default DashboardDiagram