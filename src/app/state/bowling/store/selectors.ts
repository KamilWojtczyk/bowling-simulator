import { createFeatureSelector, createSelector, MemoizedSelector } from "@ngrx/store";
import { BowlingState } from "./store";

export const bowlingStateName: string = 'bowling';

export const getBowlingState: MemoizedSelector<object, BowlingState> =
    createFeatureSelector<BowlingState>(bowlingStateName);

export namespace BowlingSelectors {
    export const getScore = createSelector(
        getBowlingState,
        (state: BowlingState) => state.score
    )

    export const getRound = createSelector(
        getBowlingState,
        (state: BowlingState) => state.round
    )

    export const getFrames= createSelector(
        getBowlingState,
        (state: BowlingState) => state.frames
    )

    export const getStrike= createSelector(
        getBowlingState,
        (state: BowlingState) => state.isStrike
    )

    export const getSpare= createSelector(
        getBowlingState,
        (state: BowlingState) => state.isSpare
    )
}
