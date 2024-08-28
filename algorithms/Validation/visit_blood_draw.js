'##allowempty##';
var obj = JSON.parse('{checklist_of_blood_samples_grid}');
if (Object.values(obj[0])[0] == 1) {
 'The values are correct!';
} else {
 'The values are not correct!';
}