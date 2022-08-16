const router = require("express").Router();
const TeamController = require("../controllers/teamController");
const PlayerController = require("../controllers/playerController");
const ProfileController = require("../controllers/profileController");
const { authentication } = require("../middlewares/authentication");
const { authorization } = require("../middlewares/authorization");

router.get("/test", TeamController.dummy);
router.get("/:teamId/players", PlayerController.getPlayersByTeamId);
router.get("/:teamId", authentication, TeamController.getSpecificTeam);
router.post("/:teamId/like", ProfileController.likeATeam);
router.get("/", authentication, TeamController.getAllTeams);

module.exports = router;
