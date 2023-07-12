import { RuleSetRule } from "webpack";

export default (): RuleSetRule[] => {
    const typescriptLoader = {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'ts-loader',
    };

    return [
        typescriptLoader,
    ];
}