import express from "express"
import { addBannerItems, addGlobalCssItem, deleteBanner, deleteGlobalCssItem, generateBanner, getBannerById, getBanners, getGlobalCssItemById, updateBanner, updateGlobalCssItem } from "../controllers/bannerController.js"
import { admin, protect } from "../middleware/authMiddleware.js"

const router = express.Router()

router.route('/').get(getBanners)
router.route('/globalcss/create').post(protect,addGlobalCssItem)
router.route('/globalcss/:id')
.delete(deleteGlobalCssItem)
.get(getGlobalCssItemById)
.put(updateGlobalCssItem)
router.route('/create').post(protect,addBannerItems)
router.route('/generate/:id').get(protect,generateBanner)
router.route('/:id')
    .delete(deleteBanner)
    .get(getBannerById)
    .put(updateBanner)

export default router