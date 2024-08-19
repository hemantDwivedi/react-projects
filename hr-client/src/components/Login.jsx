import {
    Card,
    Input,
    Button,
    Typography,
  } from "@material-tailwind/react";

  export function Login() {
    return (
        <section className="min-h-screen flex items-center justify-center py-8 px-8 lg:py-28">
       <Card color="transparent" shadow={false} className="w-96">
        <Typography variant="h4" color="blue-gray">
          Login
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-1 flex flex-col gap-6">
            <Input
            label="Username"
              size="md"
            />
            <Input
            label="Password"
              size="md"
            />
          </div>
          <Button className="mt-6" fullWidth>
            login
          </Button>
        </form>
      </Card>
    </section>
    );
  }

export default Login
