import useFeedbackItemsContext from "../../lib/hooks/FeedbackItemsContext";
import FeedbackForm from "../feeback/FeedbackForm";
import Logo from "../Logo";
import PageHeading from "../PageHeading";
import Pattern from "../Pattern";

const Header = () => {
  const { handleAddToFeedbackList } = useFeedbackItemsContext();

  return (
    <header>
      <Pattern />

      <Logo />

      <PageHeading />

      <FeedbackForm onAddToFeedbackList={handleAddToFeedbackList} />
    </header>
  );
};

export default Header;
