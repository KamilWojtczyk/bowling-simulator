import { Injectable } from "@angular/core";
import { Actions } from "@ngrx/effects";

@Injectable()
export class BowlingEffects {

    constructor(
        private actions$: Actions,
    ) {

    }
}