// const express = require('express');
// const router = express.Router();
// FIXME:
// const router = require('express').Router();
// const { User } = require('../../../models/User');




// router.post('/sign-up', async (req, res) => {
//     // console.log('testing post sign up user');
//     // console.log(req.body);

//     try {

//         if (!req.body.name || !req.body.email || !req.body.password) {
//             res.status(400).send('Invalid values detected in sign up form!')
//             return;
//         }
    
//         if (req.body.password !== req.body.confirmPassword) {
//             res.status(400).send('Passwords do not match!')
//             return;
//         }
        
//         const userId = uuidv4();

//         const hashedPassword = await bcrypt.hash(password, 10);

//         // const hashPassword =    async (password) => {
//         //     const salt = await bcrypt.genSalt(10);
//         //     return bcrypt.hash(password, salt);
            
//         //   }

//         const newUser = await User.create({
//             id: userId,
//             name: req.body.name,
//             email: req.body.email,
//             // password: req.body.password,
//             password: hashedPassword,
//         });

//         console.log(hashPassword, password, salt);

//         req.session.loggedIn = true;
        
//         // Set up sessions with a 'loggedIn' variable set to `true`
//         req.session.save(() => {

//         console.log(newUser);
//         res.status(200).json({message: `${req.body.name} was signed up!`});
//         });
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Error signing up user. Please try again');
//     }

//     {
//         // hooks: {
//         //   beforeCreate: async (newUserData) => {
//         //     newUserData.password = await bcrypt.hash(newUserData.password, 10);
//         //     return newUserData;
//         //   },
//         // },
    
//         hooks: {
//             // Hook to hash the password before creating a new user
//             beforeCreate: async (newUserData) => {
    
//               newUserData.password = await hashPassword(newUserData.password);
    
    
//               return newUserData;
//             },
//             // Hook to hash the password before updating an existing user's password
//             beforeUpdate: async (updatedUserData) => {
//               if (updatedUserData.password) {
//                 //updatedUserData.password = await User.hashPassword(updatedUserData.password);
//                 updatedUserData.password = await hashPassword(updatedUserData.password);
//               }
//               return updatedUserData;
//             },
//           },
//         sequelize,
//         timestamps: false,
//         freezeTableName: true,
//         underscored: true,
//         modelName: 'user',
//       }
//     );
    
    
//     // Sync the model with the database
//     sequelize.sync({ force: false })
//       .then(() => {
//         console.log('User table created.');
//       })
//       .catch(err => {
//         console.error('Error creating table:', err);
//       });

 
// });


// module.exports = router;
//FIXME: 

const router = require('express').Router();
const { User } = require('../../../models');
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');

// Define a function to hash the password
const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
};

router.post('/sign-up', async (req, res) => {
    try {
        // Validation checks
        if (!req.body.name || !req.body.email || !req.body.password) {
            res.status(400).send('Invalid values detected in sign up form!');
            return;
        }
        if (req.body.password !== req.body.confirmPassword) {
            res.status(400).send('Passwords do not match!');
            return;
        }

        // Generate a unique ID for the user
        const userId = uuidv4();

        // Hash the password
        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        // Create a new user in the database
        const newUser = await User.create({
            id: userId,
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
        });

        // Log the new user and send a success response
        console.log(newUser);
        res.status(200).json({ message: `${req.body.name} was signed up!` });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error signing up user. Please try again');
    }
});

module.exports = router;