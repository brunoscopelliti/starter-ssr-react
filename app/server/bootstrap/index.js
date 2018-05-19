import AppSettingsTask from "./tasks/app-settings";
import AssetsTask from "./tasks/assets";
import RoutingTask from "./tasks/routing";
import ViewEngineTask from "./tasks/view-engine";
import ErrorHandlerTask from "./tasks/error-handler";

const tasks = [
  new AppSettingsTask(),
  new AssetsTask(),
  new ViewEngineTask(),
  new RoutingTask(),
  new ErrorHandlerTask(),
];

const setup =
  async (app) => {
    try {
      await Promise.all(
        tasks.map((task) => task.run(app))
      );
    } catch (error) {
      console.error("Server bootstrap failed:", error.message);
      console.log(error);
    }
  };

export default setup;
