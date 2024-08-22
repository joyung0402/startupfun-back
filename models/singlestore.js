import { Schema, model } from 'mongoose'

const schema = new Schema({
  // 第一區塊
  image: {
    type: String,
    required: [true, '商家主圖']
  },
  category: {
    type: String,
    required: [true, '分類'],
    enum: {
      values: ['找設計', '找餐具', '找家具', '找設備', '找原料', '其他項目'],
      message: '商品分類錯誤'
    }
  },
  // 第二區塊
  banner: {
    type: String,
    required: [true, '商家主視覺']
  },
  name: {
    type: String,
    required: [true, '商家名稱']
  },
  description: {
    type: String,
    required: [true, '商家簡介']
  },
  slide: {
    type: String,
    required: [true, '服務項目圖']
  },
  service: {
    type: String,
    required: [true, '服務項目文']
  }
}, {
  timestamps: true,
  versionKey: false
})

export default model('singlestore', schema)
