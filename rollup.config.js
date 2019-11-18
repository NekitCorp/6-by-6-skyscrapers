import commonjs from 'rollup-plugin-commonjs';

export default {
    input: 'index.js',
    output: {
        file: 'build.js',
        format: 'cjs',
    },
    plugins: [commonjs()],
};
