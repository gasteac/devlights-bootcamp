import Task from "../models/task.js";
import User from "../models/user.js";
import roleRepository from "../repositories/roles.js";

const getAllUsers = async (req, res) => {
  const users = await User.findAll();
  return users;
  //res.status(200).json({ users });
};
//  const user = await User.findByPk(userId, { include: Role });
const getUserById = async (userId) => {
  const user = await User.findByPk(userId);
  //res.status(200).json({ user });
  return user;
};

const createUser = async (userData) => {
  try {
    const user = await User.create(userData);
    const role = await roleRepository.getRoleById(userData.roleId);
    await user.addRole(role);
    return user;
  } catch (err) {
    // res.status(400).json({ err });
    return err;
  }
};

const deleteUser = async (userId) => {
  try {
    const user = await User.destroy({ where: { id: userId } });
    // res.status(200).json({ message: "User deleted" });
    return user;
  } catch (err) {
    // res.status(400).json({ err });
    return err;
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
    return err;
  }
};

const createUserTask = async (taskData, userId) => {
  const tasks = await Task.create({ ...taskData, UserId: userId });
  return tasks;
};

const getAllTasksByUserId = async (userId) => {
  const user = await User.findByPk(userId, {
    include: {
      model: Task,
      as: "task",
    },
  });
  return user;
};

const login = async (userData) => {
  const user = await User.findOne({
    where: {
      email: userData.email,
      password: userData.password,
    },
  });

  if (user) {
    return true;
  } else {
    return false;
  }
};

export default {
  getAllUsers,
  getUserById,
  createUser,
  deleteUser,
  updateUser,
  createUserTask,
  getAllTasksByUserId,
  login,
};
