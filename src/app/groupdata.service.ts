import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Groups } from "./groups";

@Injectable()
export class GroupdataService {
  constructor(private http: HttpClient) {}

  add(group: Groups) {
    return this.http.post<any>("http://localhost:3000/api/addgroup", group);
  }
  getlist() {
    return this.http.get<any>("http://localhost:3000/api/getgroup");
  }

  getitem(groupID) {
    return this.http.post<any>("http://localhost:3000/api/getitem", {
      groupid: groupID
    });
  }
  updateitem(group: Groups) {
    return this.http.post<any>("http://localhost:3000/api/update", group);
  }
  deleteitem(groupID) {
    return this.http.post<any>("http://localhost:3000/api/deleteitem", {
      groupid: groupID
    });
  }
  checkvalidid(groupID) {
    return this.http.post<any>("http://localhost:3000/api/checkvalidid", {
      id: groupID
    });
  }
  /*getgroupcount(){
  return this.http.get<any>('http://localhost:3000/api/prodcount');
}*/
}
