import { UserService } from "./../user.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"]
})
export class UsersComponent implements OnInit {
  Users;
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUsers().subscribe(users => {
      this.Users = users.json();
    });
  }
  getUser() {
    return this.userService.getLoggedInUser().username;
  }
}
