import {Injectable, OnDestroy} from '@angular/core';
import {BehaviorSubject, delay, Observable, of, of as observableOf, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService implements OnDestroy {
  private _isAuthenticated = new BehaviorSubject<boolean>(false);

  login(userName: string, password: string): Observable<any> {
    console.log(userName);
    console.log(password);
    this.setIsAuthenticated( userName == 'admin' && password == 'admin');
    localStorage.setItem('isUserLoggedIn', this.getIsAuthenticated() ? "true" : "false");

    return of(this._isAuthenticated).pipe(
      delay(1000),
      tap(val => {
        console.log("Is User Authentication is successful: " + val);
      })
    );
  }

  private _isAuthenticated$ = this._isAuthenticated.asObservable();

  getIsAuthenticated() : Observable<any>{
    return this._isAuthenticated$;
  }

  setIsAuthenticated(islogin: boolean){
    return this._isAuthenticated.next(islogin);
  }


  logout(): void {
    this.setIsAuthenticated(false)
    localStorage.removeItem('isUserLoggedIn');
  }

  constructor() { }

  ngOnDestroy(): void {

  }
}
