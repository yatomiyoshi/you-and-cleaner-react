export const Dialog = ({ children, header, open, onClose }) => {
  return (
    <dialog open={open}>
      <div className="iconWrapper">
        <button onClick={onClose}>✖</button>
      </div>
      <h2 className="dialogTitle">{header}</h2>
      {children}
    </dialog>
  );
};
