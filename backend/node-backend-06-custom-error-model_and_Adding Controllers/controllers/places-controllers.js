const HttpError = require("../models/http-error");
const {v4: uuid4} = require('uuid')
var DUMMY_PLACES = [
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
const getPlaceById = (req,res,next)=>{
    const placeId= req.params.pid;
    const place = DUMMY_PLACES.find(p => {return p.id === placeId});
 if(!place){
    throw new HttpError("place not found ",404);

 }
 res.json({place});
}
const getPlaceByUserId= (req, res, next) => {
    const userId = req.params.uid;
  
    const place = DUMMY_PLACES.filter(p => {
      return p.creator === userId;
    });
  
    if (!place) {
      return next(
        new HttpError('Could not find a place for the provided user id.', 404)
      );
    }
  
    res.json({ place });
  }
  const createPlace = (req,res,next) =>
  {
const {
  title,
  description,
  coordinates,
  address,
  creator
}= req.body;

const createdPlace ={
  title: uuid4(), description,  location: coordinates, address, creator
};
DUMMY_PLACES.push(createdPlace)
res.status(201).json({place: createdPlace});
  }

  const updateplace = (req,res,next) =>{
   const placeId = req.params.pid;
   const {
    title,
    description,
    
  }= req.body;
  const updatedplace = {...DUMMY_PLACES.find(p =>{return p.id === placeId})} // CREATED  a copy of data using spread operator
  const placeIndex = DUMMY_PLACES.findIndex(p => p.id === placeId );
  updatedplace.title= title;
  updatedplace.description = description;
  DUMMY_PLACES[placeIndex] = updatedplace;
res.status(201).json({place: updatedplace});
  }
  const deleteplace = (req,res,next) =>{
    const placeId =req.params.pid
  DUMMY_PLACES = DUMMY_PLACES.filter(p => p.id !== placeId )
  res.status(200).json({message:"Deleted place"})
  }

  exports.getPlaceById = getPlaceById;
  exports.getPlaceByUserId = getPlaceByUserId;
  exports.createPlace = createPlace;
  exports.updateplace = updateplace;
  exports.deleteplace = deleteplace;
