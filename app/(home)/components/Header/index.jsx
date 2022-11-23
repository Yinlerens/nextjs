import { Layout } from 'antd';
import AvatarIcon from './components/AvatarIcon';
import CollapseIcon from './components/CollapseIcon';
import BreadcrumbNav from './components/BreadcrumbNav';
import AssemblySize from './components/AssemblySize';
import Theme from './components/Theme';
import Fullscreen from './components/Fullscreen';

const LayoutHeader = () => {
  const { Header } = Layout;

  return (
    <Header>
      <div className="flex items-center">
        <CollapseIcon />
        <BreadcrumbNav />
      </div>
      <div className="flex items-center">
        <AssemblySize />
        {/* <Theme /> */}
        <Fullscreen />
        <span className="mr-5 text-base">EVA</span>
        <AvatarIcon />
      </div>
    </Header>
  );
};

export default LayoutHeader;
