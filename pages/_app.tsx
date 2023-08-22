import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className='h-screen flex flex-col'>
      <Header />
      <div className='flex grow'>
        <div className='w-40'>
          <Sidebar />
        </div>
        <div className='grow'>
          <Component {...pageProps} />
        </div>
      </div>
    </div>
  );
}
