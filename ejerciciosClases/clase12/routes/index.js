import {Router} from "express"
import userRoutes from "./users.js";
import roleRoutes from "./roles.js";

const apiRoutes = Router();

apiRoutes.use("/users", userRoutes)
apiRoutes.use("/roles", roleRoutes)

export default apiRoutes