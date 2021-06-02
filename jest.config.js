module.exports = {
    "roots": [
        "<rootDir>"
    ],
    "testMatch": [
        "**/__tests__/**/*.+(ts|tsx|js)",
        "**/?(*.)+(spec|tests).+(ts|tsx|js)"
    ],
    "transform": {
        "^.+\\.(ts|tsx)$": "ts-jest"
    },
    presets: 'ts-jest',
    testEnvironment: 'node',
}
