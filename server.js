import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import router from './routes/route.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 4000;

app.use(express.json())
app.use('/api/products', router)

mongoose.connect(process.env.ATLAS_URI).then(()=>{
    console.log('connected')
    app.listen(PORT, () => console.log(PORT))
}).catch((err)=>{
    console.log(err)
    process.exit(1)
})