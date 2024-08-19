import React from "react";
import {
    Typography,
    Card
 } from "@material-tailwind/react";
import CourseTable from "../datatable/CourseTable";

const TABLE_HEAD = ["Course Name", "Course ID", "Description", "Instructor", "Start Date", "End Date", "Duration", "Mode", ""];

const TABLE_ROWS = [
  {
    id: 1,
    courseName: "Course 1",
    courseDescription: "Lorem ipsum ...",
    instructor: "John Doe",
    startDate: "2022-01-01",
    endDate: "2022-01-31",
    duration: "90",
    mode: "Online",
  },
  {
    id: 2,
    courseName: "Course 2",
    courseDescription: "Lorem ipsum ...",
    instructor: "John Doe",
    startDate: "2022-01-01",
    endDate: "2022-01-31",
    duration: "120",
    mode: "Online",
  }
];

function AllCourses() {
    return (
        <div className="flex-1 ml-64 shadow-none">
            <Card className="h-full w-full shadow-none">
              <CourseTable TABLE_HEAD={TABLE_HEAD} TABLE_ROWS={TABLE_ROWS} />
            </Card>
        </div>
    );
}

export default AllCourses;
