export default function Sidebar() {
    return (
      <aside className="w-64 bg-white border-r">
        <nav className="mt-4">
          <ul >
            <li className="p-4 hover:bg-gray-100">Dashboard</li>
            <li className="p-4 bg-gray-100 font-semibold">Skill Test</li>
            <li className="p-4 hover:bg-gray-100">Internship</li>
          </ul>
        </nav>
      </aside>
    );
  }