const {Router} = require("express");
const upload = require("../libs/storage");
const {
    addHeroes,
    allHeroes,
    oneHeroe,
    updateHeroes,
    deleteHeroes } = require("../controllers/heroes.controllers");

const router = Router();

router.route("/heroes")
    .post(upload.single('image'), addHeroes)
    .get(allHeroes);
    
    router.route("/heroes/:id")
    .get(oneHeroe)    
    .put(updateHeroes)
    .delete(deleteHeroes);

module.exports = router;