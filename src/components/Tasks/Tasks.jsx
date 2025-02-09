import { useState } from "react";
import { Plus } from "react-feather";
import { tasks } from "@/api";
import Task from "./Task";
import AddTaskModal from "./AddTaskModal";

const Tasks = () => {
  const [isAddModalOpen, setAddModalOpen] = useState(false);

  return (
    <>
      <div className="flex items-center justify-end mb-5">
        <button
          type="button"
          className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 rounded-full text-sm px-5 py-2.5 cursor-pointer"
          onClick={() => setAddModalOpen(true)}
        >
          <div className="flex items-center gap-1">
            <Plus size={16} />
            <span>Add Task</span>
          </div>
        </button>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                Task
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Owner
              </th>
              <th scope="col" className="px-6 py-3">
                Assignees
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <Task key={task.id} data={task} />
            ))}
          </tbody>
        </table>
      </div>
      <AddTaskModal
        isOpen={isAddModalOpen}
        closeModal={() => setAddModalOpen(false)}
      />
    </>
  );
};

export default Tasks;
