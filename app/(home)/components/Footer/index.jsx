import {observer} from "mobx-react-lite";
import "./index.less";
import {useStore} from "@/store/index.js";

const LayoutFooter = () => {
  const {globalStore: {themeConfig}} = useStore()
  return (
    <>
      {!themeConfig.footer && (
        <div className="footer">
          <a href="http://www.spicyboy.cn/" target="_blank" rel="noreferrer">
            2022 © Hooks-Admin By Hooks Technology.
          </a>
        </div>
      )}
    </>
  );
};

export default observer(LayoutFooter);
