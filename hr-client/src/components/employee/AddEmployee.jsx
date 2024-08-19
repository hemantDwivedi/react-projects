import React from "react";

// @material-tailwind/react
import {
    Input,
    Typography,
    Select,
    Option,
    Popover,
    Button,
    PopoverHandler,
    PopoverContent,
} from "@material-tailwind/react";

// day picker
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";

// @heroicons/react
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

function EmployeeForm() {
    const [date, setDate] = React.useState();

    return (
        <section className="p-20">
            <Typography variant="h5" color="blue-gray">
                Employee Basic Information
            </Typography>
            <div className="mt-8">
                <div className="flex gap-4 mb-8">
                    <div className="w-full">
                        <Input
                            label="First Name"
                            size="md"
                            className="w-full bg-gray-50"
                        />
                    </div>
                    <div className="w-full">
                        <Input
                            label="Last Name"
                            size="md"
                            className="w-full bg-gray-50"
                        />
                    </div>
                </div>
                <div className="flex gap-4 mb-8">
                    <div className="w-full">
                        <Input
                            label="Email"
                            size="md"
                            className="w-full bg-gray-50"
                        />
                    </div>
                    <div className="w-full">
                        <Input
                            label="Password"
                            size="md"
                            type="password"
                            className="w-full bg-gray-50"
                        />
                    </div>
                    <div className="w-full">
                        <Input
                            label="Phone"
                            size="md"
                            className="w-full bg-gray-50"
                        />
                    </div>
                </div>
                <div className="mb-8 flex flex-col gap-2 md:flex-row">
                    <div className="">
                        <Select
                            label="Gender"
                            size="md"
                            className="aria-[expanded=true]:border-t-primary bg-gray-50"
                        >
                            <Option>Male</Option>
                            <Option>Female</Option>
                        </Select>
                    </div>
                    <div className="w-full">
                        <Popover placement="bottom">
                            <PopoverHandler>
                                <Input
                                    label="Date of Birth"
                                    size="md"
                                    onChange={() => null}
                                    value={
                                        date ? format(date, "yyyy-MM-dd") : ""
                                    }
                                    className="w-full bg-gray-50"
                                />
                            </PopoverHandler>
                            <PopoverContent>
                                <DayPicker
                                    mode="single"
                                    selected={date}
                                    onSelect={setDate}
                                    showOutsideDays
                                    className="border-0"
                                    classNames={{
                                        caption:
                                            "flex justify-center py-2 mb-4 relative items-center",
                                        caption_label:
                                            "text-md !font-medium text-gray-900",
                                        nav: "flex items-center",
                                        nav_button:
                                            "h-6 w-6 bg-transparent hover:bg-blue-gray-50 p-1 rounded-md transition-colors duration-300",
                                        nav_button_previous:
                                            "absolute left-1.5",
                                        nav_button_next: "absolute right-1.5",
                                        table: "w-full border-collapse",
                                        head_row:
                                            "flex !font-medium text-gray-900",
                                        head_cell:
                                            "m-0.5 w-9 !font-normal text-sm",
                                        row: "flex w-full mt-2",
                                        cell:
                                            "text-gray-600 rounded-md h-9 w-9 text-center text-sm p-0 m-0.5 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-gray-900/20 [&:has([aria-selected].day-outside)]:text-white [&:has([aria-selected])]:bg-gray-900/50 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
                                        day: "h-9 w-9 p-0 !font-normal",
                                        day_range_end: "day-range-end",
                                        day_selected:
                                            "rounded-md bg-gray-900 text-white hover:bg-gray-900 hover:text-white focus:bg-gray-900 focus:text-white",
                                        day_today:
                                            "rounded-md bg-gray-200 text-gray-900",
                                        day_outside:
                                            "day-outside text-gray-500 opacity-50 aria-selected:bg-gray-500 aria-selected:text-gray-900 aria-selected:bg-opacity-10",
                                        day_disabled:
                                            "text-gray-500 opacity-50",
                                        day_hidden: "invisible",
                                    }}
                                    components={{
                                        IconLeft: ({ ...props }) => (
                                            <ChevronLeftIcon
                                                {...props}
                                                className="h-4 w-4 stroke-2"
                                            />
                                        ),
                                        IconRight: ({ ...props }) => (
                                            <ChevronRightIcon
                                                {...props}
                                                className="h-4 w-4 stroke-2"
                                            />
                                        ),
                                    }}
                                />
                            </PopoverContent>
                        </Popover>
                    </div>
                    <div className="w-full">
                        <div className="w-full">
                            <Input
                                label="City"
                                size="md"
                                className="w-full bg-gray-50"
                            />
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="w-full">
                            <Input
                                label="State"
                                size="md"
                                className="w-full bg-gray-50"
                            />
                        </div>
                    </div>
                </div>
                <div className="mb-6 flex flex-col items-end gap-4 md:flex-row">
                    <div className="w-full">
                        <div className="w-full">
                            <Input
                                label="Pincode"
                                size="md"
                                className="w-full bg-gray-50"
                            />
                        </div>
                    </div>
                    <Popover placement="bottom">
                        <PopoverHandler>
                            <Input
                                label="Start Date"
                                size="md"
                                onChange={() => null}
                                value={date ? format(date, "yyyy-MM-dd") : ""}
                                className="w-full bg-gray-50"
                            />
                        </PopoverHandler>
                        <PopoverContent>
                            <DayPicker
                                mode="single"
                                selected={date}
                                onSelect={setDate}
                                showOutsideDays
                                className="border-0"
                                classNames={{
                                    caption:
                                        "flex justify-center py-2 mb-4 relative items-center",
                                    caption_label:
                                        "text-md !font-medium text-gray-900",
                                    nav: "flex items-center",
                                    nav_button:
                                        "h-6 w-6 bg-transparent hover:bg-blue-gray-50 p-1 rounded-md transition-colors duration-300",
                                    nav_button_previous: "absolute left-1.5",
                                    nav_button_next: "absolute right-1.5",
                                    table: "w-full border-collapse",
                                    head_row: "flex !font-medium text-gray-900",
                                    head_cell: "m-0.5 w-9 !font-normal text-sm",
                                    row: "flex w-full mt-2",
                                    cell:
                                        "text-gray-600 rounded-md h-9 w-9 text-center text-sm p-0 m-0.5 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-gray-900/20 [&:has([aria-selected].day-outside)]:text-white [&:has([aria-selected])]:bg-gray-900/50 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
                                    day: "h-9 w-9 p-0 !font-normal",
                                    day_range_end: "day-range-end",
                                    day_selected:
                                        "rounded-md bg-gray-900 text-white hover:bg-gray-900 hover:text-white focus:bg-gray-900 focus:text-white",
                                    day_today:
                                        "rounded-md bg-gray-200 text-gray-900",
                                    day_outside:
                                        "day-outside text-gray-500 opacity-50 aria-selected:bg-gray-500 aria-selected:text-gray-900 aria-selected:bg-opacity-10",
                                    day_disabled: "text-gray-500 opacity-50",
                                    day_hidden: "invisible",
                                }}
                                components={{
                                    IconLeft: ({ ...props }) => (
                                        <ChevronLeftIcon
                                            {...props}
                                            className="h-4 w-4 stroke-2"
                                        />
                                    ),
                                    IconRight: ({ ...props }) => (
                                        <ChevronRightIcon
                                            {...props}
                                            className="h-4 w-4 stroke-2"
                                        />
                                    ),
                                }}
                            />
                        </PopoverContent>
                    </Popover>
                    <Popover placement="bottom">
                        <PopoverHandler>
                            <Input
                                label="End Date"
                                size="md"
                                onChange={() => null}
                                value={date ? format(date, "yyyy-MM-dd") : ""}
                                className="w-full bg-gray-50"
                            />
                        </PopoverHandler>
                        <PopoverContent>
                            <DayPicker
                                mode="single"
                                selected={date}
                                onSelect={setDate}
                                showOutsideDays
                                className="border-0"
                                classNames={{
                                    caption:
                                        "flex justify-center py-2 mb-4 relative items-center",
                                    caption_label:
                                        "text-md !font-medium text-gray-900",
                                    nav: "flex items-center",
                                    nav_button:
                                        "h-6 w-6 bg-transparent hover:bg-blue-gray-50 p-1 rounded-md transition-colors duration-300",
                                    nav_button_previous: "absolute left-1.5",
                                    nav_button_next: "absolute right-1.5",
                                    table: "w-full border-collapse",
                                    head_row: "flex !font-medium text-gray-900",
                                    head_cell: "m-0.5 w-9 !font-normal text-sm",
                                    row: "flex w-full mt-2",
                                    cell:
                                        "text-gray-600 rounded-md h-9 w-9 text-center text-sm p-0 m-0.5 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-gray-900/20 [&:has([aria-selected].day-outside)]:text-white [&:has([aria-selected])]:bg-gray-900/50 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
                                    day: "h-9 w-9 p-0 !font-normal",
                                    day_range_end: "day-range-end",
                                    day_selected:
                                        "rounded-md bg-gray-900 text-white hover:bg-gray-900 hover:text-white focus:bg-gray-900 focus:text-white",
                                    day_today:
                                        "rounded-md bg-gray-200 text-gray-900",
                                    day_outside:
                                        "day-outside text-gray-500 opacity-50 aria-selected:bg-gray-500 aria-selected:text-gray-900 aria-selected:bg-opacity-10",
                                    day_disabled: "text-gray-500 opacity-50",
                                    day_hidden: "invisible",
                                }}
                                components={{
                                    IconLeft: ({ ...props }) => (
                                        <ChevronLeftIcon
                                            {...props}
                                            className="h-4 w-4 stroke-2"
                                        />
                                    ),
                                    IconRight: ({ ...props }) => (
                                        <ChevronRightIcon
                                            {...props}
                                            className="h-4 w-4 stroke-2"
                                        />
                                    ),
                                }}
                            />
                        </PopoverContent>
                    </Popover>
                </div>
                <div className="flex gap-4">
                    <div className="w-full">
                        <div className="w-full">
                            <Input
                                label="Position"
                                size="md"
                                className="w-full bg-gray-50"
                            />
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="w-full">
                            <Input
                                label="Salary"
                                size="md"
                                className="w-full bg-gray-50"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-8">
            <Button className="bg-purple-900">Add Employee</Button>
            </div>
        </section>
    );
}

export default EmployeeForm;
