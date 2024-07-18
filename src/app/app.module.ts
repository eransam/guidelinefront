import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Add this line
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkerListComponent } from '../components/worker-list/worker-list.component';
import { WorkerService } from '../services/worker.service';
import { WorkerDetailsPanelComponent } from './components/worker-details-panel/worker-details-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkerListComponent,
    WorkerDetailsPanelComponent, // Add this line
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, // Add this line
  ],
  providers: [
    provideClientHydration(),
    WorkerService, // Add this line
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
