import HTMLWebpackPlugin from "html-webpack-plugin";
import path from "path";
import {ProgressPlugin, WebpackPluginInstance } from "webpack";
import {BuildOptions, BuildPaths} from "./types/config";

export default ({paths: {html}}: BuildOptions): WebpackPluginInstance[] => {
    return [
        new HTMLWebpackPlugin({
            template: html
        }),
        new ProgressPlugin()];
}