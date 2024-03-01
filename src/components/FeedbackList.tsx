import { TriangleUpIcon } from "@radix-ui/react-icons";

const FeedbackList = () => {
  return (
    <ol className="feedback-list">
      <li className="feedback">
        <button>
          <TriangleUpIcon />
          <span>555</span>
        </button>

        <div>
          <p>B</p>
        </div>

        <div>
          <p>mosmartin</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            suscipit nam laudantium quos? Ipsam, voluptate!
          </p>
        </div>

        <p>4d</p>
      </li>
    </ol>
  );
};

export default FeedbackList;
