export function Header({setTasks}) {

    function handleSubmit(event){
        event.preventDefault()
        console.log(event.target.value)
        setTasks('hola')
    }

  return (
    <nav>
      <h1 style={{textAlign:'left'}}>Todo App</h1>
      <form
        onSubmit={handleSubmit}
        style={{
          height: "50px",
          display: "flex",
          justifyContent: "stretch",
          alignItems: "center",
          gap: "10px",
        //   border:'solid'
        }}
      >
        <input
          placeholder="Add your new todo"
          style={{
            height: "100%",
            width:'100%',
            // backgroundColor: "#f9f9f9",
            border: 'solid 1px #e2e2e2',
            borderRadius:'8px',
            padding:'0px 1.2em',
            display:'block'
          }}
        ></input>
        <button type="submit" style={{ height: "100%" }}>+</button>
      </form>
    </nav>
  );
}
