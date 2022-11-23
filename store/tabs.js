import {HOME_URL} from "@/config/config.js";
import {makeAutoObservable} from "mobx";

export default class TabsStore {
  tabsActive = HOME_URL;
  tabsList = [{title: "首页", path: HOME_URL}]

  constructor() {
    makeAutoObservable(this, {}, {autoBind: true})
  }

  setTabsActive(value) {
    this.tabsActive = value
  }

  setTabsList(value) {
    this.tabsList = value
  }
}