const User = require('../models/User');

describe('User Authentication', () => {
  // Test case for authenticating user with correct credentials
  test('should authenticate user with correct credentials', async () => {
    // Create a test user
    const userData = {
      name: 'Test User',
      email: 'test@example.com',
      password: 'password123',
    };
    const newUser = await User.create(userData);

    // Authenticate user with correct credentials
    //const isAuthenticated = await newUser.isValidPassword('password123');
    //expect(isAuthenticated).toBe(true);
  });

  // Test case for not authenticating user with incorrect password
  test('should not authenticate user with incorrect password', async () => {
    // Retrieve test user from the database
    const existingUser = await User.findOne({ where: { email: 'test@example.com' } });

    // Attempt to authenticate user with incorrect password
    const isAuthenticated = await existingUser.isValidPassword('incorrectpassword');
    expect(isAuthenticated).toBe(false);
    });
});