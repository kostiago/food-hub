import Header from "@/components/Header";
import Seach from "@/components/search";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="pt-6 px-5">
        <Seach />
      </div>
    </div>
  );
}
