import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'

module.exports = {
    input: 'src/main.js',

    plugins: [
        commonjs(),
        resolve(),
    ],

    output: {
        file: 'nova-phpcs.novaextension/Scripts/main.dist.js',
        format: 'cjs'
    },
}
