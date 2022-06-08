const express = require("express");
const app = express();
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);



let data = {};

app.get("/", (req, res) => {
  res.sendFile(__dirname + "" + "/domassignment.html")
})

app.post("/Add", (req, res) => {
  console.log(req.body);
  data = req.body;
  res.redirect("/view");
});

app.get("/view", (req, res) => {
  res.send(
    "<label>text1: " +
    data.text1 +
    "</label>" +
    "<br>" +
    "<label>Radio: " +
    data.radio1 +
    "</label>" +
    "<br>" +
    "<label>Radio: " +
    data.radio2 +
    "</label>" +
    "<label>Radio: " +
    data.radio3 +
    "</label>" +
    "<label>Checkbox: " +
    data.check1 +
    "</label>" +
    "<label>Checkbox: " +
    data.check2 +
    "</label>" +
    "<label>Checkbox: " +
    data.check3 +
    "</label>" +
    "<label>Textarea: " +
    data.textarea1 +
    "</label>" +
    "<br>"
  );
})


app.use((req, res) => {
  res.sendFile(__dirname + "/public" + "/notfound.html")
})

app.listen(3000, () => {
  console.log('Your Server is running on 3000');
})
