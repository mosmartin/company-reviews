import { useContext } from "react";
import { FeedbackItemsContext } from "../../components/context/FeedbackItemsContextProvider";

const useFeedbackItemsContext = () => {
  const context = useContext(FeedbackItemsContext);
  if (!context) {
    throw new Error(
      "useFeedbackItemsContext must be used within a FeedbackItemsProvider"
    );
  }
  
  return context;
};

export default useFeedbackItemsContext;
