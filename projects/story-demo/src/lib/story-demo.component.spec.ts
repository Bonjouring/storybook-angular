import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryDemoComponent } from './story-demo.component';

describe('StoryDemoComponent', () => {
  let component: StoryDemoComponent;
  let fixture: ComponentFixture<StoryDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoryDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
