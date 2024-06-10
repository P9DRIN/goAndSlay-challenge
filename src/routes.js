import express from 'express'


const routes = express.Router()

routes.get('/', () => {
    console.log('ok')
})


export default routes