import LoginForm from './LoginForm';
import loginLeft from '@/public/images/login_left.png';
import logo from '@/public/images/logo.png';
import Image from 'next/image';
const Login = () => {
  return (
    <div className="relative flex items-center justify-center min-w-[550px] h-full min-h-[500px] bg-cover bg-center bg-[url('../public/images/login_bg.svg')] bg-[#eee]">
      <div className="box-border flex items-center justify-around w-[96%] h-[94%] pr-[4%] pl-[20px] bg-[#ffffffcc] rounded-xl">
        <div className="w-[750px] ">
          <Image src={loginLeft} alt="login" />
        </div>
        <div className="pt-[40px] px-[45px] pb-[25px]  bg-transparent shadow-[2px_3px_7px_rgba(0,0,0,0.2)] rounded-[10px]">
          <div className="flex items-center justify-center mb-[40px]">
            <Image className="w-[70px]" src={logo} alt="logo" />
            <span className="pl-25px text-5xl font-bold whitespace-nowrap text-[#475768] pl-6">
              Πανδώρα
            </span>
          </div>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Login;
