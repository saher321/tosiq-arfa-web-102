import express from 'express'
import { create, deptList } from './department.controller.js'

const deptRoute = express.Router()

deptRoute.get( '/list', deptList)
deptRoute.post( '/departments/create', create)

export default deptRoute