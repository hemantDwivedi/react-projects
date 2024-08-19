import React from "react";
import { Input, Typography, Button } from "@material-tailwind/react";

function DepartmentForm() {
    return (
        <section className="p-20 w-[70%] mx-auto">
            <Typography variant="h5" color="blue-gray">
                Department Information
            </Typography>
            <div className="mt-8">
                <div className="">
                    <div className="w-full mb-6">
                        <Input
                            label="Name"
                            size="lg"
                            className="w-full bg-gray-50"
                            maxLength={50}
                        />
                    </div>
                    <div className="relative w-full min-w-[200px] mb-8">
                        <textarea
                            className="peer h-full min-h-[100px] w-full resize-none rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50 bg-gray-50"
                            placeholder=" "
                            maxLength={200}
                        ></textarea>
                        <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                            Description
                        </label>
                    </div>
                </div>
            </div>
            <div className="mt-8">
                <Button className="bg-purple-900" size="lg">
                    Add Department
                </Button>
            </div>
        </section>
    );
}

export default DepartmentForm;
