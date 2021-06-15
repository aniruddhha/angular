import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DtIpComponent } from './dt-ip.component';

describe('DtIpComponent', () => {
  let component: DtIpComponent;
  let fixture: ComponentFixture<DtIpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DtIpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DtIpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
