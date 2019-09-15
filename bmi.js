var mheight, mweight, jheight, jweight;
mheight = 180;
mweight = 65;
jheight = 170;
jweight = 80;

document.write ("<h3>Below is Mike and John's height and weight</h3>")

document.write ("Mike's height and weight are " + mheight + " and   " + mweight + " respectively <br>");

document.write ("John's height is " + jheight + " and his weight is  " + jweight);

mbmi = mweight / (mheight/100)**2;
jbmi = jweight / (jheight/100)**2;

console.log (mbmi + " " + jbmi);

document.write ("<br>Mark's BMI is " + mbmi);
document.write ("<br>John's BMI is " + jbmi);

var compareBmi = jbmi > mbmi;

document.write ("<br>Is John's bmi higher than Mark's? " + compareBmi);