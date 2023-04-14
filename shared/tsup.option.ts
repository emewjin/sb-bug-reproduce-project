import type { Options } from 'tsup';

const options: Options = {
  clean: true,
  format: ['esm'],
  minify: true,
  minifyWhitespace: true,
  target: 'node16',
  outExtension(ctx) {
    return { js: `.${ctx.format}.js` };
  },
};

export default options;
