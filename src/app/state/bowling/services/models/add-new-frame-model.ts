export interface AddNewFrameRequest {
    round: number;
    score: number;
    frames: Frames[],
    isStrike: boolean;
    isSpare: boolean;
}

export interface AddNewFrame {
    frames: Frames[],
    round: number;
    score: number;
    isStrike: boolean;
    isSpare: boolean;
}

export interface Frames {
    first: number;
    second: number;
    third?: number;
}
