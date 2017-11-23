import React from 'react'
import { Line } from 'react-chartjs-2'

let data_mockup = []

for (let i = 0; i <= 100; i++) {
  data_mockup.push(parseInt(Math.random().toFixed(2) * 100))
}

let line_data = {
  labels: [''],
  datasets: [
    {
      label: 'Co2',
      fill: false,
      lineTension: 0.5,
      backgroundColor: 'rgba(255, 87, 112, 1)',
      borderColor: 'rgba(255, 87, 112, 1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(255, 87, 112, 1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 2,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 3,
      pointHitRadius: 5,
      data: [...data_mockup]
    }
  ]
}

let line_options = {
  responsive: true,
  title: {
    display: false,
    text: 'Chart.js Line Chart'
  },
  tooltips: {
    mode: 'index',
    intersect: false
  },
  hover: {
    mode: 'nearest',
    intersect: true
  },
  scales: {
    yAxes: [{
      display: true,
      scaleLabel: {
        display: true,
        labelString: ''
      }
    }]
  }
}

const Co2 = () => <Line data={line_data} options={line_options}/>

export default Co2