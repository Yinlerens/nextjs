'use client';
import React, { useState } from 'react';
import { Card, Input } from 'antd';
import axios from 'axios';
import useSWR from 'swr';
import { Message } from '@/typings';
const { Search } = Input;
const App: React.FC = () => {
  const [status, setStatus] = useState(false);
  const [value, setValue] = useState({});
  const fetcher = ({ url, body }: { url: string; body: Message }) =>
    axios.post(url, body).then(r => r.data);
  const { data } = useSWR(status ? { url: '/api/posts', body: value } : null, fetcher);
  const onSearch = (message: string) => {
    setStatus(true);
    const messagebody: Message = {
      username: 'eva',
      create_at: Date.now(),
      img: 'https://api.multiavatar.com/www.miigua.com.svg',
      message
    };
    setValue(messagebody);
  };
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
          <Search
            placeholder="input search text"
            enterButton="send"
            size="large"
            loading={status}
            disabled={status}
            onSearch={e => onSearch(e)}
          />
        </div>
      </Card>
    </div>
  );
};

export default App;
