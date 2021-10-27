import { Component, OnInit } from '@angular/core'
import { User } from '../user'

@Component({
  selector: 'app-tdf-practice',
  templateUrl: './tdf-practice.component.html',
  styleUrls: ['./tdf-practice.component.css']
})
export class TdfPracticeComponent implements OnInit {
  topics = ['Angular', 'Bootstrap', 'React', 'Javascript', 'Vue']
  userModal = new User(
    'Misbah',
    'misbah@gmail.com',
    '08966736738',
    '',
    'morning',
    true
  )
  constructor () {}

  ngOnInit (): void {}
}
