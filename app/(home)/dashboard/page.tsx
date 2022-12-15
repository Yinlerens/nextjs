"use client"
import { Card } from 'antd';
import Search from '../components/Search';
const App: React.FC = () => {
  return (
    <div className="p-3 h-full">
      <Card
        title="Card title"
        bordered={false}
        className="h-full w-full"
        bodyStyle={{ height: '92%' }}
      >
        <div className="flex flex-col justify-between h-full">
          <div className="" id="list">
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </div>
          <Search />
        </div>
      </Card>
    </div>
  );
};

export default App;
