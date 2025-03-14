
import express from 'express'
import { doctorList } from '../controllers/dotorController.js'
// import { doctorList } from '../controllers/dotorController'

const doctorRouter= express.Router()

doctorRouter.get('/list',doctorList)


export default doctorRouter