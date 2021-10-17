module.exports = {
    transform: {
        "^.+\\.(js|jsx)$": "babel-jest",
        "^.+\\.css$": "jest-transform-css",
    },
    moduleNameMapper: {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
            "<rootDir>/tests/transformers/assets.js",
    },
};
