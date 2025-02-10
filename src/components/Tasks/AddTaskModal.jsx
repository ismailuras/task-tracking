import { useState } from "react";
import { useDispatch } from "react-redux";
import { bool, func } from "prop-types";

import { v4 as uuid } from "uuid";
import ReactModal from "react-modal";
import { X } from "react-feather";
import Select from "react-select";
import toast from "react-hot-toast";

import { STATUSES } from "@/constants";
import { users } from "@/api";
import { addTask } from "@/store/taskSlice";

const customStyles = {
  overlay: {
    zIndex: 99,
    backdropFilter: "blur(3px)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: 0,
    borderRadius: 10,
    borderColor: "#ebe6e7",
    minWidth: 480,
  },
};

const assigneesOptions = users.map((user) => ({
  label: user.name,
  value: user.id,
}));

const AddTaskModal = ({ isOpen, closeModal }) => {
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  const dispatch = useDispatch();

  const [selectedAssignees, setSelectedAssignees] = useState([]);

  const handleSubmit = (formData) => {
    const formDataEntries = Object.fromEntries(formData);
    const payload = {
      ...formDataEntries,
      assignees: selectedAssignees.map((item) => ({
        id: item.value,
        name: item.label,
      })),
      owner: loggedInUser,
    };
    try {
      dispatch(addTask(payload));
      closeModal();
      toast.success("Task added successfully!");
      setSelectedAssignees([]);
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong.");
    }
  };

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Add Task"
      style={customStyles}
    >
      <form action={handleSubmit}>
        <input type="hidden" name="id" defaultValue={uuid()} />
        <div className="border-b border-gray-200 p-4 flex items-center justify-between">
          <h2>Add Task</h2>
          <button type="button" className="cursor-pointer" onClick={closeModal}>
            <X />
          </button>
        </div>
        <div className="p-4">
          <div className="mb-3">
            <label htmlFor="title" className="block mb-1 text-sm text-gray-900">
              Title <span className="text-red-500">*</span>
            </label>
            <input
              id="title"
              name="title"
              className="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:outline-orange-400"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="desc" className="block mb-1 text-sm text-gray-900">
              Description <span className="text-red-500">*</span>
            </label>
            <textarea
              id="desc"
              name="desc"
              rows="4"
              className="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:outline-orange-400"
              required
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="status"
              className="block mb-1 text-sm text-gray-900"
            >
              Status
            </label>
            <select
              id="status"
              name="status"
              className="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:outline-orange-400"
            >
              {Object.values(STATUSES).map((status, i) => (
                <option key={i} value={status.id}>
                  {status.pretty}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-3">
            <label
              htmlFor="assignees"
              className="block mb-1 text-sm text-gray-900"
            >
              Assignees
            </label>
            <Select
              id="assignees"
              value={selectedAssignees}
              options={assigneesOptions}
              isMulti
              onChange={setSelectedAssignees}
            />
          </div>
        </div>
        <div className="p-4 border-t border-gray-200 flex items-center justify-between">
          <button
            type="button"
            className="text-gray-900 bg-gray-200 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 rounded-xl text-sm px-5 py-2.5 cursor-pointer"
            onClick={closeModal}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="text-white bg-blue-500 focus:outline-none hover:bg-blue-400 focus:ring-4 focus:ring-blue-100 rounded-xl text-sm px-5 py-2.5 cursor-pointer"
          >
            Save
          </button>
        </div>
      </form>
    </ReactModal>
  );
};

AddTaskModal.propTypes = {
  isOpen: bool,
  closeModal: func,
};

export default AddTaskModal;
