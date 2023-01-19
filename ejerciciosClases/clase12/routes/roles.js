import { Router } from "express";
import {
  getAllRoles,
  getRoleById,
  createRole,
  deleteRole,
  updateRole
} from "../controllers/roles.js";

const roleRoutes = Router();

roleRoutes.get("/", getAllRoles);
roleRoutes.get("/:rolesId", getRoleById);
roleRoutes.post("/", createRole);
roleRoutes.delete("/:rolesId", deleteRole);
roleRoutes.put("/:rolesId", updateRole);

export default roleRoutes;
