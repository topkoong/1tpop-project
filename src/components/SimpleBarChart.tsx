import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from 'chart.js';

import { Bar } from 'react-chartjs-2';
import { FunctionComponent } from 'react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};

const inputNunewData = [
  {
    publishedAt: '2022-09-16T06:00:14Z',
    date: '2022-09-26',
    views: 6101305,
    artist: 'NuNew',
    song: 'รักแท้',
  },
  {
    publishedAt: '2022-09-16T06:00:14Z',
    date: '2022-09-27',
    views: 6642192,
    artist: 'NuNew',
    song: 'รักแท้',
  },
];

const labels = inputNunewData.map((dt) => dt.date);

const datasets = inputNunewData.map((dt, idx) => ({
  label: dt.date,
  data: [dt.views],
  backgroundColor:
    idx % 2 === 0 ? 'rgba(53, 162, 235, 0.5)' : 'rgba(255, 99, 132, 0.5)',
}));

const data = {
  labels,
  datasets,
};

const SimpleBarChart: FunctionComponent<any> = () => (
  <Bar options={options} data={data} />
);

export default SimpleBarChart;
