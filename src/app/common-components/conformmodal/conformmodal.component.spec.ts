import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConformmodalComponent } from './conformmodal.component';

describe('ConformmodalComponent', () => {
  let component: ConformmodalComponent;
  let fixture: ComponentFixture<ConformmodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConformmodalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConformmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
