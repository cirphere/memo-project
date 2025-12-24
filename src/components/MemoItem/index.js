import "./index.css";

function MemoItem({ children, onClickItem, isSelected, onClickDelete }) {
  return (
    <div
      className={"MemoItem" + (isSelected ? " selected" : "")}
      onClick={() => {
        onClickItem();
      }}
    >
      {children}
      <button className="MemoItem__deleteButton" onClick={onClickDelete}>
        x
      </button>
    </div>
  );
}

export default MemoItem;
