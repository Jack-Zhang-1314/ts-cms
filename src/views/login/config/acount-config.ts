//编写规则
export const rules = {
  account: [
    {
      required: true,
      message: '用户名是必要的',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{5,10}$/,
      message: '用户名必须是5-10哥字母或者数字',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: '密码是必要的',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{3,}$/,
      message: '密码必须是3个以上的字母或者数字',
      trigger: 'blur'
    }
  ]
}
