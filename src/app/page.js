import DashBoradCard from "@/components/DashBoradCard";
import Hero from "@/components/Hero";
import HistoryTable from "@/components/HistoryTable";
import History from "@/components/HistoryTable";
import GenaralLayout from "@/components/layout/GenaralLayout";
import Login from "@/components/Login";
import Image from "next/image";

export default function Home() {
  return (
    <GenaralLayout>
      <div>
        <Hero />
      </div>
    </GenaralLayout>
  );
}
