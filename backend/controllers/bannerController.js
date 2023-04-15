import expressAsyncHandler from "express-async-handler";
import Banner from '../models/bannerModel.js'
import { writeFile, createWriteStream, createReadStream } from 'fs';
// @desc    add banner items
// @route   post /api/banners/
// @access  Privet
const addBannerItems = expressAsyncHandler(async (req, res) => {
    const { bannerName } = req.body

    if (!bannerName) {
        res.status(400)
        throw new Error('Banner name can not be empty.')
        return
    } else {
        const banner = new Banner({
            user: req.user._id,
            bannerName,
            // adding example data for new banner
            bannerSizes: [
                {
                    name: "_320x320",
                    width: 320,
                    height: 320
                },
            ],
            customElementList: ["bg", "pontus", "offer", "logo"],
            cntElementList: [
                {
                    name: "sanaboreBanner2023-12",
                    element: {
                        cntElementUniqueClass: "bg",
                        animationInClasses: "anm-in animated fadeIn duration-15",
                        animationOutClasses: "anm-out",
                        uiCustomClasses: "ui-img img-01",
                    },
                    innerHTML: "",
                    innerCSS: "",
                },
                {
                    name: "sanaboreBanner2023-12",
                    element: {
                        cntElementUniqueClass: "pontus",
                        animationInClasses: "anm-in animated fadeIn duration-06 delay-02",
                        animationOutClasses: "anm-out",
                        uiCustomClasses: "ui-img img-01",
                    },
                    innerHTML: "",
                    innerCSS: "",
                },
                {
                    name: "sanaboreBanner2023-12",
                    element: {
                        cntElementUniqueClass: "offer",
                        animationInClasses: "anm-in animated fadeIn duration-06 delay-02",
                        animationOutClasses: "anm-out",
                        uiCustomClasses: "ui-offer custom-01",
                    },
                    innerHTML: "",
                    innerCSS: "",
                },
                {
                    name: "sanaboreBanner2023-12",
                    element: {
                        cntElementUniqueClass: "logo",
                        animationInClasses: "anm-in",
                        animationOutClasses: "anm-out",
                        uiCustomClasses: "ui-logo svg",
                    },
                    innerHTML: "<div class='ch'>I am the logo.</div>",
                    innerCSS: "<style>.ch{color:red}</style>",
                },
            ],
            cntElementStyles: {
                _320x320: {
                    bg: {
                        left: 0,
                        top: 0,
                        scale: 100,
                        bgImg: 'https://cdn.bannerflow.com/resources/bg-blue-320x320-56e08755-ce6d-4cc8-b19d-1e8415386b8f.jpg'

                    },
                    pontus: {
                        left: 0,
                        top: 0,
                        scale: 100,
                    },
                    offer: {
                        left: 0,
                        top: 0,
                        scale: 100,
                    },
                    logo: {
                        left: 0,
                        top: 0,
                        scale: 100,
                    },
                }
            }
        })
        const createdbanner = await banner.save()
        res.status(201).json(createdbanner)
    }
})

// @desc    Get banner by id
// @route   GET /api/banners/:id
// @access  Privet
const getBannerById = expressAsyncHandler(async (req, res) => {
    const banner = await Banner.findById(req.params.id).populate('user', 'name email')

    if (banner) {
        res.json(banner)
    } else {
        res.status(404)
        throw new Error('banner not found')
    }
})

// @desc    Update banner
// @route   GET /api/banners/:id/pay
// @access  Privet
const updateBanner = expressAsyncHandler(async (req, res) => {
    const banner = await Banner.findById(req.params.id)
    const { cntElementList,
        bannerName,
        bannerSizes,
        cntElementStyles,
        customElementList } = req.body

    if (banner) {
        banner.bannerName = bannerName
        banner.cntElementList = cntElementList
        banner.bannerSizes = bannerSizes
        banner.cntElementStyles = cntElementStyles
        banner.customElementList = customElementList
        const updatedBanner = await banner.save()
        res.json(updatedBanner)
    } else {
        res.status(404)
        throw new Error('banner not found')
    }
})


// @desc    Get my banner
// @route   GET /api/banners/mybanners
// @access  Privet
const getMyBanners = expressAsyncHandler(async (req, res) => {
    const banners = await Banner.find({ user: req.user._id })
    res.send(banners)

})

