'use client';
import { Card } from 'antd';
import Search from '../components/Search';
const App: React.FC = () => {
  return (
    <div className="p-2 h-full flex flex-col">
      <Card title="Card title" bordered={false} className=" w-full flex-1">
        <div className="" id="list">
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </div>
      </Card>
      <Search />
    </div>
  );
};

export default App;
