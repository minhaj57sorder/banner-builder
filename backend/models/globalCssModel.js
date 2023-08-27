import mongoose from 'mongoose'

const globalCssSchema = mongoose.Schema(
    {
        banner: {
            type: String,
            required: true,
        },
        bannerGlobalCss: {
            type: String,
            required: true
        },
    },
    {
        timestamps: true,
    }
)

const GlobalCss = mongoose.model('GlobalCss', globalCssSchema)

export default GlobalCss