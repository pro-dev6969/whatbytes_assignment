import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import SkillTestDashboard from "./components/SkillTestDashboard";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Main Content: Sidebar and Dashboard */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar />

        {/* Skill Test Dashboard */}
        <main className="flex-1 p-6 bg-gray-50 overflow-y-auto">
          <SkillTestDashboard />
        </main>
      </div>
    </div>
  );
}
