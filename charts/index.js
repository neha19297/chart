
const log = console.log;

const chartProperties = {
  width:1200,
  height:500,
  timeScale:{
    timeVisible:true,
    secondsVisible:false,
  }
}
//Step 1: Define chart properties.
const domElement = document.getElementById('chart');
// Step 2: Create the chart with defined properties and bind it to the DOM element.
const chart = LightweightCharts.createChart(domElement,chartProperties);
const candleSeries = chart.addCandlestickSeries();
//Step 3: Add the CandleStick Series.


const socket = io.connect('http://127.0.0.1:4000/');

socket.on('KLINE',(pl)=>{
  //log(pl);
  candleSeries.update(pl);
});
