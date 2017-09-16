export class QuoteService {
    public quote: 'Test Quote';

    getQuote() {
        return new Promise<string>((resolve, reject) => {
            resolve(this.quote);
        });
    }
}
