import { Dialog } from "./ui/Dialog";

export const CreateTodoDialog = ({ open, onClose }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      header="新規TODOの追加"
    >
      <form className="todoForm">
        <div className="formElement">
          <label htmlFor="title">TODOのタイトル</label>
          <input
            name="title"
            id="title"
          />
        </div>
        <div className="formElement">
          <label htmlFor="description">TODOの内容</label>
          <input
            name="description"
            id="description"
          />
        </div>
        <div className="formElement">
          <label htmlFor="deadline">TODOの期限</label>
          <input
            name="deadline"
            id="deadline"
          />
        </div>
        <div className="dialogActionButtonWrapper">
          <button className="dialogActionBUttonWrapper">キャンセル</button>
          <button
            className="dialogActionPositiveButton"
            type="submit"
          >
            追加
          </button>
        </div>
      </form>
    </Dialog>
  );
};
