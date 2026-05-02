"use client";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { useRouter } from "next/navigation";

export default function LogiinPage() {

  const router =useRouter();


  const onSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const { data, error } = await authClient.signIn.email({
      email,
      password,
      callbackURL: "/",
      
});


if (!error) {
  router.push("/dashboard");
  alert("Login successful!");
} else {
  alert("Invalid email or password.");
}


};

  return (
  
    <div className="p-4" >
      <Card className="flex flex-col md:flex-row mx-auto w-full max-w-4xl overflow-hidden border-none shadow-2xl m-10 rounded-3xl container mx-auto ">
    {/* ata hocche image section */}
  <div className="hidden md:flex w-1/2 bg-[#7C3AED] items-center justify-center p-12">
    <div className="relative w-full aspect-square rounded-2xl overflow-hidden border-8 border-white/10 shadow-inner">
       <img 
        src="https://i.ibb.co.com/prfCTMvQ/download-1.jpg" 
        className="object-cover w-full h-full"
      />
    </div>
  </div>

 {/* ata hocche form section */}
  <div className="w-full md:w-1/2 bg-white py-10 px-8 sm:px-12 flex flex-col justify-center">
    <div className="mb-8">
      <h1 className="text-3xl font-extrabold text-gray-900">Login your Account</h1>
      <p className="text-gray-500 mt-2">Join us today and start your journey</p>
    </div>

    <Form className="flex w-full flex-col gap-4" onSubmit={onSubmit}>
     
      <TextField
        isRequired
        name="email"
        type="email"
        validate={(value) => {
          if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
            return "Please enter a valid email address";
          }
          return null;
        }}
      >
        <Label className="text-sm font-semibold text-gray-700">Email Address</Label>
        <Input placeholder="john@example.com" className="mt-1 block w-full rounded-xl border-gray-200 focus:border-[#7C3AED] focus:ring-[#7C3AED]" />
        <FieldError className="text-xs text-red-500 mt-1" />
      </TextField>

    
      <TextField
        isRequired
        minLength={8}
        name="password"
        type="password"
        validate={(value) => {
          if (value.length < 8) return "Password must be at least 8 characters";
          if (!/[A-Z]/.test(value)) return "Need at least one uppercase letter";
          if (!/[0-9]/.test(value)) return "Need at least one number";
          return null;
        }}
      >
        <Label className="text-sm font-semibold text-gray-700">Password</Label>
        <Input placeholder="Create a password" type="password" className="mt-1 block w-full rounded-xl border-gray-200 focus:border-[#7C3AED] focus:ring-[#7C3AED]" />
        <FieldError className="text-xs text-red-500 mt-1" />
      </TextField>

      <div className="mt-4 flex flex-col gap-3">
        <Button type="submit" className="w-full bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-bold py-3 rounded-xl transition-all shadow-lg shadow-purple-200">
          Login
        </Button>
      </div>
    </Form>
  </div>
   </Card>
    </div>
  
  );
}