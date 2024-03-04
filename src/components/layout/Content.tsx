import { TFeedbackItem } from "../../lib/types";
import FeedbackList from "../feeback/FeedbackList";
import Header from "./Header";

type ContentProps = {
  feedbackItems: TFeedbackItem[];
  isLoading: boolean;
  errorMessage: string;
  handleAddToFeedbackList: (text: string) => void;
};

function Content({
  feedbackItems,
  isLoading,
  errorMessage,
  handleAddToFeedbackList,
}: Readonly<ContentProps>) {
  return (
    <main className="container">
      <Header handleAddToFeedbackList={handleAddToFeedbackList} />

      <FeedbackList
        feedbackItems={feedbackItems}
        isLoading={isLoading}
        errorMessage={errorMessage}
      />
    </main>
  );
}

export default Content;
