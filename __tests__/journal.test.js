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

  test('should return the first 8 words of the first sentence if it is over 8 words long', () => {
    const journal = new Journal("my JOurnal", "Here is the text for it, also, olha loves coding.");
    expect(journal.getTeaser()).toEqual("Here is the text for it, also, olha...");
  });

  test('should return the first sentence from the body if it is under 8 words long', () => {
    const journal = new Journal("my JOurnal", "Here is the text for it. Also, olha loves coding");
    expect(journal.getTeaser()).toEqual("Here is the text for it.");
  });

  test('should return the first 8 words of the first sentence if it is over 8 words long without a period', () => {
    const journal = new Journal("my JOurnal", "Here is the text for it, also, olha loves coding");
    expect(journal.getTeaser()).toEqual("Here is the text for it, also, olha...");
  });

  test('should return the first sentence from the body if it is under 8 words long  without a period', () => {
    const journal = new Journal("my JOurnal", "Here is the text for it");
    expect(journal.getTeaser()).toEqual("Here is the text for it");
  });
});