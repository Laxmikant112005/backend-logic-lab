const {std_list} = require('./student_data.js');
const students = std_list();
// console.log(students);
const add = (id, name, age, course, city) =>{
    students.push({id, name, age, course, city});
    return students;
};

const remove = (id) => {
    const val = students.find(std => std.id == id);
    const ind = students.indexOf(val);
    students.splice(ind, 0);
    return students;
};

const getstd_id = (id) =>{
    const val = students.find(std => std.id == id);
    const ind = students.indexOf(val);
    return students[ind];
}

const getstd_name = (name) => {
    return students.find(std => std.name == name);
}

const std_belongs_to = (city) => {
    const std = [];
    for(let i=0; i<students.length; i++){
        if(students[i].city == city){
            std.push(students[i]);
        }
    }

    return std;
}
module.exports = {add, remove, getstd_id, getstd_name, std_belongs_to};