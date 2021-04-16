import babel from 'rollup-plugin-babel';

export default {
  input: 'src/index.js',
  output: [
    {
      exports: 'default',
      file: 'lib/index.cjs.js',
      format: 'cjs',
    },
    {
      file: 'lib/index.esm.js',
      format: 'esm',
    },
  ],
  plugins: [babel()],
};
