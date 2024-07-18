import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-worker-details-panel',
  templateUrl: './worker-details-panel.component.html',
  styleUrls: ['./worker-details-panel.component.scss']
})
export class WorkerDetailsPanelComponent {
  @Input() selectedWorker: any;

  getDepartmentName(department: number): string {
    // Implement logic to map department number to department name
    switch (department) {
      case 0: return 'General';
      case 1: return 'Accounting';
      case 2: return 'Sales';
      case 3: return 'Engineering';
      case 4: return 'Security';
      default: return 'Unknown';
    }
  }

  getWorkerTypeName(workerType: number): string {
    // Implement logic to map worker type number to worker type name
    switch (workerType) {
      case 0: return 'General Manager';
      case 1: return 'Department Manager';
      case 2: return 'Team Manager';
      case 3: return 'Professional';
      case 4: return 'Security Officer';
      default: return 'Unknown';
    }
  }
}
