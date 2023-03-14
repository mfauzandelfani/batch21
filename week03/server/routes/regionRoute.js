import {Router} from 'express'
import indexCtrl from '../controllers/indexCtrl'

const router = Router()

router.get('/', indexCtrl.ReqCtrl.findAll)
router.get('/:id',indexCtrl.ReqCtrl.findOne)
router.post('/', indexCtrl.ReqCtrl.create)
router.put('/:id', indexCtrl.ReqCtrl.update)
router.delete("/:id", indexCtrl.ReqCtrl.deleted);
router.get("/sql/:id", indexCtrl.ReqCtrl.querySQL);

export default router