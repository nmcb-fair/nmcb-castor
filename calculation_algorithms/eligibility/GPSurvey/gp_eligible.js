'##allowempty##';
// Eligible conditions for everyone based on GP Survey
// 1.6 = 0 = Geen van onderstaande
var gp_diag_ex = 0;
if ('{gp_diagnosis_exclusion}' == 0){
    gp_diag_ex += 1;
}
else{
    gp_diag_ex += 0
};

// 1.7 = 0 = Nee
var gp_diag_ex_other = 0;
if ('{gp_diagnosis_exclusion_other}' == 0){
    gp_diag_ex_other += 1;
}
else{
    gp_diag_ex_other += 0
};

// 1.8 = 0 = Ze hebben de afgelopen 3 maanden geen van de onderstaande medicijnen gebruikt
var gp_med_history = 0;
if ('{gp_meds01}' == 0){
    gp_med_history += 1;
}
else{
    gp_med_history += 0
};

// Eligible participants based on GP survey
var eligible_participation_gp = 0;

if(gp_diag_ex + gp_diag_ex_other + gp_med_history == 3){
    eligible_participation_gp = 1;
}
else{
    eligible_participation_gp = 0;
};

eligible_participation_gp;
