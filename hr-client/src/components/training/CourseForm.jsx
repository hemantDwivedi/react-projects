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
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

function CourseForm() {
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();

    return (
        <section className="p-20 flex-1 ml-64">
            <Typography variant="h5" color="blue-gray">
                Course Details
            </Typography>
            <div className="mt-8">
                <div className="flex gap-4 mb-8">
                    <div className="w-full">
                        <Input
                            label="Course Name"
                            size="md"
                            className="w-full bg-gray-50"
                        />
                    </div>
                    <div className="w-full">
                        <Input
                            label="Instructor Name"
                            size="md"
                            className="w-full bg-gray-50"
                        />
                    </div>
                </div>
                <div className="relative w-full min-w-[200px] mb-8">
                    <textarea
                        className="peer h-full min-h-[100px] w-full resize-none rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50 bg-gray-50"
                        placeholder=" "
                    ></textarea>
                    <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                        Message
                    </label>
                </div>
                <div className="flex gap-4 mb-8">
                    <div className="w-full">
                        <Popover placement="bottom">
                            <PopoverHandler>
                                <Input
                                    label="Start Date"
                                    size="md"
                                    onChange={() => null}
                                    value={
                                        startDate ? format(startDate, "yyyy-MM-dd") : ""
                                    }
                                    className="w-full bg-gray-50"
                                />
                            </PopoverHandler>
                            <PopoverContent>
                                <DayPicker
                                    mode="single"
                                    selected={startDate}
                                    onSelect={setStartDate}
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
                        <Popover placement="bottom">
                            <PopoverHandler>
                                <Input
                                    label="End Date"
                                    size="md"
                                    onChange={() => null}
                                    value={
                                        endDate ? format(endDate, "yyyy-MM-dd") : ""
                                    }
                                    className="w-full bg-gray-50"
                                />
                            </PopoverHandler>
                            <PopoverContent>
                                <DayPicker
                                    mode="single"
                                    selected={endDate}
                                    onSelect={setEndDate}
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
                        <Input
                            label="Duration"
                            size="md"
                            className="w-full bg-gray-50"
                        />
                    </div>
                    <div className="w-full">
                        <Select
                            label="Mode"
                            size="md"
                            className="aria-[expanded=true]:border-t-primary bg-gray-50"
                        >
                            <Option>Offline</Option>
                            <Option>Online</Option>
                        </Select>
                    </div>
                </div>
            </div>
            <div className="mt-8">
                <Button variant="gradient">add course</Button>
            </div>
        </section>
    );
}

export default CourseForm;
