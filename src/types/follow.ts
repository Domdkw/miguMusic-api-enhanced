export namespace Follower {
    export interface Music {
        type: 'music';
        userId: string;
        page?: number;
        size?: number;
    }
    export interface Vrbt_V {
        type: 'vrbt';
        userId?: string;
        videoUserId: string;
    }
    export interface Vrbt_U {
        type: 'vrbt';
        userId: string;
        videoUserId?: string;
    }
    export type params = Music | Vrbt_V | Vrbt_U;
}

