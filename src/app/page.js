import DashBoradCard from "@/components/DashBoradCard";
import Hero from "@/components/Hero";
import HistoryTable from "@/components/HistoryTable";
import History from "@/components/HistoryTable";
// import GenaralLayout from "@/components/layout/GenaralLayout";
import GenaralLayout from "@/components/layout/GenaralLayout";

export default function Home() {
  return (
    <GenaralLayout>
      <div className="">
        <Hero />
      </div>
    </GenaralLayout>
  );
}
