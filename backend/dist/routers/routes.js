"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore
/* tslint:disable */
const tsoa_1 = require("tsoa");
const authController_1 = require("./../controllers/authController");
const feedController_1 = require("./../controllers/feedController");
const devicesController_1 = require("./../controllers/devicesController");
const minionsController_1 = require("./../controllers/minionsController");
const operationsController_1 = require("./../controllers/operationsController");
const timingsController_1 = require("./../controllers/timingsController");
const usersController_1 = require("./../controllers/usersController");
const remoteConnectionController_1 = require("./../controllers/remoteConnectionController");
const staticAssetsController_1 = require("./../controllers/staticAssetsController");
const iftttController_1 = require("./../controllers/iftttController");
const versionsController_1 = require("./../controllers/versionsController");
const authentication_1 = require("./../security/authentication");
const models = {
    "ErrorResponse": {
        "properties": {
            "responseCode": { "dataType": "double", "required": true },
            "message": { "dataType": "string" },
        },
    },
    "Login": {
        "properties": {
            "email": { "dataType": "string", "required": true },
            "password": { "dataType": "string", "required": true },
        },
    },
    "LocalNetworkDevice": {
        "properties": {
            "name": { "dataType": "string" },
            "mac": { "dataType": "string", "required": true },
            "vendor": { "dataType": "string" },
            "ip": { "dataType": "string" },
        },
    },
    "MinionDevice": {
        "properties": {
            "pysicalDevice": { "ref": "LocalNetworkDevice", "required": true },
            "brand": { "dataType": "string", "required": true },
            "model": { "dataType": "string", "required": true },
            "token": { "dataType": "string" },
            "deviceId": { "dataType": "string" },
        },
    },
    "Toggle": {
        "properties": {
            "status": { "dataType": "enum", "enums": ["on", "off"], "required": true },
        },
    },
    "Switch": {
        "properties": {
            "status": { "dataType": "enum", "enums": ["on", "off"], "required": true },
        },
    },
    "Roller": {
        "properties": {
            "status": { "dataType": "enum", "enums": ["on", "off"], "required": true },
            "direction": { "dataType": "enum", "enums": ["up", "down"], "required": true },
        },
    },
    "Cleaner": {
        "properties": {
            "status": { "dataType": "enum", "enums": ["on", "off"], "required": true },
            "mode": { "dataType": "enum", "enums": ["dock", "clean"], "required": true },
            "fanSpeed": { "dataType": "enum", "enums": ["low", "med", "high", "auto"], "required": true },
        },
    },
    "AirConditioning": {
        "properties": {
            "status": { "dataType": "enum", "enums": ["on", "off"], "required": true },
            "temperature": { "dataType": "integer", "required": true, "validators": { "minimum": { "value": 16 }, "maximum": { "value": 30 }, "isInt": { "errorMsg": "true" } } },
            "mode": { "dataType": "enum", "enums": ["hot", "cold", "dry", "auto"], "required": true },
            "fanStrength": { "dataType": "enum", "enums": ["low", "med", "high", "auto"], "required": true },
        },
    },
    "Light": {
        "properties": {
            "status": { "dataType": "enum", "enums": ["on", "off"], "required": true },
            "brightness": { "dataType": "integer", "required": true, "validators": { "minimum": { "value": 1 }, "maximum": { "value": 100 }, "isInt": { "errorMsg": "true" } } },
        },
    },
    "TemperatureLight": {
        "properties": {
            "status": { "dataType": "enum", "enums": ["on", "off"], "required": true },
            "brightness": { "dataType": "integer", "required": true, "validators": { "minimum": { "value": 1 }, "maximum": { "value": 100 }, "isInt": { "errorMsg": "true" } } },
            "temperature": { "dataType": "integer", "required": true, "validators": { "minimum": { "value": 1 }, "maximum": { "value": 100 }, "isInt": { "errorMsg": "true" } } },
        },
    },
    "ColorLight": {
        "properties": {
            "status": { "dataType": "enum", "enums": ["on", "off"], "required": true },
            "brightness": { "dataType": "integer", "required": true, "validators": { "minimum": { "value": 1 }, "maximum": { "value": 100 }, "isInt": { "errorMsg": "true" } } },
            "temperature": { "dataType": "integer", "required": true, "validators": { "minimum": { "value": 1 }, "maximum": { "value": 100 }, "isInt": { "errorMsg": "true" } } },
            "red": { "dataType": "integer", "required": true, "validators": { "minimum": { "value": 0 }, "maximum": { "value": 255 }, "isInt": { "errorMsg": "true" } } },
            "green": { "dataType": "integer", "required": true, "validators": { "minimum": { "value": 0 }, "maximum": { "value": 255 }, "isInt": { "errorMsg": "true" } } },
            "blue": { "dataType": "integer", "required": true, "validators": { "minimum": { "value": 0 }, "maximum": { "value": 255 }, "isInt": { "errorMsg": "true" } } },
        },
    },
    "MinionStatus": {
        "properties": {
            "toggle": { "ref": "Toggle" },
            "switch": { "ref": "Switch" },
            "roller": { "ref": "Roller" },
            "cleaner": { "ref": "Cleaner" },
            "airConditioning": { "ref": "AirConditioning" },
            "light": { "ref": "Light" },
            "temperatureLight": { "ref": "TemperatureLight" },
            "colorLight": { "ref": "ColorLight" },
        },
    },
    "Minion": {
        "properties": {
            "minionId": { "dataType": "string" },
            "name": { "dataType": "string", "required": true },
            "device": { "ref": "MinionDevice", "required": true },
            "isProperlyCommunicated": { "dataType": "boolean" },
            "minionStatus": { "ref": "MinionStatus", "required": true },
            "minionType": { "dataType": "enum", "enums": ["toggle", "switch", "roller", "cleaner", "airConditioning", "light", "temperatureLight", "colorLight"], "required": true },
            "minionAutoTurnOffMS": { "dataType": "double" },
        },
    },
    "MinionFeed": {
        "properties": {
            "event": { "dataType": "enum", "enums": ["created", "update", "removed"], "required": true },
            "minion": { "ref": "Minion", "required": true },
        },
    },
    "DailySunTrigger": {
        "properties": {
            "days": { "dataType": "array", "array": { "dataType": "enum", "enums": ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"] }, "required": true },
            "durationMinutes": { "dataType": "double", "required": true },
            "sunTrigger": { "dataType": "enum", "enums": ["sunrise", "sunset"], "required": true },
        },
    },
    "DailyTimeTrigger": {
        "properties": {
            "days": { "dataType": "array", "array": { "dataType": "enum", "enums": ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"] }, "required": true },
            "hour": { "dataType": "integer", "required": true, "validators": { "minimum": { "value": 0 }, "maximum": { "value": 23 }, "isInt": { "errorMsg": "true" } } },
            "minutes": { "dataType": "integer", "required": true, "validators": { "minimum": { "value": 0 }, "maximum": { "value": 59 }, "isInt": { "errorMsg": "true" } } },
        },
    },
    "OnceTiming": {
        "properties": {
            "date": { "dataType": "double", "required": true },
        },
    },
    "TimeoutTiming": {
        "properties": {
            "startDate": { "dataType": "double", "required": true },
            "durationInMimutes": { "dataType": "double", "required": true },
        },
    },
    "TimingProperties": {
        "properties": {
            "dailySunTrigger": { "ref": "DailySunTrigger" },
            "dailyTimeTrigger": { "ref": "DailyTimeTrigger" },
            "once": { "ref": "OnceTiming" },
            "timeout": { "ref": "TimeoutTiming" },
        },
    },
    "Timing": {
        "properties": {
            "timingId": { "dataType": "string", "required": true },
            "timingName": { "dataType": "string", "required": true },
            "triggerOperationId": { "dataType": "string", "required": true },
            "isActive": { "dataType": "boolean", "required": true },
            "timingType": { "dataType": "enum", "enums": ["dailySunTrigger", "dailyTimeTrigger", "once", "timeout"], "required": true },
            "timingProperties": { "ref": "TimingProperties", "required": true },
        },
    },
    "OperationResult": {
        "properties": {
            "minionId": { "dataType": "string", "required": true },
            "error": { "ref": "ErrorResponse" },
        },
    },
    "TimingFeed": {
        "properties": {
            "timing": { "ref": "Timing", "required": true },
            "results": { "dataType": "array", "array": { "ref": "OperationResult" }, "required": true },
        },
    },
    "DeviceKind": {
        "properties": {
            "brand": { "dataType": "string", "required": true },
            "model": { "dataType": "string", "required": true },
            "minionsPerDevice": { "dataType": "double", "required": true },
            "isTokenRequierd": { "dataType": "boolean", "required": true },
            "isIdRequierd": { "dataType": "boolean", "required": true },
            "suppotedMinionType": { "dataType": "enum", "enums": ["toggle", "switch", "roller", "cleaner", "airConditioning", "light", "temperatureLight", "colorLight"], "required": true },
            "isRecordingSupported": { "dataType": "boolean", "required": true },
        },
    },
    "SetMinionAutoTurnOff": {
        "properties": {
            "setAutoTurnOffMS": { "dataType": "double", "required": true },
        },
    },
    "IftttOnChanged": {
        "properties": {
            "localMac": { "dataType": "string" },
            "deviceId": { "dataType": "string", "required": true },
            "newStatus": { "dataType": "enum", "enums": ["on", "off"], "required": true },
        },
    },
    "OperationActivity": {
        "properties": {
            "minionId": { "dataType": "string", "required": true },
            "minionStatus": { "ref": "MinionStatus", "required": true },
        },
    },
    "Operation": {
        "properties": {
            "operationId": { "dataType": "string", "required": true },
            "operationName": { "dataType": "string", "required": true },
            "activities": { "dataType": "array", "array": { "ref": "OperationActivity" }, "required": true },
        },
    },
    "User": {
        "properties": {
            "displayName": { "dataType": "string" },
            "email": { "dataType": "string", "required": true },
            "sessionTimeOutMS": { "dataType": "double", "required": true },
            "password": { "dataType": "string" },
            "ignoreTfa": { "dataType": "boolean", "required": true },
            "scope": { "dataType": "enum", "enums": ["adminAuth", "userAuth", "iftttAuth"], "required": true },
        },
    },
    "UserForwardAuth": {
        "properties": {
            "code": { "dataType": "string", "required": true, "validators": { "minLength": { "value": 6 }, "maxLength": { "value": 6 } } },
        },
    },
    "RemoteSettings": {
        "properties": {
            "host": { "dataType": "string", "required": true },
            "connectionKey": { "dataType": "string", "required": true },
        },
    },
    "IftttIntegrationSettings": {
        "properties": {
            "apiKey": { "dataType": "string" },
            "enableIntegration": { "dataType": "boolean", "required": true },
        },
    },
    "IftttRawActionTriggerd": {
        "properties": {
            "apiKey": { "dataType": "string", "required": true },
            "localMac": { "dataType": "string" },
            "minionId": { "dataType": "string", "required": true },
            "setStatus": { "dataType": "enum", "enums": ["on", "off"], "required": true },
        },
    },
    "IftttActionTriggered": {
        "properties": {
            "apiKey": { "dataType": "string", "required": true },
            "localMac": { "dataType": "string" },
            "setStatus": { "dataType": "enum", "enums": ["on", "off"], "required": true },
        },
    },
    "IftttActionTriggeredRequest": {
        "properties": {
            "apiKey": { "dataType": "string", "required": true },
            "localMac": { "dataType": "string" },
        },
    },
    "UpdateResults": {
        "properties": {
            "alreadyUpToDate": { "dataType": "boolean", "required": true },
        },
    },
    "VersionInfo": {
        "properties": {
            "version": { "dataType": "string", "required": true },
            "commintHash": { "dataType": "string", "required": true },
            "timestamp": { "dataType": "double", "required": true },
        },
    },
};
const validationService = new tsoa_1.ValidationService(models);
function RegisterRoutes(app) {
    app.post('/API/auth/logout-sessions/:userId', authenticateMiddleware([{ "adminAuth": [] }, { "userAuth": [] }]), function (request, response, next) {
        const args = {
            userId: { "in": "path", "name": "userId", "required": true, "dataType": "string" },
            request: { "in": "request", "name": "request", "required": true, "dataType": "object" },
        };
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request);
        }
        catch (err) {
            response.status(422).send({
                responseCode: 1422,
                message: JSON.stringify(err.fields),
            });
            return;
        }
        const controller = new authController_1.AuthController();
        const promise = controller.logoutSessions.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, next);
    });
    app.post('/API/auth/login', function (request, response, next) {
        const args = {
            request: { "in": "request", "name": "request", "required": true, "dataType": "object" },
            login: { "in": "body", "name": "login", "required": true, "ref": "Login" },
        };
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request);
        }
        catch (err) {
            response.status(422).send({
                responseCode: 1422,
                message: JSON.stringify(err.fields),
            });
            return;
        }
        const controller = new authController_1.AuthController();
        const promise = controller.loginDocumentation.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, next);
    });
    app.post('/API/auth/login/tfa', function (request, response, next) {
        const args = {
            request: { "in": "request", "name": "request", "required": true, "dataType": "object" },
            login: { "in": "body", "name": "login", "required": true, "ref": "Login" },
        };
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request);
        }
        catch (err) {
            response.status(422).send({
                responseCode: 1422,
                message: JSON.stringify(err.fields),
            });
            return;
        }
        const controller = new authController_1.AuthController();
        const promise = controller.loginTfaDocumentation.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, next);
    });
    app.post('/API/auth/logout', authenticateMiddleware([{ "userAuth": [] }, { "adminAuth": [] }]), function (request, response, next) {
        const args = {};
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request);
        }
        catch (err) {
            response.status(422).send({
                responseCode: 1422,
                message: JSON.stringify(err.fields),
            });
            return;
        }
        const controller = new authController_1.AuthController();
        const promise = controller.logoutDocumentation.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, next);
    });
    app.get('/API/feed/minions', authenticateMiddleware([{ "userAuth": [] }, { "adminAuth": [] }]), function (request, response, next) {
        const args = {};
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request);
        }
        catch (err) {
            response.status(422).send({
                responseCode: 1422,
                message: JSON.stringify(err.fields),
            });
            return;
        }
        const controller = new feedController_1.FeedController();
        const promise = controller.getMinionsFeed.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, next);
    });
    app.get('/API/feed/timings', authenticateMiddleware([{ "userAuth": [] }, { "adminAuth": [] }]), function (request, response, next) {
        const args = {};
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request);
        }
        catch (err) {
            response.status(422).send({
                responseCode: 1422,
                message: JSON.stringify(err.fields),
            });
            return;
        }
        const controller = new feedController_1.FeedController();
        const promise = controller.getTimingFeed.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, next);
    });
    app.get('/API/devices', authenticateMiddleware([{ "userAuth": [] }, { "adminAuth": [] }]), function (request, response, next) {
        const args = {};
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request);
        }
        catch (err) {
            response.status(422).send({
                responseCode: 1422,
                message: JSON.stringify(err.fields),
            });
            return;
        }
        const controller = new devicesController_1.DevicesController();
        const promise = controller.getDevices.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, next);
    });
    app.get('/API/devices/kinds', authenticateMiddleware([{ "userAuth": [] }, { "adminAuth": [] }]), function (request, response, next) {
        const args = {};
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request);
        }
        catch (err) {
            response.status(422).send({
                responseCode: 1422,
                message: JSON.stringify(err.fields),
            });
            return;
        }
        const controller = new devicesController_1.DevicesController();
        const promise = controller.getDevicesKinds.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, next);
    });
    app.put('/API/devices/:deviceMac', authenticateMiddleware([{ "userAuth": [] }, { "adminAuth": [] }]), function (request, response, next) {
        const args = {
            deviceMac: { "in": "path", "name": "deviceMac", "required": true, "dataType": "string" },
            device: { "in": "body", "name": "device", "required": true, "ref": "LocalNetworkDevice" },
        };
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request);
        }
        catch (err) {
            response.status(422).send({
                responseCode: 1422,
                message: JSON.stringify(err.fields),
            });
            return;
        }
        const controller = new devicesController_1.DevicesController();
        const promise = controller.setDeviceName.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, next);
    });
    app.post('/API/devices/rescan', authenticateMiddleware([{ "userAuth": [] }, { "adminAuth": [] }]), function (request, response, next) {
        const args = {};
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request);
        }
        catch (err) {
            response.status(422).send({
                responseCode: 1422,
                message: JSON.stringify(err.fields),
            });
            return;
        }
        const controller = new devicesController_1.DevicesController();
        const promise = controller.rescanDevices.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, next);
    });
    app.get('/API/minions', authenticateMiddleware([{ "userAuth": [] }, { "adminAuth": [] }]), function (request, response, next) {
        const args = {};
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request);
        }
        catch (err) {
            response.status(422).send({
                responseCode: 1422,
                message: JSON.stringify(err.fields),
            });
            return;
        }
        const controller = new minionsController_1.MinionsController();
        const promise = controller.getMinions.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, next);
    });
    app.get('/API/minions/:minionId', authenticateMiddleware([{ "userAuth": [] }, { "adminAuth": [] }]), function (request, response, next) {
        const args = {
            minionId: { "in": "path", "name": "minionId", "required": true, "dataType": "string" },
        };
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request);
        }
        catch (err) {
            response.status(422).send({
                responseCode: 1422,
                message: JSON.stringify(err.fields),
            });
            return;
        }
        const controller = new minionsController_1.MinionsController();
        const promise = controller.getMinion.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, next);
    });
    app.put('/API/minions/:minionId', authenticateMiddleware([{ "userAuth": [] }, { "adminAuth": [] }]), function (request, response, next) {
        const args = {
            minionId: { "in": "path", "name": "minionId", "required": true, "dataType": "string" },
            setStatus: { "in": "body", "name": "setStatus", "required": true, "ref": "MinionStatus" },
        };
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request);
        }
        catch (err) {
            response.status(422).send({
                responseCode: 1422,
                message: JSON.stringify(err.fields),
            });
            return;
        }
        const controller = new minionsController_1.MinionsController();
        const promise = controller.setMinion.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, next);
    });
    app.put('/API/minions/timeout/:minionId', authenticateMiddleware([{ "userAuth": [] }, { "adminAuth": [] }]), function (request, response, next) {
        const args = {
            minionId: { "in": "path", "name": "minionId", "required": true, "dataType": "string" },
            setTimeout: { "in": "body", "name": "setTimeout", "required": true, "ref": "SetMinionAutoTurnOff" },
        };
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request);
        }
        catch (err) {
            response.status(422).send({
                responseCode: 1422,
                message: JSON.stringify(err.fields),
            });
            return;
        }
        const controller = new minionsController_1.MinionsController();
        const promise = controller.setMinionTimeout.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, next);
    });
    app.post('/API/minions/commands/record/:minionId', authenticateMiddleware([{ "userAuth": [] }, { "adminAuth": [] }]), function (request, response, next) {
        const args = {
            minionId: { "in": "path", "name": "minionId", "required": true, "dataType": "string" },
            minionStatus: { "in": "body", "name": "minionStatus", "required": true, "ref": "MinionStatus" },
        };
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request);
        }
        catch (err) {
            response.status(422).send({
                responseCode: 1422,
                message: JSON.stringify(err.fields),
            });
            return;
        }
        const controller = new minionsController_1.MinionsController();
        const promise = controller.recordMinionCommand.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, next);
    });
    app.post('/API/minions/commands/generate/:minionId', authenticateMiddleware([{ "userAuth": [] }, { "adminAuth": [] }]), function (request, response, next) {
        const args = {
            minionId: { "in": "path", "name": "minionId", "required": true, "dataType": "string" },
            minionStatus: { "in": "body", "name": "minionStatus", "required": true, "ref": "MinionStatus" },
        };
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request);
        }
        catch (err) {
            response.status(422).send({
                responseCode: 1422,
                message: JSON.stringify(err.fields),
            });
            return;
        }
        const controller = new minionsController_1.MinionsController();
        const promise = controller.generateMinionCommand.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, next);
    });
    app.post('/API/minions/rescan/:minionId', authenticateMiddleware([{ "userAuth": [] }, { "adminAuth": [] }]), function (request, response, next) {
        const args = {
            minionId: { "in": "path", "name": "minionId", "required": true, "dataType": "string" },
        };
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request);
        }
        catch (err) {
            response.status(422).send({
                responseCode: 1422,
                message: JSON.stringify(err.fields),
            });
            return;
        }
        const controller = new minionsController_1.MinionsController();
        const promise = controller.rescanMinionStatus.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, next);
    });
    app.post('/API/minions/rescan', authenticateMiddleware([{ "userAuth": [] }, { "adminAuth": [] }]), function (request, response, next) {
        const args = {};
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request);
        }
        catch (err) {
            response.status(422).send({
                responseCode: 1422,
                message: JSON.stringify(err.fields),
            });
            return;
        }
        const controller = new minionsController_1.MinionsController();
        const promise = controller.rescanMinionsStatus.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, next);
    });
    app.delete('/API/minions/:minionId', authenticateMiddleware([{ "userAuth": [] }, { "adminAuth": [] }]), function (request, response, next) {
        const args = {
            minionId: { "in": "path", "name": "minionId", "required": true, "dataType": "string" },
        };
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request);
        }
        catch (err) {
            response.status(422).send({
                responseCode: 1422,
                message: JSON.stringify(err.fields),
            });
            return;
        }
        const controller = new minionsController_1.MinionsController();
        const promise = controller.deleteMinion.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, next);
    });
    app.post('/API/minions', authenticateMiddleware([{ "userAuth": [] }, { "adminAuth": [] }]), function (request, response, next) {
        const args = {
            minion: { "in": "body", "name": "minion", "required": true, "ref": "Minion" },
        };
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request);
        }
        catch (err) {
            response.status(422).send({
                responseCode: 1422,
                message: JSON.stringify(err.fields),
            });
            return;
        }
        const controller = new minionsController_1.MinionsController();
        const promise = controller.createMinion.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, next);
    });
    app.put('/API/minions/:minionId/ifttt', function (request, response, next) {
        const args = {
            minionId: { "in": "path", "name": "minionId", "required": true, "dataType": "string" },
            iftttOnChanged: { "in": "body", "name": "iftttOnChanged", "required": true, "ref": "IftttOnChanged" },
        };
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request);
        }
        catch (err) {
            response.status(422).send({
                responseCode: 1422,
                message: JSON.stringify(err.fields),
            });
            return;
        }
        const controller = new minionsController_1.MinionsController();
        const promise = controller.notifyMinionStatusChanged.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, next);
    });
    app.get('/API/operations', authenticateMiddleware([{ "userAuth": [] }, { "adminAuth": [] }]), function (request, response, next) {
        const args = {};
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request);
        }
        catch (err) {
            response.status(422).send({
                responseCode: 1422,
                message: JSON.stringify(err.fields),
            });
            return;
        }
        const controller = new operationsController_1.OperationsController();
        const promise = controller.getOperations.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, next);
    });
    app.get('/API/operations/:operationId', authenticateMiddleware([{ "userAuth": [] }, { "adminAuth": [] }]), function (request, response, next) {
        const args = {
            operationId: { "in": "path", "name": "operationId", "required": true, "dataType": "string" },
        };
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request);
        }
        catch (err) {
            response.status(422).send({
                responseCode: 1422,
                message: JSON.stringify(err.fields),
            });
            return;
        }
        const controller = new operationsController_1.OperationsController();
        const promise = controller.getOperation.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, next);
    });
    app.put('/API/operations/:operationId', authenticateMiddleware([{ "userAuth": [] }, { "adminAuth": [] }]), function (request, response, next) {
        const args = {
            operationId: { "in": "path", "name": "operationId", "required": true, "dataType": "string" },
            operation: { "in": "body", "name": "operation", "required": true, "ref": "Operation" },
        };
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request);
        }
        catch (err) {
            response.status(422).send({
                responseCode: 1422,
                message: JSON.stringify(err.fields),
            });
            return;
        }
        const controller = new operationsController_1.OperationsController();
        const promise = controller.setOperation.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, next);
    });
    app.delete('/API/operations/:operationId', authenticateMiddleware([{ "userAuth": [] }, { "adminAuth": [] }]), function (request, response, next) {
        const args = {
            operationId: { "in": "path", "name": "operationId", "required": true, "dataType": "string" },
        };
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request);
        }
        catch (err) {
            response.status(422).send({
                responseCode: 1422,
                message: JSON.stringify(err.fields),
            });
            return;
        }
        const controller = new operationsController_1.OperationsController();
        const promise = controller.deleteOperation.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, next);
    });
    app.post('/API/operations', authenticateMiddleware([{ "userAuth": [] }, { "adminAuth": [] }]), function (request, response, next) {
        const args = {
            operation: { "in": "body", "name": "operation", "required": true, "ref": "Operation" },
        };
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request);
        }
        catch (err) {
            response.status(422).send({
                responseCode: 1422,
                message: JSON.stringify(err.fields),
            });
            return;
        }
        const controller = new operationsController_1.OperationsController();
        const promise = controller.createOperation.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, next);
    });
    app.post('/API/operations/trigger/:operationId', authenticateMiddleware([{ "userAuth": [] }, { "adminAuth": [] }]), function (request, response, next) {
        const args = {
            operationId: { "in": "path", "name": "operationId", "required": true, "dataType": "string" },
        };
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request);
        }
        catch (err) {
            response.status(422).send({
                responseCode: 1422,
                message: JSON.stringify(err.fields),
            });
            return;
        }
        const controller = new operationsController_1.OperationsController();
        const promise = controller.triggerOperation.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, next);
    });
    app.get('/API/timings', authenticateMiddleware([{ "userAuth": [] }, { "adminAuth": [] }]), function (request, response, next) {
        const args = {};
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request);
        }
        catch (err) {
            response.status(422).send({
                responseCode: 1422,
                message: JSON.stringify(err.fields),
            });
            return;
        }
        const controller = new timingsController_1.TimingsController();
        const promise = controller.getTimings.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, next);
    });
    app.get('/API/timings/:timingId', authenticateMiddleware([{ "userAuth": [] }, { "adminAuth": [] }]), function (request, response, next) {
        const args = {
            timingId: { "in": "path", "name": "timingId", "required": true, "dataType": "string" },
        };
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request);
        }
        catch (err) {
            response.status(422).send({
                responseCode: 1422,
                message: JSON.stringify(err.fields),
            });
            return;
        }
        const controller = new timingsController_1.TimingsController();
        const promise = controller.getTiming.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, next);
    });
    app.put('/API/timings/:timingId', authenticateMiddleware([{ "userAuth": [] }, { "adminAuth": [] }]), function (request, response, next) {
        const args = {
            timingId: { "in": "path", "name": "timingId", "required": true, "dataType": "string" },
            timing: { "in": "body", "name": "timing", "required": true, "ref": "Timing" },
        };
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request);
        }
        catch (err) {
            response.status(422).send({
                responseCode: 1422,
                message: JSON.stringify(err.fields),
            });
            return;
        }
        const controller = new timingsController_1.TimingsController();
        const promise = controller.setTiming.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, next);
    });
    app.delete('/API/timings/:timingId', authenticateMiddleware([{ "userAuth": [] }, { "adminAuth": [] }]), function (request, response, next) {
        const args = {
            timingId: { "in": "path", "name": "timingId", "required": true, "dataType": "string" },
        };
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request);
        }
        catch (err) {
            response.status(422).send({
                responseCode: 1422,
                message: JSON.stringify(err.fields),
            });
            return;
        }
        const controller = new timingsController_1.TimingsController();
        const promise = controller.deleteTiming.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, next);
    });
    app.post('/API/timings', authenticateMiddleware([{ "userAuth": [] }, { "adminAuth": [] }]), function (request, response, next) {
        const args = {
            timing: { "in": "body", "name": "timing", "required": true, "ref": "Timing" },
        };
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request);
        }
        catch (err) {
            response.status(422).send({
                responseCode: 1422,
                message: JSON.stringify(err.fields),
            });
            return;
        }
        const controller = new timingsController_1.TimingsController();
        const promise = controller.createTiming.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, next);
    });
    app.get('/API/users/profile', authenticateMiddleware([{ "adminAuth": [] }, { "userAuth": [] }]), function (request, response, next) {
        const args = {
            request: { "in": "request", "name": "request", "required": true, "dataType": "object" },
        };
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request);
        }
        catch (err) {
            response.status(422).send({
                responseCode: 1422,
                message: JSON.stringify(err.fields),
            });
            return;
        }
        const controller = new usersController_1.UsersController();
        const promise = controller.getProfile.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, next);
    });
    app.post('/API/users/forward-auth/:userId', authenticateMiddleware([{ "adminAuth": [] }]), function (request, response, next) {
        const args = {
            userId: { "in": "path", "name": "userId", "required": true, "dataType": "string" },
        };
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request);
        }
        catch (err) {
            response.status(422).send({
                responseCode: 1422,
                message: JSON.stringify(err.fields),
            });
            return;
        }
        const controller = new usersController_1.UsersController();
        const promise = controller.requestUserForwarding.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, next);
    });
    app.get('/API/users/forward', authenticateMiddleware([{ "adminAuth": [] }]), function (request, response, next) {
        const args = {};
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request);
        }
        catch (err) {
            response.status(422).send({
                responseCode: 1422,
                message: JSON.stringify(err.fields),
            });
            return;
        }
        const controller = new usersController_1.UsersController();
        const promise = controller.getRegisteredUsers.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, next);
    });
    app.post('/API/users/forward/:userId', authenticateMiddleware([{ "adminAuth": [] }]), function (request, response, next) {
        const args = {
            userId: { "in": "path", "name": "userId", "required": true, "dataType": "string" },
            auth: { "in": "body", "name": "auth", "required": true, "ref": "UserForwardAuth" },
        };
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request);
        }
        catch (err) {
            response.status(422).send({
                responseCode: 1422,
                message: JSON.stringify(err.fields),
            });
            return;
        }
        const controller = new usersController_1.UsersController();
        const promise = controller.requestUserForwardingAuth.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, next);
    });
    app.delete('/API/users/forward/:userId', authenticateMiddleware([{ "adminAuth": [] }]), function (request, response, next) {
        const args = {
            userId: { "in": "path", "name": "userId", "required": true, "dataType": "string" },
        };
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request);
        }
        catch (err) {
            response.status(422).send({
                responseCode: 1422,
                message: JSON.stringify(err.fields),
            });
            return;
        }
        const controller = new usersController_1.UsersController();
        const promise = controller.removeUserForwarding.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, next);
    });
    app.get('/API/users', authenticateMiddleware([{ "adminAuth": [] }]), function (request, response, next) {
        const args = {};
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request);
        }
        catch (err) {
            response.status(422).send({
                responseCode: 1422,
                message: JSON.stringify(err.fields),
            });
            return;
        }
        const controller = new usersController_1.UsersController();
        const promise = controller.getUsers.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, next);
    });
    app.get('/API/users/:userId', authenticateMiddleware([{ "adminAuth": [] }, { "userAuth": [] }]), function (request, response, next) {
        const args = {
            userId: { "in": "path", "name": "userId", "required": true, "dataType": "string" },
            request: { "in": "request", "name": "request", "required": true, "dataType": "object" },
        };
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request);
        }
        catch (err) {
            response.status(422).send({
                responseCode: 1422,
                message: JSON.stringify(err.fields),
            });
            return;
        }
        const controller = new usersController_1.UsersController();
        const promise = controller.getUser.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, next);
    });
    app.put('/API/users/:userId', authenticateMiddleware([{ "adminAuth": [] }, { "userAuth": [] }]), function (request, response, next) {
        const args = {
            userId: { "in": "path", "name": "userId", "required": true, "dataType": "string" },
            request: { "in": "request", "name": "request", "required": true, "dataType": "object" },
            user: { "in": "body", "name": "user", "required": true, "ref": "User" },
        };
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request);
        }
        catch (err) {
            response.status(422).send({
                responseCode: 1422,
                message: JSON.stringify(err.fields),
            });
            return;
        }
        const controller = new usersController_1.UsersController();
        const promise = controller.setUser.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, next);
    });
    app.delete('/API/users/:userId', authenticateMiddleware([{ "adminAuth": [] }, { "userAuth": [] }]), function (request, response, next) {
        const args = {
            userId: { "in": "path", "name": "userId", "required": true, "dataType": "string" },
            request: { "in": "request", "name": "request", "required": true, "dataType": "object" },
        };
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request);
        }
        catch (err) {
            response.status(422).send({
                responseCode: 1422,
                message: JSON.stringify(err.fields),
            });
            return;
        }
        const controller = new usersController_1.UsersController();
        const promise = controller.deleteUser.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, next);
    });
    app.post('/API/users', authenticateMiddleware([{ "adminAuth": [] }]), function (request, response, next) {
        const args = {
            user: { "in": "body", "name": "user", "required": true, "ref": "User" },
        };
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request);
        }
        catch (err) {
            response.status(422).send({
                responseCode: 1422,
                message: JSON.stringify(err.fields),
            });
            return;
        }
        const controller = new usersController_1.UsersController();
        const promise = controller.createUser.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, next);
    });
    app.get('/API/remote', authenticateMiddleware([{ "adminAuth": [] }, { "userAuth": [] }]), function (request, response, next) {
        const args = {};
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request);
        }
        catch (err) {
            response.status(422).send({
                responseCode: 1422,
                message: JSON.stringify(err.fields),
            });
            return;
        }
        const controller = new remoteConnectionController_1.RemoteConnectionController();
        const promise = controller.getRemoteHost.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, next);
    });
    app.get('/API/remote/status', authenticateMiddleware([{ "adminAuth": [] }, { "userAuth": [] }]), function (request, response, next) {
        const args = {};
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request);
        }
        catch (err) {
            response.status(422).send({
                responseCode: 1422,
                message: JSON.stringify(err.fields),
            });
            return;
        }
        const controller = new remoteConnectionController_1.RemoteConnectionController();
        const promise = controller.getConnectionStatus.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, next);
    });
    app.get('/API/remote/machine-mac', authenticateMiddleware([{ "adminAuth": [] }]), function (request, response, next) {
        const args = {};
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request);
        }
        catch (err) {
            response.status(422).send({
                responseCode: 1422,
                message: JSON.stringify(err.fields),
            });
            return;
        }
        const controller = new remoteConnectionController_1.RemoteConnectionController();
        const promise = controller.getMachineMac.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, next);
    });
    app.put('/API/remote', authenticateMiddleware([{ "adminAuth": [] }]), function (request, response, next) {
        const args = {
            remoteSettings: { "in": "body", "name": "remoteSettings", "required": true, "ref": "RemoteSettings" },
        };
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request);
        }
        catch (err) {
            response.status(422).send({
                responseCode: 1422,
                message: JSON.stringify(err.fields),
            });
            return;
        }
        const controller = new remoteConnectionController_1.RemoteConnectionController();
        const promise = controller.setRemoteSettings.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, next);
    });
    app.delete('/API/remote', authenticateMiddleware([{ "adminAuth": [] }]), function (request, response, next) {
        const args = {};
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request);
        }
        catch (err) {
            response.status(422).send({
                responseCode: 1422,
                message: JSON.stringify(err.fields),
            });
            return;
        }
        const controller = new remoteConnectionController_1.RemoteConnectionController();
        const promise = controller.removeRemoteSettings.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, next);
    });
    app.get('/API/static/**/*', function (request, response, next) {
        const args = {};
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request);
        }
        catch (err) {
            response.status(422).send({
                responseCode: 1422,
                message: JSON.stringify(err.fields),
            });
            return;
        }
        const controller = new staticAssetsController_1.StaticAssetsController();
        const promise = controller.getStaticsAssets.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, next);
    });
    app.get('/API/ifttt/settings', authenticateMiddleware([{ "adminAuth": [] }, { "userAuth": [] }]), function (request, response, next) {
        const args = {};
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request);
        }
        catch (err) {
            response.status(422).send({
                responseCode: 1422,
                message: JSON.stringify(err.fields),
            });
            return;
        }
        const controller = new iftttController_1.IftttController();
        const promise = controller.isIftttEnabled.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, next);
    });
    app.put('/API/ifttt/settings', authenticateMiddleware([{ "adminAuth": [] }]), function (request, response, next) {
        const args = {
            iftttIntegrationSettings: { "in": "body", "name": "iftttIntegrationSettings", "required": true, "ref": "IftttIntegrationSettings" },
        };
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request);
        }
        catch (err) {
            response.status(422).send({
                responseCode: 1422,
                message: JSON.stringify(err.fields),
            });
            return;
        }
        const controller = new iftttController_1.IftttController();
        const promise = controller.setIftttIntegrationSettings.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, next);
    });
    app.post('/API/ifttt/trigger/minions/raw', authenticateMiddleware([{ "iftttAuth": [] }]), function (request, response, next) {
        const args = {
            iftttRawActionTriggerd: { "in": "body", "name": "iftttRawActionTriggerd", "required": true, "ref": "IftttRawActionTriggerd" },
        };
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request);
        }
        catch (err) {
            response.status(422).send({
                responseCode: 1422,
                message: JSON.stringify(err.fields),
            });
            return;
        }
        const controller = new iftttController_1.IftttController();
        const promise = controller.triggeredSomeAction.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, next);
    });
    app.post('/API/ifttt/trigger/minions/:minionId', authenticateMiddleware([{ "iftttAuth": [] }]), function (request, response, next) {
        const args = {
            minionId: { "in": "path", "name": "minionId", "required": true, "dataType": "string" },
            iftttActionTriggered: { "in": "body", "name": "iftttActionTriggered", "required": true, "ref": "IftttActionTriggered" },
        };
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request);
        }
        catch (err) {
            response.status(422).send({
                responseCode: 1422,
                message: JSON.stringify(err.fields),
            });
            return;
        }
        const controller = new iftttController_1.IftttController();
        const promise = controller.triggeredMinionAction.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, next);
    });
    app.post('/API/ifttt/trigger/operations/:operationId', authenticateMiddleware([{ "iftttAuth": [] }]), function (request, response, next) {
        const args = {
            operationId: { "in": "path", "name": "operationId", "required": true, "dataType": "string" },
            iftttActionTriggeredRequest: { "in": "body", "name": "iftttActionTriggeredRequest", "required": true, "ref": "IftttActionTriggeredRequest" },
        };
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request);
        }
        catch (err) {
            response.status(422).send({
                responseCode: 1422,
                message: JSON.stringify(err.fields),
            });
            return;
        }
        const controller = new iftttController_1.IftttController();
        const promise = controller.triggeredOperationAction.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, next);
    });
    app.put('/API/version/latest', authenticateMiddleware([{ "adminAuth": [] }]), function (request, response, next) {
        const args = {};
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request);
        }
        catch (err) {
            response.status(422).send({
                responseCode: 1422,
                message: JSON.stringify(err.fields),
            });
            return;
        }
        const controller = new versionsController_1.VersionsController();
        const promise = controller.updateVersion.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, next);
    });
    app.get('/API/version', authenticateMiddleware([{ "adminAuth": [] }, { "userAuth": [] }]), function (request, response, next) {
        const args = {};
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request);
        }
        catch (err) {
            response.status(422).send({
                responseCode: 1422,
                message: JSON.stringify(err.fields),
            });
            return;
        }
        const controller = new versionsController_1.VersionsController();
        const promise = controller.getCurrentVersion.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, next);
    });
    function authenticateMiddleware(security = []) {
        return (request, _response, next) => {
            const succeed = function (user) {
                request['user'] = user;
                next();
            };
            const fail = async function (error) {
                _response.status(401).send({
                    responseCode: 1401,
                });
            };
            const scopes = [];
            try {
                for (const scop of security) {
                    scopes.push(Object.keys(scop)[0]);
                }
            }
            catch (error) {
            }
            authentication_1.expressAuthentication(request, scopes)
                .then(succeed)
                .catch(fail);
        };
    }
    function isController(object) {
        return 'getHeaders' in object && 'getStatus' in object && 'setStatus' in object;
    }
    function promiseHandler(controllerObj, promise, response, next) {
        return Promise.resolve(promise)
            .then((data) => {
            let statusCode;
            if (isController(controllerObj)) {
                const headers = controllerObj.getHeaders();
                Object.keys(headers).forEach((name) => {
                    response.set(name, headers[name]);
                });
                statusCode = controllerObj.getStatus();
            }
            if (data || data === false) { // === false allows boolean result
                response.status(statusCode || 200).json(data);
            }
            else {
                response.status(statusCode || 204).end();
            }
        })
            .catch(async (error) => {
            /**
             * If error is from TSOA sent it back to client (it's part of API)
             * Else throw it back.
             */
            try {
                const cleanError = {
                    responseCode: error.responseCode,
                    message: error.message
                };
                if (typeof cleanError.responseCode !== 'number') {
                    throw new Error('invalid error schema');
                }
                response.status(500).send(cleanError);
            }
            catch (error) {
                response.status(500).send({
                    responseCode: 1500,
                    message: 'unknown error',
                });
            }
        });
    }
    function getValidatedArgs(args, request) {
        const fieldErrors = {};
        const values = Object.keys(args).map((key) => {
            const name = args[key].name;
            switch (args[key].in) {
                case 'request':
                    return request;
                case 'query':
                    return validationService.ValidateParam(args[key], request.query[name], name, fieldErrors);
                case 'path':
                    return validationService.ValidateParam(args[key], request.params[name], name, fieldErrors);
                case 'header':
                    return validationService.ValidateParam(args[key], request.header(name), name, fieldErrors);
                case 'body':
                    return validationService.ValidateParam(args[key], request.body, name, fieldErrors, name + '.');
                case 'body-prop':
                    return validationService.ValidateParam(args[key], request.body[name], name, fieldErrors, 'body.');
            }
        });
        if (Object.keys(fieldErrors).length > 0) {
            throw new tsoa_1.ValidateError(fieldErrors, '');
        }
        return values;
    }
}
exports.RegisterRoutes = RegisterRoutes;
//# sourceMappingURL=routes.js.map