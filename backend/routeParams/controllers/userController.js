export const getUserById =(req,res) =>{
  const {userId} = req.params;
  res.status(200).json({message: `User ID is ${userId}`});
}
export const getbookById = (req,res) =>{
  const { bookId, chapterId } = req.params;
  res.status(200).json({message:`book id is ${bookId} and chapterId is ${chapterId}`})
}
export const searchQuery = (req, res) => {
  const { q, category, page } = req.query;

  res.json({
    query: q || "no search term",
    category: category || "all",
    page: page || 1,
  });
};
export const getHouseById =(req,res)=>{
  const {houseNo, Building, landmark } = req.query;
  console.log(houseNo,Building,landmark)
  res.status(200).json({
    houseNo: houseNo || 0,
    Building : Building || 'not provided',
    landmark : landmark || 'not provided',
  });
}