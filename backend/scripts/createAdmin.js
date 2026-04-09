import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import { database } from '../db/database.js';

dotenv.config();

const createAdmin = async () => {
  try {
    const email = 'admin@crossworld.com';
    const password = 'admin123'; // Change this!
    const full_name = 'Admin User';

    const existingUser = database.users.findByEmail(email);
    if (existingUser) {
      console.log('❌ Admin user already exists');
      process.exit(0);
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    database.users.create({
      email,
      password: hashedPassword,
      full_name,
      role: 'admin'
    });

    console.log('✅ Admin user created successfully!');
    console.log(`   Email: ${email}`);
    console.log(`   Password: ${password}`);
    console.log('\n⚠️  Please change the password after first login!');
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
};

createAdmin();
