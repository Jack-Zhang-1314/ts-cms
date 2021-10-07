export const rules = {
  num: [
    { required: true, message: '手机号是必要的', trigger: 'blur' },
    {
      pattern:
        /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[189]))\d{8}$/,
      message: '密码必须是3个以上的字母或者数字',
      trigger: 'blur'
    }
  ]
}
