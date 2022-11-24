import { useEcharts } from '@/hooks/useEcharts';
import man from '@/public/images/man.png';
import woman from '@/public/images/woman.png';
import Image from 'next/image';
const MaleFemaleRatioChart = () => {
  let data = {
    man: 0.6,
    woman: 0.4
  };
  const option = {
    xAxis: {
      type: 'value',
      show: false
    },
    grid: {
      left: 0,
      top: '30px',
      bottom: 0,
      right: 0
    },
    yAxis: [
      {
        type: 'category',
        position: 'left',
        data: ['男生'],
        axisTick: {
          show: false
        },
        axisLine: {
          show: false
        },
        axisLabel: {
          show: false
        }
      },
      {
        type: 'category',
        position: 'right',
        data: ['女士'],
        axisTick: {
          show: false
        },
        axisLine: {
          show: false
        },
        axisLabel: {
          show: false,
          padding: [0, 0, 40, -60],
          fontSize: 12,
          lineHeight: 60,
          color: 'rgba(255, 255, 255, 0.9)',
          formatter: '{value}' + data.woman * 100 + '%',
          rich: {
            a: {
              color: 'transparent',
              lineHeight: 30,
              fontFamily: 'digital',
              fontSize: 12
            }
          }
        }
      }
    ],
    series: [
      {
        type: 'bar',
        barWidth: 20,
        data: [data.man],
        z: 20,
        itemStyle: {
          borderRadius: 10,
          color: '#007AFE'
        },
        label: {
          show: true,
          color: '#E7E8ED',
          position: 'insideLeft',
          offset: [0, -20],
          fontSize: 12,
          formatter: () => {
            return `男士 ${data.man * 100}%`;
          }
        }
      },
      {
        type: 'bar',
        barWidth: 20,
        data: [1],
        barGap: '-100%',
        itemStyle: {
          borderRadius: 10,
          color: '#FF4B7A'
        },
        label: {
          show: true,
          color: '#E7E8ED',
          position: 'insideRight',
          offset: [0, -20],
          fontSize: 12,
          formatter: () => {
            return `女士 ${data.woman * 100}%`;
          }
        }
      }
    ]
  };
  const [echartsRef] = useEcharts(option, data);
  return (
    <div className="box-border w-full h-full py-10 px-[65px]">
      <div className="flex justify-between w-full h-[115px]">
        <div className="flex flex-col items-center w-[110px] h-[115px] bg-[url('../public/images/man-bg.png')] bg-no-repeat bg-[length:100%_100%]">
          <span className="mt-[2px] text-sm text-white">男士</span>
          <Image src={man} alt="" width={60} height={60} className="mt-[17px]" />
        </div>
        <div className="flex flex-col items-center w-[110px] h-[115px] bg-[url('../public/images/woman-bg.png')] bg-no-repeat bg-[length:100%_100%]">
          <span className="mt-[2px] text-sm text-white">女士</span>
          <Image src={woman} alt="" />
        </div>
      </div>
      <div ref={echartsRef} className="w-full h-[calc(100%-115px)]"></div>
    </div>
  );
};

export default MaleFemaleRatioChart;
