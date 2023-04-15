import cors from 'cors'
import path from 'path'
import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import connectDB from './config/db.js'
import bannerRouter from './routes/bannerRoutes.js'
import userRouter from './routes/userRoutes.js'
import uploadRouter from './routes/uploadRoutes.js'
import { errorHandler, notFound } from './middleware/errorMiddleware.js'
const app = express()

// enable all cors origin 
app.use(cors())
connectDB()
dotenv.config()


const __dirname = path.resolve()

if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}

const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(express.urlencoded({ extended: false }))



// This routes is example route to allaw react getting data from same origin
// This res.set route will remove Access-Control-Allow-OriginAccess
// to fetch at 'http://localhost:8080/' from origin 'http://localhost:3000'
// has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is
// present on the requested resource. If an opaque response serves your needs,
// set the request's mode to 'no-cors' to fetch the resource with CORS disabled.
// app.get('/cors', (req, res) => {
//     res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
//     res.send({ "msg": "This has CORS enabled 🎈" })
// })

// User router
app.use('/api/users', userRouter)

// Banner router
app.use('/api/banner', bannerRouter)

// Upload router
app.use('/api/upload', uploadRouter)

// Paypal router
app.get('/api/config/paypal', (req,res)=>res.send(process.env.PAYPAL_CLIENT_ID))

app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

// Custom error handler
app.use(errorHandler)
if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname,'/dist')))
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'dist','index.html'))
    })
}else{
    // hands up routes
    app.get('/', (req, res) => {
        res.send('Api is running now')
    })
}

app.use(notFound)

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on http://localhost:${PORT}`))