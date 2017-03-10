import { connect } from 'react-redux';

const mapStateToProps = ({ commonGames }) => {
  return { commonGames };
}

const CommonGames = ({ commonGames }) => {
  return (
    <div className="common-games">
      {commonGames.length ? commonGames.map((game) => {
        return (
          <li className="">
            <img src={game.gameImage} />
            <h1>{game.gameName}</h1>
          </li>
        );
      }) : <h1>No games in common!</h1>}
      <style jsx>{`
        .common-games {
          display: flex;
          flex-direction: column;
          font-family: Roboto Arial sans-serif;
        }

        img {
          margin-right: 16px;
        }

        li {
          display: flex;

        }
      `}</style>
    </div>
  )
};

export default connect(mapStateToProps)(CommonGames);
