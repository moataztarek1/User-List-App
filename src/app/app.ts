import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UsersList } from "../app/components/users-list/users-list";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UsersList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'users-list-app';
}
