import "./App.css";
import MemoContainer from "./components/MemoContainer";
import SideBar from "./components/SideBar";
import { useCallback, useState } from "react";
import { getItem, setItem } from "./lib/storage";
import debounce from "lodash/debounce";
import { set } from "lodash";

const debouncedSetItem = debounce(setItem, 1000);

function App() {
  const [memos, setMemos] = useState(getItem("memo") || []);

  const [selectedMemoIndex, setSelectedMemoIndex] = useState(0);

  const setMemo = useCallback(
    (newMemo) => {
      setMemos((memos) => {
        const newMemos = [...memos];
        newMemos[selectedMemoIndex] = newMemo;
        debouncedSetItem("memo", newMemos);

        return newMemos;
      });
    },
    [selectedMemoIndex]
  );

  const addMemo = useCallback(() => {
    // setMemos(newMemos);
    setMemos((memos) => {
      const now = new Date().getTime();
      const newMemos = [
        ...memos,
        {
          title: "Untitled",
          content: "",
          createdAt: now,
          updatedAt: now,
        },
      ];
      debouncedSetItem("memo", newMemos);
      return newMemos;
    });
    setSelectedMemoIndex(memos.length);
  }, [memos]);

  const deleteMemo = useCallback(
    (index) => {
      // setMemos(newMemos);
      setMemos((memos) => {
        const newMemos = [...memos];
        newMemos.splice(index, 1);
        debouncedSetItem("memo", newMemos);
        return newMemos;
      });
      if (index === selectedMemoIndex) {
        setSelectedMemoIndex(0);
      }
    },
    [selectedMemoIndex]
  );

  return (
    <div className="App">
      <SideBar
        memos={memos}
        selectedMemoIndex={selectedMemoIndex}
        setSelectedMemoIndex={setSelectedMemoIndex}
        addMemo={addMemo}
        deleteMemo={deleteMemo}
      />
      <MemoContainer memo={memos[selectedMemoIndex]} setMemo={setMemo} />
    </div>
  );
}

export default App;
