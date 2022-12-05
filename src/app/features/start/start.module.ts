import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartRoutingModule } from './start-routing.module';
import { StartComponent } from './start.component';
import { CardModule } from '../../components/card/card.module';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BowlingStateModule } from 'src/app/state/bowling/bowling-state.module';

@NgModule({
  imports: [
    CommonModule, 
    FormsModule, 
    ReactiveFormsModule, 
    StartRoutingModule, 
    MatCardModule, 
    CardModule, 
    MatInputModule,
    BowlingStateModule
  ],
  declarations: [StartComponent],
})
export class StartModule {}
