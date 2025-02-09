import { User } from "react-feather";
import { Toaster } from "react-hot-toast";
import Tasks from "@/components/Tasks";

function App() {
  return (
    <>
      <header className="w-full border-b border-gray-200">
        <div className="container mx-auto flex items-center justify-between py-3">
          <div>
            <span className="font-bold text-xl">Task Tracker</span>
          </div>
          <div>
            <button
              type="button"
              className="bg-orange-400 rounded-full cursor-pointer p-2 hover:bg-orange-300 transition-all duration-200"
            >
              <User size={25} color="#fff" />
            </button>
          </div>
        </div>
      </header>
      <main>
        <div className="container mx-auto min-h-72 py-10">
          <Tasks />
        </div>
      </main>
      <footer className="border-t border-gray-200 py-4">
        <div className="container mx-auto">
          <span>© 2025 | Developed with love!</span>
        </div>
      </footer>
      <Toaster />
    </>
  );
}

export default App;
