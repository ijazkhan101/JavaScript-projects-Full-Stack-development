const express = require('express');
const { getScores, addScore } = require('./score.model');
const router = express.Router();

// Get scores by Game ID
// http://localhost:3000/score
router.get('/:gameId', (req, res, next)  =>{
    const {gameId} = req.params;
    const scores = getScores(gameId)
  res.json({
    data : scores
  });
});

// Add a new score
router.post('/', (req, res, next)  =>{
    const {gameId , userId , score } = req.body;
    const savedScore = addScore({gameId , userId , score});
    res.json({
      data : savedScore
    });
  });

// Update an existing score
router.put('/:gameId', (req, res, next)  =>{
    res.json({
      message :'Update Scores'
    });
  });

// Delete a  score
//router.delete('/:gameId', (req, res, next)  =>{
 //   res.json({
  //    message :'Delete Scores! '
  //  });
 // });
  
  

module.exports = router;
