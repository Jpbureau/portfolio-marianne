import CardList from "../../components/CardList/CardList";
import CardInfo from "../../models/CardInfo";
import "./styles.css";

interface Props {
  cards: CardInfo[];
}

const Main: React.FC<Props> = ({ cards }) => {
  return (
    <div className="main-container">
      <CardList cards={cards} />
    </div>
  );
};

export default Main;
