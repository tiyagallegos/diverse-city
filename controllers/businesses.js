const Business = require('../models/business');


module.exports = {
  create,
  index,
  update: updatebusiness,
  delete: deletebusiness,
};


async function index(req, res) {
try {
  console.log("index controller started")
  const business = await Business.find({businessId: req.query.businessId});
  res.status(201).json(businesses)
} catch (error) {
   res.status(400).json({message: 'something went wrong'})
}}


async function create(req, res) {
  try {
    req.body.createdBy = req.params.id
   await Business.create(req.body)
 res.status(201).json({message: "business created successfully"})
  } catch (error) {
    console.log(error) 
    res.status(400).json({message: 'something went wrong'});
  }

 };


async function updatebusiness(req, res) {
  try {
    console.log('update controller started');
 await business.updateOne(  {_id : req.body._id } , { business : req.body.business } )
 res.status(200).json({message: 'business updated successfully'})
  } catch (error) {
    console.log(error)
    res.status(400).json({message: 'something went wrong'});
  }
}
  

async function deletebusiness(req, res) {
   try {
     console.log('delete controller started')
     await business.deleteOne({_id : req.body._id});
   res.status(200).json({message: 'business deleted successfully'})
  } catch (error) {
    console.log(error)
    res.status(400).json({message: 'something went wrong'})
  }
}