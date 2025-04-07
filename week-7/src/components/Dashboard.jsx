import OverviewCards from "@/components/OverviewCards";
import DataTable from "@/components/DataTable";

export default function Dashboard() {
  return (
    <div className="p-6">
      <OverviewCards />
      <DataTable />
    </div>
  );
}
