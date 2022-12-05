import { Frames } from "../services/models/add-new-frame-model";

export interface BowlingState {
    score: number;
    round: number;
    frames: Frames[];
    isStrike: boolean;
    isSpare: boolean;
}

export const initialState: BowlingState ={
    score: 0,
    round: 1,
    frames: [],
    isStrike: false,
    isSpare: false
}