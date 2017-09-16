import { async, ComponentFixture, TestBed, fakeAsync, tick} from '@angular/core/testing';
import { QuoteComponent } from './quote.component';
import { QuoteService } from './quote.service';

class MockQuoteService {

    public quote = 'Test quote';

    getQuote() {
        return Promise.resolve(this.quote);
    }

}

describe('Quote Component: Testing Async Actions', () => {

    let component: QuoteComponent;
    let fixture: ComponentFixture<QuoteComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                QuoteComponent
            ],
            providers: [
                {
                    provide: QuoteService,
                    useClass: MockQuoteService
                }
            ]
        });

        fixture = TestBed.createComponent(QuoteComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should get quote', fakeAsync(() => {
        component.getQuote();
        tick();
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('div').innerText).toEqual('Test quote');
    }));
});
