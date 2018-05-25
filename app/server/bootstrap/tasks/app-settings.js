const normalize = require("@jscore/envar");

class AppSettingsTask {
  constructor () {
    this.name = "APPSETTINGS";
  }

  run (app) {
    app.set("config",
      process.env.NODE_ENV === "production"
        ? normalize(process.env)
        : Object.assign({}, require("server/env/index.json"))
    );
  }
}

module.exports = AppSettingsTask;
