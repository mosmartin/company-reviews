import useFeedbackItemsContext from "../../lib/hooks/FeedbackItemsContext";
import HashtagItem from "./HashtagItem";

const HashTagList = () => {
  const { companyList, handleSelectedCompany } = useFeedbackItemsContext();

  return (
    <ul className="hashtags">
      {companyList().map((company) => (
        <HashtagItem
          key={company}
          company={company}
          onSelectCompany={handleSelectedCompany}
        />
      ))}
    </ul>
  );
};

export default HashTagList;
