const indexController = {
  index: function (req, res, next) {
    res.render("prueba", { title: "Andres" });
  },
};

module.exports = indexController;
