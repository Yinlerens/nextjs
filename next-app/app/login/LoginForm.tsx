'use client';
import { useEffect, useState } from 'react';
import { Button, Form, Input, message, Space } from 'antd';
import { UserOutlined, LockOutlined, CloseCircleOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';
interface body {
  [key: string]: string;
}
const LoginForm = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [loginForm, setLoginForm] = useState({});
  const [shouldFetch, setShouldFetch] = useState(false);
  const router = useRouter();
  const onFinish = (value: body) => {
    console.log(value);
    router.push('login/api');
    setLoading(true);
    setShouldFetch(true);
    setLoginForm(value);
  };
  return (
    <Form
      form={form}
      name="basic"
      labelCol={{ span: 5 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      size="large"
      autoComplete="off"
    >
      <Form.Item name="username" rules={[{ required: true, message: '请输入用户名' }]}>
        <Input placeholder="用户名:admin / user" prefix={<UserOutlined />} />
      </Form.Item>
      <Form.Item name="password" rules={[{ required: true, message: '请输入密码' }]}>
        <Input.Password
          autoComplete="new-password"
          placeholder="密码:123456"
          prefix={<LockOutlined />}
        />
      </Form.Item>
      <Form.Item>
        <Space>
          <Button
            onClick={() => {
              form.resetFields();
            }}
            icon={<CloseCircleOutlined />}
            className="!flex items-center justify-center w-[180px]"
          >
            重置
          </Button>
          <Button
            type="primary"
            className="!flex items-center justify-center w-[180px]"
            htmlType="submit"
            loading={loading}
            icon={<UserOutlined />}
          >
            登陆
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
