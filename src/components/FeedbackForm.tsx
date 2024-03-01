import { ChangeEvent, useState } from "react";
import { MAX_CHARACTERS } from "../lib/constants";

const FeedbackForm = () => {
  const [feedback, setFeedback] = useState("");

  const charCount = MAX_CHARACTERS - feedback.length;

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault();

    const value = e.target.value;
    if (value.length > MAX_CHARACTERS) {
      return;
    }

    setFeedback(value);
  };

  return (
    <form className="form" action="">
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
