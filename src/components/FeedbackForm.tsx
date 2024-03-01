const FeedbackForm = () => {
  return (
    <form className="form" action="">
      <textarea id="feedback-textarea" placeholder="" spellCheck={false} />

      <label htmlFor="feedback-textarea">
        How can we improve?{" "}
        <span className="sr-only">
          Leave your feedback here and don't forget to #tag the company
        </span>
      </label>

      <div>
        <p className="u-italic">160</p>
        <button>
          <span>Submit</span>
        </button>
      </div>
    </form>
  );
};

export default FeedbackForm;
