import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowmuseumComponent } from './showmuseum.component';

describe('ShowmuseumComponent', () => {
  let component: ShowmuseumComponent;
  let fixture: ComponentFixture<ShowmuseumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowmuseumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowmuseumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
