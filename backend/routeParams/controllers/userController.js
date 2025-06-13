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
  const newUser = { id: mockUsers[mockUsers.length - 1].id + 1, ...user };
  mockUsers.push(newUser);
  res.status(200).json({ message: "new user created", newUser });
};

export const UpdateUser = (req, res) => {
  var { userIndex } = req;
  const { data } = req.body;
 
  mockUsers[userIndex] = {
    id: userId,
    ...data,
  };
  res.status(201).json({ mockUsers });
};

export const patchUser = (req, res) => {
  const { body, userIndex } = req;

  mockUsers[userIndex] = {
    ...mockUsers[userIndex],
    ...body,
  };
  res.status(200).json({ mockUsers });
};
export const deleteUser = (req, res) => {
  const {
    query: { userId },
  } = req;
  const parseId = parseInt(userId);
  const findIndex = mockUsers.findIndex((value) => value.id === parseId);
  if (findIndex === -1) {
    return res.status(404).json({ message: "No user found" });
  }
  mockUsers.splice(findIndex, 1);
  res.status(200).json({ mockUsers });
};
