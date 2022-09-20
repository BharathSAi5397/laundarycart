const {UserData,OrdersData}= require("../models/laundarymodel");

module.exports.reqAuth=async (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization) {
      return res.status(401).json({
        "status": "no authorization",
        "message": "authorisation token missing"
      })
    }
    const token = req.headers.authorization.split("test ")[1];
    jwt.verify(token, 'mykey', async function (err, decoded) {
      if (err) {
        res.status(500).json({
          status: "failed",
          message: "Not Authenticated"
        })
      }
      const user = await UserData.findOne({ _id: decoded.id });
      req.body.user = user._id;
      next();
    });
  }