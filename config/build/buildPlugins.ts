import HTMLWebpackPlugin from "html-webpack-plugin";
import {ProgressPlugin, WebpackPluginInstance } from "webpack";
import {BuildOptions} from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export default ({paths: {html}}: BuildOptions): WebpackPluginInstance[] => {
    return [
        new HTMLWebpackPlugin({
            template: html
        }),
        new ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
    ];
}