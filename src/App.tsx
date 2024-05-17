import "./App.css";
import Header from "./app/Header.tsx";
import MainContent from "./app/MainContent.tsx";
import Footer from "./app/Footer.tsx";

function App(): JSX.Element {
  return (
    <>
      <Header />

      <MainContent />

      <Footer />
    </>
  );
}

export default App;
