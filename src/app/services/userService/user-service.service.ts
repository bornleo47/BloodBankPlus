import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private baseUrl:string="http://localhost:8080/";
  public user = new User();
  
    constructor(private http:HttpClient) { }
  
    getEvents() {
      return this.http.get(this.baseUrl + 'events');
    }
  
    deleteEvent(id: number) {
      return this.http.delete(this.baseUrl + 'events/' + id);
    }
  
    createEvent(event: Event):Observable<Event> {
      return this.http.post<Event>(this.baseUrl + 'saveEvent', event);
    }
  
    updateEvent(event: Event){
      return this.http.put(this.baseUrl + 'updateEvent', event);
    }
  
    setter(event: Event) {
      this.event = event;
    }
  
    getter() {
      return this.event;
    }
}
