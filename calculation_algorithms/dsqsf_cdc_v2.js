'##allowempty##';
var fatigue = 0;

'Fatigue'
if({dsq_fatigue_freq}>=1 && {dsq_fatigue_sev}>=1){
fatigue+=1;
}
else{
fatigue+=0};

'Soreness'
var sore = 0;
if({dsq_soreness_freq}>=1 && {dsq_soreness_sev}>=1){
sore+=1;}
else{
sore+=0};

'Exercise intolerance'
var excs = 0;
if({dsq_minexercise_freq}>=1 && {dsq_minexercise_sev}>=1){
excs+=1;
}
else{
excs+=0};

var pem = 0;
if(sore + excs >=1){
pem+=1;
}
else{
pem+=0};

var sleep = 0;
if({dsq_unrefreshed_freq}>=1 && {dsq_unrefreshed_sev}>=1){
sleep+=1;
}
else{
sleep+=0};

var memory = 0;
var atten = 0;
var cog = 0;
if({dsq_memory_freq}>=1 && {dsq_memory_sev}>=1){
memory+=1;
}
else{
memory+=0};

if({dsq_attention_freq}>=1 && {dsq_attention_sev}>=1){
atten+=1;
}
else{
atten+=0};

if(memory + atten >= 1){
cog+=1;
}
else{
cog+=0};

var pain = 0;
if({dsq_pain_freq}>=1 && {dsq_pain_sev}>=1){
pain+=1;
}
else{
pain+=0};

var immun = 0;
if({dsq_flu_freq}>=1 && {dsq_flu_freq}>=1){
immun+=1;
}
else{
immun+=0};

var symptoms = 0;
if(pem + sleep + cog + pain + immun>=4){
symptoms+=1;
}
else{
symptoms+=0};

var cdc = 0;
if(fatigue + symptoms==2){
cdc+=1;
}
else{
cdc+=0};
cdc;