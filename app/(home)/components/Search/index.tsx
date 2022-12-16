'use client';
import React, { useEffect, useState } from 'react';
import { Input } from 'antd';
import { Message } from '@/typings';
import axios from 'axios';
import useSWR from 'swr';
const { Search } = Input;
import { v4 } from 'uuid';
function index() {
  const [status, setStatus] = useState(false);
  const [value, setValue] = useState({});
  const fetcher = ({ url, body }: { url: string; body: Message }) =>
    axios.post(url, body).then(r => r.data);
  const { data } = useSWR(status ? { url: '/api/posts', body: { message: value } } : null, fetcher);
  const onSearch = (message: string) => {
    setStatus(true);
    const messagebody: Message = {
      id: v4(),
      username: 'eva',
      created_at: Date.now(),
      img: 'https://api.multiavatar.com/www.miigua.com.svg',
      message
    };
    setValue(messagebody);
  };
  useEffect(() => {
    if (!data) return;
    setStatus(false);
  }, [data]);
  return (
    <Search
      className="w-full pt-2"
      placeholder="input search text"
      enterButton="send"
      size="large"
      loading={status}
      disabled={status}
      onSearch={e => onSearch(e)}
    />
  );
}

export default index;
