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

const nextJest = require("next/jest");

// Providing the path to your Next.js app which will enable loading next.config.js and .env files
const createJestConfig = nextJest({ dir: "./" });

// Any custom config you want to pass to Jest
const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testEnvironment: "jest-environment-jsdom",
};

// createJestConfig is exported in this way to ensure that next/jest can load the Next.js configuration, which is async
module.exports = createJestConfig(customJestConfig);

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
