import { useEffect, useState } from "react";
import Content from "./components/layout/Content";
import Footer from "./components/layout/Footer";
import HashTagList from "./components/hashtags/HashTagList";
import { TFeedbackItem } from "./lib/types";

function App() {
  const [feedbackItems, setFeedbackItems] = useState<TFeedbackItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

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

  const postFeedback = async (feedback: TFeedbackItem) => {
    setIsLoading(true);

    try {
      const response = await fetch(
        "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(feedback),
        }
      );

      if (!response.ok) {
        throw new Error("Error posting feedback!");
      }

      const data = await response.json();

      setFeedbackItems([...feedbackItems, data.feedback]);
      setIsLoading(false);
    } catch (error) {
      setErrorMessage("Error posting feedback");
      setIsLoading(false);
    }
  };

  const handleAddToFeedbackList = async (text: string) => {
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

    await postFeedback(feedback);
  };

  const companyList = () => {
    const companies = feedbackItems
      .map((feedback) => feedback.company)
      .filter((company, index, arr) => {
        return arr.indexOf(company) === index;
      });

    return [...new Set(companies)];
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

      <HashTagList companyList={companyList} />
    </div>
  );
}

export default App;
