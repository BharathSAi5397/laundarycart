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
app.use(bodyParser.json());
app.use(cors()) ;
//app.use("/api/v1/order",reqAuth);//authentication middleware

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

// app.use("/posts", async (req, res, next) => {
//   console.log(req.headers.authorization);
//   if(req.headers.authorization){
//       const token = req.headers.authorization.split("test ")[1];
//       console.log(token);
      
//       jwt.verify(token, secret, async function(err, decoded) {
//           if (err) {
//               res.status(500).json({
//                   status: "failed",
//                   message: "Not Authenticated"
//               })
//           }
//           const user = await UserData.findOne({_id: decoded.data});
//           req.user = value._id;
//           next();
//         });
//   }else {
//      return  res.status(500).json({
//           status: "failed",
//           message: "Invalid token"
//       })
//   }
// });

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