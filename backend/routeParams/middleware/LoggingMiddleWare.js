export const LoggingMiddleWare = (req, res,next) =>{
  console.log(`Request Method: ${req.method}, Request Url ${req.url}`)
  next();
}