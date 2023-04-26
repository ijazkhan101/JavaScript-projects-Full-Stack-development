const getScores = (gameId) => {
  return [
    {
      gameId: "game123",
      userId: "user123",
      score: 100,
    },
    {
      gameId: "game123",
      userId: "user456",
      score: 80,
    },
  ];
};

const addScore = ({ gameId, userId, score }) => {
  return
  {
    gameId, userId, score
  }
}

const updateScore = ({ gameId, userId, score }) => {
    return
    {
      gameId, userId, score
    }
  }

module.exports = {
  getScores,
  addScore,
  updateScore
};
