import { Router } from "express";
import indexCtrl from "../controllers/indexCtrl";

const router = Router();

router.get("/", indexCtrl.ConCtrl.findAll);
router.get("/:id", indexCtrl.ConCtrl.findOne);
router.post("/", indexCtrl.ConCtrl.create);
router.put("/:id", indexCtrl.ConCtrl.update);
router.delete("/:id", indexCtrl.ConCtrl.deleted);
// router.get("/sql/:id", indexCtrl.ReqCtrl.querySQL);

export default router;
