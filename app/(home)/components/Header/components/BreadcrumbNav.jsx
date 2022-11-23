import {Breadcrumb} from "antd";
import {useLocation} from "react-router-dom";
import {HOME_URL} from "@/config/config";
import {observer} from "mobx-react-lite";
import {useStore} from "@/store/index.js";

const BreadcrumbNav = () => {
  const {pathname} = useLocation();
  const {globalStore: {themeConfig}, breadcrumbStore} = useStore()
  const breadcrumbList = breadcrumbStore.breadcrumbList[pathname] || [];

  return (
    <>
      {!themeConfig.breadcrumb && (
        <Breadcrumb>
          <Breadcrumb.Item href={`#${HOME_URL}`}>首页</Breadcrumb.Item>
          {breadcrumbList.map((item) =>
            <Breadcrumb.Item key={item}>{item !== "首页" ? item : null}</Breadcrumb.Item>
          )}
        </Breadcrumb>
      )}
    </>
  );
};

export default observer(BreadcrumbNav);
