import { Component } from '@angular/core';
import { PlaylistBodyComponent } from '../../../../shared/components/playlist-body/playlist-body.component';
import { PlaylistHeaderComponent } from '../../../../shared/components/playlist-header/playlist-header.component';

@Component({
    selector: 'app-favorites-page',
    templateUrl: './favorites-page.component.html',
    styleUrls: ['./favorites-page.component.css'],
    standalone: true,
    imports: [PlaylistHeaderComponent, PlaylistBodyComponent]
})
export class FavoritesPageComponent {

}
