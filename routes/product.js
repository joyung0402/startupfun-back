import { Router } from 'express'
import * as auth from '../middlewares/auth.js'
import upload from '../middlewares/upload.js'
import admin from '../middlewares/admin.js'
import { create, getAll, edit, get, getId, deleteProduct } from '../controllers/product.js'

const router = Router()

// 創建新產品
router.post('/', auth.jwt, admin, upload, create)

// 獲取上架產品
router.get('/', get)

// 獲取所有產品（管理界面用）
router.get('/all', auth.jwt, admin, getAll)

// 根據 ID 獲取產品
router.get('/:id', getId)

// 編輯產品
router.patch('/:id', auth.jwt, admin, upload, edit)

// 刪除產品
router.delete('/:id', auth.jwt, admin, deleteProduct)

export default router
