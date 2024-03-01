import FeedbackItem from "./FeedbackItem";

const feedBackItemsArr = [
  {
    upvoteCount: 555,
    badgeLetter: "M",
    companyName: "mosmartin",
    feedback:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos suscipit nam laudantium quos? Ipsam, voluptate!",
    age: 4,
  },
  {
    upvoteCount: 5,
    badgeLetter: "N",
    companyName: "Nike",
    feedback:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos suscipit nam laudantium quos? Ipsam, voluptate!",
    age: 10,
  },
  {
    upvoteCount: 55,
    badgeLetter: "A",
    companyName: "Apple",
    feedback:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos suscipit nam laudantium quos? Ipsam, voluptate!",
    age: 1,
  },
  {
    upvoteCount: 5,
    badgeLetter: "G",
    companyName: "Google",
    feedback:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos suscipit nam laudantium quos? Ipsam, voluptate!",
    age: 22,
  },
  {
    upvoteCount: 55,
    badgeLetter: "M",
    companyName: "Microsoft",
    feedback:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos suscipit nam laudantium quos? Ipsam, voluptate!",
    age: 3,
  },
  {
    upvoteCount: 5,
    badgeLetter: "F",
    companyName: "Facebook",
    feedback:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos suscipit nam laudantium quos? Ipsam, voluptate!",
    age: 4,
  },
  {
    upvoteCount: 55,
    badgeLetter: "T",
    companyName: "Twitter",
    feedback:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos suscipit nam laudantium quos? Ipsam, voluptate!",
    age: 5,
  },
  {
    upvoteCount: 5,
    badgeLetter: "I",
    companyName: "Instagram",
    feedback:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos suscipit nam laudantium quos? Ipsam, voluptate!",
    age: 6,
  },
  {
    upvoteCount: 55,
    badgeLetter: "S",
    companyName: "Snapchat",
    feedback:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos suscipit nam laudantium quos? Ipsam, voluptate!",
    age: 7,
  },
  {
    upvoteCount: 5,
    badgeLetter: "L",
    companyName: "LinkedIn",
    feedback:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos suscipit nam laudantium quos? I",
    age: 8,
  },
];

const FeedbackList = () => {
  return (
    <ol className="feedback-list">
      {feedBackItemsArr.map((item, index) => (
        <FeedbackItem key={index} feedbackItem={item} />
      ))}
    </ol>
  );
};

export default FeedbackList;
