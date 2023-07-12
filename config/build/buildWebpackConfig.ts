import {BuildOptions} from "./types/config";
import {Configuration} from "webpack";
import {buildLoaders, buildPlugins, buildResolvers} from "./index";

export default (options: BuildOptions): Configuration => {
    const {mode, paths} = options;

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
    }
}