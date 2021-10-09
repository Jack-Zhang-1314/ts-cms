type IFormType = 'input' | 'password' | 'select' | 'datepicker' | 'id'
export interface IFormItem {
  type: IFormType
  label: string
  rules?: any[]
  placeholder?: any
  //select
  options?: any[]
  //特殊的类型
  otherOptions?: any
}

export interface IForm {
  formItems: IFormItem[]
  labelWidth?: string
  colLayout?: any
  itemLayout: any
}
