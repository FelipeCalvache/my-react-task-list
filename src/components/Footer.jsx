export function Footer() {
    return (
      <footer style={{display:'flex', justifyContent:'space-between', marginTop:'100px'}}>
        <p>You have 2 pending tasks</p>
        <button>Clear all</button>
      </footer>
    );
}