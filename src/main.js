import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import './css/styles.css';
import Journal from './journal.js';
$(document).ready(function() {
  $('#triangle-checker-form').submit(function(event) {
    event.preventDefault();
    // const length1 = $('#length1').val();
    // const length2 = $('#length2').val();
    // const length3 = $('#length3').val();
    const journal = new Journal("my JOurnal", "Here is the text for it, also, olha loves coding")
    const response = journal.evalString();
    $('#response').append("<p>" + response + "</p>");
  });
});