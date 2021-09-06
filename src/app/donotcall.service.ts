import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { DoNotCall } from "./donotcall.model";

@Injectable({
  providedIn: "root",
})
export class DoNotCallService {
  apiURL = "https://api.smapp.ai/dnc/donotcall";
  constructor(private http: HttpClient) {}

  createDoNotCall(doNotCall: DoNotCall): Observable<DoNotCall> {
    return this.http.post<DoNotCall>(this.apiURL, doNotCall);
  }
}
