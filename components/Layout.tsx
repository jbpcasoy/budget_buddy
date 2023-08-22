import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

interface LayoutProps {
  children: React.ReactNode;
}
export default function Layout({ children }: LayoutProps) {
  return (
    <div className='h-screen flex flex-col'>
      <Header />
      <div className='flex grow'>
        <div className='w-40'>
          <Sidebar />
        </div>
        <div className='grow'>{children}</div>
      </div>
    </div>
  );
}
