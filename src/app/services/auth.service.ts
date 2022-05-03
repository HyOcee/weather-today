import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { myConstants } from '../config/constants';

@Injectable()
export class MyHttpService {

    private _get_url = myConstants.tv_endpoint;
    private _post_url = myConstants.signin_endpoint;
    
    // unused so far
    private params = new HttpParams({
        fromObject: { 
            name : 'Helen',
            password: 'qwe'
        }
    });

    constructor(private httpClient: HttpClient ) { }

    fetchData() {
        return this.httpClient.get(this._get_url)
    }

    // function to post login data to the server
    login(data: any) {
        return this.httpClient.post(this._post_url, data)
    }
}