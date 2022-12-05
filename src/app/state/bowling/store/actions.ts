import { createAction, props } from "@ngrx/store";
import { ActionPayload } from "../../core/types/action-payload";
import { AddNewFrameRequest, AddNewFrame } from "../services/models/add-new-frame-model";


export enum BowlingActionTypes {

    AddNewFrameRequest = '[Frames] add frame request',
    AddNewFrameSuccess = '[Frames] add frame success',
    AddNewFrameFailure = '[Frames] add frame failure',

    ClearState = "[State] Clear State"

}

export namespace BowlingActions {
    export namespace AddNewFrame {
        export const request: ActionPayload<BowlingActionTypes, AddNewFrameRequest> =
            createAction(BowlingActionTypes.AddNewFrameRequest, props<AddNewFrameRequest>());
        export const success: ActionPayload<BowlingActionTypes, AddNewFrame> =
            createAction(BowlingActionTypes.AddNewFrameSuccess, props<AddNewFrame>());
        export const failure: ActionPayload<BowlingActionTypes> = createAction(BowlingActionTypes.AddNewFrameFailure);
    }

    export namespace ClearState {
        export const success: ActionPayload<BowlingActionTypes> =
            createAction(BowlingActionTypes.AddNewFrameRequest);
    }
}