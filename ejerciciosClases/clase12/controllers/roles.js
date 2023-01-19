import roleRepository from "../repositories/roles.js";

export const getAllRoles = async (req, res) => {
  const roles = await roleRepository.getAllRoles();

  res.status(200).json({ roles });
};

export const getRoleById = async (req, res) => {
  const role = await roleRepository.getRoleById(req.params.roleId);
  res.status(200).json({ role });
};

export const createRole = async (req, res) => {
  try {
    const role = await roleRepository.createRole(req.body);
    res.status(201).json({ role });
  } catch (err) {
    res.status(400).json({ err });
  }
};

export const deleteRole = async(req, res) => {
  try {
    await roleRepository.deleteRole(req.params.roleId);
    res.status(200).json({ message: "Role deleted" });
  } catch {
    res.status(400).json({ err });
  }
};

export const updateRole = async (req, res) => {
  try {
    const role = await roleRepository.updateRole(req.body, req.params.roleId);
    res.status(200).json({ role });
  } catch (err) {
    res.status(400).json({ err });
  }
};


