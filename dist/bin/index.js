#! /usr/bin/env node

"use strict";
/**
 * Created by garusis on 31/01/17.
 */

var _yargs = require("yargs");

var _yargs2 = _interopRequireDefault(_yargs);

var _utils = require("../utils");

var _migrate = require("../migrate");

var _migrate2 = _interopRequireDefault(_migrate);

var _seeder = require("../seeder");

var _seeder2 = _interopRequireDefault(_seeder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var argv = _yargs2.default.usage("lb-migration <cmd> [args]").command('migrate [--method] [--ds] [--models]', 'Migrate models in datasources', {
    d: {
        demand: false,
        alias: ["ds", "datasource"],
        default: _utils.defaults.ds,
        describe: "Datasources that will be migrated. If empty or not present, all datasources will be migrates.",
        type: "array"
    },
    mod: {
        demand: false,
        alias: "model",
        default: _utils.defaults.model,
        describe: "Models in the selected datasources that will be migrated. If empty or not present, all models in all selected datasources will be migrates. Selected Models not presents in selected datasources will be not migrated.",
        type: "array"
    },
    imod: {
        demand: false,
        alias: "ignored_model",
        default: _utils.defaults.ignored_model,
        describe: "Models in the selected datasources that will be not migrated.",
        type: "array"
    },
    m: {
        demand: false,
        alias: "method",
        default: _utils.defaults.method,
        choices: ["update", "migrate"],
        describe: "Loopback migration method to use. Loopback uses automigrate and autoupdate methods for migrations.",
        type: "string"
    },
    a: {
        demand: false,
        alias: ["app", "loopback-app"],
        default: _utils.defaults.app,
        describe: "Path to your loopback application main file.",
        type: "string"
    }
}, function (argv) {
    return (0, _migrate2.default)(argv).then(function () {
        process.exit(0);
    }).catch(function (err) {
        console.error(err);
        process.exit(-1);
    });
}).command('seed [--src]', 'Starts to seed your loopback application models', {
    s: {
        demand: false,
        alias: ["src", "sources"],
        default: _utils.defaults.src,
        describe: "File globs to your seeders files.",
        type: "string"
    },
    a: {
        demand: false,
        alias: ["app", "loopback-app"],
        default: _utils.defaults.app,
        describe: "Path to your loopback application main file.",
        type: "string"
    }
}, function (argv) {
    return (0, _seeder2.default)(argv).then(function () {
        process.exit(0);
    }).catch(function (err) {
        console.error(err);
        process.exit(-1);
    });
}).help().argv;
//# sourceMappingURL=index.js.map
