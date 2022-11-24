import { observer } from 'mobx-react-lite';
import { useStore } from '@/store/index.js';

const LayoutFooter = () => {
  const {
    globalStore: { themeConfig }
  } = useStore();
  return (
    <>
      {!themeConfig.footer && (
        <div className="flex items-center justify-center h-8 border-t border-[#e4e7ed]">
          2022 © Hooks-Admin By Hooks Technology.
        </div>
      )}
    </>
  );
};

export default observer(LayoutFooter);
