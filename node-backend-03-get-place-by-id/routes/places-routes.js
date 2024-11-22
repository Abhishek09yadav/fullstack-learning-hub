const express = require('express');

const router = express.Router();

const DUMMY_PLACES = [
  {
    id: 'p1',
    title: 'Empire State Building',
    description: 'One of the most famous sky scrapers in the world!',
    location: {
      lat: 40.7484474,
      lng: -73.9871516
    },
    address: '20 W 34th St, New York, NY 10001',
    creator: 'u1'
  }
];
router.get('/user/:uid',(req,res,next)=>{
  console.log("get req in users");
  const userId = req.params.uid;
  const place = DUMMY_PLACES.find(e =>{ return  userId == e.creator}); 
  if(!place){
    return res.status(404).json({message:'place not found'})
    error.code = 404;
    throw error;
  }
   res.json({
    place
   })
  
})
router.get('/:pid',(req,res,next)=>{
  const placeId = req.params.pid;
  const place= DUMMY_PLACES.find(p => {return p.id == placeId;} );
  if(!place){
  const error = new Error('cound not find place :\ ');
  error.code= 404;
  return next(error)
  }
  res.json({
    place
  })
})

// router.get('/:pid', (req, res, next) => {
//   const placeId = req.params.pid; // { pid: 'p1' }
//   const place = DUMMY_PLACES.find(p => {
//     return p.id === placeId;
//   });
//   res.json({place}); // => { place } => { place: place }
// });

module.exports = router;