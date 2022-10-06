import {
  BarController,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineController,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';
import { Chart, Line } from 'react-chartjs-2';

import { FunctionComponent } from 'react';
import { isEmpty } from 'lodash';
import moment from 'moment-timezone';
import useBreakpoints from '@hooks/useBreakpoints';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  LineController,
  BarController,
  PointElement
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
  const { isLg, isXl, is2Xl } = useBreakpoints();

  const startOfWeek = moment()
    .startOf('isoWeek')
    .tz('Asia/Bangkok')
    .format('l');
  const endOfWeek = moment().endOf('isoWeek').tz('Asia/Bangkok').format('l');
  const barChartDatasets = [
    {
      type: 'line' as const,
      label: `(${startOfWeek} - ${endOfWeek})`,
      borderColor: 'rgb(255, 99, 132)',
      data: videoInfos.map((dt: any, idx: number) => dt.views),
      backgroundColor: videoInfos.map((_: any, idx: number) =>
        idx % 2 === 0 ? 'rgba(53, 162, 235, 0.5)' : 'rgba(255, 99, 132, 0.5)'
      ),
      borderWidth: 4,
      fill: false,
    },
    {
      label: `(${startOfWeek} - ${endOfWeek})`,
      data: videoInfos.map((dt: any, idx: number) => dt.views),
      backgroundColor: videoInfos.map((_: any, idx: number) =>
        idx !== videoInfos.length - 1 ? '#5C5C5C' : '#0047FF'
      ),
      // borderWidth: 2,
    },
  ];
  // const lineChartDatasets = [
  //   {
  //     label: `(${startOfWeek} - ${endOfWeek})`,
  //     borderColor: 'rgb(255, 99, 132)',
  //     data: videoInfos.map((dt: any, idx: number) => dt.views),
  //     backgroundColor: videoInfos.map((_: any, idx: number) =>
  //       idx !== videoInfos.length - 1 ? '#5C5C5C' : '#0047FF'
  //     ),
  //     borderWidth: 4,
  //   },
  // ];

  const barChartData = {
    labels,
    datasets: barChartDatasets,
  };
  // const lineChartData = {
  //   labels,
  //   datasets: lineChartDatasets,
  // };

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
        // text:
        //   !isEmpty(videoInfos) && !isEmpty(videoInfos[0])
        //     ? videoInfos[0]?.title
        //     : 'Graph',
      },
    },
  };
  return (
    <div className='mt-4 px-4 grid grid-cols-1 md:grid-cols-2 md:gap-4'>
      <div className='bg-white p-4 h-fit'>
        <YoutubeEmbed
          videoId={
            !isEmpty(videoInfos) &&
            !isEmpty(videoInfos[0]) &&
            !isEmpty(videoInfos[0]?.videoId)
              ? videoInfos[0]?.videoId
              : ''
          }
        />
        <div className='w-full grid gap-4'>
          <div
            key={videoInfos[0].title}
            className='grid grid-cols-3 bg-white w-full'
          >
            <div className='bg-white w-14 col-end-1 grid items-center border-r-2 border-black my-4'>
              <p className='text-black text-center text-xl sm:text-3xl md:text-4xl lg:text-5xl'>
                {1}
              </p>
              <div className='flex justify-center'>
                <svg
                  width='21'
                  height='18'
                  viewBox='0 0 21 18'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M10.5 0L20.4593 17.25H0.540708L10.5 0Z'
                    fill='#BDFF00'
                  />
                </svg>
              </div>
            </div>
            <div className='w-full p-8 col-span-full'>
              <div className='grid grid-rows-2 h-full gap-4'>
                <div className='w-full'>
                  <p className='text-black font-bold text-base lg:text-2xl'>
                    {videoInfos[0].title}
                  </p>
                </div>
                <div>
                  <div className='flex justify-start gap-8'>
                    <div className='flex gap-4 items-center'>
                      <svg
                        width='33'
                        height='34'
                        viewBox='0 0 33 34'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <ellipse
                          cx='16.2785'
                          cy='16.7718'
                          rx='16.2785'
                          ry='16.7718'
                          fill='#D9D9D9'
                        />
                      </svg>
                      <p className='font-bold text-sm md:text-base lg:text-lg'>
                        {' '}
                        {isLg || isXl || is2Xl
                          ? videoInfos[videoInfos.length - 1]?.views
                              ?.toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                          : Intl.NumberFormat('en', {
                              notation: 'compact',
                            }).format(videoInfos[videoInfos.length - 1].views)}
                      </p>
                    </div>
                    <div className='flex gap-4 items-center'>
                      <svg
                        width='33'
                        height='34'
                        viewBox='0 0 33 34'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <ellipse
                          cx='16.2785'
                          cy='16.7718'
                          rx='16.2785'
                          ry='16.7718'
                          fill='#D9D9D9'
                        />
                      </svg>
                      <p className='font-bold text-sm md:text-base lg:text-lg'>
                        {moment(videoInfos[0].publishedAt)
                          .tz('Asia/Bangkok')
                          .format('l')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-white p-4'>
        <Chart type='bar' options={options} data={barChartData} />
      </div>
      {/* <div>
        <Line className='my-40' options={options} data={lineChartData} />
      </div> */}
    </div>
  );
};

export default SimpleBarChart;
