import { useDispatch } from "react-redux";
import ModalComponent from "../Modal";
import { useState } from "react";
import api from "../../utils/api";
import { toast } from "react-toastify";
import { deleteTodo, updateToggle } from "../../redux/actions/actions";

const Card = ({ item }) => {
  const [isShow, setIsShow] = useState(false);
  // Dispatch kurulumu
  const dispatch = useDispatch();

  const handleDelete = () => {
    const isConfirmed = window.confirm("Silmek istediğinize emin misiniz?");
    if (!isConfirmed) return;

    api
      .delete(`/todos/${item.id}`)
      .then(() => {
        dispatch(deleteTodo(item.id));

        toast.info("Silme işlemi başarıyla gerçekleşti.");
      })
      .catch((err) => {
        toast.error("Bir sorun oluştu !!");
      });
  };

  const handleStatus = () => {
    api
      .patch(`/todos/${item.id}`, { is_done: !item.is_done })
      .then(() => {
        dispatch(updateToggle(item));
        toast.success("Durum başarıyla değiştirildi.");
      })
      .catch((err) => {
        toast.error("Bir sorun oluştu !!");
      });
  };

  const handleUpdate = () => {
    setIsShow(true);
  };

  return (
    <>
      <div className="border rounded p-4 my-5 shadow-lg">
        <h5 className="fs-1">{item.text} </h5>
        <h6 className={item.is_done ? "text-success" : "text-danger"}>
          {item.is_done ? "Tamamlandı" : "Devam Ediyor"}{" "}
        </h6>

        <div className="d-flex gap-4 mt-3">
          <button onClick={handleUpdate} className="btn btn-primary">
            Düzenle
          </button>
          <button
            onClick={handleStatus}
            className={item.is_done ? "btn btn-secondary" : "btn btn-success"}
          >
            {item.is_done ? "Geri Al" : "Tamamla"}
          </button>
          <button onClick={handleDelete} className="btn btn-danger">
            Sil
          </button>
        </div>
      </div>

      {isShow && <ModalComponent item={item} setIsShow={setIsShow} />}
    </>
  );
};

export default Card;
