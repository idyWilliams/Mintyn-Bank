import Dashboard from "@/components/dashboard";
import DefaultLayout from "@/components/layout";
import Image from "next/image";

export default function Home() {
  return (
    <DefaultLayout>
      <Dashboard />
    </DefaultLayout>
  );
}
