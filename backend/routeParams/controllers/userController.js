export const getUserById =(req,res) =>{
  const {userId} = req.params;
  res.status(200).json({message: `User ID is ${userId}`});
}
export const getbookById = (req,res) =>{
  const { bookId, chapterId } = req.params;
  res.status(200).json({message:`book id is ${bookId} and chapterId is ${chapterId}`})
}
export const searchQuery =(req,res)=>{
  const {query} = req.params;
  res.json({query: query || 'no search tern provided'})
}
