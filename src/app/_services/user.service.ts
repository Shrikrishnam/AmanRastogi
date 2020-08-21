import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from "@angular/http";
import { map } from 'rxjs/operators';
//import { Subject } from 'rxjs';

const httpOptions = {
  headers: new Headers({ "Content-Type": "application/json" })
};

@Injectable({ providedIn: 'root' })
export class UserService {

    public static BaseUrl = "http://localhost:6565/";

    constructor(private http: Http) { }

    updateUser(user){
      return this.http.put(UserService.BaseUrl+'allfriends/'+user.id,user);
    }

    createUser(user){
      return this.http.post(UserService.BaseUrl+'allfriends',user);
    }
    createContact(user){
      return this.http.post(UserService.BaseUrl+'contact-us',user);
    }

    getAllUser(){
      return this.http.get(UserService.BaseUrl+'allfriends').pipe(map((response: Response) => response.json()));
    }

    deleteUser(user){
      return this.http.delete(UserService.BaseUrl+'allfriends/'+ user.id);
    }

 

    getspecificdata(userid){
      return this.http.get(UserService.BaseUrl+'allfriends/'+userid).pipe(map((response: Response) => response.json()));;
    }

    postfitnessdata(data){
      return this.http.post(UserService.BaseUrl+'allfriends',data,httpOptions).pipe(map((response: Response) => response.json()));
    }
    getfitnessdata() {
      return this.http.get(UserService.BaseUrl+'allfriends',httpOptions).pipe(map((response: Response) => response.json()));
    }
}