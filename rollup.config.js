import typescript from "rollup-plugin-typescript2";
import sourceMaps from "rollup-plugin-sourcemaps";
import pkg from "./package.json";

const libraryName = "rn-logger";

export default {
  input: "src/index.ts",
  output: [
    {
      file: pkg.main,
      name: libraryName,
      format: "cjs",
      sourcemap: true
    },
    {
      file: pkg.module,
      format: "es",
      sourcemap: true
    }
  ],
  external: [...Object.keys(pkg.dependencies || {}), ...Object.keys(pkg.peerDependencies || {})],
  plugins: [
    // Compile TS files
    typescript({
      useTsconfigDeclarationDir: true
    }),
    // Enable sourcemaps
    sourceMaps()
  ]
};
