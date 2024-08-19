import React from "react";
import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import {
    UserCircleIcon,
    PowerIcon,
    AcademicCapIcon,
    CreditCardIcon,
    ClockIcon,
    UserIcon,
    ArrowRightEndOnRectangleIcon,
    ArrowLeftStartOnRectangleIcon,
    TableCellsIcon,
    CurrencyRupeeIcon,
} from "@heroicons/react/24/solid";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import UserAvatar from "./profile/UserAvatar";
import { Link } from "react-router-dom";

export default function Sidebar() {
    const [open, setOpen] = React.useState(0);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

    return (
        <Card
            className="h-[100vh] py-4 rounded-none border-r-2 sticky left-0 top-0"
            shadow={false}
        >
            {/* <Typography variant="h4" className="text-center text-black">
                HR MANAGEMENT
            </Typography> */}
            {/* <hr className="my-2 border-blue-gray-800" /> */}
            <div className="my-8 px-5">
                <UserAvatar />
            </div>
            <List className="px-3">
                <Accordion
                    open={open === 1}
                    icon={
                        <ChevronDownIcon
                            strokeWidth={2.5}
                            className={`mx-auto h-4 w-4 transition-transform ${
                                open === 1 ? "rotate-180" : ""
                            }`}
                        />
                    }
                >
                    <ListItem className="p-0" selected={open === 1}>
                        <AccordionHeader
                            onClick={() => handleOpen(1)}
                            className="border-b-0 p-3"
                        >
                            <ListItemPrefix>
                                <UserIcon className="h-5 w-5" />
                            </ListItemPrefix>
                            <Typography
                                color="blue-gray"
                                className="mr-auto font-normal"
                            >
                                Employee
                            </Typography>
                        </AccordionHeader>
                    </ListItem>
                    <AccordionBody className="py-1">
                        <List className="p-0">
                            <Link to={"/employees"}>
                            <ListItem>
                                <Typography
                                    color="blue-gray"
                                    className="mr-auto font-normal text-sm"
                                >
                                    All Employees
                                </Typography>
                            </ListItem>
                            </Link>
                            <Link to={"/add-employee"}>
                            <ListItem>
                            <Typography
                                    color="blue-gray"
                                    className="mr-auto font-normal text-sm"
                                >
                                    Add Employee
                                </Typography>
                            </ListItem>
                            </Link>
                            <Link to={"/add-department"}>
                            <ListItem>
                                 <Typography
                                    color="blue-gray"
                                    className="mr-auto font-normal text-sm"
                                >
                                    Add Department
                                </Typography>
                            </ListItem>
                            </Link>
                        </List>
                    </AccordionBody>
                </Accordion>
                <Accordion
                    open={open === 2}
                    icon={
                        <ChevronDownIcon
                            strokeWidth={2.5}
                            className={`mx-auto h-4 w-4 transition-transform ${
                                open === 2 ? "rotate-180" : ""
                            }`}
                        />
                    }
                >
                    <ListItem className="p-0" selected={open === 2}>
                        <AccordionHeader
                            onClick={() => handleOpen(2)}
                            className="border-b-0 p-3"
                        >
                            <ListItemPrefix>
                                <AcademicCapIcon className="h-5 w-5" />
                            </ListItemPrefix>
                            <Typography
                                color="blue-gray"
                                className="mr-auto font-normal"
                            >
                                Training
                            </Typography>
                        </AccordionHeader>
                    </ListItem>
                    <AccordionBody className="py-1">
                        <List className="p-0">
                            <Link to={"/enrollments"}>
                            <ListItem>
                            <Typography
                                    color="blue-gray"
                                    className="mr-auto font-normal text-sm"
                                >
                                    Enrollments
                                </Typography>
                            </ListItem>
                            </Link>
                            <Link to={"/courses"}>
                            <ListItem>
                            <Typography
                                    color="blue-gray"
                                    className="mr-auto font-normal text-sm"
                                >
                                    Courses
                                </Typography>
                            </ListItem>
                            </Link>
                            <Link to={"/add-course"}>
                            <ListItem>
                            <Typography
                                    color="blue-gray"
                                    className="mr-auto font-normal text-sm"
                                >
                                    Add Course
                                </Typography>
                            </ListItem>
                            </Link>
                        </List>
                    </AccordionBody>
                </Accordion>
                <Accordion
                    open={open === 3}
                    icon={
                        <ChevronDownIcon
                            strokeWidth={2.5}
                            className={`mx-auto h-4 w-4 transition-transform ${
                                open === 3 ? "rotate-180" : ""
                            }`}
                        />
                    }
                >
                    <ListItem className="p-0" selected={open === 3}>
                        <AccordionHeader
                            onClick={() => handleOpen(3)}
                            className="border-b-0 p-3"
                        >
                            <ListItemPrefix>
                                <ClockIcon className="h-5 w-5" />
                            </ListItemPrefix>
                            <Typography
                                color="blue-gray"
                                className="mr-auto font-normal"
                            >
                                Attendance
                            </Typography>
                        </AccordionHeader>
                    </ListItem>
                    <AccordionBody className="py-1">
                        <List className="p-0">
                            <ListItem>
                                <ListItemPrefix>
                                    <ArrowRightEndOnRectangleIcon className="h-5 w-5" />
                                </ListItemPrefix>
                                Entry
                            </ListItem>
                            <ListItem>
                                <ListItemPrefix>
                                    <ArrowLeftStartOnRectangleIcon className="h-5 w-5" />
                                </ListItemPrefix>
                                Leave
                            </ListItem>
                        </List>
                    </AccordionBody>
                </Accordion>
                <Accordion
                    open={open === 4}
                    icon={
                        <ChevronDownIcon
                            strokeWidth={2.5}
                            className={`mx-auto h-4 w-4 transition-transform ${
                                open === 4 ? "rotate-180" : ""
                            }`}
                        />
                    }
                >
                    <ListItem className="p-0" selected={open === 4}>
                        <AccordionHeader
                            onClick={() => handleOpen(4)}
                            className="border-b-0 p-3"
                        >
                            <ListItemPrefix>
                                <CreditCardIcon className="h-5 w-5" />
                            </ListItemPrefix>
                            <Typography
                                color="blue-gray"
                                className="mr-auto font-normal"
                            >
                                Payroll
                            </Typography>
                        </AccordionHeader>
                    </ListItem>
                    <AccordionBody className="py-1">
                        <List className="p-0">
                            <ListItem>
                                <ListItemPrefix>
                                    <TableCellsIcon className="h-5 w-5" />
                                </ListItemPrefix>
                                Records
                            </ListItem>
                            <ListItem>
                                <ListItemPrefix>
                                    <CurrencyRupeeIcon className="h-5 w-5" />
                                </ListItemPrefix>
                                Payslips
                            </ListItem>
                        </List>
                    </AccordionBody>
                </Accordion>
                <hr className="my-2 border-blue-gray-50" />
                <ListItem>
                    <ListItemPrefix>
                        <UserCircleIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    Profile
                </ListItem>
                <ListItem>
                    <ListItemPrefix>
                        <PowerIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    Log Out
                </ListItem>
            </List>
        </Card>
    );
}
