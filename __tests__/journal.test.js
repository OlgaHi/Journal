import Journal from './../src/journal.js';

  let reusableJournal;

  beforeEach(() => {
    reusableJournal = new Journal("This is a title","Hello world.");
  });

  describe('Journal', () => {

  test('should correctly create a journal object with two parameters', () => {
    
    expect(reusableJournal.title).toEqual("This is a title");
    expect(reusableJournal.body).toEqual("Hello world.");
  });

  test('should return the number of words in the body', () => {
    expect(reusableJournal.evalString()).toEqual(2);
  });

  test('should return the numbers of the vowels and consonants in an entry', () => {
    expect(reusableJournal.getConsAndVows()).toEqual([7,3]);
  });
});