import { bool, func, string } from "prop-types";
import { X } from "react-feather";
import ReactModal from "react-modal";

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

const DialogModal = ({ isOpen, closeModal, title, dialogText, onClick }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Dialog"
      style={customStyles}
    >
      <div className="p-4">
        <div className="p-4 flex items-center justify-between">
          <h2>{title}</h2>
          <button type="button" className="cursor-pointer" onClick={closeModal}>
            <X />
          </button>
        </div>
        <div className="p-4">{dialogText}</div>

        <div className="p-4 border-t border-gray-200 flex items-center justify-between">
          <button
            type="button"
            className="text-gray-900 bg-gray-200 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 rounded-xl text-sm px-5 py-2.5 cursor-pointer"
            onClick={closeModal}
          >
            Cancel
          </button>
          <button
            type="button"
            className="text-white bg-blue-500 focus:outline-none hover:bg-blue-400 focus:ring-4 focus:ring-blue-100 rounded-xl text-sm px-5 py-2.5 cursor-pointer"
            onClick={onClick}
          >
            Continue
          </button>
        </div>
      </div>
    </ReactModal>
  );
};

DialogModal.propTypes = {
  isOpen: bool,
  onClick: func,
  closeModal: func,
  title: string,
  dialogText: string,
};

export default DialogModal;
