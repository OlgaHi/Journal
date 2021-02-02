import Journal from './../src/journal.js';

  let reusableJournal;

  beforeEach(() => {
  reusableJournal = new Journal("This is a title","This is a short paragraph of text. Inside this paragraph is words.");
  });

  describe('Journal', () => {

  test('should correctly create a journal object with two parameters', () => {
    
    expect(reusableJournal.title).toEqual("This is a title");
    expect(reusableJournal.body).toEqual("This is a short paragraph of text. Inside this paragraph is words.");
  });

  test('should return the number of words in the body', () => {
    expect(reusableJournal.evalString()).toEqual(12);
  });

});