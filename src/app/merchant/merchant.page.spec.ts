import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { MerchantPage } from './merchant.page';

describe('MerchantPage', () => {
  let component: MerchantPage;
  let fixture: ComponentFixture<MerchantPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerchantPage ],
      imports: [IonicModule.forRoot(), RouterModule.forRoot([])]
    }).compileComponents();

    fixture = TestBed.createComponent(MerchantPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