// @desc    Get All banner
// @route   GET /api/banners
// @access  Privet
const getBanners = expressAsyncHandler(async (req, res) => {
    const banners = await Banner.find({}).populate('user', 'id name')
    // const banners = await Banner.find({})
    res.send(banners)
})
const deleteBanner = expressAsyncHandler(async (req, res) => {
    const banner = await Banner.findById(req.params.id)
    // Banner.deleteOne({ _id: req.params.id }, function(err) {
    //     if (err) return err;
    // deleted at most one tank document
    //   });
    if (banner) {
        await banner.deleteOne()
        res.json({ message: 'Banner removed' })
    } else {
        res.status(404)
        throw new Error('Banner not found')
    }
})

// @desc    Get banner by id
// @route   GET /api/banners/generate/:id
// @access  Privet
const generateBanner = expressAsyncHandler(async (req, res) => {
    const banner = await Banner.findById(req.params.id).populate('user', 'name email')

    if (banner) {
        banner.bannerSizes.forEach(bannerSize => {
            let bannerHead = `<!DOCTYPE html>
            <html lang="en">
            <head>
              <meta charset="UTF-8">
              <meta http-equiv="X-UA-Compatible" content="IE=edge">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <link href="app.css" rel="stylesheet">
              <title>Banner</title>
            </head>
            <body>`
            let bannerGlobalCss = '<style>'
            let bannerdesingMarkup1 = ''
            let bannerdesingMarkup2 = ''
            let bannerdesingMarkup3 = ''
            bannerdesingMarkup1 = `
            <div
      class="cnt-banner size_${bannerSize.width}x${bannerSize.height} theme-blue blue-bg-image html purple-arrow-l-to-r prospect logo-x-center logo-y-top btn-x-center btn-y-bottom tc-x-center tc-y-bottom"
      style="width:${bannerSize.width}px; height: ${bannerSize.height}px;"
    >
      <a
        href="javascript:window.open(window.clickTag1)"
        id="clickTAG-snabbare"
        class="click-area snabbare"
      ></a>

      <div class="banner-inner">
            `;
            banner.cntElementList.forEach(item => {
                bannerdesingMarkup2 += `<div
                class="cnt-element ${item.element.cntElementUniqueClass}"
                style="width:${bannerSize.width}px; height: ${bannerSize.height}px"
              >
                <div
                  class="anm-in animated fadeIn duration-15 ${item.element.animationInClasses}"
                >
                  <div class="anm-out ${item.element.animationOutClasses}"  style="width:${bannerSize.width}px; height: ${bannerSize.height}px">
                    <div class="transform-x"  style="width:${bannerSize.width}px; height: ${bannerSize.height}px">
                      <div class="transform-y"  style="width:${bannerSize.width}px; height: ${bannerSize.height}px">
                        <div
                          class="ui-img img-01 ${item.element.uiCustomClasses}"
                          style="position:'absolute'; left:${banner.cntElementStyles[bannerSize.name][item.element.cntElementUniqueClass].left}px; top:${banner.cntElementStyles[bannerSize.name][item.element.cntElementUniqueClass].top}px;transform-box:fill-box; transform-origin:0% 0% ; transform:scale(${banner.cntElementStyles[bannerSize.name][item.element.cntElementUniqueClass].scale / 100});width:${bannerSize.width}px; height: ${bannerSize.height}px;background-image:${banner.cntElementStyles[bannerSize.name][item.element.cntElementUniqueClass].bgImg ? 'url(\'' + banner.cntElementStyles[bannerSize.name][item.element.cntElementUniqueClass].bgImg : 'url(\''}')"
                        >
                          <div class="inner" >
                            ${item.innerHTML ? item.innerHTML : ''}
                          </div>
                          <div class="innerCSS">
                            ${item.innerCSS ? item.innerCSS : ''}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
          </div>`
            });
            bannerdesingMarkup3 = `        
      <div>
      <div>
      </div> </body>
      </html>`;
            
        writeFile('output/' + bannerSize.name + '.html', bannerHead + bannerdesingMarkup1 + bannerdesingMarkup2 + bannerdesingMarkup3, 'utf8', function () {
            console.log("file created")
        });
        })

        res.json({ "message": "banner created" })
    } else {
        res.status(404)
        throw new Error('banner not found')
    }
})
export {
    addBannerItems,
    deleteBanner,
    getBannerById,
    updateBanner,
    getMyBanners,
    getBanners, generateBanner
}