import mongoose from 'mongoose'

const bannerSchema = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User',
        },
        cntElementList: [
            {
                name: { type: String, required: true },
                innerHTML: { type: String},
                innerCSS: { type: String},
                element: {
                    cntElementUniqueClass: { type: String, required: true },
                    animationInClasses: { type: String},
                    animationOutClasses: { type: String},
                    uiCustomClasses: { type: String, required: true },
                },
            },
        ],
        bannerName: {
            type: String,
            required: true
        },
        bannerSizes: [{
            type: Object,
        }],
        cntElementStyles: {
            type: Object,
        },
        customElementList: [{type:String}],
    },
    {
        timestamps: true,
    }
)

const Banner = mongoose.model('Banner', bannerSchema)

export default Banner