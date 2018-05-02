import { Injectable } from '@angular/core';
import {Http, Response, RequestOptions,Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
// import {Post} from '../templates/post';
// import {Acts} from '../templates/acts';1
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
// import { Items } from '../test-form/items.model';

@Injectable()
export class ParsejsonService {

  item: any;
  items: any[] = [];
  customer: any;
  constructor(private http:Http) { }

  // getData():Observable<Post[]> {
  //   return this.http.get('http://jsonplaceholder.typicode.com/posts/')
  //       .map(this.extractData)
  //       .catch(this.handleError);
  //   }
  getData(filename):Observable<any[]> {
    return this.http.get('../../assets/json/'+filename)
        .map(this.extractData)
        .catch(this.handleError);
    }
   
    getSome() {
      return this.http.get( 'http://localhost:3000/')
          .map(this.extractData)
          .catch(this.handleError);
      }

      downloadFile(fileurl) {
        
        return this.http.get('http://192.168.72.199:3001/uploads/1.jpg')
        .map(this.somefn)
        .catch(this.handleError);;
        // return this.http.get( `http://192.168.72.199:3001/uploads/${fileurl}`);
        
        }

      getEmployee() {
        return this.http.get( 'http://localhost:8080/JsonFromRestEasy/rest/customers/ajay')
            .map(this.extractData)
            .catch(this.handleError);
        }
    getDocument(name) {
        return this.http.get( `http://localhost:8080/JsonFromRestEasy/rest/customers/document/${name}`)
            .map(this.extractData)
            .catch(this.handleError);
        // return this.http.get( `http://10.78.11.217:7002/JsonFromRestEasy/rest/customers/document/${name}`)
        // .map(this.extractData)
        // .catch(this.handleError);
        }
    
    saveCustomer(customer){
        let headers = new Headers({'Access-Control-Allow-Origin':'*','Content-Type': 'application/json'});
            let options = new RequestOptions({headers: headers});
        return this.http.post('http://localhost:8080/JsonFromRestEasy/rest/customers/save/do',
            {
                'customer':[{
                'name':customer.name ,
                'age':customer.age,
                'phone':customer.phone,
                'email':customer.email,
                'favtFood':customer.item,
                'dob':customer.date
                }]
            });
        // var json = JSON.parse(customer);
        // console.log(typeof json);
        // return this.http.post('http://localhost:8080/JsonFromRestEasy/rest/customers/save/do',customer);
     
    
    }
    // something(){
    //   window.location.href = 'http://www.google.com';
    // }
    private extractData(res:Response) {
      let body = res.json();
      this.items = body;
      return body || [];
    }

    private somefn(res:Response){
        return Response;
    }

    private handleError(error:any) {
      // In a real world app, we might use a remote logging infrastructure
      // We'd also dig deeper into the error to get a better message
      let errMsg = (error.message) ? error.message :
          error.status ? `${error.status} - ${error.statusText}` : 'Server error';
      console.error(errMsg); // log to console instead
      return Observable.throw(errMsg);
    }


}
