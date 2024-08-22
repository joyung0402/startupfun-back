import { Schema, model } from 'mongoose'

// 定義產品的 Schema
const schema = new Schema({
  name: {
    type: String,
    required: [true, '商家名稱必填']
  },
  image1: {
    type: String,
    required: [true, '商家圖片必填']
  },
  image2: {
    type: String,
    required: [true, '商家圖片必填']
  },
  image3: {
    type: String,
    required: [false, '商家圖片選填'] // 新增的圖片3，預設為選填
  },
  description: {
    type: String,
    required: [true, '商家說明必填']
  },
  category: {
    type: String,
    required: [true, '商家分類必填'],
    enum: {
      values: ['找設計', '找餐具', '找家具', '找設備', '找原料', '其他服務'],
      message: '商家分類錯誤'
    }
  },
  service: {
    type: String,
    required: [true, '服務項目必填'] // 新增的服務項目
  }
}, {
  timestamps: true,
  versionKey: false
})

// 匯出模型
export default model('products', schema)
