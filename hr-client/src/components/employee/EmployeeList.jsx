import React from "react";
import { Typography, Card } from "@material-tailwind/react";
import DTable from "../datatable/Table";
import EmployeeCard from "./EmployeeCard";

const TABLE_HEAD = ["Name", "ID", "Email", "Phone", "Joined", "Role", ""];

const TABLE_ROWS = [
    {
        name: "John Michael",
        id: "123456",
        email: "5Lk6K@example.com",
        phone: "1234567890",
        joined: "2023-04-18",
        role: "Manager",
    },
];

function EmployeeList() {
    return (
        <div className="shadow-none p-8">
            <Typography variant="h4" color="blue-gray" className="mb-2">
                Employee
            </Typography>
            <div className="flex gap-4 gap-y-20 justify-start flex-wrap">
            <EmployeeCard team={1} />
            <EmployeeCard team={2} />
            <EmployeeCard team={3} />
            <EmployeeCard team={4} />
            <EmployeeCard team={5} />
            <EmployeeCard team={6} />
            <EmployeeCard team={2} />
            <EmployeeCard team={5} />
            <EmployeeCard team={6} />
            <EmployeeCard team={2} />
            <EmployeeCard team={3} />
            <EmployeeCard team={5} />
            <EmployeeCard team={6} />
            </div>
            {/* <Card className="h-full w-full shadow-none">
              <DTable TABLE_HEAD={TABLE_HEAD} TABLE_ROWS={TABLE_ROWS} />
            </Card> */}
        </div>
    );
}

export default EmployeeList;
