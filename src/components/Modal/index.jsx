import { useRef } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import actionTypes from "../../redux/actionTypes";
import api from "../../utils/api";
import { toast } from "react-toastify";
import { updateTodo } from "../../redux/actions/actions";

function ModalComponent({ setIsShow, item }) {
  const inputRef = useRef();
  const dispatch = useDispatch();

  const handleClick = () => {
    const newText = inputRef.current.value;

    const updatedTodo = { ...item, text: newText };

    api
      .patch(`/todos/${item.id}`, { text: newText })
      .then(() => {
        dispatch(updateTodo(updatedTodo));
        toast.success("Güncelleme işlemi başarıyla gerçekleştirildi.");
      })
      .catch((err) => {
        toast.error("Todo güncellemesi sırasında bir sorun oluştu.");
      });

    setIsShow(false);
  };

  return (
    <div className="modal show d-block bg-blur">
      <Modal
        show={true}
        className="modal-dialog"
        onHide={() => setIsShow(false)}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Todo'yu Güncelle</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div>
            <label className="fw-bold mb-2">Yeni Başlık:</label>
            <input
              defaultValue={item.text}
              ref={inputRef}
              type="text"
              className="form-control"
            />
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => setIsShow(false)}>
            Kapat
          </Button>
          <Button variant="primary" onClick={() => handleClick()}>
            Kaydet
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalComponent;
