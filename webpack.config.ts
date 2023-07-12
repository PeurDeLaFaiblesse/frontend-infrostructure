import path from "path";
import buildWebpackConfig from "./config/build/buildWebpackConfig";
import {BuildEnvironment, BuildPaths} from "./config/build/types/config";

export default (env: BuildEnvironment) => {
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        dist: path.resolve(__dirname, 'dist'),
        html: path.resolve(__dirname, 'public', 'index.html'),
    };
    const mode = env.mode ?? 'development';
    const port = env.port ?? 3000;

    const config = buildWebpackConfig({
        mode,
        paths,
        isDev: mode === 'development',
        port,
    });

    return config;
};