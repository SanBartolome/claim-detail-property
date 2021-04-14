import { HttpClient } from '@angular/common/http';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Component({
  selector: 'app-location-in-map',
  templateUrl: './location-in-map.component.html',
  styleUrls: ['./location-in-map.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LocationInMapComponent implements OnInit {
  @Input() latitude!: number;
  @Input() longitude!: number;
  @Input() height = 120;
  @Input() width = 151;
  apiLoaded: Observable<boolean>;
  options!: google.maps.MapOptions;
  position!: { lat: number; lng: number };

  constructor(httpClient: HttpClient) {
    this.apiLoaded = httpClient
      .jsonp(
        'https://maps.googleapis.com/maps/api/js?key=AIzaSyDUF6iLpDNbpBgTKZNiAZZjS5RgzSJ0XDY',
        'callback'
      )
      .pipe(
        map(() => true),
        catchError(() => of(false))
      );
  }

  ngOnInit(): void {
    this.options = {
      center: { lat: this.latitude, lng: this.longitude },
      zoom: 15,
    };
    this.position = {
      lat: this.latitude,
      lng: this.longitude,
    };
  }
}
