import path from "path";
import express from "express";
import serveFavicon from "serve-favicon";

class AssetsTask {
  constructor () {
    this.name = "ASSETS";
  }

  /**
   * @name run
   * @public @instance
   * @async
   */
  async run (app) {
    const dist = path.resolve(process.cwd(), "app", "dist");
    app.use(serveFavicon(path.resolve(dist, "assets", "images", "favicon.ico")));
    app.use(express.static(path.resolve(dist, "assets", "images")));
    app.use(express.static(path.resolve(dist, "client")));
  }
}

export default AssetsTask;
