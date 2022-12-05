import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { RootReducer } from './state/reducers';
import { EffectsModule } from "@ngrx/effects"
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from "@ngrx/store-devtools"
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [ AppComponent ],
  imports:      [ 
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    StoreModule.forRoot(RootReducer.reducer),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    })
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
