import Role from "../models/role.js";

const getAllRoles = async (req, res) => {
  const roles = await Role.findAll();
  return roles;
};

const getRoleById = async (roleId) => {
  const role = await Role.findByPk(roleId);
  return role;
};

const createRole = async (roleData) => {
  try {
    const role = await Role.create(roleData);
    return role;
  } catch (err) {
    return err;
  }
};

const deleteRole = async (roleId) => {
  try {
    const Role = await Role.destroy({ where: { id: roleId } });
    return Role;
  } catch (err) {
    return err;
  }
};

const updateRole = async (roleData, roleId) => {
  try {
    await Role.update(roleData, {
      where: { id: roleId },
    });
    const Role = await Role.findByPk(roleId);
    return Role;
  } catch (err) {
    return err;
  }
};

export default {
  getAllRoles,
  getRoleById,
  createRole,
  deleteRole,
  updateRole,
};
