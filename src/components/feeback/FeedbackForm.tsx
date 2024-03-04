import { ChangeEvent, useState } from "react";
import { MAX_CHARACTERS } from "../../lib/constants";

type FeedbackFormProps = {
  onAddToFeedbackList: (text: string) => void;
};

const FeedbackForm = ({ onAddToFeedbackList }: FeedbackFormProps) => {
  const [feedback, setFeedback] = useState("");
  const [validIndicator, setValidIndicator] = useState(false);
  const [invalidIndicator, setInvalidIndicator] = useState(false);

  const charCount = MAX_CHARACTERS - feedback.length;

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    if (value.length > MAX_CHARACTERS) {
      return;
    }

    setFeedback(value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (feedback.includes("#") && feedback.length >= 5) {
      setValidIndicator(true);
      setTimeout(() => setValidIndicator(false), 3000);
    } else {
      setInvalidIndicator(true);
      setTimeout(() => setInvalidIndicator(false), 3000);
      return;
    }

    onAddToFeedbackList(feedback);
    setFeedback("");
  };

  return (
    <form
      className={`form ${validIndicator ? "form--valid" : ""} ${
        invalidIndicator ? "form--invalid" : ""
      }`}
      onSubmit={handleSubmit}
    >
      <textarea
        id="feedback-textarea"
        value={feedback}
        onChange={handleChange}
        placeholder=""
        spellCheck={false}
      />

      <label htmlFor="feedback-textarea">
        How can we improve?{" "}
        <span className="sr-only">
          Leave your feedback here and don't forget to #tag the company
        </span>
      </label>

      <div>
        <p className="u-italic">{charCount}</p>
        <button>
          <span>Submit</span>
        </button>
      </div>
    </form>
  );
};

export default FeedbackForm;
