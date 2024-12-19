import { Component } from '@angular/core';
import { ClimbingRoute } from '../climbing-routes.model';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ClimbingRoutesService } from '../climbing-routes.service';

@Component({
  selector: 'app-climbing-routes-edit',
  templateUrl: './climbing-routes-edit.component.html',
  styleUrl: './climbing-routes-edit.component.scss',
})
export class ClimbingRoutesEditComponent {
  climbingRoute: ClimbingRoute;
  editMode = false;
  id: number;
  originalClimbingRoute: ClimbingRoute;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private climbingRoutesService: ClimbingRoutesService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = params['_id'];
      if (!this.id) {
        this.editMode = false;
        return;
      }

      this.originalClimbingRoute = this.climbingRoutesService.getClimbingRoute(
        this.id
      );
      if (!this.originalClimbingRoute) {
        return;
      }

      this.editMode = true;
      this.climbingRoute = JSON.parse(
        JSON.stringify(this.originalClimbingRoute)
      );
    });
  }

  onSubmit(form: FormGroup) {
    const value = form.value;
    const newClimbingRoute = new ClimbingRoute(
      0,
      value.name,
      value.grade,
      value.imageUrl,
      value.complete,
      value.attempts
    );

    if (this.editMode) {
      this.climbingRoutesService.updateClimbingRoute(
        this.originalClimbingRoute,
        newClimbingRoute
      );
      this.router.navigate(['../'], { relativeTo: this.route });
    } else {
      this.climbingRoutesService.addClimbingRoute(newClimbingRoute);
      this.router.navigate(['../' + newClimbingRoute._id], {relativeTo: this.route})
    }



  }

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
