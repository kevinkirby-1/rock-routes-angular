import { Component } from '@angular/core';
import { ClimbingRoute } from '../climbing-routes.model';
import { ClimbingRoutesService } from '../climbing-routes.service';

@Component({
  selector: 'app-climbing-routes-list',
  templateUrl: './climbing-routes-list.component.html',
  styleUrl: './climbing-routes-list.component.scss'
})
export class ClimbingRoutesListComponent {
  climbingRoutes: ClimbingRoute[] = [];

  constructor(private climbingRoutesService: ClimbingRoutesService) {}

  ngOnInit() {
    this.climbingRoutesService.getClimbingRoutes()
    this.climbingRoutesService.climbingRouteListChangedEvent.subscribe(
      (climbingRoutes: ClimbingRoute[]) => {
        this.climbingRoutes = climbingRoutes;
      }
    )
  }


}
