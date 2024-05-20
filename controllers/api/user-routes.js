// const { Router } = require('express');
// const { User } = require('../../models');

const router = require('express').Router();
const { User } = require('../../models');

//npm package to give each user a unique ID upon creation
const { v4: uuidv4 } = require('uuid');

const mysql = require('mysql2');



//--------------------Create New User--------------------//

router.post('/sign-up', async (req, res) => {
    // console.log('testing post sign up user');
    // console.log(req.body);

    try {

        if (!req.body.name || !req.body.email || !req.body.password) {
            res.status(400).send('Invalid values detected in sign up form!')
            return;
        }
    
        // if (req.body.password !== req.body.confirmPassword) {
        //     res.status(400).send('Passwords do not match!')
        //     return;
        // }
        
        const userId = uuidv4();

        const newUser = await User.create({
            id: userId,
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        });

        req.session.loggedIn = true;
        
        // Set up sessions with a 'loggedIn' variable set to `true`
        req.session.save(() => {

        console.log(newUser);
        res.status(200).json({message: `${req.body.name} was signed up!`});
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error signing up user. Please try again');
    }

 
});
    

//--------------------Log In--------------------//  

router.post('/login', async (req, res) => {
    try {
      const dbUserData = await User.findOne({
        where: {
          name: req.body.name,
        },
      });
  
      if (!dbUserData) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password. Please try again!' });
        return;
      }
  
      const validPassword = await dbUserData.isValidPassword(req.body.password);
  
      if (!validPassword) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password. Please try again!' });
        return;
      }
  
      // Once the user successfully logs in, set up the sessions variable 'loggedIn'
      req.session.save(() => {
        req.session.loggedIn = true;
  
        res
          .status(200)
          .json({ user: dbUserData, message: 'You are now logged in!' });
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
  
//--------------------Log Out--------------------// 

  router.post('/logout', (req, res) => {
    // When the user logs out, destroy the session
    if (req.session.loggedIn) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  });















// module.exports = router

module.exports = router;