import { ROLES, STATUSES } from "@/constants";
import Task from "./Task";

const tasks = [
  {
    id: 1,
    title: "Task 1",
    desc: "Task 1Task 1Task 1Task 1",
    status: STATUSES.COMPLETED.id,
    users: [
      {
        id: 1,
        name: "John Doe",
      },
      {
        id: 2,
        name: "Tom Doe",
      },
      {
        id: 2,
        name: "Tom Doe",
      },
      {
        id: 2,
        name: "Tom Doe",
      },
      {
        id: 2,
        name: "Tom Doe",
      },
    ],
  },
  {
    id: 2,
    title: "Task 2",
    desc: "Task 2Task 2Task 2Task 2",
    status: STATUSES.UNCOMPLETED.id,
    users: [
      {
        id: 1,
        name: "John Doe",
      },
      {
        id: 2,
        name: "Tom Doe",
      },
    ],
  },
  {
    id: 3,
    title: "Task 3",
    desc: "Task 3Task 3Task 3Task 3Task 3Task 3Task 3Task 3Task 3Task 3Task 3Task 3Task 3Task 3Task 3Task 3Task 3Task 3Task 3Task 3Task 3",
    status: STATUSES.INPROGRESS.id,
    users: [
      {
        id: 1,
        name: "John Doe",
      },
      {
        id: 2,
        name: "Tom Doe",
      },
    ],
  },
];

const users = [
  {
    id: 1,
    name: "John Doe",
    role: ROLES.ADMIN,
  },
  {
    id: 2,
    name: "Tom Doe",
    role: ROLES.REGULAR,
  },
  {
    id: 3,
    name: "Jessy Doe",
    role: ROLES.REGULAR,
  },
];

const Tasks = () => {
  return (
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
              Users
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
  );
};

export default Tasks;
