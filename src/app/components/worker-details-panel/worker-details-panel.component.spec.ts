import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerDetailsPanelComponent } from './worker-details-panel.component';

describe('WorkerDetailsPanelComponent', () => {
  let component: WorkerDetailsPanelComponent;
  let fixture: ComponentFixture<WorkerDetailsPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkerDetailsPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkerDetailsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
