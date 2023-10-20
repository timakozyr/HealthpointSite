import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideElementComponent } from './slide-element.component';

describe('SlideElementComponent', () => {
  let component: SlideElementComponent;
  let fixture: ComponentFixture<SlideElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlideElementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlideElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
