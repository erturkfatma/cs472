const express = require("express");
const path = require("path");
const app = express();
const router = express.Router();
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);

app.set("view engine", "ejs");

let formPageCounter = 0;
let viewPageCounter = 0;
let notFoundPageCounter = 0;

router.get("/", (req, res) => {
  formPageCounter++;
  res.sendFile(path.join(__dirname + "/public" + "/form.html"));
});

let data;
router.post("/AddData", (req, res) => {
  data = req.body;
  res.redirect("/view");
});

router.get("/view", (req, res) => {
  viewPageCounter++;
  res.send(
    "<label>Input1: " +
      data.input1 +
      "</label>" +
      "<br>" +
      "<label>Input2: " +
      data.input2 +
      "</label>" +
      "<br>" +
      "<label>Input3: " +
      data.input3 +
      "</label>" +
      "<br>" +
      "<label>Selected Value: " +
      data.selectedValue +
      "</label>" +
      "<br>" +
      "<label>Input4: " +
      data.input4 +
      "</label>"
  );
});

router.get("/statistics", (req, res) => {
  res.render(path.join(__dirname + "/public" + "/statistics.ejs"), {
    counter: {
      formPageCounter: formPageCounter,
      viewPageCounter: viewPageCounter,
      notFoundPageCounter: notFoundPageCounter,
    },
  });
});

router.use((req, res) => {
  notFoundPageCounter++;
  res.status(404).sendFile(path.join(__dirname + "/public" + "/notfound.html"));
});

router.use((err, req, res) => {
  res.sendFile(path.join(__dirname + "/public" + "/error.html"));
  res.send(err.message);
});

app.use((req, res, next) => {
  res.on("finish", () => {
    console.log(`${req.method} ${req.originalUrl} ${res.statusCode}`);
  });
  next();
});

app.use(router);

const port = 3000;
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
