import { Component, Input } from '@angular/core';
import { ClimbingRoute } from '../climbing-routes.model';

@Component({
  selector: 'app-climbing-routes-item',
  templateUrl: './climbing-routes-item.component.html',
  styleUrl: './climbing-routes-item.component.scss'
})
export class ClimbingRoutesItemComponent {
  @Input() climbingRoute: ClimbingRoute;
}
