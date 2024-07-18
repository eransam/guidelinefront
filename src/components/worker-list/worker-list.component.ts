import { Component, OnInit } from '@angular/core';
import { WorkerService } from '../../services/worker.service';

@Component({
  selector: 'app-worker-list',
  templateUrl: './worker-list.component.html',
  styleUrls: ['./worker-list.component.scss'],
})
export class WorkerListComponent implements OnInit {
  workers: any[] = [];
  selectedWorker: any; // Define selectedWorker property

  constructor(private workerService: WorkerService) {}

  ngOnInit(): void {
    this.workerService.getWorkers().subscribe((data) => {
      this.workers = data;
    });
  }

  showDetails(worker: any): void {
    this.selectedWorker = worker;
  }

  getDepartmentName(department: number): string {
    switch (department) {
      case 0:
        return 'General';
      case 1:
        return 'Accounting';
      case 2:
        return 'Sales';
      case 3:
        return 'Engineering';
      case 4:
        return 'Security';
      default:
        return 'Unknown';
    }
  }

  getWorkerTypeName(workerType: number): string {
    switch (workerType) {
      case 0:
        return 'General Manager';
      case 1:
        return 'Department Manager';
      case 2:
        return 'Team Manager';
      case 3:
        return 'Professional';
      case 4:
        return 'Security Officer';
      default:
        return 'Unknown';
    }
  }
}
