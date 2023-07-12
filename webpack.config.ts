import path from "path";
import buildWebpackConfig from "./config/build/buildWebpackConfig";
import {BuildMode, BuildPaths} from "./config/build/types/config";

const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    dist: path.resolve(__dirname, 'dist'),
    html: path.resolve(__dirname, 'public', 'index.html'),
};

const mode: BuildMode = 'development';

const config = buildWebpackConfig({
    mode,
    paths,
    isDev: mode === 'development',
});

export default config;