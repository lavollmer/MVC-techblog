const router = require("express").router();
const Model = require("../../db/User");

//cmd + d to select and then change the name
//Command shift L for Mac users

//get all records
router.get("/", async (req, res) => {
  try {
    //express run Model.finall and if works then send back success
    const payload = await Model.findAll();
    res.status(200).json({ status: "success", payload })
  } catch (err) {
    res.status(500).json({ status: "error", paylod: err.message })
  }

})

//get one record by PK
router.get("/:id", async (req, res) => {
  try {
    //express Model.finall and if works then send back success
    const payload = await Model.findByPk(req.params.id);
    res.status(200).json({ status: "success", payload })
  } catch (err) {
    res.status(500).json({ status: "error", paylod: err.message })
  }

})

//Create a new record
router.get("/", async (req, res) => {
  try {
    //express run Model.finall and if works then send back success
    const payload = await Model.create(req.body);
    res.status(200).json({ status: "success", payload })
  } catch (err) {
    res.status(500).json({ status: "error", paylod: err.message })
  }

})

//Update a record
router.put("/:id", async (req, res) => {
  try {
    //express run Model.finall and if works then send back success
    const payload = await Model.update(
      req.body,
      {
        where: {
          id: req.params.id
        }
      }
    );
    res.status(200).json({ status: "success", payload })
  } catch (err) {
    res.status(500).json({ status: "error", paylod: err.message })
  }
})

//delete method
router.delete("/:id", async (req, res) => {
  try {
    //express run Model.finall and if works then send back success
    const payload = await Model.destroy({
      where: {
        id: request.params.id
      }

    })
    res.status(200).json({ status: "success", payload })
  } catch (err) {
    res.status(500).json({ status: "error", paylod: err.message })
  }

})

module.exports = router;