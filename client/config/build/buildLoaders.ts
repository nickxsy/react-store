import webpack from "webpack";
// import { buildBabelLoaders } from "./loaders/buildBabelLoaders";
import { buildCssLoaders } from "./loaders/buildCssLoaders";
import { BuildOptions } from "./types/config";
export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
  const { isDev } = options;

  // const codeBabelLoader = buildBabelLoaders({...options, isTSX: false});
  // const tsxCodeBabelLoader = buildBabelLoaders({...options, isTSX: true});

  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: "file-loader",
      },
    ],
  };

  const svgLoader = {
    test: /\.svg$/,
    use: ["@svgr/webpack"],
  };

  const cssLoader = buildCssLoaders(isDev);

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  return [
    fileLoader,
    svgLoader,
    // codeBabelLoader,
    // tsxCodeBabelLoader,
    typescriptLoader,
    cssLoader,
  ];
}
