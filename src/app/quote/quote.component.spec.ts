import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';
import {
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { destroyPlatform } from '@angular/core';

import { QuoteService } from './quote.service';
import { QuoteComponent } from './quote.component';


class MockQuoteService {

    public quote = 'Test quote';

    getQuote() {
        return Promise.resolve(this.quote);
    }
}

describe('Quote Component', () => {

    let component: QuoteComponent;
    let fixture: ComponentFixture<QuoteComponent>;

    // beforeEach(() => destroyPlatform());

    beforeEach(() => {

        /*
        TestBed.initTestEnvironment(
            BrowserDynamicTestingModule,
            platformBrowserDynamicTesting()
        );
        */

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

    it('should get quote', async(inject([], () => {
        component.getQuote();
        fixture.whenStable().then(() => {
            fixture.detectChanges();
            return fixture.whenStable();
        }).then(() => {
            const compiled = fixture.debugElement.nativeElement;
            expect(compiled.querySelector('div').innerText).toEqual('Test quote');
        });
    })));

});
