import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService { 
  
  constructor(private http: HttpClient){}

  // request data by GET
  reqDataByGet(url){
    return this.http.get(url).toPromise()
    .then(response =>  {
      return response
    })
  }

  // request data by PUT
  reqDataByPut(url, params){
    return this.http.put(url, params).toPromise()
    .then(response =>  {
      return response
    })
  }

}
