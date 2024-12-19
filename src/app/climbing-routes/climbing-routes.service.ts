import { EventEmitter, Injectable } from '@angular/core';
import { ClimbingRoute } from './climbing-routes.model';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClimbingRoutesService {
  climbingRouteSelectedEvent = new EventEmitter<ClimbingRoute>();
  climbingRouteListChangedEvent = new Subject<ClimbingRoute[]>();

  climbingRoutes: ClimbingRoute[] = [];

  constructor(private http: HttpClient) {}

  getClimbingRoutes() {
    this.http
      .get<{ message: string; climbingRoutes: ClimbingRoute[] }>(
        'http://localhost:8000/routes'
      )
      .subscribe((data) => {
        this.climbingRoutes = data.climbingRoutes;
        const climbingRoutesClone = data.climbingRoutes.slice();
        console.log(climbingRoutesClone);
        this.climbingRouteListChangedEvent.next(climbingRoutesClone);
      });
  }

  storeClimbingRoutes() {
    const climbingRoutesString = JSON.stringify(this.climbingRoutes);
    this.http
      .put('http://localhost:8000/routes', this.climbingRoutes)
      .subscribe((responseData) => {
        console.log(responseData);
      });
  }

  getClimbingRoute(id: number): ClimbingRoute | undefined {
    for (let climbingRoute of this.climbingRoutes) {
      if (climbingRoute._id == id) {
        return climbingRoute;
      }
    }
  }

  getMaxId(): number {
    let maxId = 0;
    for (let climbingRoute of this.climbingRoutes) {
      const currentId = climbingRoute._id;
      if (currentId > maxId) {
        maxId = currentId;
      }
    }
    return maxId;
  }

  addClimbingRoute(newClimbingRoute: ClimbingRoute) {
    if (!newClimbingRoute) {
      return;
    }

    newClimbingRoute._id = this.getMaxId() + 1;

    this.climbingRoutes.push(newClimbingRoute);
    this.storeClimbingRoutes()
  }

  updateClimbingRoute(
    oldClimbingRoute: ClimbingRoute,
    newClimbingRoute: ClimbingRoute
  ) {
    if (!oldClimbingRoute || !newClimbingRoute) {
      return;
    }

    const pos = this.climbingRoutes.indexOf(oldClimbingRoute);
    if (pos < 0) {
      return;
    }
    newClimbingRoute._id = oldClimbingRoute._id;
    this.climbingRoutes[pos] = newClimbingRoute;
  }
}
