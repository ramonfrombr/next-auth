"use client";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export default function Home() {
  console.log("WHERE AM I LOGGED?");
  useEffect(() => {
    console.log("Mounted");
  }, []);
  return (
    <Button size="lg" variant="custom">
      Click here
    </Button>
  );
}
