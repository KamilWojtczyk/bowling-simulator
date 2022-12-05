import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { BowlingActions } from "../store/actions";
import { BowlingSelectors } from "../store/selectors";
import { AddNewFrame, Frames } from "./models/add-new-frame-model";

@Injectable()
export class BowlingService {
    public frames$: Observable<Frames[]>;
    public score$: Observable<number>;
    public round$: Observable<number>;
    public isStrike$: Observable<boolean>;
    public isSpare$: Observable<boolean>;



    constructor(private store: Store) {
        this.score$ = this.store.select(BowlingSelectors.getScore);
        this.round$= this.store.select(BowlingSelectors.getRound);
        this.frames$= this.store.select(BowlingSelectors.getFrames);
        this.isStrike$= this.store.select(BowlingSelectors.getStrike);
        this.isSpare$= this.store.select(BowlingSelectors.getSpare);
    }


    public addFrame(addFrame: AddNewFrame): void {
        this.store.dispatch(BowlingActions.AddNewFrame.success(addFrame));
    }

    public clearState(): void {
        this.store.dispatch(BowlingActions.ClearState.success());
    }

}