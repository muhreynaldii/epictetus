import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-gray-600 to-gray-900 font-sans">
        <nav>
          <div className="container mx-auto">
            <div className="flex">
              <div className="w-2/12">epictetus</div>
              <div className="w-6/12">Nav</div>
              <div className="w-4/12">Search</div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
