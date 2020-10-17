const express = require("express"),
  bodyParser = require("body-parser");
const app = express();
const mongoose = require("mongoose");
const CustomerModel = require("./models/Cutomer");

app.use(bodyParser.json());

let url = "URL";

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

app.post("/customer/registerCustomer", (req, res) => {
  let customerRegData = new CustomerModel(req.body);

  customerRegData
    .save((err) => {
      res.status(400).send({
        status: "Bad Request",
        message: "Invalid Syntax",
        result: null,
      });
    })
    .then((val) => {
      res.status(200).send({
        status: "OK",
        message: "Customer data inserted Successfully",
        result: null,
      });
    });
});

app.get("/customer/details", (req, res) => {
  CustomerModel.findById(res.body._id)
    .exec()
    .then((doc) => {
      if (doc != null) {
        res.status(200).send(doc.toJSON());
      } else {
        res.sendStatus(400);
      }
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

app.get("/customer/updateCustomer", (req, res) => {
  CustomerModel.findByIdAndUpdate(res.body._id, res.body, (err) => {
    res.send(400);
  })
    .then((res) => {
      res.status(200).send({
        status: "OK",
        message: "Customer data updated Successfully",
        result: null,
      });
    })
    .catch((err) => {
      res.sendStatus(500);
      console.log(err);
    });
});

app.listen(80);
