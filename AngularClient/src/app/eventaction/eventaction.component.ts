import { Component } from '@angular/core';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-eventaction',
  templateUrl: './eventaction.component.html',
  styleUrl: './eventaction.component.css',
})
export class EventactionComponent {
  openDialog(): void { 
    Swal.fire('This is a simple and sweet alert,')
  }

}


