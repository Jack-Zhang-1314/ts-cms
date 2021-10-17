type IFormType = 'input' | 'password' | 'select' | 'datepicker' | 'id'
export interface IFormItem {
  field: string
  type: IFormType
  label: string
  rules?: any[]
  placeholder?: any
  //select
  options?: any[]
  //特殊的类型
  otherOptions?: any
  isHidden?: boolean
}

export interface IForm {
  formItems: IFormItem[]
  labelWidth?: string
  colLayout?: any
  itemLayout: any
}
