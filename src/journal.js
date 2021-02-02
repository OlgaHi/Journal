export default function Journal(title, body) {
  this.title = title;
  this.body = body;
}

Journal.prototype.evalString = function() {
  let myString = this.body.split(" ").length;
  return myString;
  }

Journal.prototype.getConsAndVows = function(){
};