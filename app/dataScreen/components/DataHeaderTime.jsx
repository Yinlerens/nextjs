import { useTimes } from '@/hooks/useTime';
const DataHeaderTime = () => {
  const { time } = useTimes();

  return (
    <span className="absolute top-0 right-[14px] w-[310px] text-lg leading-[38px] text-[#05e8fe] whitespace-nowrap	">
      当前时间：{time}
    </span>
  );
};

export default DataHeaderTime;
