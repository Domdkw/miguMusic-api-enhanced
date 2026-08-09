export namespace AddUserCollect {
    export interface Playlist {
        type: 'playlist';
        title: string;
        playlistId: string;
    }
    export interface Comment {
        type: 'comment';
        userId: string;
        commentId: string;
    }
    export type params = Playlist | Comment;
}

export namespace RemoveUserCollect {
    export interface Playlist {
        type: 'playlist';
        playlistId: string;
    }
    export interface Comment {
        type: 'comment';
        userId: string;
        commentId: string;
    }
    export type params = Playlist | Comment;
}

