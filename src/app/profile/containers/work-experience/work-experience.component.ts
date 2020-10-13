import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent implements OnInit {

  experiences = [
    {
      stateDate: new Date('2019/04'),
      endDate: null,
      company: 'The Linux Foundation',
      title: 'Software Developer',
      description: ` The Linux Foundation is an organization that supports hundreds of open-source projects.
      My team works on the next version of a platform that helps opensource projects thrive better.
      Recent features in this platform include vulnerability detection and vulnerability threat visualization
      for GitHub repositories, mentorship support, funding, etc.`
    },
    {
      stateDate: new Date('2019/04'),
      endDate: null,
      company: 'The Linux Foundation',
      title: 'Software Developer',
      description: ` The Linux Foundation is an organization that supports hundreds of open-source projects.
      My team works on the next version of a platform that helps opensource projects thrive better.
      Recent features in this platform include vulnerability detection and vulnerability threat visualization
      for GitHub repositories, mentorship support, funding, etc.`
    }
  ];

  constructor() { }

  ngOnInit(): void {

  }

}
