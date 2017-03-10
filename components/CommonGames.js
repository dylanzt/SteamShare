import { connect } from 'react-redux';

const mapStateToProps = ({ commonGames }) => {
  return { commonGames };
}

const CommonGames = ({ commonGames }) => {
  return (
    <div>
      {commonGames.length ? commonGames.map((game) => {
        return (
          <li>
            <img src={game.gameImage} />
            <h1>{game.gameName}</h1>
          </li>
        );
      }) : <h1>No games in common!</h1>}
    </div>
  )
};

export default connect(mapStateToProps)(CommonGames);
