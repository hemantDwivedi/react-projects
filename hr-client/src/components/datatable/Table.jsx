import React from "react";

// @material-tailwind/react
import {
    Typography,
    Card,
    CardHeader,
    CardBody,
    IconButton,
    Input,
    Button,
} from "@material-tailwind/react";

import {
    MagnifyingGlassCircleIcon,
    PencilIcon,
    TrashIcon,
} from "@heroicons/react/24/solid";

function DTable({ TABLE_HEAD, TABLE_ROWS }) {
    return (
        <section className="m-4">
            <Card className="h-full w-full shadow-none">
                <CardHeader
                    floated={false}
                    shadow={false}
                    className="rounded-none flex flex-wrap justify-between mb-4 py-5"
                >
                    <div>
                        <Typography variant="h5">
                            Employee
                        </Typography>
                    </div>
                    <div className="flex items-center gap-2 w-full shrink-0 md:w-max">
                        <div className="">
                            <Input
                                size="md"
                                label="Employee ID"
                            />
                        </div>
                        <div className="">
                           <Button className="bg-purple-900">search</Button>
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
                                    { name, id, email, phone, joined, role },
                                    index
                                ) => {
                                    const isLast =
                                        index === TABLE_ROWS.length - 1;
                                    const classes = isLast
                                        ? "!p-4"
                                        : "!p-4 border-b border-gray-300";
                                    return (
                                        <tr key={name}>
                                            <td className={classes}>
                                                <div className="flex items-center gap-4 text-left">
                                                    <div>
                                                        <Typography
                                                            variant="small"
                                                            color="blue-gray"
                                                            className="!font-semibold"
                                                        >
                                                            {name}
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
                                                    {email}
                                                </Typography>
                                            </td>
                                            <td className={classes}>
                                                <Typography
                                                    variant="small"
                                                    className="!font-normal text-gray-600 text-left"
                                                >
                                                    {phone}
                                                </Typography>
                                            </td>
                                            <td className={classes}>
                                                <Typography
                                                    variant="small"
                                                    className="!font-normal text-gray-600 text-left"
                                                >
                                                    {joined}
                                                </Typography>
                                            </td>
                                            <td className={classes}>
                                                <Typography
                                                    variant="small"
                                                    className="!font-normal text-gray-600 text-left"
                                                >
                                                    {role}
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

export default DTable;
