import minify from "rollup-plugin-minify";
export default {
  input: "./src/timer.js",
  plugins: [
    minify({
      iife: './dist/timer.min.js',
      esm: './dist/timer.esm.min.js',
    })
  ]
};