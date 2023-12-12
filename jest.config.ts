import type { Config } from "jest";

const config: Config = {
  projects: [
    {
      displayName: "pokedex",
      testEnvironment: "jsdom",
      preset: "ts-jest",
      testMatch: ["<rootDir>/apps/pokedex/app/__tests__/*.spec.ts?(x)"],
    },
  ],
};

export default config;
// module.exports = {
//   projects: [
//     {
//       displayName: "pokedex",
//       testEnvironment: "jsdom",
//       preset: "ts-jest",
//       testMatch: ["<rootDir>/apps/pokedex/app/**/*.spec.ts?(x)"],
//     },
//   ],
// };
