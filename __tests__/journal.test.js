import Journal from './../src/journal.js';

describe('Journal', () => {

  test('should correctly create a journal object with two parameters', () => {
    const journal = new Journal("This is a title","This is a short paragraph of text. Inside this paragraph is words.");
    expect(journal.title).toEqual("This is a title");
    expect(journal.body).toEqual("This is a short paragraph of text. Inside this paragraph is words.");
  });


});