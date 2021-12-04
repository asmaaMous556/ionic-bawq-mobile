/* eslint-disable @typescript-eslint/semi */
/* eslint-disable @typescript-eslint/type-annotation-spacing */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss'],
})
export class DevicesComponent implements OnInit {
devices:{id:string;name:string;status:string}[]
  constructor(private router: Router) { }

  ngOnInit() {
    this.devices=[{
      name:'Amr',
      id:'1',
      status:'moving'

    },
    {

      name:'Salma',
      id:'2',
      status:'idling'

    },
    {

      name:'Nasser',
      id:'3',
      status:'parking'

    },
    {

      name:'Mustafa',
      id:'4',
      status:'moving'

    },
    {

      name:'test',
      id:'4',
      status:'moving'

    },
    {

      name:'amrrsss',
      id:'6',
      status:'idling'

    },
    {

      name:'Amrjj',
      id:'7',
      status:'moving'

    },
    {

      name:'kmkm',
      id:'8',
      status:'parking'

    }
  ]
  }
  navigate(){
    this.router.navigate(['/home']);
  }


}
