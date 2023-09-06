import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import { LanguageProvider } from "./LanguageContext";

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <Header />
        <Body />
      </div>
    </LanguageProvider>
  );
}

export default App;
