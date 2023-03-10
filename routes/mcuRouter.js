const express = require('express');
const router = express.Router();

const {
    createMcuCharacter, getOneCharacter, getAllCharacters, updateMcuCharacter, deleteMcuCharacter
} = require("../controllers/mcuController");

// ...

// localhost:3001/api/allCharacters


router.post("/createMcuCharacter", createMcuCharacter);

router.get("/oneCharacter/:name", getOneCharacter);

router.get("/allCharacters", getAllCharacters);

router.put("/updateMcuCharacter", updateMcuCharacter);

router.delete("/deleteMcuCharacter/:name", deleteMcuCharacter);

module.exports = router;