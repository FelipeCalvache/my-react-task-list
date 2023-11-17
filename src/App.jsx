import { useState } from "react";
import "./App.css";
import { Container } from "./components/Container";
import { ThemeContext } from "./context/themeContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Form } from "./components/Form";
import { NavBar } from "./components/NavBar";

function App() {
  const [theme, setTheme] = useState("claro");

  return (
    <BrowserRouter>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <NavBar />
        <Routes>
          <Route
            path="/tasks"
            element={
              <main className={`main-${theme}`}>
                <Container />
              </main>
            }
          />
          <Route path="/" element={<Form />} />
        </Routes>
      </ThemeContext.Provider>
    </BrowserRouter>
  );
}

export default App;
