import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionistListComponent } from './professionist-list.component';

describe('ProfessionistListComponent', () => {
  let component: ProfessionistListComponent;
  let fixture: ComponentFixture<ProfessionistListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessionistListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionistListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
