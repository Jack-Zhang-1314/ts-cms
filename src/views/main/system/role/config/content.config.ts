import { ITableConfig } from '@/components/page-content/type'

export const contentTableConfig: ITableConfig = {
  title: '用户列表',
  propList: [
    { prop: 'name', label: '角色名', minWidth: '100' },
    { prop: 'intro', label: '权限介绍', minWidth: '100' },
    {
      prop: 'createAt',
      label: '创建事件',
      minWidth: '250',
      slotName: 'createAt'
    },
    {
      prop: 'updateAt',
      label: '更新事件',
      minWidth: '250',
      slotName: 'updateAt'
    },
    {
      prop: 'hao',
      label: '操作',
      minWidth: '150',
      slotName: 'handler'
    }
  ],
  showIndexColumn: true,
  showSelectColumn: true
}
