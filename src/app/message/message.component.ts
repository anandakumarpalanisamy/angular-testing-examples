import { Component } from '@angular/core';

@Component({
    selector: 'app-display-message',
    template: '<h1>{{ message }}</h1>'
})
export class MessageComponent {

    public message = '';

    constructor() { }

    setMessage(newMessage: string) {
        this.message = newMessage;
    }

    clearMessage() {
        this.message = '';
    }
}
