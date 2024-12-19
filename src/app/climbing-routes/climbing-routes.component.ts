import { Component } from '@angular/core';
import { ClimbingRoute } from './climbing-routes.model';
import { ClimbingRoutesService } from './climbing-routes.service';

@Component({
  selector: 'app-climbing-routes',
  templateUrl: './climbing-routes.component.html',
  styleUrl: './climbing-routes.component.scss',
})
export class ClimbingRoutesComponent {
  selectedClimbingRoute: ClimbingRoute;

  constructor(private climbingRoutesService: ClimbingRoutesService) {}

  ngOnInit() {
    this.climbingRoutesService.climbingRouteSelectedEvent.subscribe(
      (climbingRoute: ClimbingRoute) => {
        this.selectedClimbingRoute = climbingRoute;
      }
    );
  }
}
