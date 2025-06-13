import { mockUsers } from "../controllers/mockUsers.js";

export const finduserIndex = (req, res, next) => {
  var { userId } = req.query;
  userId = parseInt(userId);
  const userIndex = mockUsers.findIndex((value) => value.id == userId);
  console.log("userIndex", userIndex);
  if (userIndex === -1) {
    return res.status(200).json({ message: "no user found" });
  } else {
    console.log("api called");
    req.userIndex = userIndex;
  }
  next();
};
