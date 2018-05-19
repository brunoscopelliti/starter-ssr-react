class AppSettingsTask {
  constructor () {
    this.name = "APPSETTINGS";
  }

  run (app) {
    app.set("config",
      process.env.NODE_ENV === "production"
        ? process.env
        : Object.assign({}, require("server/env/index.json"))
    );
  }
}

module.exports = AppSettingsTask;
