import { connect } from 'react-redux';

const mapStateToProps = ({ commonGames }) => {
  return { commonGames };
}

const CommonGames = ({ commonGames }) => {
  return (
    <div>
      {commonGames.map((game) => {
        return (
          <li>
            <img src={game.gameImage} />
            <h1>{game.gameName}</h1>
          </li>
        );
      })}
    </div>
  )
};

export default connect(mapStateToProps)(CommonGames);
