import { array, number, oneOf, shape, string } from "prop-types";
import { Edit2, Trash2 } from "react-feather";
import { STATUSES } from "@/constants";
import { getAvatar, truncate } from "@/utils";
import { useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { removeTask } from "@/store/taskSlice";
import DialogModal from "@/ui/DialogModal";
import toast from "react-hot-toast";
import EditTaskModal from "./EditTaskModal";

const Task = ({ data }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);

  const dispatch = useDispatch();

  const assignees = useMemo(() => {
    const _assignees = [...data.assignees];
    return {
      count: _assignees.length,
      sliced: _assignees.slice(0, 3),
    };
  }, [data.assignees]);

  const renderStatus = (status) => {
    const mixinStyles = "h-2.5 w-2.5 rounded-full me-2";
    switch (status) {
      case STATUSES.COMPLETED.id:
        return (
          <>
            <div className={`${mixinStyles} bg-green-500`} />
            <span className="text-green-500">{STATUSES.COMPLETED.pretty}</span>
          </>
        );
      case STATUSES.UNCOMPLETED.id:
        return (
          <>
            <div className={`${mixinStyles} bg-red-500`} />
            <span className="text-red-500">{STATUSES.UNCOMPLETED.pretty}</span>
          </>
        );
      case STATUSES.INPROGRESS.id:
        return (
          <>
            <div className={`${mixinStyles} bg-yellow-500`} />
            <span className="text-yellow-500">
              {STATUSES.INPROGRESS.pretty}
            </span>
          </>
        );

      default:
        return null;
    }
  };

  const handleDeleteTask = (taskID) => {
    try {
      dispatch(removeTask(taskID));
      toast.success("Task removed successfully!");
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong.");
    }
  };

  return (
    <>
      <tr
        key={data.id}
        className="bg-white border-b border-gray-200 hover:bg-gray-50"
      >
        <th
          scope="row"
          className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap"
        >
          <div className="ps-3">
            <div className="text-base font-semibold">{data.title}</div>
            <div className="font-normal text-gray-500" title={data.desc}>
              {truncate(data.desc)}
            </div>
          </div>
        </th>
        <td className="px-6 py-4">
          <div className="flex items-center">{renderStatus(data.status)}</div>
        </td>
        <td className="px-6 py-4">
          <div className="flex items-center z-10 relative">
            <img
              key={data.owner.id}
              className="w-10 h-10 rounded-full bg-orange-400 border-2 border-white relative -mr-3"
              src={getAvatar(data.owner.id)}
              alt={data.owner.name}
              title={data.owner.name}
            />
          </div>
        </td>
        <td className="px-6 py-4">
          <div className="flex items-center z-10 relative">
            {assignees.sliced.map((user, i) => (
              <img
                key={user.id}
                className="w-10 h-10 rounded-full bg-orange-400 border-2 border-white relative -mr-3"
                style={{ zIndex: -i }}
                src={getAvatar(user.id)}
                alt={user.name}
                title={user.name}
              />
            ))}
            {assignees.count > 3 && (
              <div
                className="w-10 h-10 rounded-full bg-orange-400 border-2 border-white relative flex items-center pl-2.5 text-white font-semibold"
                style={{ zIndex: -assignees.count }}
              >
                {`+${assignees.count - 3}`}
              </div>
            )}
          </div>
        </td>
        <td className="px-6 py-4">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setEditModalOpen(true)}
              className="w-7 h-7  bg-indigo-50 rounded-full flex items-center justify-center cursor-pointer transition-all duration-500  hover:bg-indigo-100"
            >
              <Edit2 size={18} />
            </button>
            <button
              type="button"
              onClick={() => setIsDialogOpen(true)}
              className="w-7 h-7  bg-indigo-50 rounded-full flex items-center justify-center cursor-pointer transition-all duration-500  hover:bg-indigo-100"
            >
              <Trash2 size={18} />
            </button>
          </div>
        </td>
      </tr>
      {isDialogOpen && (
        <DialogModal
          isOpen
          title="Delete Task"
          dialogText="Are you sure you want to delete this task?"
          closeModal={() => setIsDialogOpen(false)}
          onClick={() => handleDeleteTask(data.id)}
        />
      )}
      {isEditModalOpen && (
        <EditTaskModal
          isOpen
          closeModal={() => setEditModalOpen(false)}
          data={data}
        />
      )}
    </>
  );
};

Task.propTypes = {
  data: shape({
    id: number,
    title: string,
    desc: string,
    status: oneOf(Object.values(STATUSES).map((_) => _.id)),
    assignees: array,
  }),
};

export default Task;
