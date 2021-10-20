import Express from "express";
import deleteTimetable from "../controllers/timetable/deleteTimetable";
import getTimetable from "../controllers/timetable/getTimetable";
import postTimetable from "../controllers/timetable/postTimetable";
import failedTimetable from "../controllers/timetable/failedTimetable";
import passport from "passport";

// const { getActivities, addActivity } = require('../controllers');
const router = Express.Router();

router.get("/:id", getTimetable);
router.post("/", postTimetable);
router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  deleteTimetable
);
router.delete(
  "/mercadopago/:id",
  passport.authenticate("jwt", { session: false }),
  failedTimetable
);

// module.exports = router;
export default router;
