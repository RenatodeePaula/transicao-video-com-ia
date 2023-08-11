import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors())

app.get('/audio', async (req, res) => {
    const videoId = req.query.v

   try {
    // download
    //criar mp3

    return res.send('ok')
   } catch (error) {
        console.log(error)
        return res.send(error)
    
   }
    return res.send(videoId)
})

app.listen(3333, () => console.log('server up'))