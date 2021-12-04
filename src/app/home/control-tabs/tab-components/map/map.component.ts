import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {

  @ViewChild('map') mapElement: ElementRef;
  map: any;
  title = 'My first AGM project';
  lat = 51.678418;
  lng = 7.809007;
  constructor() { }

  ngOnInit() {
    this.loadMap();
}

  loadMap(){
    const latLng = new google.maps.LatLng(-34.9290, 138.6010);

    const mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

  }
  }

