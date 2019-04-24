import { Pipe, PipeTransform, NgModule } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'noSanitize'
})
 export class SanitizeOff implements PipeTransform {
  constructor(private domSanitizer: DomSanitizer) {

  }
  transform(html: string): SafeHtml{
    return this.domSanitizer.bypassSecurityTrustHtml(html);
  }
} 
@NgModule({
    imports: [],
    declarations: [SanitizeOff],
    bootstrap: [],
    exports: [SanitizeOff]
})
export class SanitizeOffPipeModule { }