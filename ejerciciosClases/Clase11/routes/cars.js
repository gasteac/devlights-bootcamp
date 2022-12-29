const express = require("express");

const carsRoutes = express.Router();

carsRoutes.get("/", (req, res) => {
  res.json({ status: 200, message: "OK" });
})

carsRoutes.get("/:id", async (req, res) => {
  const data = await carsModel.findByPk(req.params.id);
  res.json({ status: 200, data });
})

carsRoutes.post("/create", async (req, res) => {
  const data = await carsModel.create(req.body);

  res.json({ status: 200, data });
})

carsRoutes.delete("/:id", async (req, res) => {
  const data = await carsModel.destroy({
    where: {id: req.params.id}
  })

  res.json({ status: 200, data });
})

carsRoutes.patch("/:id", async (req, res) => {
  const data = await carsModel.update(req.body, {
    where: {
      id: req.params.id
    }
  });
  res.json({ status: 200, data });
})

module.exports = carsRoutes;