'Karnofsky Performance Scale (calckps)'
'##allowempty##'
if({kps_normalactivity}==1 && {kps_symptoms}==0){
 100;
}else if({kps_normalactivity}==1 && {kps_symptoms}==1){
 90;
}else if({kps_normalactivity}==1 && {kps_symptoms}==2){
 80;
}else if({kps_normalactivity}==0 && {kps_ambulatory}==1 && {kps_assistance}==0){
 70;
}else if({kps_normalactivity}==0 && {kps_ambulatory}==1 && {kps_assistance}==1){
 60;
}else if({kps_normalactivity}==0 && {kps_ambulatory}==1 && {kps_assistance}==2){
 50;
}else if({kps_normalactivity}==0 && {kps_ambulatory}==0 && {kps_walk}==1){
 40;
}else if({kps_normalactivity}==0 && {kps_ambulatory}==0 && {kps_walk}==2){
 30;
}else if({kps_normalactivity}==0 && {kps_ambulatory}==0 && {kps_walk}==3){
 20;
}else if({kps_normalactivity}==0 && {kps_ambulatory}==0 && {kps_walk}==4){
 10;
};

##Kanofsky Severity Categories (calcseverity)
var severity = 0;
if({calckps}<=40){
	severity+=1;
} else if({calckps}>=50 && {calckps}<=70){
	severity+=2;
} else if({calckps}>=80){
	severity+=3;
};

'##allowempty##';
if({kps_normalactivity_1}==1 && {kps_symptoms_1}==0) {
    100;}
else if({kps_normalactivity_1}==1 && {kps_symptoms_1}==1) {
    90;}
else if({kps_normalactivity_1}==1 && {kps_symptoms_1}==2){
    80;}
else if({kps_normalactivity_1}==0 && {kps_bedridden}==1 && {kps_assistance_1}==0){
    70;}
else if({kps_normalactivity_1}==0 && {kps_bedridden}==1 && {kps_assistance_1}==1){
    60;}
else if({kps_normalactivity_1}==0 && {kps_bedridden}==1 && {kps_assistance_1}==2){
    50;}
else if({kps_normalactivity_1}==0 && {kps_bedridden}==0 && {kps_beddegree}==40){
    40;}
else if({kps_normalactivity_1}==0 && {kps_bedridden}==0 && {kps_beddegree}==30){
    30;}
else if({kps_normalactivity_1}==0 && {kps_bedridden}==0 && {kps_beddegree}==20){
    20;}
else if({kps_normalactivity_1}==0 && {kps_bedridden}==0 && {kps_beddegree}==10){
    10;}
;