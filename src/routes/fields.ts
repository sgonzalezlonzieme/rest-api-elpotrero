import Express from "express";
import getFields from "../controllers/fields/getFields";
import getFieldsAvailable from "../controllers/fields/getFieldsAvailable";
import postField from "../controllers/fields/postField";
import putField from "../controllers/fields/putField";
import deleteField from "../controllers/fields/deleteFields";
import passport from "passport";

// const { getActivities, addActivity } = require('../controllers');
const router = Express.Router();

router.get("/", passport.authenticate("jwt", { session: false }), getFields);
router.get("/available/:day", getFieldsAvailable); //Sin passport, no hay que ponerle
router.post("/", passport.authenticate("jwt", { session: false }), postField);
router.put("/:id", passport.authenticate("jwt", { session: false }), putField);
router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  deleteField
);

// module.exports = router/;
export default router;
