const mongoose = require("mongoose");
const Game = mongoose.model("games");

const gamesRoutes = (app) => {
  app.get(`/api/games`, async (req, res) => {
    const games = await Game.find();

    return res.status(200).send(games);
  });

  // app.post(`/api/profile`, async (req, res) => {
  //   const profile = await Profile.create(req.body);

  //   return res.status(201).send({
  //     error: false,
  //     profile,
  //   });
  // });

  // app.put(`/api/profile/:id`, async (req, res) => {
  //   const { id } = req.params;

  //   const profile = await Profile.findByIdAndUpdate(id, req.body);

  //   return res.status(202).send({
  //     error: false,
  //     profile,
  //   });
  // });

  // app.delete(`/api/profile/:id`, async (req, res) => {
  //   const { id } = req.params;

  //   const profile = await Profile.findByIdAndDelete(id);

  //   return res.status(202).send({
  //     error: false,
  //     profile,
  //   });
  // });
};

module.exports = gamesRoutes;
