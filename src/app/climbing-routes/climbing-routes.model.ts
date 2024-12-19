export class ClimbingRoute {
  constructor(
    public _id: number,
    public name: string,
    public grade: string,
    public imageUrl: string,
    public complete: boolean,
    public attempts: number
  ) {}
}
