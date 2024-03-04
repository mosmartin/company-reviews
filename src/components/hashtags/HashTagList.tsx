import HashtagItem from "./HashtagItem";

type HashTagListProps = {
  companyList: () => string[];
};

const HashTagList = ({ companyList }: HashTagListProps) => {
  return (
    <ul className="hashtags">
      {companyList().map((company) => (
        <HashtagItem key={company} company={company} />
      ))}
    </ul>
  );
};

export default HashTagList;
