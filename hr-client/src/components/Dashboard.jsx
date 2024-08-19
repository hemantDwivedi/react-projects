import {
    CurrencyRupeeIcon,
    Square3Stack3DIcon,
} from "@heroicons/react/24/solid";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
    Button,
} from "@material-tailwind/react";

import { FaUserGroup } from "react-icons/fa6";

const Dashboard = () => {
    return (
        <div className="p-10">
            <Typography variant="h6" color="blue-gray" className="mb-8">
                DASHBOARD
            </Typography>
            <div className="flex justify-start flex-wrap gap-y-10 gap-x-2">
                <Card className="border-2 w-96">
                    <CardBody className="text-right flex justify-between">
                        <CurrencyRupeeIcon className="h-16 w-16 text-purple-900 my-auto" />
                        <div>
                            <Typography
                                variant="h1"
                                color="blue-gray"
                                className="mb-2"
                            >
                                56
                            </Typography>
                            <Typography
                                color="blue-gray"
                                className="font-medium"
                                textGradient
                            >
                                Client
                            </Typography>
                        </div>
                    </CardBody>
                </Card>
                <Card className="border-2 w-96 py-1">
                    <CardBody className="text-right flex justify-between">
                        <Square3Stack3DIcon className="h-12 w-12 text-purple-900 my-auto" />
                        <div>
                            <Typography variant="h2" color="blue-gray">
                                80
                            </Typography>
                            <Typography
                                color="blue-gray"
                                className="font-medium"
                                textGradient
                            >
                                Projects
                            </Typography>
                        </div>
                    </CardBody>
                </Card>
                <Card className="border-2 w-96">
                    <CardBody className="text-right flex justify-between">
                        <FaUserGroup className="h-16 w-16 text-purple-900 my-auto" />
                        <div>
                            <Typography
                                variant="h1"
                                color="blue-gray"
                                className="mb-2"
                            >
                                235
                            </Typography>
                            <Typography
                                color="blue-gray"
                                className="font-medium"
                                textGradient
                            >
                                Employees
                            </Typography>
                        </div>
                    </CardBody>
                </Card>
            </div>
        </div>
    );
};

export default Dashboard;
