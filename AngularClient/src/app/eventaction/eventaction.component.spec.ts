import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventactionComponent } from './eventaction.component';

describe('EventactionComponent', () => {
  let component: EventactionComponent;
  let fixture: ComponentFixture<EventactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EventactionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EventactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
