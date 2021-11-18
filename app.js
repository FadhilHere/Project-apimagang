const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./app/models");
const bodyParser = require("body-parser");

var corsOptions = {
  origin: "*",
};

app.use(cors(corsOptions));
// app.use(bodyParser.json());
app.options("*", cors());
app.use(express.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(express.static(__dirname));
app.use(express.static("/app/uploads/gambar"));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((err) => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });
app.get("/", (req, res) => {
  res.json({
    message: "welkam",
  });
});

require("./app/routes/matkul.routes")(app);
require("./app/routes/kelas.routes")(app);
require("./app/routes/ruangan.routes")(app);
require("./app/routes/prodi.routes")(app);
require("./app/routes/mahasiswa.routes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}.`);
});
