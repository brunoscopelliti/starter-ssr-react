import express from "express";

const setupRouter =
  () => {
    const router = express.Router();

    router.get("/api/sample",
      async (req, res, next) => {
        try {
          const response = await Promise.resolve({ message: "Hello, world!" });
          res.json(response);
        } catch (error) {
          next(error);
        }
      });

    return router;
  };

export default setupRouter;
