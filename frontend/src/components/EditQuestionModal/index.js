import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditQuestionForm from './EditQuestionForm';

function EditFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Edit Question</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditQuestionForm />
        </Modal>
      )}
    </>
  );
}

export default EditFormModal;
