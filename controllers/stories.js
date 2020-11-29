const story = require('../models/story');


module.exports = {
  create,
  index,
  update: updatestory,
  delete: deletestory,
};


async function create(req, res) {
  try {
      req.body.createdBy = req.user._id
   await story.create(req.body)
 res.status(201).json({message: "story created successfully"})
  } catch (error) {
    console.log(error) 
    res.status(400).json({message: 'something went wrong'});
  }

 };


async function updatestory(req, res) {
  try {
    console.log('update controller started')
    req.body.createdBy=req.user._id
 console.log("logging data from update fetch request in controller " + req.body._id +" "+ req.body.story)
 await story.updateOne(  {_id : req.body._id } , { story : req.body.story } )
 res.status(200).json({message: 'story updated successfully'})
  } catch (error) {
    console.log(error)
    res.status(400).json({message: 'something went wrong'});
  }
}
  
async function index(req, res) {
try {
  console.log("index controller started")
  const stories = await story.find({climbId: req.query.climbId}).populate("createdBy");
  res.status(201).json(stories)
} catch (error) {
   res.status(400).json({message: 'something went wrong'})
}}

async function deletestory(req, res) {
   try {
     console.log('delete controller started')
     await story.deleteOne({_id : req.body._id});
   res.status(200).json({message: 'story deleted successfully'})
  } catch (error) {
    console.log(error)
    res.status(400).json({message: 'something went wrong'})
  }
}