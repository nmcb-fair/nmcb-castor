// Eligible conditions for everyone

// CDC = no & CCC = no & iom = no
var clinical_control = 0;
if({dsqsf_cdc_v2} + {dsqsf_ccc_v1} + {dsqsf_iom_v1} == 0){
    clinical_control += 1;
}
else{
    clinical_control += 0
};

// gmh_diagnosis01 = (Q-koorts | Lyme | Long COVID) & not ME/CVS
var clinical_control_pif = 0;
if (({gmh_diagnosis01} == 3 || {gmh_diagnosis01} == 4 || {gmh_diagnosis01} == 5) && {gmh_diagnosis01} != 1){
    clinical_control_pif += 1;
}
else{
    clinical_control_pif += 0
};


var clinical_control_subject = 0;

if(clinical_control + clinical_control_pif + {included} == 3){
    clinical_control_subject += 1;
}
else{
    clinical_control_subject += 0;
};

clinical_control_subject;