import { mockUsers } from "./mockUsers.js";

export const getUserById = (req, res) => {
  const { userId } = req.params;
  res.status(200).json({ message: `User ID is ${userId}` });
};
export const getbookById = (req, res) => {
  const { bookId, chapterId } = req.params;
  res
    .status(200)
    .json({ message: `book id is ${bookId} and chapterId is ${chapterId}` });
};
export const searchQuery = (req, res) => {
  const { q, category, page } = req.query;

  res.json({
    query: q || "no search term",
    category: category || "all",
    page: page || 1,
  });
};

export const searchUser = (req, res) => {
  var { data, filter } = req.query;
  // console.log(typeof(data))
  if (!data || !filter) {
    return res
      .status(500)
      .send({ message: "please provide userId and filter method " });
  }

  const user = mockUsers.filter((value) => value[filter] == data);
  // console.log(user);
  if (user) {
    return res.status(200).json({ message: "here are details", user });
  } else {
    return res.status(200).json({ message: "no user found" });
  }
};

export const addUser = (req, res) => {
  const { user } = req.body;
  const newUser = { id: mockUsers[mockUsers.length - 1].id + 1,
    ...user
  };
  mockUsers.push(newUser)
  res.status(200).json({message:"new user created",
    newUser
  })
};
