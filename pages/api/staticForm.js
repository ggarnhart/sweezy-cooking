module.exports = (req, res) => {
  console.log(req.body.data);
  res.status(200).send("Ok!");
};
