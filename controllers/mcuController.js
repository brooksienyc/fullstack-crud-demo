const Mcu = require("../models/mcuModel");

async function createMcuCharacter(req, res) {

    try {

        const newMcuHero = {
            name: req.body.name,
            debut: req.body.debut,
            debutYear: req.body.debutYear
        }

        await Mcu.create(newMcuHero);

        res.json(
            {
                message: "Success",
                payload: newMcuHero
            }
        );
    }

    catch (error) {
        console.log("Error in create character" + error);
        res.json(
            {
                message: "Failure",
                payload: "Error in create:" + error
            }
        );
    }

}



async function getOneCharacter(req, res) {
    try {
        let nameToFind = req.params.name;
        let result = await Mcu.find({ name: nameToFind});
        //Or can use: let result = await Mcu.find({ name: nameToFind });

        res.json({
            message: "Success",
            payload: result
        })
    }
    catch (error) {
        console.log("Error:" + error);
        res.json({
            message: "Failure",
            payload: `Error occured: ${error}`
        });
    }
}



async function getAllCharacters(req, res) {
    try {
        let result = await Mcu.find({});

        res.json({
            message: "Success",
            payload: result
        });
    } catch (error) {
        res.json({
            message: "Failure",
            payload: `getAllCharacters error: ${error}`
        });
    }
}



async function updateMcuCharacter(req, res) {
    try {

        let updatedMcuCharacter = {
            name: req.body.name,
            debut: req.body.debut,
            debutYear: req.body.debutYear
        }

        await Mcu.updateOne(
            { name: req.body.name },
            { $set: updatedMcuCharacter },
            { upsert: true }
        );

        res.json(
            {
                message: "Success",
                payload: updatedMcuCharacter
            }
        );

    }
    catch (error) {
        console.log("Error in update:" + error);

        res.json(
            {
                message: "Failure",
                payload: "Error in update:" + error
            }
        );
    }
}





async function deleteMcuCharacter(req, res) {
    try {
        await Mcu.deleteOne({ name: req.params.name })
        res.json(
            {
                message: "Success",
                payload: req.params.name
            }
        );
    }
    catch (error) {
        console.log("Error in delete:" + error);

        res.json({
            message: "Failure",
            payload: req.params.name
        }
        );
    }
}







module.exports = {
    createMcuCharacter, getOneCharacter, getAllCharacters, updateMcuCharacter, deleteMcuCharacter
};