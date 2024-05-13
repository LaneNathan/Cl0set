const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

// class User extends Model {
//   checkPassword(loginPw) {
//     return bcrypt.compareSync(loginPw, this.password);
//   }
// }

class User extends Model {
    // Method to check if a password matches the hashed password stored in the database
    async isValidPassword(password) {
        console.log(password, this.password);
      return bcrypt.compare(password, this.password);
    }

  }



const hashPassword =    async (password) => {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
  }

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8],
      },
    },
  },
  {
    // hooks: {
    //   beforeCreate: async (newUserData) => {
    //     newUserData.password = await bcrypt.hash(newUserData.password, 10);
    //     return newUserData;
    //   },
    // },

    hooks: {
        // Hook to hash the password before creating a new user
        beforeCreate: async (newUserData) => {

          newUserData.password = await hashPassword(newUserData.password);


          return newUserData;
        },
        // Hook to hash the password before updating an existing user's password
        beforeUpdate: async (updatedUserData) => {
          if (updatedUserData.password) {
            //updatedUserData.password = await User.hashPassword(updatedUserData.password);
            updatedUserData.password = await hashPassword(updatedUserData.password);
          }
          return updatedUserData;
        },
      },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  }
);

module.exports = User;





// const goGo = async () =>
//     {


//         // const userData = {
//         //     name: 'Test User',
//         //     email: 'test@example.com',
//         //     password: 'password123',
//         //   };
//         // const newUser = await User.create(userData);

//         // console.log(newUser);



//         const existingUser = await User.findOne({ where: { email: 'test@example.com' } });


//         const isAuthenticated = await existingUser.isValidPassword('password123');

//         console.log(isAuthenticated);



//     }


// sequelize.sync({ force: false }).then(() => {
    
//     goGo();

//   });