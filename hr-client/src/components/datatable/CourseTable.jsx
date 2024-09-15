import React from "react";

// @material-tailwind/react
import {
    Typography,
    Card,
    CardHeader,
    CardBody,
    IconButton,
    Input,
} from "@material-tailwind/react";

import {
    MagnifyingGlassCircleIcon,
    PencilIcon,
    TrashIcon,
} from "@heroicons/react/24/solid";

function CourseTable({ TABLE_HEAD, TABLE_ROWS }) {
    return (
        <section className="p-4">
            <Card className="h-full w-full shadow-none">
                <CardHeader
                    floated={false}
                    shadow={false}
                    className="rounded-none flex flex-wrap justify-between mb-4"
                >
                    <div className="pt-5">
                        <Typography variant="h4">
                            Employee
                        </Typography>
                    </div>
                    <div className="flex items-center w-full shrink-0 md:w-max pt-5">
                        <div className="w-full md:w-72">
                            <Input
                                size="md"
                                label="Search"
                                icon={
                                    <MagnifyingGlassCircleIcon className="h-5 w-5" />
                                }
                            />
                        </div>
                    </div>
                </CardHeader>
                <CardBody className="overflow-auto !px-0 py-2">
                    <table className="w-full min-w-max table-auto border">
                        <thead>
                            <tr>
                                {TABLE_HEAD.map((head) => (
                                    <th
                                        key={head}
                                        className={`border-b border-gray-300 !p-4 pb-8`}
                                    >
                                        <Typography
                                            variant="small"
                                            className="!font-bold text-left"
                                        >
                                            {head}
                                        </Typography>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {TABLE_ROWS.map(
                                (
                                    {id, courseName, courseDescription, instructor, startDate, endDate, duration, mode},
                                    index
                                ) => {
                                    const isLast =
                                        index === TABLE_ROWS.length - 1;
                                    const classes = isLast
                                        ? "!p-4"
                                        : "!p-4 border-b border-gray-300";
                                    return (
                                        <tr key={id}>
                                            <td className={classes}>
                                                <div className="flex items-center gap-4 text-left">
                                                    <div>
                                                        <Typography
                                                            variant="small"
                                                            color="blue-gray"
                                                            className="!font-semibold"
                                                        >
                                                            {courseName}
                                                        </Typography>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className={classes}>
                                                <Typography
                                                    variant="small"
                                                    className="!font-normal text-gray-600 text-left"
                                                >
                                                    {id}
                                                </Typography>
                                            </td>
                                            <td className={classes}>
                                                <Typography
                                                    variant="small"
                                                    className="!font-bold text-left"
                                                >
                                                    {courseDescription}
                                                </Typography>
                                            </td>
                                            <td className={classes}>
                                                <Typography
                                                    variant="small"
                                                    className="!font-normal text-gray-600 text-left"
                                                >
                                                    {instructor}
                                                </Typography>
                                            </td>
                                            <td className={classes}>
                                                <Typography
                                                    variant="small"
                                                    className="!font-normal text-gray-600 text-left"
                                                >
                                                    {startDate}
                                                </Typography>
                                            </td>
                                            <td className={classes}>
                                                <Typography
                                                    variant="small"
                                                    className="!font-normal text-gray-600 text-left"
                                                >
                                                    {endDate}
                                                </Typography>
                                            </td>
                                            <td className={classes}>
                                                <Typography
                                                    variant="small"
                                                    className="!font-normal text-gray-600 text-left"
                                                >
                                                    {duration}
                                                </Typography>
                                            </td>
                                            <td className={classes}>
                                                <Typography
                                                    variant="small"
                                                    className="!font-normal text-gray-600 text-left"
                                                >
                                                    {mode}
                                                </Typography>
                                            </td>
                                            <td className={classes}>
                                                <div className="flex justify-start gap-4">
                                                    <IconButton
                                                        variant="text"
                                                        size="sm"
                                                    >
                                                        <PencilIcon className="h-5 w-5 text-gray-900" />
                                                    </IconButton>
                                                    <IconButton
                                                        variant="text"
                                                        size="sm"
                                                    >
                                                        <TrashIcon className="h-5 w-5 text-gray-900" />
                                                    </IconButton>
                                                </div>
                                            </td>
                                        </tr>
                                    );
                                }
                            )}
                        </tbody>
                    </table>
                </CardBody>
            </Card>
        </section>
    );
}

export default CourseTable;
