import { SafeResourceUrl } from '@angular/platform-browser';

export class Video {
    id: string;
    titulo: string;  
    categoria: string; 
    vid_link: string; 
    trustedVideoUrl: SafeResourceUrl;
    publicadoEm: Date;
}