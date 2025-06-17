import { Component } from '@angular/core';
import { User } from '../../models/IUsers';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-users-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './users-list.html',
  styleUrl: './users-list.css'
})
export class UsersList {
searchText: string = '';

  users: User[] = [
    {
      profilePicture: 'https://tse1.mm.bing.net/th/id/OIP.OVrNUl48mmcu2SKS8NckKQHaFV?r=0&rs=1&pid=ImgDetMain',
      username: 'Al-Tablawi',
      email: 'admin@example.com',
      phone: '111111111',
      birthdate: '1111-11-11',
      role: 'admin'
    },
    {
      profilePicture: 'https://th.bing.com/th/id/OIP.XiEsbAzGUQQykqLagYwqLAHaJ2?w=126&h=180&c=7&r=0&o=5&pid=1.7',
      username: 'Al-Minshawi',
      email: 'user@example.com',
      phone: '222222222222',
      birthdate: '2222-22-22',
      role: 'user'
    },
    {
      profilePicture: 'https://watanimg.elwatannews.com/image_archive/original_lower_quality/18194265071637693809.jpg',
      username: 'Al-Hosary',
      email: 'moderator@example.com',
      phone: '33333333',
      birthdate: '3333-33-33',
      role: 'moderator'
    }
  ];

  get filteredUsers(): User[] {
    return this.users.filter(user =>
      user.email.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  getRoleClass(role: string): string {
    return {
      'admin': 'chip-red',
      'user': 'chip-green',
      'moderator': 'chip-yellow'
    }[role]|| 'chip-default';
  }
}
