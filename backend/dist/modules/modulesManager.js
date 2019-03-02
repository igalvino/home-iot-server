"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pull_behavior_1 = require("pull-behavior");
const rxjs_1 = require("rxjs");
///////////////////////////////////////////////////////////////////////////////
//////////////// TO EXTEND: Place here handler reference //////////////////////
///////////////////////////////////////////////////////////////////////////////
const broadlinkHandler_1 = require("./broadlink/broadlinkHandler");
const mockHandler_1 = require("./mock/mockHandler");
const orviboHandler_1 = require("./orvibo/orviboHandler");
const tuyaHandler_1 = require("./tuya/tuyaHandler");
const yeelightHandler_1 = require("./yeelight/yeelightHandler");
class ModulesManager {
    constructor() {
        /**
         * All modules handlers
         */
        this.modulesHandlers = [];
        /**
         * Let subscribe to any status minion changed. from any brand module.
         */
        this.minionStatusChangedEvent = new rxjs_1.BehaviorSubject(undefined);
        /**
         * Allows to retrieve minions array. (used as proxy for all moduls).
         */
        this.retrieveMinions = new pull_behavior_1.PullBehavior();
        this.initHandlers();
    }
    /**
     * Get all devices kinds of all brands.
     */
    get devicesKind() {
        const modulesDevices = [];
        for (const moduleHandler of this.modulesHandlers) {
            modulesDevices.push(...moduleHandler.devices);
        }
        return modulesDevices;
    }
    /**
     * Init any brand module in system.
     */
    initHandlers() {
        ////////////////////////////////////////////////////////////////////////
        //////////////// TO EXTEND: Init here new handler //////////////////////
        ////////////////////////////////////////////////////////////////////////
        this.initHandler(new mockHandler_1.MockHandler());
        this.initHandler(new tuyaHandler_1.TuyaHandler());
        this.initHandler(new broadlinkHandler_1.BroadlinkHandler());
        this.initHandler(new yeelightHandler_1.YeelightHandler());
        this.initHandler(new orviboHandler_1.OrviboHandler());
    }
    /**
     * Hold the hendler instance and registar to minions status changed.
     * @param brandModule the handler instance.
     */
    initHandler(brandModule) {
        /**
         * Set pull proxy method to get all last minions array.
         */
        brandModule.retrieveMinions.setPullMethod(async () => {
            if (!this.retrieveMinions.isPullingAvailble) {
                return [];
            }
            return await this.retrieveMinions.pull();
        });
        brandModule.minionStatusChangedEvent.subscribe((changedMinionStatus) => {
            this.minionStatusChangedEvent.next(changedMinionStatus);
        });
        this.modulesHandlers.push(brandModule);
    }
    /**
     * Get minion communcation module based on brand name.
     * @param brandName the brand name.
     * @returns The module instance or undefined if not exist.
     */
    getMinionModule(brandName) {
        for (const brandHandler of this.modulesHandlers) {
            if (brandName === brandHandler.brandName) {
                return brandHandler;
            }
        }
    }
    /**
     * Get DeviceKind of minoin device.
     * @param minionsBrandModuleBase The rand module to look in.
     * @param minionDevice the minoin device to get kind for.
     * @returns The device kind.
     */
    getModelKind(minionsBrandModuleBase, minionDevice) {
        for (const deviceKind of minionsBrandModuleBase.devices) {
            if (deviceKind.brand === minionDevice.brand &&
                deviceKind.model === minionDevice.model) {
                return deviceKind;
            }
        }
    }
    /**
     * Get current status of minion. (such as minion status on off etc.)
     */
    async getStatus(miniom) {
        const minionModule = this.getMinionModule(miniom.device.brand);
        if (!minionModule) {
            const errorResponse = {
                responseCode: 7404,
                message: `there is not module for -${miniom.device.brand}- brand`,
            };
            throw errorResponse;
        }
        return await minionModule.getStatus(miniom);
    }
    /**
     * Set minion new status. (such as turn minion on off etc.)
     * @param miniom minion to set status for.
     * @param setStatus the new status to set.
     */
    async setStatus(miniom, setStatus) {
        const minionModule = this.getMinionModule(miniom.device.brand);
        if (!minionModule) {
            const errorResponse = {
                responseCode: 7404,
                message: `there is not module for -${miniom.device.brand}- brand`,
            };
            throw errorResponse;
        }
        return await minionModule.setStatus(miniom, setStatus);
    }
    /**
     * Record data for currrent minion status.
     * Note, only few devices models support this feature.
     * For example it is used when need to record IR data to math status for next use.
     * @param miniom minion to record for.
     * @param statusToRecordFor the specific status to record for.
     */
    async enterRecordMode(miniom, statusToRecordFor) {
        const minionModule = this.getMinionModule(miniom.device.brand);
        if (!minionModule) {
            const errorResponse = {
                responseCode: 7404,
                message: `there is not module for -${miniom.device.brand}- brand`,
            };
            throw errorResponse;
        }
        /** Make sure that minion supprt recording */
        const modelKind = this.getModelKind(minionModule, miniom.device);
        if (!modelKind || !modelKind.isRecordingSupported) {
            const errorResponse = {
                responseCode: 6409,
                message: `the minioin not support command recording`,
            };
            throw errorResponse;
        }
        return await minionModule.enterRecordMode(miniom, statusToRecordFor);
    }
}
exports.ModulesManager = ModulesManager;
exports.ModulesManagerSingltone = new ModulesManager();
//# sourceMappingURL=modulesManager.js.map