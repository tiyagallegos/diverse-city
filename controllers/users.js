const User = require('../models/user');
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;


module.exports = {
  signup,
  login,
  getUserById,
  delete: deleteUser,
  update: updateUser
};


 /*------------Helper function -----------*/
 function createJWT(user) {
  return jwt.sign({ user }, SECRET, {expiresIn: '24h'});
 }
/*-------------------------------------------*/

async function signup(req, res) {
  const user = new User(req.body);
  try {
    await user.save();
    const token = createJWT(user);    
    res.json({ token });
  } catch (err) {
    console.log(err);
    // Probably a duplicate email
    res.status(400).json(err);
  }
}

async function login(req, res) {
  
  try {
    const user = await User.findOne({email: req.body.email})
    if(!user) return res.status(401).json({err: 'bad credentials'})
    user.comparePassword(req.body.pw, (err, isMatch) => {
      if(isMatch) {
        const token = createJWT(user);
        res.json({ token });
      } else {
        return res.status(401).json({err:'bad credentials'})
      }
    })
  } catch (err) {
       res.status(401).json(err);
  }
}

async function getUserById(req, res) {
  try {
    const user = await User.findById(req.query.userId);
    res.status(201).json(user)
  
  
  } catch (error) {
  
     res.status(400).json({message: 'cannot find user'})
  }
  
  }


async function updateUser(req, res) {
  try {
  await User.updateOne(  {_id : req.body._id } , req.body )
  res.status(200).json({message: 'User updated successfully'})
  } catch (error) {
    console.log(error)
    res.status(400).json({message: 'something went wrong'});
  }
}

async function deleteUser(req, res) {
  try {
    await User.deleteOne({_id : req.body._id});
  res.status(200).json({message: 'User deleted successfully'})
  } catch (error) {
    console.log(error)
    res.status(400).json({message: 'something went wrong'})
  }
}