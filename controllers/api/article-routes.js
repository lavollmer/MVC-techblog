const express = require('express');
const router = require('express').Router();
const { User, Comment, Article } = require('../../models');

//get all records
router.get("/", async (req, res) => {
  try {
    const payload = await Article.findAll();
    res.status(200).json({ status: "success", payload })
  } catch (err) {
    res.status(500).json({ status: "error", paylod: err.message })
  }

})

//get one record by PK
router.get("/:id", async (req, res) => {
  try {
    const payload = await Article.findByPk(req.params.id);
    res.status(200).json({ status: "success", payload })
  } catch (err) {
    res.status(500).json({ status: "error", paylod: err.message })
  }

})

//Create a new record
router.get("/", async (req, res) => {
  try {
    const payload = await Article.create(req.body);
    res.status(200).json({ status: "success", payload })
  } catch (err) {
    res.status(500).json({ status: "error", paylod: err.message })
  }

})

//Update a record
router.put("/:id", async (req, res) => {
  try {
    const payload = await Article.update(
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
    const payload = await Article.destroy({
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