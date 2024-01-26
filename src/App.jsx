import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import MovieList from "./components/cine/MovieList";
import { movieContext } from "./context";

function App() {
  const [cartData, setCartData] = useState([])
  return (
    <>
      <movieContext.Provider value={{cartData, setCartData}}>
        <Header />
        <main>
          <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
            <SideBar />
            <MovieList />
          </div>
        </main>
        <Footer />
      </movieContext.Provider>
    </>
  );
}

export default App;
