import {ResolveOptions} from "webpack";

export default (): ResolveOptions => {
    return {
        extensions: [ '.tsx', '.ts', '.js' ],
    };
}