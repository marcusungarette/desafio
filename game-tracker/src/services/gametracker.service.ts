import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { Gametraker } from "../interfaces";

@Injectable({
  providedIn: "root",
})
export class GametrakerService {
  gametrackerAPI: any;

  constructor(private http: HttpClient) {
    this.gametrackerAPI = environment.gametrackerURL;
  }

  getGametracker(): Observable<Gametraker[]> {
    return this.http
      .get<Gametraker[]>(`${this.gametrackerAPI}`)
      .pipe(catchError(this._handleError));
  }

  /**
   * Handles any request error
   */
  private _handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error("An error occurred:", error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // return an observable with a user-facing error message
    return throwError("Something bad happened; please try again later.");
  }
}
