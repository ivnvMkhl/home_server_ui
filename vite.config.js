"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var vite_1 = require("vite");
var plugin_react_1 = require("@vitejs/plugin-react");
// https://vitejs.dev/config/
exports["default"] = (0, vite_1.defineConfig)(function (_a) {
    var command = _a.command, mode = _a.mode;
    process.env = __assign(__assign({}, process.env), (0, vite_1.loadEnv)(mode, process.cwd()));
    if (command === 'serve')
        return {
            plugins: [(0, plugin_react_1["default"])()],
            server: {
                port: Number(process.env.VITE_PORT)
            }
        };
    else {
        return {
            plugins: [(0, plugin_react_1["default"])()]
        };
    }
});
