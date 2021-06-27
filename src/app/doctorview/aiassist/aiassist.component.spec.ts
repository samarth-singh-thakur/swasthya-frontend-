import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiassistComponent } from './aiassist.component';

describe('AiassistComponent', () => {
  let component: AiassistComponent;
  let fixture: ComponentFixture<AiassistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AiassistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AiassistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
