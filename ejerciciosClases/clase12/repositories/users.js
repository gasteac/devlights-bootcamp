import User from "../models/user.js";

const getAllUsers = async (req, res) => {
  const users = await User.findAll();
  return users;
  //res.status(200).json({ users });
};

const getUserById = async (userId) => {
  const user = await User.findByPk(userId);
  //res.status(200).json({ user });
  return user;
};

const createUser = async (userData) => {
  try {
    const user = await User.create(userData);
    //res.status(201).json({ user });
    return user
  } catch (err) {
    // res.status(400).json({ err });
    return err
  }
};

const deleteUser = async (userId) => {
  try {
    const user = await User.destroy({ where: { id: userId } });
    // res.status(200).json({ message: "User deleted" });
    return user
  } catch (err){
    // res.status(400).json({ err });
    return err
  }
};

const updateUser = async (userData, userId) => {
  try {
    await User.update(userData, {
      where: { id: userId },
    });
    // res.status(200).json({ user });
    const user = await User.findByPk(userId);
    return user;
  } catch (err) {
    // res.status(400).json({ err });
    return err
  }
};

export default {
    getAllUsers,
    getUserById,
    createUser,
    deleteUser,
    updateUser
}