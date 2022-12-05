import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { bowlingStateName } from './store/selectors';
import { BowlingEffects } from './store/effects';
import { reducer } from './store/reducers';
import { BowlingService } from './services/bowling.service';

@NgModule({
  imports: [
    StoreModule.forFeature(bowlingStateName, reducer),
    EffectsModule.forFeature([BowlingEffects]),
  ],
  providers: [
    BowlingService
  ]
})
export class BowlingStateModule { }