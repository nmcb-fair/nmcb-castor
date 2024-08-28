'##allowempty##';

// For 1.4 Controleer of de datum van de diagnose ME/CVS juist is ingevoerd.
var date_of_diag = moment('{gp_diagnosis_date_me}', 'DD-MM-YYYY');
var today = moment();
var date_validity = 0

month_diff = today.diff(date_of_diag, 'months')

if (month_diff < 3){
    date_validity = 0;
}
else {
    date_validity = 1;
}

date_validity;



