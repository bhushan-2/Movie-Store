import { TestBed } from '@angular/core/testing';
import { AlertService } from './alert.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';


describe('AlertService', () => {
  let service: AlertService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToastrModule.forRoot()],
      providers: [{ provide: ToastrService, useClass: ToastrService }],
    }).compileComponents();
  });

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlertService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
