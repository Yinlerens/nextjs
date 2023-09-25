'use client';
import { useEffect, useState, useTransition } from 'react';
import { Button, Form, Input, message, Space, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
interface body {
  username: string;
  password: string;
  remember: boolean;
}
const LoginForm = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const onFinish = async (value: body) => {
    setLoading(true);
    const res = await fetch('/login/api', {
      method: 'POST',
      body: JSON.stringify(value)
    });
    const { data, success } = await res.json();
    if (success) {
      setLoading(false);
      message.success('登陆成功')
      Cookies.set('token', data.token, { expires: 7 });
      Cookies.set('user', JSON.stringify(data));
      if (value.remember) {
        Cookies.set('username', value.username, { expires: 7 });
        Cookies.set('password', value.password, { expires: 7 });
      } else {
        Cookies.remove('username');
        Cookies.remove('password');
      }
    } else {
      setLoading(false);
      message.error(data.message)
    }
  };
  return (
    <Form
      form={form}
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: '请输入用户名!' }]}
        initialValue={Cookies.get('username')}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: '请输入密码!' }]}
        initialValue={Cookies.get('password')}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>记住我</Checkbox>
        </Form.Item>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="w-full bg-[#1677ff]" loading={loading}>
          登录
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
