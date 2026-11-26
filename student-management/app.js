const res = require('./student_info');

const std = res.add(6, "Laxmi", 20, "Maths", "Bengaluru");
const rem = res.remove(6);
const std_id = res.getstd_id(5);
const std_name = res.getstd_name("Rahul");
const std_blg = res.std_belongs_to("Bengaluru");

console.log(std_blg);