"use client";

import { Button, Input } from "@heroui/react";
import Image from "next/image";
import React from "react";

export default function UIIndex() {
  return (
    <>
      <div className="flex flex-row items-center justify-center w-full h-screen p-1 gap-1">
        <div className="flex flex-col items-center justify-center w-4/12 h-full p-1 gap-1 border-1 border-light-foreground dark:border-dark-foreground bg-light-foreground/50 dark:bg-dark-foreground/50">
          <div className="flex flex-col items-center justify-center w-full h-full p-1 gap-1">
            <div className="flex items-end justify-start w-full h-fit p-1 gap-1 text-lg">
              <Image
                src="/logoCompany/logoCompany_1.png"
                alt="logoCompany"
                width={25}
                height={25}
                priority
              />
              Evergreen
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-9/12 h-full p-1 gap-1">
            <div className="flex items-center justify-start w-full h-fit p-1 gap-1 text-lg">
              Welcome back
            </div>
            <div className="flex items-center justify-start w-full h-fit p-1 gap-1">
              Sign in to your account
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-9/12 h-full p-1 gap-1">
            <div className="flex items-center justify-center w-full h-fit p-1 gap-1">
              <Input
                name="Username"
                type="text"
                label="Username"
                labelPlacement="outside"
                placeholder="Enter your username"
                variant="bordered"
                isRequired
                // value={password}
                // onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-end w-full h-fit p-1 gap-1">
              Forgot Password?
            </div>
            <div className="flex items-center justify-center w-full h-fit p-1 gap-1">
              <Input
                name="Password"
                type="password"
                label="Password"
                labelPlacement="outside"
                placeholder="Enter your password"
                variant="bordered"
                isRequired
                // value={password}
                // onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-9/12 h-full p-1 gap-1">
            <div className="flex items-center justify-center w-full h-fit p-1 gap-1">
              <Button color="primary" className="w-full">
                Login
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-9/12 h-full p-1 gap-1">
            <div className="flex items-center justify-center w-full h-fit p-1 gap-1 text-xs">
              By continuing, you agree to CHH Industry's Terms of Service and
              Privacy Policy
            </div>
            <div className="flex items-center justify-center w-full h-fit p-1 gap-1 text-xs">
              and to receive periodic emails with updates.
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-8/12 h-full p-1 gap-1">
          <div className="flex  items-center justify-center w-full h-full p-1 gap-1">
            1
          </div>
        </div>
      </div>
    </>
  );
}
