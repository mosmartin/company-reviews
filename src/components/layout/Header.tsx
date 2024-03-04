import FeedbackForm from "../feeback/FeedbackForm";
import Logo from "../Logo";
import PageHeading from "../PageHeading";
import Pattern from "../Pattern";

type HeaderProps = {
  handleAddToFeedbackList: (text: string) => void;
};

const Header = ({ handleAddToFeedbackList }: HeaderProps) => {
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
