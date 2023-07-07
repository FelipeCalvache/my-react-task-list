export function Footer({ setTasks, pendingTasks, setPendingTasks }) {
  function handleClickDeleteAll() {
    setTasks([]);
    setPendingTasks(0)
    localStorage.clear()
  }

  return (
    <footer
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginTop: "50px",
        gap: "50px"
      }}
    >
      <p>You have {pendingTasks} pending tasks</p>
      <button
        onClick={handleClickDeleteAll}
        style={{ backgroundColor: "#f82056", border: "none", outline:'none' }}
        
      >
        Clear all
      </button>
    </footer>
  );
}