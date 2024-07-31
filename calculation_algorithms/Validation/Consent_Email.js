'##allowempty##';
var valid = 0 ;
var emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\s*$/;
var isValidEmail = emailPattern.test('{email}');

if (isValidEmail) {
 valid =1;
} else {
  valid  = 0;
}