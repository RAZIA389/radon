const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (abcd, xyz) {
  let data = abcd.body;
  let savedData = await userModel.create(data);
  console.log(abcd.newAtribute);
  xyz.send({ msg: savedData });
};

const loginUser = async function (req, res) {
  let userName = req.body.emailId;
  let password = req.body.password;

  let user = await userModel.findOne({ emailId: userName, password: password });
  if (!user)
    return res.send({
      status: false,
      msg: "username or the password is not corerct",
    });


  // Once the login is successful, create the jwt token with sign function
  // Sign function has 2 inputs:
  // Input 1 is the payload or the object containing data to be set in token
  // The decision about what data to put in token depends on the business requirement
  // Input 2 is the secret
  // The same secret will be used to decode tokens
  let token = jwt.sign(
    {
      userId: user._id.toString(),
      batch: "thorium",
      organisation: "FunctionUp",
    },
    "functionup-radon"
  );
  res.setHeader("x-auth-token", token);
  res.send({ status: true, token: token });
};
// 2
const getUserData = async function (req, res) {
  let token = req.headers["x-Auth-token"];
  if (!token) token = req.headers["x-auth-token"];

  //If no token is present in the request header return error
  if (!token) return res.send({ status: false, msg: "token must be present" });

  console.log(token);
let decodedToken = jwt.verify(token, "functionup-radon");
  if (!decodedToken)
    return res.send({ status: false, msg: "token is invalid" });

  let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);
  if (!userDetails)
    return res.send({ status: false, msg: "No such user exists" });

  res.send({ status: true, data: userDetails });
};

const fetchUser = async function (req, res) {
  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  //Return an error if no user with the given id exists in the db
  if (!user) {
    return res.send("No such user exists");
  }

  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData);
  res.send({ status: updatedUser, data: updatedUser });
};

 const updateData = async (req ,res) =>{
  let userData = await userModel.findById(req.params.userId)
  if(!userData) return res.send({msg: "user doesn't exist"})
  let updateUser = await userModel.findOneAndUpdate({_id: req.params.userId}, req.body,{new: true});
  res.send({msg: updateUser})
 }


const deleteUserData = async (req ,res) => {
 let userData = await userModel.findById(req.params.userId)
 if(!userData) return res.send({msg: "User doesn't exist"})
 let updateUser = await userModel.findOneAndUpdate({_id: req.params.userId},{isDeleted: true},{new: true});
 res.send({msg: updateUser})

}

// const fetchUser1 = async (req, res) => {

//    let userData = await user.findById(req.params.userId) 
//    if(!userData) return res.send({msg: "user doesn't exist in database"})
//  }










module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.fetchUser = fetchUser;
module.exports.loginUser = loginUser;
module.exports.updateData = updateData;
module.exports.deleteUserData = deleteUserData  