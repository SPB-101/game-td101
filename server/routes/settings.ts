import { Router as createRouter } from "express";
import type { Router } from "express";

import { themeController } from "../controllers/theme";

export const settingsRouter = (apiRouter: Router) => {
  const router: Router = createRouter();

  router.get("/theme", themeController.getUserTheme);
  router.post("/theme", themeController.setUserTheme);

  apiRouter.use("/settings", router);
};
