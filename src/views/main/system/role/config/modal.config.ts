import { IForm } from '@/base-ui/form/types/index'
export const modalConfig: IForm = {
  labelWidth: '120px',
  itemLayout: { padding: '10px 20px' },
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '角色名',
      placeholder: '请输入角色名'
    },
    {
      field: 'intro',
      type: 'input',
      label: '角色介绍',
      placeholder: '请输入角色介绍'
    }
  ],
  colLayout: { span: 24 }
}
