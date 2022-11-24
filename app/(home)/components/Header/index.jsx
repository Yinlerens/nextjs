import { Layout } from 'antd';
import AvatarIcon from './components/AvatarIcon';
import CollapseIcon from './components/CollapseIcon';
import BreadcrumbNav from './components/BreadcrumbNav';
import AssemblySize from './components/AssemblySize';
import Theme from './components/Theme';

const LayoutHeader = () => {
  const { Header } = Layout;

  return (
    <Header
      className="!bg-white flex justify-between items-center"
      style={{ paddingInline: '20px' }}
    >
      <div className="flex items-center">
        <CollapseIcon />
        <BreadcrumbNav />
      </div>
      <div className="flex items-center">
        <AssemblySize />
        <Theme />
        <span className="mr-5 text-base">EVA</span>
        <AvatarIcon />
      </div>
    </Header>
  );
};

export default LayoutHeader;
