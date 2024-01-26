import Header from "./components/Header";
import SideBar from "./components/SideBar";

function App() {
  return (
    <>
      <div>
        <Header />
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <SideBar />
         
        </div>
      </div>
    </>
  );
}

export default App;
