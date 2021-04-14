import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesReelItemComponent } from './images-reel-item.component';

describe('ImagesReelItemComponent', () => {
  let component: ImagesReelItemComponent;
  let fixture: ComponentFixture<ImagesReelItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagesReelItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagesReelItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
