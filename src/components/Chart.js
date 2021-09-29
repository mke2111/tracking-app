/* eslint-disable react/jsx-no-duplicate-props */
import Chart from 'react-google-charts';

  <Chart
    width={400}
    height="300px"
    chartType="PieChart"
    loader={<div>Loading Chart</div>}
    data={[
      ['Year', 'Sales', 'Expenses'],
      ['Longest', 1000, 400],
      ['Latest', 1170, 460],
    ]}
    options={{
      title: 'Your Session Perfomance',
      hAxis: { title: 'Year', titleTextStyle: { color: '#333' } },
      vAxis: { minValue: 0 },
      // For the legend to fit, we make the chart area smaller
      chartArea: { width: '50%', height: '70%' },
      lineWidth: 25,
    }}
  />;
