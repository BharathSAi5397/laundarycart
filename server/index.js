const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const {UserData,OrdersData}= require("./models/laundarymodel");
const mongoose = require("mongoose");
const dummyRoutes = require("./routes/dummyroutes");
const { reqAuth } = require("./middlewares/authmiddleware");
const  orderRoutes  = require("./routes/orderRoutes");
const cors = require("cors") 
app.use(cors()) ;


//middleware
app.use(bodyParser());

app.use("/api/v1/order",reqAuth);//authentication middleware

//mongoose connection
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(
    "mongodb+srv://10xlaundary:laundary1234@cluster0.on6dtr0.mongodb.net/laundarycollection?retryWrites=true&w=majority"
  );
  console.log("Database Connected");
}

//dummy routes
//app.use(dummyRoutes);
//final get orders route
app.use("/api/v1",orderRoutes);

app.get("/", (req, res) => {
  res.send("ok");
})

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`listening on ${port}`)
})