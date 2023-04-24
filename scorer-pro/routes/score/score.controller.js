const express = require('express');
const { getScores } = require('./score.model');
const router = express.Router();

// Get scores by Game ID
// http://localhost:3000/score
router.get('/:gameId', (req, res, next)  =>{
    const {gameId} = req.params;
    const score = getScores(gameId)
  res.json({
    data : score
  });
});

// Add a new score
router.post('/', (req, res, next)  =>{
    const {gameId , userId , score } = req.body;
    res.json({
      message :' Add Scores!  '
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
