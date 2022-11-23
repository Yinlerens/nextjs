import AuthStore from './auth.js';
import GlobalStore from './global.js';
import { createContext, useContext } from 'react';
import TabsStore from "@/store/tabs.js";
import BreadcrumbStore from "@/store/breadcrumb.js";
import MenuStore from "@/store/menu.js";
export class RootStore {
  constructor() {
    this.authStore = new AuthStore();
    this.globalStore = new GlobalStore();
    this.tabsStore=new TabsStore()
    this.breadcrumbStore=new BreadcrumbStore()
    this.menuStore=new MenuStore()
  }
}
const RootContext = createContext(new RootStore());
export const useStore = () => {
  return useContext(RootContext)
}
