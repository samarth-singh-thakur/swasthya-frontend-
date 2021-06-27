import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JournalviewComponent } from './journalview.component';

describe('JournalviewComponent', () => {
  let component: JournalviewComponent;
  let fixture: ComponentFixture<JournalviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JournalviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JournalviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
