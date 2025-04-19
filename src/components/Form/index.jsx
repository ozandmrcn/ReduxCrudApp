import { useDispatch } from "react-redux";
import { v4 } from "uuid";
import actionTypes from "../../redux/actionTypes";
import api from "./../../utils/api";
import { toast } from "react-toastify";
import { addTodo } from "../../redux/actions/actions";

const Form = () => {
  // Dispatch kurulumu
  const dispatch = useDispatch();

  // ? Form gönderildiğinde çalışacak fonksiyon
  const handleSubmit = (e) => {
    // Sayfa yenilenmesini engelle
    e.preventDefault();

    // Inputtaki değere eriş
    const text = e.target[0].value;

    const newTodo = {
      id: v4(),
      text,
      is_done: false,
      createdAt: new Date().getTime(),
    };

    // API'a oluşturma isteği at
    api
      .post("/todos", newTodo)
      .then(() => {
        // Dispatch ile reducer'a aksiyon ilet
        dispatch(addTodo(newTodo));

        // Başarılı toast mesajı
        toast.success("Todo başarılı bir şekilde eklendi.");
      })
      .catch((err) => {
        // Hata toast mesajı
        toast.error("Bir sorun oluştu !!");
      });

    // Formu resetle
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex gap-3 mt-4">
      <input
        type="text"
        placeholder="Ör:React Redux Öğren"
        className="form-control"
      />

      <button className="btn btn-warning">Ekle</button>
    </form>
  );
};

export default Form;
