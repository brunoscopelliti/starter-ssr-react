import renderAppHTML from "server/rendering/";

import setupApiRouter from "server/routing/api";

class RoutingTask {
  constructor () {
    this.name = "ROUTING";
  }

  /**
   * @name run
   * @public @instance
   * @async
   */
  async run (app) {
    app.get("/",
      (req, res, _) => {
        res.status(200).render("index",
          { port: app.get("config").PORT, title: app.get("config").TITLE });
      });

    app.get("/app*",
      async (req, res, next) => {
        try {
          const html = await renderAppHTML(req.url, req, app.get("config"));
          res.status(200).send(html);
        } catch (error) {
          next(error);
        }
      });

    const apiRouter = setupApiRouter();

    app.use(apiRouter);
  }
}

export default RoutingTask;
