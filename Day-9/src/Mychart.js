function MyChart() {
    const options = {
      chart: {
        height: 350,
        type: "line",
        stacked: false,
      },
      // ... (rest of the options)
  
      legend: {
        horizontalAlign: "left",
        offsetX: 40,
      },
    };
  
    const series = [
      {
        name: 'Column A',
        type: 'column',
        data: [21.1, 23, 33.1, 34, 44.1, 44.9, 56.5, 58.5],
      },
      {
        name: "Column B",
        type: 'column',
        data: [10, 19, 27, 26, 34, 35, 40, 38],
      },
      {
        name: "Line C",
        type: 'line',
        data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6],
      },
    ];
  
    return (
      <div id="chart">
        {/* <ApexCharts options={options} series={series} type="line" height={350} /> */}
      </div>
    );
  }
  
  export default MyChart;