import { Body, Controller, Delete, Get, Header, Path, Post, Put, Query, Response, Route, Security, SuccessResponse, Tags } from 'tsoa';
import { MinionsBlSingleton } from '../business-layer/minionsBl';
import { ErrorResponse, IftttOnChanged, Minion, MinionStatus, SetMinionAutoTurnOff } from '../models/sharedInterfaces';
import { DeepCopy } from '../utilities/deepCopy';

@Tags('Minions')
@Route('minions')
export class MinionsController extends Controller {

    /**
     * NEVER let anyone get device API keys.
     * @param minion minion to remove keys from.
     */
    private cleanUpMinionBeforRelease(minion: Minion): Minion {
        const minionCopy = DeepCopy<Minion>(minion);
        delete minionCopy.device.deviceId;
        delete minionCopy.device.token;
        return minionCopy;
    }

    /**
     * NEVER let anyone get device API keys.
     * @param minions minions to remove keys from.
     */
    private cleanUpMinionsBeforRelease(minions: Minion[]): Minion[] {
        const minionsCopy: Minion[] = [];
        for (const minion of minions) {
            minionsCopy.push(this.cleanUpMinionBeforRelease(minion));
        }
        return minionsCopy;
    }

    /**
     * Get all minions in the system.
     * @returns Minions array.
     */
    @Security('userAuth')
    @Security('adminAuth')
    @Response<ErrorResponse>(501, 'Server error')
    @Get()
    public async getMinions(): Promise<Minion[]> {
        return this.cleanUpMinionsBeforRelease(await MinionsBlSingleton.getMinions());
    }

    /**
     * Get minion by id.
     * @returns Minion.
     */
    @Security('userAuth')
    @Security('adminAuth')
    @Get('{minionId}')
    public async getMinion(minionId: string): Promise<Minion> {
        return this.cleanUpMinionBeforRelease(await MinionsBlSingleton.getMinionById(minionId));
    }

    /**
     * Update minion status.
     * @param minionId Minon id.
     * @param setStatus Minion status to set.
     */
    @Security('userAuth')
    @Security('adminAuth')
    @Response<ErrorResponse>(501, 'Server error')
    @Put('{minionId}')
    public async setMinion(minionId: string, @Body() setStatus: MinionStatus): Promise<void> {
        return await MinionsBlSingleton.setMinionStatus(minionId, setStatus);
    }

    /**
     * Update minion auto turns off timeout.
     * @param minionId Minon id.
     * @param setTimeout Timeout property.
     */
    @Security('userAuth')
    @Security('adminAuth')
    @Response<ErrorResponse>(501, 'Server error')
    @Put('timeout/{minionId}')
    public async setMinionTimeout(minionId: string, @Body() setTimeout: SetMinionAutoTurnOff): Promise<void> {
        return await MinionsBlSingleton.setMinionTimeout(minionId, setTimeout.setAutoTurnOffMS );
    }

    /**
     * Record a command (IR, 433-RF or any other supported RF tech)
     * for current minion status.
     * @param minionId Minon id.
     * @param minionStatus Minion object status to get command for.
     */
    @Security('userAuth')
    @Security('adminAuth')
    @Response<ErrorResponse>(501, 'Server error')
    @Post('commands/record/{minionId}')
    public async recordMinionCommand(minionId: string, @Body() minionStatus: MinionStatus): Promise<void> {
        return MinionsBlSingleton.recordCommand(minionId, minionStatus);
    }

    /**
     * Generate a command (IR, 433-RF or any other supported RF tech)
     * for current minion status.
     * @param minionId Minon id.
     * @param minionStatus Minion object status to generate command for.
     */
    @Security('userAuth')
    @Security('adminAuth')
    @Response<ErrorResponse>(501, 'Server error')
    @Post('commands/generate/{minionId}')
    public async generateMinionCommand(minionId: string, @Body() minionStatus: MinionStatus): Promise<void> {
        return MinionsBlSingleton.generateCommand(minionId, minionStatus);
    }

    /**
     * Recheck minion device status (update server status cache).
     */
    @Security('userAuth')
    @Security('adminAuth')
    @Response<ErrorResponse>(501, 'Server error')
    @Post('rescan/{minionId}')
    public async rescanMinionStatus(minionId: string): Promise<void> {
        return await MinionsBlSingleton.scanMinionStatus(minionId);
    }

    /**
     * Recheck every minion device status (update server status cache).
     * Note that this is not the devices scan!
     * This scanning only checks every minion API to know the current status.
     */
    @Security('userAuth')
    @Security('adminAuth')
    @Response<ErrorResponse>(501, 'Server error')
    @Post('rescan')
    public async rescanMinionsStatus(): Promise<void> {
        return await MinionsBlSingleton.scanMinionsStatus();
    }

    /**
     * Delete minion from the system.
     * @param minionId Minon id.
     */
    @Security('userAuth')
    @Security('adminAuth')
    @Response<ErrorResponse>(501, 'Server error')
    @Delete('{minionId}')
    public async deleteMinion(minionId: string): Promise<void> {
        return await MinionsBlSingleton.deleteMinion(minionId);
    }

    /**
     *  Creates a new minion.
     * @param minion The new minion to create.
     */
    @Security('userAuth')
    @Security('adminAuth')
    @Response<ErrorResponse>(501, 'Server error')
    @Post()
    public async createMinion(@Body() minion: Minion): Promise<void> {
        return await MinionsBlSingleton.createMinion(minion);
    }

    /**
     * Notify minion status changed by ifttt webhook (https://ifttt.com/maker_webhooks).
     * @param minionId Minon id.
     * @param iftttOnChanged Minion key amd status to set.
     */
    @Response<ErrorResponse>(501, 'Server error')
    @Put('{minionId}/ifttt')
    public async notifyMinionStatusChanged(minionId: string, @Body() iftttOnChanged: IftttOnChanged): Promise<void> {
        return await MinionsBlSingleton.notifyMinionChangedByIfttt(minionId, iftttOnChanged);
    }
}
