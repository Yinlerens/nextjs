import { makeAutoObservable } from 'mobx';

export default class ListStore {
  userInfo = '';
  assemblySize = 'middle';
  language = '';
  themeConfig = {
    // 默认 primary 主题颜色
    primary: '#1890ff',
    // 深色模式
    isDark: false,
    // 色弱模式(weak) || 灰色模式(gray)
    weakOrGray: '',
    // 面包屑导航
    breadcrumb: true,
    // 标签页
    tabs: true,
    // 页脚
    footer: true
  };

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }
  setThemeConfig(themeConfig) {
    this.themeConfig = themeConfig;
  }
  setAssemblySize(value) {
    this.assemblySize = value;
  }
}
