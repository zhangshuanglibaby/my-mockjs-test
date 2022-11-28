/*
 * @Date: 2022-11-28 18:09:00
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2022-11-28 23:48:41
 * @Description: 这是****文件
 */
// 导入mockjs 返回一个对象
const Mock = require('mockjs')

// 使用setup配置请求的响应时间，单位是毫秒
Mock.setup({
  // timeout: 1000 // 意味着接口1s后返回
  timeout: '200-1000' // 意味这接口响应时间介于200毫秒-1s之间
})

// 根据Mock.mock方法生成响应的数据
// Mock.mock('/list', 'get', {
//   code: 0,
//   ...{ 'data|1-10': [{}] }
// })

/*
  使用@string可以生成随机的字符串
  @string(length) 可以输入数字指定长度
  @string("lower|upper|number|symbol",length)  第一个参数可以指定是字母小写|大写|数字|符号，第二个参数可以输入数字指定长度
  @string(min, max)  可以指定字符串的区间
*/
/*
  使用@boolean可以生成随机的字符串
*/
/*
  使用@integer随机生成一串数字
  @integer( min, max )
*/
/*
  使用@date随机生成日期
  @date("yyyy-MM-dd") "2022-11-28"
  @date("yy-MM-dd")  22-11-28
*/
/*
  使用@time随机生成时分秒
  @time("HH:mm:ss") "00:15:29" 常用的是这个格式
*/
/*
  使用@datetime 随机生成具体的日期至时分秒
  @datetime("yyyy-MM-dd HH:mm:ss") "2018-11-29 09:25:16" 常用的是这个格式
*/
/*
  使用@image 随机生成具体大小的图片
  @image( size?, background?, foreground?, format?, text? )
  可以指定图片的尺寸，底色，文案的颜色，图片的格式，图片上的文案展示
*/
/*
  使用@color 随机生成颜色
*/
/*
  使用@cparagraph 随机生成段落文案--中文
  @cparagraph( min?, max? ) 可以指定生成多少句文案
*/
/*
  使用@ctitle 随机生成标题--中文
  @ctitle( length ) 可以指定标题的长度
  @ctitle( min, max ) 可以指定标题的长度的区间
*/
/*
  使用@cname 随机生成姓名-中文
*/
/*
  使用@email 随机生成邮箱地址
*/
/*
  使用@province 随机生成省份
  使用@city 随机生成城市 @city(true) 则会把省份也显示出来
  使用@county 随机生成地级  @county(true) 则会把省、市前缀显示出来
*/
// Mock.mock('/list', 'get', {
//   code: 0,
//   ...{
//     'data|1-10': [{
//       'id|+1': 1,
//       name: '@string',
//       sex: '@boolean',
//       count: '@integer(1, 20)',
//       date: '@date("yyyy-MM-dd")',
//       time: '@time("HH:mm:ss")',
//       datetime: '@datetime("yyyy-MM-dd HH:mm:ss")',
//       image: '@image',
//       color: '@color',
//       cparagraph: '@cparagraph(2)',
//       title: '@ctitle(10)',
//       email: '@email'
//     }]
//   }
// })

// 拓展mockjs 生成随机的手机号码
Mock.Random.extend({
  phone () {
    // 自己随便写前缀
    const phonePrefixs = ['135', '189', '136']
    // 使用pick 随机返回前缀
    return this.pick(phonePrefixs) + Mock.mock(/\d{8}/)
  }
})
console.log(Mock.Random.phone())

// 常用的表格数据结构
// Mock.mock('/list', 'get', {
//   code: 0,
//   ...{
//     'data|1-10': [{
//       'id|+1': 1, // id会自增
//       name: '@name', // 随机生成姓名
//       sex: '@integer(0, 1)', // 性别一般是用数字表示 0男生 1女生
//       phone: 
//     }]
//   },
//   total: 10
// })
