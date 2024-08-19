import React from "react";
import {
  Navbar,
  Typography,
} from "@material-tailwind/react";

export default function Header() {

  return (
    <Navbar className="bg-purple-900 rounded-none border-none bg-opacity-100 sticky top-0 z-50" shadow={false}>
        <Typography
          as="a"
          href="#"
          className="text-white text-right cursor-pointer font-bold"
          variant="h5"
        >
            HR MANAGEMENT
        </Typography>
    </Navbar>
  );
}
