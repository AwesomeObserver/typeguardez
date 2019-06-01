import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';

const config = {
  input: './src/index.ts',
  output: [
    { file: './dist/index.js', format: 'cjs' },
    { file: './dist/index.es.js', format: 'es' },
  ],
  plugins: [
    typescript({ tsconfig: 'tsconfig.json' }),
    terser({
      toplevel: true,
      compress: {
        passes: 3,
        pure_getters: true,
        unsafe: true,
      },
    }),
  ],
  watch: {
    exclude: 'node_modules/**',
  },
};

export default config;
