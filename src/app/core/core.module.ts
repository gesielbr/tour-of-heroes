import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MessagesComponent } from './components/messages/messages.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';

const COMPONENTS = [MessagesComponent, ToolbarComponent];

const MODULES = [FlexLayoutModule, MaterialModule];

@NgModule({
  declarations: [COMPONENTS],
  imports: [MODULES, RouterModule],
  exports: [COMPONENTS, MODULES],
})
export class CoreModule {}
