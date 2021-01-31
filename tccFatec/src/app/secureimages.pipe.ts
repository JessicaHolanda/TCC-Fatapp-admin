import { Pipe, PipeTransform } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Pipe({
  name: 'secureimages'
})
export class SecureimagesPipe implements PipeTransform {
  constructor(private http: HttpClient, private sanitizer: DomSanitizer) { }
  public mySrc: FileReader;
  transform(url): Observable<SafeUrl> {
    return  this.http
      .get(url, { responseType: 'blob' })
      .pipe(map(val => this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(val))));
  }
}
