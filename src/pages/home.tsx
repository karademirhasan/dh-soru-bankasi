import Button from 'components/Elements/Button/Button';
import { Colors } from 'types/enums';

export const Home = () => {
  return (
    <div className="Page-Home">
      <h1>Doping Hafıza</h1>
      <Button color={Colors.Yellow} to={'/exam'}>
        Testi Başlat
      </Button>
    </div>
  );
};
