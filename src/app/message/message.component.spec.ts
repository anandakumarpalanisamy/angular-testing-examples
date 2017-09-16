import { MessageComponent } from './message.component';

describe('Message Component', () => {

    let component: MessageComponent;

    beforeEach(() => {
        component = new MessageComponent();
    });

    it('should set new message', () => {
        component.setMessage('Testing');
        expect(component.message).toBe('Testing');
    });

    it('should clear message', () => {
        component.clearMessage();
        expect(component.message).toBe('');
    });

});
