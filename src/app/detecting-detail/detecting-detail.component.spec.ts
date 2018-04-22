import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetectingDetailComponent } from './detecting-detail.component';

describe('DetectingDetailComponent', () => {
  let component: DetectingDetailComponent;
  let fixture: ComponentFixture<DetectingDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetectingDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetectingDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
