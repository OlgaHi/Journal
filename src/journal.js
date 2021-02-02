export default function Journal(title, body) {
  this.title = title;
  this.body = body;
}

Journal.prototype.evalString = function() {
  let myString = this.body.split(" ").length;
  return myString;
};

Journal.prototype.getConsAndVows = function(){
  let letterArray = this.body.split("");
  let cons = 0;
  let vows = 0;

  for (let i = 0; i < letterArray.length; i++) {

    let letter = letterArray[i];
    if (!letter.match(/[A-Z]/i)) {
      continue;
    }
    if (letter.match(/[aeiou]/)) {vows ++;}
    else {cons ++;}
  }
  return [cons,vows];
};

Journal.prototype.getTeaser = function() {
  if (this.body.includes(".")) {
    let firstPer = this.body.indexOf(".");
    let firstSentence = this.body.slice(0,firstPer+1);
    let words = firstSentence.split(" ");
    if (words.length > 8) {
      let shortSentence = words.slice(0,8);
      return shortSentence.join(" ")+"...";
    }
    else {
      return firstSentence;
    }
  } else {
    let words = this.body.split(" ");
    if (words.length > 8) {
      let shortSentence = words.slice(0,8);
      return shortSentence.join(" ")+"...";
    } else {
      return this.body;
    }
  }
}