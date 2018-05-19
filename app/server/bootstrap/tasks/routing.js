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
  }
}

export default RoutingTask;
