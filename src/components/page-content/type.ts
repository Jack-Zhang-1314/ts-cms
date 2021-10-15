export interface IpropData {
  //prop是服务器返回的属性,属性值要和服务器一样
  prop: string
  label: string
  minWidth: string
  slotName?: string
}

export interface ITableConfig {
  title: string
  propList: Array<IpropData>
  showIndexColumn: boolean
  showSelectColumn: boolean
}
