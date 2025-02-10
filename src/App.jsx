import { LogOut } from "react-feather";
import Tasks from "@/components/Tasks";

function App() {
  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    window.location.reload();
  };

  return (
    <>
      <header className="w-full border-b border-gray-200">
        <div className="container mx-auto flex items-center justify-between py-3 px-4 md:px-0">
          <div>
            <span className="font-bold text-xl">Task Tracker</span>
          </div>
          <div>
            <button
              type="button"
              className="flex items-center gap-2 cursor-pointer"
              onClick={handleLogout}
            >
              <LogOut size={16} />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </header>
      <main>
        <div className="container mx-auto min-h-72 py-10 px-4 md:px-0">
          <Tasks />
        </div>
      </main>
      <footer className="border-t border-gray-200 py-4">
        <div className="container mx-auto px-4 md:px-0">
          <span>© 2025 | Developed with love!</span>
        </div>
      </footer>
    </>
  );
}

export default App;
