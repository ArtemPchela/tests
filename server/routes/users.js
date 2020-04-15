const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get("/", function(req, res) {
  res.send(users);
});

module.exports = router;

const users = [
  {
    "header": "Title 1",
    "introduction": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "backgroundColor": "red",
    "backgroundImg": "./pictures/1.jpg"
  },
  {
    "header": "Title 2",
    "introduction": "Lorem ipsum dolor sit amet. Integer sit.",
    "backgroundColor": "blue",
    "backgroundImg": "./pictures/2.jpg"
  },
  {
    "header": "Title 3",
    "introduction": "Lorem ipsum dolor. Integer sit.",
    "backgroundColor": "",
    "backgroundImg": "./pictures/3.jpg"
  },
  {
    "header": "Title 4",
    "introduction": "Integer sit.",
    "backgroundColor": "",
    "backgroundImg": "./pictures/4.jpg"
  },
  {
    "header": "Title 5",
    "introduction": "Lorem ipsum dolor sit amet, elit. Integer sit.",
    "backgroundColor": "",
    "backgroundImg": "./pictures/5.jpg"
  }
];
