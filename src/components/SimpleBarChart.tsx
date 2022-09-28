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
import { isEmpty } from 'lodash';
import moment from 'moment-timezone';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const YoutubeEmbed = ({ videoId }: any) => (
  <div className='overflow-hidden pb-[56%] relative h-0'>
    <iframe
      className='left-0 top-0 h-full w-full absolute'
      width='853'
      height='480'
      src={`https://www.youtube.com/embed/${videoId}`}
      frameBorder='0'
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
      allowFullScreen
      title='Embedded youtube video player'
    />
  </div>
);

const SimpleBarChart: FunctionComponent<any> = ({ videoInfos }) => {
  const labels = videoInfos.map((dt: any) =>
    moment(dt.date).tz('Asia/Bangkok').format('l')
  );

  const startOfWeek = moment()
    .startOf('isoWeek')
    .tz('Asia/Bangkok')
    .format('l');
  const endOfWeek = moment().endOf('isoWeek').tz('Asia/Bangkok').format('l');
  const datasets = [
    {
      label: `(${startOfWeek} - ${endOfWeek})`,
      data: videoInfos.map((dt: any, idx: number) => dt.views),
      backgroundColor: videoInfos.map((dt: any, idx: number) =>
        idx % 2 === 0 ? 'rgba(53, 162, 235, 0.5)' : 'rgba(255, 99, 132, 0.5)'
      ),
      borderWidth: 1,
    },
  ];

  const data = {
    labels,
    datasets,
  };

  const options = {
    responsive: true,
    // scales: {
    //   yAxes: [
    //     {
    //       ticks: {
    //         // Abbreviate the millions
    //         callback: function (value: any, index: any, values: any) {
    //           return value / 1e6 + 'M';
    //         },
    //       },
    //     },
    //   ],
    // },
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text:
          !isEmpty(videoInfos) && !isEmpty(videoInfos[0])
            ? videoInfos[0]?.title
            : 'Graph',
      },
    },
  };
  return (
    <>
      <YoutubeEmbed
        videoId={
          !isEmpty(videoInfos) &&
          !isEmpty(videoInfos[0]) &&
          !isEmpty(videoInfos[0]?.videoId)
            ? videoInfos[0]?.videoId
            : ''
        }
      />
      <Bar options={options} data={data} />
    </>
  );
};

export default SimpleBarChart;
