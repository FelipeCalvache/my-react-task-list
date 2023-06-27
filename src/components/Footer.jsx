export function Footer({ setTasks, pendingTasks, setPendingTasks }) {
  function handleClick() {
    setTasks([]);
    setPendingTasks(0)
  }

  return (
    <footer
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginTop: "50px",
      }}
    >
      <p>You have {pendingTasks} pending tasks</p>
      <button
        onClick={handleClick}
        style={{ backgroundColor: "#f82056", border: "none", outline:'none' }}
        
      >
        Clear all
      </button>
    </footer>
  );
}