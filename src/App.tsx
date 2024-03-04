import Content from "./components/layout/Content";
import Footer from "./components/layout/Footer";
import HashTagList from "./components/hashtags/HashTagList";
import FeedbackItemsContextProvider from "./components/context/FeedbackItemsContextProvider";

function App() {
  return (
    <div className="app">
      <Footer />

      <FeedbackItemsContextProvider>
        <Content />
        <HashTagList />
      </FeedbackItemsContextProvider>
    </div>
  );
}

export default App;
