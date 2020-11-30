import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Lu Mora',
        email: 'lu@example.com',
        password: bcrypt.hashSync('123456', 10),
      
    },
    {
        name: 'Gaby Mora',
        email: 'gaby@example.com',
        password: bcrypt.hashSync('123456', 10),
        
    }
]

export default users