"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactCustomTextField = void 0;
const react_1 = __importStar(require("react"));
const core_1 = require("@material-ui/core");
const ReactCustomTextField = () => {
    const [text, setText] = react_1.useState('');
    const [status, setStatus] = react_1.useState(false);
    const handleClick = () => {
        setStatus(true);
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(core_1.Box, { width: "300px", display: "flex", alignItems: "center", justifyContent: "space-around" },
            react_1.default.createElement(core_1.TextField, { style: { background: "white" }, variant: "outlined", type: "text", defaultValue: "\u30C6\u30B9\u30C8", onChange: (e) => setText(e.target.value) }),
            react_1.default.createElement(core_1.Button, { style: { height: 50 }, variant: "contained", color: "primary", onClick: handleClick }, "\u9001\u4FE1")),
        react_1.default.createElement(core_1.Box, null,
            react_1.default.createElement(core_1.Typography, null, status && text))));
};
exports.ReactCustomTextField = ReactCustomTextField;
