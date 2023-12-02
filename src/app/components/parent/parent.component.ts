import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';

function logger(msg:any)
{
  console.log(msg);
}
@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  userName = 'Maria';

  updateUser() {
    this.userName = 'Chris';
 }

}
