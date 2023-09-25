import { NextResponse, NextRequest } from 'next/server';
export async function POST(request: NextRequest) {
  const { username, password } = await request.json();
  if (username !== 'admin' || password !== '123456') {
    return NextResponse.json({ message: '用户名或密码错误' }, { status: 400 });
  } else {
    const res = await fetch('https://mock.apifox.cn/m1/2588933-0-default/api/v1/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ time: new Date().toISOString() })
    });
    const data = await res.json();
    return NextResponse.json(data);
  }
}
