import { Component, OnInit } from '@angular/core';
import { WorkerService } from '../../services/worker.service';

@Component({
  selector: 'app-worker-list',
  templateUrl: './worker-list.component.html',
  styleUrls: ['./worker-list.component.scss'],
})
export class WorkerListComponent implements OnInit {
  workers: any[] = [];
  selectedWorker: any;

  constructor(private workerService: WorkerService) {}

  ngOnInit(): void {
    this.workerService.getWorkers().subscribe((data) => {
      this.workers = data;
    });
  }

  showDetails(worker: any): void {
    this.selectedWorker = worker;
  }
}
