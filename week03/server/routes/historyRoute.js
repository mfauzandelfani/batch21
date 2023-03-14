import { Router } from "express";
import indexCtrl from "../controllers/indexCtrl";

const router = Router();

router.get("/", indexCtrl.HisCtrl.findAll);
router.get("/:id", indexCtrl.HisCtrl.findOne);
router.post("/", indexCtrl.HisCtrl.create);
router.put("/:id", indexCtrl.HisCtrl.update);
router.delete("/:id", indexCtrl.HisCtrl.deleted);
// router.get("/sql/:id", indexCtrl.ReqCtrl.querySQL);

export default router;
