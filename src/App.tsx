import { useEffect, useState } from "react";
import Content from "./components/Content";
import Footer from "./components/Footer";
import HashTagList from "./components/HashTagList";
import { TFeedbackItem } from "./lib/types";

function App() {
  const [feedbackItems, setFeedbackItems] = useState<TFeedbackItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleAddToFeedbackList = (text: string) => {
    const comapanyName =
      text
        .split(" ")
        .find((word) => word.includes("#"))
        ?.substring(1) ?? "";

    const feedback: TFeedbackItem = {
      id: new Date().getTime().toString(),
      upvoteCount: 0,
      badgeLetter: comapanyName.substring(0, 1).toUpperCase(),
      company: comapanyName,
      text,
      daysAgo: 0,
    };

    setFeedbackItems([...feedbackItems, feedback]);
  };

  const fetchFeedbacks = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(
        "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks"
      );

      if (!response.ok) {
        throw new Error("Error fetching feedbacks!");
      }

      const data = await response.json();

      setFeedbackItems(data.feedbacks);
      setIsLoading(false);
    } catch (error) {
      setErrorMessage("Error fetching feedbacks");
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  return (
    <div className="app">
      <Footer />

      <Content
        feedbackItems={feedbackItems}
        isLoading={isLoading}
        errorMessage={errorMessage}
        handleAddToFeedbackList={handleAddToFeedbackList}
      />

      <HashTagList />
    </div>
  );
}

export default App;
