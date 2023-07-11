import path from "path";
import HTMLWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";


const config: webpack.Configuration = {
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        }),
        new webpack.ProgressPlugin()],
    mode: "development",
    module: {
        rules: [{
            test: /\.tsx?$/,
            exclude: /node_modules/,
            use: 'ts-loader',
        }]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
    },
};

export default config;