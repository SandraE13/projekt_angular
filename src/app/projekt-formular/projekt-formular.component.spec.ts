import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjektFormularComponent } from './projekt-formular.component';

describe('ProjektFormularComponent', () => {
  let component: ProjektFormularComponent;
  let fixture: ComponentFixture<ProjektFormularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjektFormularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjektFormularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
