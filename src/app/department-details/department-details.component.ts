import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, ParamMap, Router } from '@angular/router'
@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.sass']
})
export class DepartmentDetailsComponent implements OnInit {
  public departmentId: any
  constructor (private route: ActivatedRoute, private router: Router) {}

  ngOnInit (): void {
    // let id = parseInt(this.route.snapshot.paramMap.get('id')!)
    // this.departmentId = id;
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id')!)
      this.departmentId = id
    })
  }

  goPrev (): void {
    let prevId = this.departmentId - 1
    this.router.navigate(['/departmentDetails', prevId])
  }

  goNext (): void {
    let nextId = this.departmentId + 1
    this.router.navigate(['/departmentDetails', nextId])
  }
}
