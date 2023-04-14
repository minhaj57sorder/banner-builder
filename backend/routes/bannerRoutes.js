import express from "express"
import { addBannerItems, deleteBanner, generateBanner, getBannerById, getBanners, updateBanner } from "../controllers/bannerController.js"
import { admin, protect } from "../middleware/authMiddleware.js"

const router = express.Router()

router.route('/').get(getBanners)
router.route('/create').post(protect,addBannerItems)
router.route('/generate/:id').get(protect,generateBanner)
router.route('/:id')
    .delete(deleteBanner)
    .get(getBannerById)
    .put(updateBanner)

export default router