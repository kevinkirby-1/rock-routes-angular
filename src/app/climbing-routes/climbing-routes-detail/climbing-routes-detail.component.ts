import { Component } from '@angular/core';
import { ClimbingRoute } from '../climbing-routes.model';
import { ClimbingRoutesService } from '../climbing-routes.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-climbing-routes-detail',
  templateUrl: './climbing-routes-detail.component.html',
  styleUrl: './climbing-routes-detail.component.scss',
})
export class ClimbingRoutesDetailComponent {
  climbingRoute: ClimbingRoute;

  constructor(
    private climbingRouteService: ClimbingRoutesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.climbingRoute = this.climbingRouteService.getClimbingRoute(params._id)
      }
    )
  }

}
