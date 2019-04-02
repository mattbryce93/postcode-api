module.exports = {
    "roots": [
      "./src"
    ],
    "transform": {
      "^.+\\.ts?$": "ts-jest"
    },
    "moduleFileExtensions": [
      "ts",
      "tsx",
      "js",
      "jsx",
      "json",
      "node"
    ],
    "collectCoverage": true,
    "coverageDirectory": "./coverage",
    "coverageThreshold": {
      "global": {
        "branches": 80,
        "functions": 80,
        "lines": 80,
        "statements": -10
      }
    }
}