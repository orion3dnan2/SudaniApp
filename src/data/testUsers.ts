// Test users for development and testing
// These users can be used to test different roles in the application

export const testUsers = [
  {
    id: 'admin-001',
    email: 'admin@baytalSudani.com',
    password: 'Admin@123',
    name: 'مدير النظام',
    role: 'admin' as const,
    phone: '+249912345678',
  },
  {
    id: 'merchant-001',
    email: 'merchant@baytalSudani.com',
    password: 'Merchant@123',
    name: 'صاحب المتجر',
    role: 'merchant' as const,
    phone: '+249912345679',
  },
  {
    id: 'user-001',
    email: 'user@baytalSudani.com',
    password: 'User@123',
    name: 'مستخدم عادي',
    role: 'user' as const,
    phone: '+249912345680',
  },
];

// Helper function to get user by email
export const getTestUserByEmail = (email: string) => {
  return testUsers.find(user => user.email === email);
};

// Helper function to validate test user credentials
export const validateTestUser = (email: string, password: string) => {
  const user = getTestUserByEmail(email);
  if (user && user.password === password) {
    // Return user without password
    const { password: _, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }
  return null;
};
