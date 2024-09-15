import React from "react";
import { Typography, Card } from "@material-tailwind/react";
import CourseCard from "./CourseCard";

const TABLE_HEAD = [
    "Course Name",
    "Course ID",
    "Description",
    "Instructor",
    "Start Date",
    "End Date",
    "Duration",
    "Mode",
    "",
];

const TABLE_ROWS = [
    {
        id: 1,
        courseName: "Java 17 Masterclass: Start Coding in 2024",
        courseDescription: "Lorem ipsum ...",
        instructor: "Tim Buchalka",
        startDate: "2022-01-01",
        endDate: "2022-01-31",
        duration: "90",
        mode: "Online",
        link: "https://img-c.udemycdn.com/course/240x135/533682_c10c_4.jpg"
    },
    {
        id: 2,
        courseName: "Clean Code",
        courseDescription: "Lorem ipsum ...",
        instructor: "Academind",
        startDate: "2022-01-01",
        endDate: "2022-01-31",
        duration: "120",
        mode: "Online",
        link: "https://img-c.udemycdn.com/course/240x135/3611296_bcb5_6.jpg"
    },
];

function AllCourses() {
    return (
        <div className="shadow-none p-8 w-full">
            <Typography variant="h4" color="blue-gray" className="mb-8">
                Courses
                <hr className="w-24 bg-purple-900 h-1 rounded-full" />
            </Typography>
            <div className="flex gap-3 gap-y-10 flex-wrap-reverse">
                <button className="text-left">
                    <CourseCard TABLE_ROWS={TABLE_ROWS[0]} />
                </button>
                <button className="text-left">
                    <CourseCard TABLE_ROWS={TABLE_ROWS[1]} />
                </button>
                <button className="text-left">
                    <CourseCard TABLE_ROWS={TABLE_ROWS[0]} />
                </button>
                <button className="text-left">
                    <CourseCard TABLE_ROWS={TABLE_ROWS[1]} />
                </button>
                {/* <Card className="h-full w-full shadow-none">
              <CourseTable TABLE_HEAD={TABLE_HEAD} TABLE_ROWS={TABLE_ROWS} />
            </Card> */}
            </div>
        </div>
    );
}

export default AllCourses;
