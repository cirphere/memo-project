import MemoList from "../MemoList";
import SideBarHeader from "../SideBarHeader";
import SiderBarFooter from "../SideBarFooter";
import "./index.css";

function SideBar({
  memos,
  setSelectedMemoIndex,
  selectedMemoIndex,
  addMemo,
  deleteMemo,
}) {
  return (
    <div className="SideBar">
      <SideBarHeader />
      <MemoList
        memos={memos}
        selectedMemoIndex={selectedMemoIndex}
        setSelectedMemoIndex={setSelectedMemoIndex}
        deleteMemo={deleteMemo}
      />
      <SiderBarFooter onClick={addMemo} />
    </div>
  );
}

export default SideBar;
