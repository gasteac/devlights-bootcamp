import userRepository from "../repositories/users.js";
import mailService from "../services/mail.js";


export const getAllUsers = async (req, res) => {
  const users = await userRepository.getAllUsers();

  // TODO: ENVIAR MAIL
//   mailService.sendMail(user);

  res.status(200).json({ users });
};

export const getUserById = async (req, res) => {
  const user = await userRepository.getUserById(req.params.userId);
  res.status(200).json({ user });
};

export const createUser = async (req, res) => {
  try {
    const user = await userRepository.createUser(req.body);
    res.status(201).json({ user });
  } catch (err) {
    res.status(400).json({ err });
  }
};

export const deleteUser = async (req, res) => {
  try {
    await userRepository.deleteUser(req.params.userId);
    res.status(200).json({ message: "User deleted" });
  } catch {
    res.status(400).json({ err });
  }
};

export const updateUser = async (req, res) => {
  try {
    const user = await userRepository.updateUser(req.body, req.params.userId);
    res.status(200).json({ user });
  } catch (err) {
    res.status(400).json({ err });
  }
};
