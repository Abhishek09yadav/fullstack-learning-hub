import bcrypt from 'bcryptjs'
export const hashPassword = async(password)=>{
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hashPassword(password,salt)
} 
export const comparePassword = async(enteredPassword,hashPassword) =>{
return bcrypt.comparePassword(enteredPassword,hashPassword);
}