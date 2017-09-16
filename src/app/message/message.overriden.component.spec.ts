import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MessageComponent } from './message.component';

describe('Message Overridden Component', () => {

    let component: MessageComponent;
    let fixture: ComponentFixture<MessageComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                MessageComponent
            ]
        });

        fixture = TestBed.overrideComponent(MessageComponent, {
            set: {
                template: '<span>{{message}}</span>'
            }
        }).createComponent(MessageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should set the message', () => {
        component.setMessage('Test message');
        fixture.detectChanges();
        fixture.whenStable().then(() => {
            const compiled = fixture.debugElement.nativeElement;
            expect(compiled.querySelector('span').innerText).toEqual('Test message');
        });
        expect(component.message).toEqual('Test message');
    });

});
