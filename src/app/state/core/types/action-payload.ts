import { ActionCreator } from "@ngrx/store";
import { TypedAction } from "@ngrx/store/src/models";


export type ActionPayload<T extends string, P = void> = P extends void
    ? ActionCreator<T, () => TypedAction<T>>
    : ActionCreator<T, (props: P) => P & TypedAction<T>>;