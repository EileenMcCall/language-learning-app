import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { authReducer } from './auth.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './auth.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('auth', authReducer),
    EffectsModule.forFeature([AuthEffects])
  ],
  providers: [
    AuthEffects
  ]
})
export class AuthStoreModule { }
