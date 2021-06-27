import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthJournalComponent } from './health-journal.component';

describe('HealthJournalComponent', () => {
  let component: HealthJournalComponent;
  let fixture: ComponentFixture<HealthJournalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealthJournalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthJournalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
