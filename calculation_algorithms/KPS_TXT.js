##KPS AND Dependency (calckps01)
if({kps_normalactivity}==0 && {kps_ambulatory}==1){
1;
} else {
0;
};


##Karnofsky Performance Scale (calckps)
'##allowempty##';
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
