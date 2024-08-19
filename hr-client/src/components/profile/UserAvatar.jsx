import { Avatar, Typography } from "@material-tailwind/react";

export default function UserAvatar() {
    return (
        <div className="flex gap-4">
            <Avatar
                variant="circular"
                size="md"
                alt="avatar"
                className="border border-purple-900 p-0.5"
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
            />
            <Typography variant="h6" color="blue-gray" className="my-auto">
                Vikentiy Ricohard
            </Typography>
        </div>
    );
}
