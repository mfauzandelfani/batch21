import { Router } from "express";
import indexCtrl from "../controllers/indexCtrl";

const router = Router();

router.get("/", indexCtrl.CusCtrl.findAll);
router.get("/:id", indexCtrl.CusCtrl.findOne);
router.post("/", indexCtrl.CusCtrl.create);
router.put("/:id", indexCtrl.CusCtrl.update);
router.delete("/:id", indexCtrl.CusCtrl.deleted);
// router.get("/sql/:id", indexCtrl.ReqCtrl.querySQL);

export default router;
