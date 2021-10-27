import { Component, OnInit } from '@angular/core'
import { Router, ActivatedRoute, ParamMap } from '@angular/router'

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {
  public selectedId: any
  public departments = [
    { id: 1, name: 'Angular' },
    { id: 2, name: 'React' },
    { id: 3, name: 'Bootstrap' },
    { id: 4, name: 'scss' }
  ]
  constructor (private route: ActivatedRoute, private router: Router) {}

  ngOnInit (): void {
    // let id = parseInt(this.route.snapshot.paramMap.get('id')!)
    // this.selectedId = id;
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id')!)
      this.selectedId = id
    })
  }
  onSelect (department: any) {
    this.router.navigate([department.id], { relativeTo: this.route })
  }
  isSelected (department: any) {
    return department.id === this.selectedId
  }
}
