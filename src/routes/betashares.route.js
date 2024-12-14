module.exports = app => {

    const betashares = require("../controllers/betashares.controller");
    var router = require("express").Router();

    router.post("/", betashares.getTicker);

    app.use("/api/betashares", router);
};