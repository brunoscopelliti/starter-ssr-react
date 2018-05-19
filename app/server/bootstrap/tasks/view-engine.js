import "hbs";

class ViewEngineTask {
  constructor () {
    this.name = "VIEWENGINE";
  }

  /**
   * @name run
   * @public @instance
   * @async
   */
  async run (app) {
    app.set("view engine", "hbs");
    app.set("views", "./app/views");
  }
}

export default ViewEngineTask;
