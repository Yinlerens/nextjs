import {makeAutoObservable} from "mobx";

export default class MenuStore{
  isCollapse=false;
  menuList=[]
  constructor() {
    makeAutoObservable(this,{},{autoBind:true})
  }
  updateCollapse(value){
    this.isCollapse=value
  }
  setMenuList(value){
    this.menuList=value
  }
}