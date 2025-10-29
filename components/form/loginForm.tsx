"use client";

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";

import { loginUser } from "@/app/actions/authActions";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Eye, EyeOff, LogIn } from "lucide-react";

import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from "next/navigation";

// --- Zod schema for validation ---
const loginSchema = z.object({
  email: z.email({ message: "Invalid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [isPending, startTransition] = useTransition();
  const router = useRouter()

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });


  async function onSubmit(values: LoginFormValues) {
  startTransition(async () => {
    const result = await signIn("credentials", {
      redirect: false,
      email: values.email,
      password: values.password,
    });

    if (result?.ok) {
      toast.success("Login successful 🎉", {
        description: "Redirecting to your dashboard...",
      });
      form.reset();
      router.push("/dashboard");
    } else {
      toast.error("Login failed ❌", {
        description: result?.error || "Invalid credentials",
      });
    }
  });
}






//  async function onSubmit(values: LoginFormValues) {
//   startTransition(async () => {
//     const formData = new FormData();
//     formData.append("email", values.email);
//     formData.append("password", values.password);

//     const res = await loginUser(formData);

//     if (res.success) {
//       toast.success("Login successful 🎉", {
//         description: "Redirecting to your dashboard...",
//       });
//       form.reset(); 
//     } else {
//       toast.error("Login failed ❌", {
//         description: "Invalid credentials",
//       });
//     }
//   });
// }



  return (
    <div className="flex min-h-screen items-center justify-center   px-4">
      <Card className="w-full max-w-md shadow-lg border border-gray-200 dark:border-gray-800">
        <CardHeader className="space-y-2">
          <CardTitle className="text-2xl font-semibold text-center">Welcome Back</CardTitle>
          <CardDescription className="text-center text-muted-foreground">
            Sign in to access your account
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="you@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          placeholder="••••••••"
                          type={showPassword ? "text" : "password"}
                          {...field}
                        />
                        <button
                          type="button"
                          className="absolute right-3 top-2.5 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                          onClick={() => setShowPassword((prev) => !prev)}
                        >
                          {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                disabled={isPending}
                className="w-full flex items-center justify-center gap-2"
              >
                {isPending ? <span>Signing in...</span> : <><LogIn className="w-4 h-4" /> Sign In</>}
              </Button>
            </form>
          </Form>
        </CardContent>

        <CardFooter className="flex justify-center text-sm text-muted-foreground">
          Don’t have an account?{" "}
          <a href="/register" className="ml-1 text-primary hover:underline font-medium">
            Sign up
          </a>
        </CardFooter>
      </Card>
    </div>
  );
}
