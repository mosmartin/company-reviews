import HashtagItem from "./HashtagItem";

type HashTagListProps = {
  companyList: () => string[];
  handleSelectedCompany: (company: string) => void;
};

const HashTagList = ({
  companyList,
  handleSelectedCompany,
}: HashTagListProps) => {
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
