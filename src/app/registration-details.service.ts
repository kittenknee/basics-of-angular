import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationDetailsService {

  private regEntry = new BehaviorSubject<any>(null);
  getRegDetails$ = this.regEntry.asObservable();

  constructor() {}

  setRegDetails(data: any){
    this.regEntry.next(data);
  }

}
