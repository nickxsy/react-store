import webpack, { DefinePlugin } from "webpack";
import path from "path";
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import { BuildEnv, BuildPaths } from "./config/build/types/config";

export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, "src", "app", "main.tsx"),
    build: path.resolve(__dirname, "build"),
    html: path.resolve(__dirname, "public", "index.html"),
    src: path.resolve(__dirname, "src"),
    entities: path.resolve(__dirname, "src", "entities"),
    ui: path.resolve(__dirname, "src", "shared", "ui"),
    lib: path.resolve(__dirname, "src", "shared", "lib"),
    locales: path.resolve(__dirname, "src", "shared", "locales"),
    buildLocales: path.resolve(__dirname, "build", "locales"),
  };

  const mode = env.mode || "development";
  const PORT = env.port || 3000;
  const apiUrl = env.apiUrl || "http://localhost:8000";

  const isDev = mode === "development";

  const config: webpack.Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port: PORT,
    apiUrl,
    project: "frontend",
  });

  config!
    .plugins!.push
    // new DefinePlugin({
    //   __IS_DEV__: true,
    //   __API__: JSON.stringify(apiUrl),
    // })
    ();

  return config;
};
