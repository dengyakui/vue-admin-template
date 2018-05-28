import Mock from 'mockjs'
import articleAPI from './article'
Mock.mock(/\/article\/list/, 'get', articleAPI.getList)
console.log('mock worked')

export default Mock
