import { bool, func } from "prop-types";
import ReactModal from "react-modal";
import { X } from "react-feather";
import { STATUSES } from "@/constants";
import { users } from "@/api";

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

const AddTaskModal = ({ isOpen, closeModal }) => {
  const handleSubmit = (formData) => {
    const formDataEntries = Object.fromEntries(formData);
    console.log(formDataEntries);
  };

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Add Task"
      style={customStyles}
    >
      <form action={handleSubmit}>
        <div className="border-b border-gray-200 p-4 flex items-center justify-between">
          <h2>Add Task</h2>
          <button className="cursor-pointer" onClick={closeModal}>
            <X />
          </button>
        </div>
        <div className="p-4">
          <div className="mb-3">
            <label htmlFor="title" className="block mb-1 text-sm text-gray-900">
              Title
            </label>
            <input
              id="title"
              name="title"
              className="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="desc" className="block mb-1 text-sm text-gray-900">
              Description
            </label>
            <textarea
              id="desc"
              name="desc"
              rows="4"
              className="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
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
              className="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            >
              {Object.values(STATUSES).map((status, i) => (
                <option key={i} value={status.id}>
                  {status.pretty}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="owner" className="block mb-1 text-sm text-gray-900">
              Owner
            </label>
            <select
              id="owner"
              name="owner"
              className="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            >
              {users.map((user) => (
                <option key={user.id} value={user.id}>
                  {user.name}
                </option>
              ))}
            </select>
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
