import {Injectable} from 'angular2/core';
import {IProduct} from './product';
import {Http, Response} from 'angular2/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ProductService {
    
    private _poductUrl = 'api/products/products.json';
    
    constructor(private _http:Http){}
    
    getProducts(): Observable<IProduct[]> {
        return this._http.get(this._poductUrl)
                .map((response: Response) => <IProduct[]>response.json())
                .do(data => console.log("All: " + JSON.stringify(data)))
                .catch(this.handleError);
    }
    
    handleError(error: Response) {
        console.log(error);
        return Observable.throw(error.json().error || 'Server Error');
    }
}
