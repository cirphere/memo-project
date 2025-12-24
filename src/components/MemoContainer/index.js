import "./index.css";
function MemoContainer({ memo, setMemo }) {
  if (memo === undefined) {
    return (
      <div className="MemoContainer">
        <h1>No Memo Selected</h1>
        <h2>Please create a new memo.</h2>
      </div>
    );
  }

  return (
    <div className="MemoContainer">
      <div>
        <input
          type="text"
          className="MemoContainer__title"
          value={memo.title}
          onChange={(e) => {
            setMemo({
              ...memo,
              title: e.target.value,
              updatedAt: new Date().getTime(),
            });
          }}
        />
      </div>
      <div>
        <textarea
          className="MemoContainer__content"
          value={memo.content}
          onChange={(e) => {
            setMemo({ ...memo, content: e.target.value });
          }}
        />
      </div>
    </div>
  );
}

export default MemoContainer;
