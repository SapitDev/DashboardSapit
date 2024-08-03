import { useState } from "react";
import Sidebar from "@/components/sidebar";
import Header from "@/components/header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex">
        <Sidebar open={open} setOpen={setOpen} />
        <div>
          <Header
            title="Dashboard"
            userName="Sapit"
            userStatus="Admin"
            profilePicture="/logo.png"
          />
          <section className={`duration-300 p-5 w-full`}>{children}</section>
        </div>
      </div>
    </>
  );
}
