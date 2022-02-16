const mongoose = require("mongoose");
const userProfiles = mongoose.model("profiles");

const userProfileRoutes = (app) => {
  app.get(`/api/userProfiles`, async (req, res) => {
    const profiles = await Profile.find();

    return res.status(200).send(profiles);
  });

  app.post(`/api/userProfiles`, (req, res) => {
    const profiles = await profiles.create(req.body);
 console.log('Body: ', req.body);
    return res.status(201).send({
      error: false,
      profiles
    });
  });

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