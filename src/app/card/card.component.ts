import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
     }
     card = [
       {
         title:"Fully Responsive",
         description:"Featuring the latest build of the new Bootstrap 4 framework!",
         img:"icon-screen-desktop m-auto text-primary"
       },
       {
        title:"Bootstrap 4 Ready",
        description:"This theme will look great on any device, no matter the size!",
        img:"icon-layers m-auto text-primary"
      },
      {
        title:"Easy to Use",
        description:"Ready to use with your own content, or customize the source files!",
        img:"icon-check m-auto text-primary"
      }
     ]

}
