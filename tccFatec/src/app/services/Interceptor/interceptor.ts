import { environment } from 'src/environments/environment.prod';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

export class YourInterceptor implements HttpInterceptor{    
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
const NewRequest= request.clone({ headers: request.headers.set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjgsImVtYWlsIjoiZW1haWxAZW1haWwuY29tIiwiaWF0IjoxNTczMzMxNTE5fQ.1gzAyuihet0pCAzqJ8SyUKOyJZFarIjijNnJzgIP8MQ') });
//{ headers: request.headers.set('token', environment.apiCoreToken) }
return next.handle(NewRequest); 
}
}