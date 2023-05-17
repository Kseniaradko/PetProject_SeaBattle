import webpack from "webpack";
import {BuildOptions} from "./types/config";
import {buildPlugins} from "./buildPlugins";
import {buildLoaders} from "./buildLoaders";
import {buildResolvers} from "./buildResolvers";
import {buildDevServer} from "./buildDevServer";


export function buildWebpackConfig(opts: BuildOptions): webpack.Configuration {
    const { mode, paths } = opts

    return {
        mode: mode,
        entry: paths.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true
        },
        plugins: buildPlugins(opts),
        module: {
            rules: buildLoaders(opts)
        },
        resolve: buildResolvers(),
        devtool: 'inline-source-map',
        devServer: buildDevServer(opts)
    }
}
