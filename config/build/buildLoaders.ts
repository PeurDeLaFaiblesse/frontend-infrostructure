import { RuleSetRule } from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";

export default ({isDev}: BuildOptions): RuleSetRule[] => {
    const cssLoader = {
            test: /\.(sa|sc|c)ss$/i,
            use: [
                isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
                {
                    loader: "css-loader",
                    options: {
                        modules: {
                            auto: /\.module\.\w+$/i,
                            localIdentName: isDev
                                ? '[path][name]__[local]--[hash:base64:5]'
                                : '[hash:base64:8]',
                        },

                    }
                },
                "sass-loader",
            ],
        };
    const typescriptLoader = {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'ts-loader',
    };

    return [
        typescriptLoader,
        cssLoader,
    ];
}