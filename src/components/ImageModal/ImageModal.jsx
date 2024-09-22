import Modal from 'react-modal';

Modal.setAppElement('#root');

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export default function ImageModal({ isOpen, onClose }) {
  return (
    <Modal
      isOpen={isOpen}
      // onAfterOpen={afterOpenModal}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <button onClick={onClose}>close</button>
      <div>I am a modal</div>
    </Modal>
  );
}
