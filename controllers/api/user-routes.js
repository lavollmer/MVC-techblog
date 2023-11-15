//const express = require('express');
const router = require('express').Router();
const { User } = require('../../models');

//Command shift L for Mac users

//get all records
router.get("/", async (req, res) => {
  try {
    const payload = await User.findAll();
    res.status(200).json({ status: "success", payload })
  } catch (err) {
    res.status(500).json({ status: "error", paylod: err.message })
  }

})

//get one record by PK
router.get("/:id", async (req, res) => {
  try {
    const payload = await User.findByPk(req.params.id);
    res.status(200).json({ status: "success", payload })
  } catch (err) {
    res.status(500).json({ status: "error", paylod: err.message })
  }

})

//Create a new record
router.get("/", async (req, res) => {
  try {
    const payload = await User.create(req.body);
    res.status(200).json({ status: "success", payload })
  } catch (err) {
    res.status(500).json({ status: "error", paylod: err.message })
  }

})

//Update a record
router.put("/:id", async (req, res) => {
  try {
    const payload = await User.update(
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
    const payload = await User.destroy({
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