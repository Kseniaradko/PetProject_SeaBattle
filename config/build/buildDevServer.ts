import {Configuration as DevServerConfiguration} from "webpack-dev-server";
import {BuildOptions} from "./types/config";

export function buildDevServer(opts: BuildOptions): DevServerConfiguration {
    return {
        port: opts.port,
        open: true,
        historyApiFallback: true
    }
}