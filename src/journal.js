export default function Journal(title, body) {
  this.title = title;
  this.body = body;
}

Journal.prototype.evalString = function() {
  let myString = this.body.split(" ").length;
  console.log(myString);
}