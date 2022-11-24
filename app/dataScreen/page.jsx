'use client';
import { useLayoutEffect, useRef } from 'react';
import { HOME_URL } from '@/config/config';
import AgeRatioChart from './components/AgeRatioChart';
import AnnualUseChart from './components/AnnualUseChart';
import HotPlateChart from './components/HotPlateChart';
import MaleFemaleRatioChart from './components/MaleFemaleRatioChart';
import OverNext30Chart from './components/OverNext30Chart';
import PlatformSourceChart from './components/PlatformSourceChart';
import ChinaMapChart from './components/ChinaMapChart';
import Headertime from './components/DataHeaderTime';
import dataScreenTitle from '@/public/images/dataScreen-title.png';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useEffect } from 'react';
import localFont from '@next/font/local';
const myFont = localFont({
  src: '../../public/fonts/YouSheBiaoTiHei.ttf',
  variable: '--font-inter'
});
console.log('%c [ myFont ]-18', 'font-size:13px; background:pink; color:#bf2c9f;', myFont);
const DataScreen = () => {
  const router = useRouter();
  const handleTo = () => {
    router.push(HOME_URL);
  };
  const dataScreenRef = useRef(null);

  /* 浏览器监听 resize 事件 */
  const resize = () => {
    if (dataScreenRef.current) {
      dataScreenRef.current.style.transform = `scale(${getScale()}) translate(-50%, -50%)`;
    }
  };

  /* 根据浏览器大小推断缩放比例 */
  const getScale = (width = 1920, height = 1080) => {
    let ww = window.innerWidth / width;
    let wh = window.innerHeight / height;
    return ww < wh ? ww : wh;
  };

  useLayoutEffect(() => {
    if (dataScreenRef.current) {
      dataScreenRef.current.style.transform = `scale(${getScale()}) translate(-50%, -50%)`;
      dataScreenRef.current.style.width = `1920px`;
      dataScreenRef.current.style.height = `1080px`;
    }
    // 为浏览器绑定事件
    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);
  useEffect(() => {
    console.log('[ window ] >', window);
  }, [window]);
  return (
    <div className="w-full h-full bg-[url('../public/images/bg.png')] bg-no-repeat bg-fixed bg-center bg-cover">
      <div
        className="fixed top-1/2 left-1/2 z-[999] flex flex-col overflow-hidden transition-all duration-300 origin-top-left"
        ref={dataScreenRef}
      >
        <div className="flex w-full h-10">
          <div className="relative w-[567px] h-full bg-[url('../public/images/dataScreen-header-left-bg.png')] bg-[length:100%_100%]">
            <span
              className="absolute top-0 right-0 z-[9] box-border w-[136px] h-[42px] pr-1 text-lg font-normal leading-10 text-[#29fcff] text-center cursor-pointer bg-[url('../public/images/dataScreen-header-btn-bg-l.png')] bg-[length:100%_100%]"
              onClick={handleTo}
            >
              首页
            </span>
          </div>
          <div className="relative flex-1 h-full">
            <div className="--font-inter absolute top-0 left-0 w-full h-[82px] text-[32px] leading-[78px] text-[#05e8fe] text-center tracking-[4px] bg-[url('../public/images/dataScreen-header-center-bg.png')] bg-no-repeat bg-[length:100%_100%] font-sans">
              <span>智慧旅游可视化大数据展示平台</span>
              <div className="absolute bottom-[-42px] left-1/2 w-[622px] h-[44px] text-base leading-[44px] text-white text-center tracking-[1px] bg-[url('../public/images/dataScreen-header-warn-bg.png')] bg-no-repeat bg-[length:100%_100%] translate-x-[-50%]">
                平台高峰预警信息（2条）
              </div>
            </div>
          </div>
          <div className="relative w-[567px] h-full bg-[url('../public/images/dataScreen-header-left-bg.png')] bg-[length:100%_100%]">
            <span className="absolute top-0 left-0 z-[9] box-border w-[136px] h-[42px] pr-1 text-lg font-normal leading-10 text-[#29fcff] text-center cursor-pointer bg-[url('../public/images/dataScreen-header-btn-bg-l.png')] bg-[length:100%_100%]">
              统计报告
            </span>
            <Headertime />
          </div>
        </div>
        <div className="box-border flex flex-1 w-full pt-3 pb-5 px-10">
          <div className="flex flex-col justify-between w-[394px] h-full mr-10">
            <div className="relative box-border w-full pt-[54px] h-[37%] bg-[url('../public/images/dataScreen-main-lt.png')] bg-no-repeat bg-[length:100%_100%]">
              <div className="absolute top-[1px] left-0 flex flex-col ">
                <span className="mb-3 text-lg text-white tracking-[1px]">实时游客统计</span>
                <Image src={dataScreenTitle} alt="" width={68} height={7} />
              </div>
              <div className="w-full h-full">{<AnnualUseChart />}</div>
            </div>
            <div className="relative box-border w-full pt-[54px] h-[30%] bg-[url('../public/images/dataScreen-main-lc.png')] bg-no-repeat bg-[length:100%_100%]">
              <div className="absolute top-[1px] left-0 flex flex-col">
                <span className="mb-3 text-lg text-white tracking-[1px]">男女比例</span>
                <Image src={dataScreenTitle} alt="" width={68} height={7} />
              </div>
              <div className="w-full h-full">
                <MaleFemaleRatioChart />
              </div>
            </div>
            <div className="relative box-border w-full pt-[54px] h-[27%] bg-[url('../public/images/dataScreen-main-rb.png')] bg-no-repeat bg-[length:100%_100%]">
              <div className="absolute top-[1px] left-0 flex flex-col">
                <span className="mb-3 text-lg text-white tracking-[1px]">年龄比例</span>
                <Image src={dataScreenTitle} alt="" width={68} height={7} />
              </div>
              <div className="w-full h-full">
                <AgeRatioChart />
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-col justify-between h-full mr-10">
            <div className="relative box-border flex-1 w-full mt-[78px]">
              <div className="absolute top-[10px] left-0 z-[99] box-border flex items-center w-[270px] h-[25px] pl-[30px] text-sm text-white tracking-[5px] bg-[url('../public/images/map-title-bg.png')] bg-no-repeat bg-[length:100%_100%]">
                景区实时客流量
              </div>
              <ChinaMapChart />
            </div>
            <div className="relative box-border w-full h-[252px] pt-[54px] bg-[url('../public/images/dataScreen-main-cb.png')] bg-no-repeat bg-[length:100%_100%]">
              <div className="absolute top-[1px] left-0 flex flex-col">
                <span className="mb-3 text-lg text-white tracking-[1px]">未来30天游客量趋势图</span>
                <Image src={dataScreenTitle} alt="" width={68} height={7} />
              </div>
              <div className="w-full h-full">
                <OverNext30Chart />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between w-[394px] h-full mr-10">
            <div className="relative box-border w-full pt-[54px] h-[37%] bg-[url('../public/images/dataScreen-main-lt.png')] bg-no-repeat bg-[length:100%_100%]">
              <div className="absolute top-[1px] left-0 flex flex-col">
                <span className="mb-3 text-lg text-white tracking-[1px]">热门景区排行</span>
                <Image src={dataScreenTitle} alt="" width={68} height={7} />
              </div>
              <div className="w-full h-full">
                <HotPlateChart />
              </div>
            </div>
            <div className="relative box-border w-full pt-[54px] h-[30%] bg-[url('../public/images/dataScreen-main-rc.png')] bg-no-repeat bg-[length:100%_100%]">
              <div className="absolute top-[1px] left-0 flex flex-col">
                <span className="mb-3 text-lg text-white tracking-[1px]">年度游客量对比</span>
                <Image src={dataScreenTitle} alt="" width={68} height={7} />
              </div>
              <div className="w-full h-full">
                <AnnualUseChart />
              </div>
            </div>
            <div className="relative box-border w-full pt-[54px] h-[27%] bg-[url('../public/images/dataScreen-main-rb.png')] bg-no-repeat bg-[length:100%_100%]">
              <div className="absolute top-[1px] left-0 flex flex-col">
                <span className="mb-3 text-lg text-white tracking-[1px]">预约渠道数据统计</span>
                <Image src={dataScreenTitle} alt="" width={68} height={7} />
              </div>
              <div className="w-full h-full">
                <PlatformSourceChart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataScreen;
