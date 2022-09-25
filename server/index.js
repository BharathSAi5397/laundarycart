const express = require("express");

const app = express();
const bodyParser = require("body-parser");
const {UserData,OrdersData}= require("./models/laundarymodel");
const mongoose = require("mongoose");
const dummyRoutes = require("./routes/dummyroutes");
const { reqAuth } = require("./middlewares/authmiddleware");
const  orderRoutes  = require("./routes/orderRoutes");
const cors = require('cors')
const secret = "RESTAPI";
var jwt = require('jsonwebtoken'); 

const loginRoutes = require('./routes/login');
const registrationRoutes = require('./routes/registration');


//middleware
app.use(bodyParser());
app.use(cors())
app.use("/api/v1/order",reqAuth);//authentication middleware

app.use("/api/v1/posts",reqAuth);//authentication middleware

//mongoose connection
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(
    "mongodb://10xlaundary:laundary1234@ac-h8uk8ka-shard-00-00.on6dtr0.mongodb.net:27017,ac-h8uk8ka-shard-00-01.on6dtr0.mongodb.net:27017,ac-h8uk8ka-shard-00-02.on6dtr0.mongodb.net:27017/laundarycollection?ssl=true&replicaSet=atlas-9v9nfg-shard-0&authSource=admin&retryWrites=true&w=majority"
  );
  console.log("Database Connected");
}

app.use("/api/v1",orderRoutes);
app.use("/api/v1/register",registrationRoutes)
app.use("/api/v1/login", loginRoutes)



app.get("/", (req, res) => {
  res.send("ok");
})

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`listening on ${port}`)
})