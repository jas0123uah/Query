import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditAnswerForm from './EditAnswerForm';

function EditAnswerFormModal({ansId, initialAnswerText}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="editAnswerButton" onClick={() => setShowModal(true) }>Edit answer</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditAnswerForm initialAnswerText={initialAnswerText} ansId={ansId}></EditAnswerForm>
        </Modal>
      )}
    </>
  );
}

export default EditAnswerFormModal;
