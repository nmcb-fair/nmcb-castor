// Eligible conditions for everyone

// CDC = yes | CCC = yes | IOM = yes
var case_definition = 0;
if({dsqsf_cdc_v2} + {dsqsf_ccc_v1} + {dsqsf_iom_v1} == 3){
    case_definition += 1;
}
else{
    case_definition += 0
};

// gmh_diagnosis01 = ME/CVS | Q-koorts | Lyme | Long COVID
var gmd_pifs = 0;
if ({gmh_diagnosis01} == 1 || {gmh_diagnosis01} == 3 || {gmh_diagnosis01} == 4 || {gmh_diagnosis01} == 5){
    gmd_pifs += 1;
}
else{
    gmd_pifs += 0
};


var me_cfs_subject = 0;

if(case_definition + gmd_pifs + {included} == 3){
    me_cfs_subject += 1;
}
else{
    me_cfs_subject += 0;
};

me_cfs_subject;


