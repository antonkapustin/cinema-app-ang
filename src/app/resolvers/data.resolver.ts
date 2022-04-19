import { Injectable } from "@angular/core";
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from "@angular/router";
import { catchError, delay, EMPTY, Observable, of } from "rxjs";
import { IData } from "src/data";
import { HttpService } from "../http.service";

@Injectable({
  providedIn: "root",
})
export class DataResolver implements Resolve<IData[]> {
  constructor(private http: HttpService, private router: Router) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<IData[]> {
    return this.http.getData().pipe(
      delay(200),
      catchError(() => {
        this.router.navigate(["events"]);
        return EMPTY;
      })
    );
  }
}
