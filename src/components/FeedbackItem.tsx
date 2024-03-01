import { TriangleUpIcon } from "@radix-ui/react-icons";

type feedbackItem = {
  upvoteCount: number;
  badgeLetter: string;
  companyName: string;
  feedback: string;
  age: number;
};

type FeedbackItemProps = {
  feedbackItem: feedbackItem;
};

const FeedbackItem = ({ feedbackItem }: FeedbackItemProps) => {
  return (
    <li className="feedback">
      <button>
        <TriangleUpIcon />
        <span>{feedbackItem.upvoteCount}</span>
      </button>

      <div>
        <p>{feedbackItem.badgeLetter}</p>
      </div>

      <div>
        <p>{feedbackItem.companyName}</p>
        <p>{feedbackItem.feedback}</p>
      </div>

      <p>{feedbackItem.age}d</p>
    </li>
  );
};

export default FeedbackItem;
