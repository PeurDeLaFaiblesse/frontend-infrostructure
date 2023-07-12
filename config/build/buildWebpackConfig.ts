import {BuildOptions} from "./types/config";
import {Configuration} from "webpack";
import {buildLoaders, buildPlugins, buildResolvers} from "./index";
import buildDevServer from "./buildDevServer";

export default (options: BuildOptions): Configuration => {
    const {mode, paths, isDev} = options;

    return {
        mode,
        entry: paths.entry,
        output: {
            filename: "[name].[contenthash].js",
            path: paths.dist,
            clean: true,
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(),
        },
        resolve: buildResolvers(),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined,
    }
}