const mongoose = require("mongoose");
const UserProfiles = mongoose.model("profiles");

const userProfileRoutes = (app) => {
  app.get(`/api/userProfiles`, async (req, res) => {
    const profiles = await UserProfiles.find();

    return res.status(200).send(profiles);
  });

  app.post(`/api/userProfiles`, async (req, res) => {
   console.log('Body: ', req.body);
   const profiles = await UserProfiles.create(req.body);
 
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

module.exports = userProfileRoutes;