import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
    Button,
  } from "@material-tailwind/react";

  export default function EmployeeCard ( { team } ) {
    return (
      <Card className="w-56 border-2">
        <CardHeader floated={false} className="h-28 w-28 rounded-full mx-auto">
          <img src={`https://docs.material-tailwind.com/img/team-${team}.jpg`} alt="profile-picture" />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h4" color="blue-gray" className="mb-2">
            Natalie Paisley
          </Typography>
          <Typography color="blue-gray" className="font-medium" textGradient>
            CEO / Co-Founder
          </Typography>
        </CardBody>
        <CardFooter className="flex justify-center gap-7 pt-2">
         <Button className="bg-purple-900">View</Button>
        </CardFooter>
      </Card>
    );
  }
