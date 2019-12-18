import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionistEditComponent } from './professionist-edit.component';

describe('ProfessionistEditComponent', () => {
  let component: ProfessionistEditComponent;
  let fixture: ComponentFixture<ProfessionistEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessionistEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionistEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
