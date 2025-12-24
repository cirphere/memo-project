import "./index.css";

function SiderBarFooter({ onClick }) {
  return (
    <div className="SideBarFooter">
      <button className="SideBarFooter__addButton" onClick={onClick}>
        +
      </button>
    </div>
  );
}

export default SiderBarFooter;
