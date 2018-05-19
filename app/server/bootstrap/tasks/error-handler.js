import errorhandler from "errorhandler";

class ErrorHandlerTask {
  constructor () {
    this.name = "ERRORHANDLER";
  }

  /**
   * @name run
   * @public @instance
   * @async
   */
  async run (app) {
    if (process.env.NODE_ENV !== "production") {
      app.use(errorhandler());
    } else {
      // @TODO: Provide a decent implementation.
      app.use((err, req, res, next) => {
        console.error("*******");
        console.error(err.stack);
        console.error("*******");
        res.status(500).send("Something broke!");
      });
    }
  }
}

export default ErrorHandlerTask;
