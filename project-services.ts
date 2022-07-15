import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { CustomResponse } from "../model/response";
import { Project } from "../model/project";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ProjectsService {

    private readonly apiUrl = 'http://localhost:8080';

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
        }),
    };

    //response: CustomResponse;
    errorMessage: any;
    constructor(private http: HttpClient) { }

    public loadProjects(): Observable<CustomResponse> {
        return this.http.get<CustomResponse>(this.apiUrl + "/api/projects/list/");
    }

    public initPage(): Observable<CustomResponse> {
        return this.http.get<CustomResponse>(this.apiUrl + "/api/projects/initpage/");
    }

    public createProject(prj: Project): Observable<CustomResponse> {
        return this.http.post<CustomResponse>(`${this.apiUrl}/api/projects/save`, prj);
      }
}