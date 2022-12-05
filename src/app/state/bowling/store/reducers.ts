import { ActionReducer, createReducer, Action, on } from "@ngrx/store";
import { AddNewFrame } from "../services/models/add-new-frame-model";
import { BowlingActions } from "./actions";
import { BowlingState, initialState } from "./store";

const createBowlingReducerState: ActionReducer<BowlingState> = createReducer<BowlingState>(
    initialState,

    on(BowlingActions.AddNewFrame.request, (state: BowlingState) => ({
        ...state,
    })),
    on(BowlingActions.AddNewFrame.success, (state: BowlingState, {score, round, frames, isStrike, isSpare}: AddNewFrame) => ({
        ...state,
        score: state.score + score,
        round: state.round + round,
        frames: [...state.frames,...frames],
        isStrike: isStrike,
        isSpare: isSpare
    })),
    on(BowlingActions.AddNewFrame.failure, (state: BowlingState) => ({
        ...state,
    })),

    on(BowlingActions.ClearState.success, (state: BowlingState) => ({
        ...state,
        score: 0,
        round: 1,
        frames: []
    })),
);

export function reducer(state: BowlingState | undefined, action: Action) {
    return createBowlingReducerState(state, action);
}

