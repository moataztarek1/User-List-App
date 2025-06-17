export interface User {
  profilePicture: string;
  username: string;
  email: string;
  phone: string;
  birthdate: string;
  role: 'admin' | 'moderator' | 'user';
}
