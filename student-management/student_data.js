const students = [
    {
        id: 1,
        name: "Rahul",
        age: 20,
        course: "Computer Science",
        city: "Bengaluru",
        marks: {
            english: 78,
            maths: 85,
            science: 82,
            computerScience: 91,
            socialStudies: 74
        },
        totalMarks: 410,
        percentage: 82
    },
    {
        id: 2,
        name: "Sneha",
        age: 21,
        course: "Information Science",
        city: "Mysuru",
        marks: {
            english: 88,
            maths: 92,
            science: 86,
            computerScience: 95,
            socialStudies: 81
        },
        totalMarks: 442,
        percentage: 88.4
    },
    {
        id: 3,
        name: "Arjun",
        age: 19,
        course: "Electronics",
        city: "Hubli",
        marks: {
            english: 69,
            maths: 77,
            science: 84,
            computerScience: 72,
            socialStudies: 70
        },
        totalMarks: 372,
        percentage: 74.4
    },
    {
        id: 4,
        name: "Priya",
        age: 22,
        course: "Mechanical Engineering",
        city: "Belagavi",
        marks: {
            english: 91,
            maths: 83,
            science: 89,
            computerScience: 86,
            socialStudies: 94
        },
        totalMarks: 443,
        percentage: 88.6
    },
    {
        id: 5,
        name: "Kiran",
        age: 20,
        course: "Computer Science",
        city: "Dharwad",
        marks: {
            english: 75,
            maths: 68,
            science: 73,
            computerScience: 88,
            socialStudies: 79
        },
        totalMarks: 383,
        percentage: 76.6
    }
];

const std_list = () => {
    return students;
};

exports.std_list = std_list;