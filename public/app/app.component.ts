import {Component} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import 'rxjs/Rx';
import{ROUTER_PROVIDERS, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {ProductListComponent} from './products/product-list.component'
import {ProductService} from './products/product.service' 
import {WelcomeComponent} from './home/welcome.component' 
import {ProductDetailComponent} from './products/product-detail.component' 
import {BillOfLadingComponent} from './billoflading/main/main.component'


@Component({
    selector: 'pm-app',
    template: 
    `<bill-of-lading></bill-of-lading>`,
    directives: [ROUTER_DIRECTIVES,BillOfLadingComponent],
    providers: [ProductService,HTTP_PROVIDERS,ROUTER_PROVIDERS]
})
@RouteConfig([
    {path: '/welcome', name: 'Welcome',component: WelcomeComponent, useAsDefault: true},
    {path: '/products', name: 'Products',component: ProductListComponent},
    {path: '/products/:id', name: 'ProductDetail',component: ProductDetailComponent}
])
export class AppComponent{
    pageTitle: string = 'Acme Product Management'
}