import {makeAutoObservable} from "mobx";

export default class BreadcrumbStore{
  breadcrumbList= {}
  constructor() {
    makeAutoObservable(this,{},{autoBind:true})
  }
  setBreadcrumbList(value){
    this.breadcrumbList=value
  }
}