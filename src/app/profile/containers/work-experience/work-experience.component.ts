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
      description: `
      The Linux Foundation is an organization that supports hundreds of open-source projects.
      My team is working on the next version of a platform that helps open-source projects thrive better.
      I played a key role in building the following:

      - Linux Foundation SSO UI and backend which is now used as an authentication solution across all Linux foundation products.
      - Profile management for users:
      - <bold>This solution includes connection/disconnection of social identities such as Facebook, Google, Github, etc</bold>
      - User’s timezone management, names
      - Password management
      - Integration Linux’s of SS0 solution using Auth0
      - Organization registered under
      - Organization registered profile management
      - Contact management tool for Linux Foundation partners and
      - Projects contributed to by the company, etc.
      - Contributor License Agreement management. EasyCLA
      - Visualization of vulnerabilities in projects/repositories registered under CommunityBridge.
      - Onboarding of new Engineers to the team and pull request reviews.
      - Researched solutions for complex problems and make recommendations to the product manager.

      <br>
      <bold>Tech Used: Node, Express, Apollo Graphql, Angular, NGRX, Chart.js, SCSS, AWS S3 Bucket, Auth0</bold>
      `
    },
    {
      stateDate: new Date('2017/04'),
      endDate: null,
      company: 'Andela',
      title: 'Software Engineer',
      description: `
      Andela outsources Engineers from Africa to partner overseas.
      I worked in a team responsible for building an internal mentorship tool that facilitates easy
      transfer of knowledge between developers. My work in the team resulted in an increase in developer
      experience for developers who later joined. <br />
      I was actively involved in the following:

      - End-To-End implementation of Mentorship request flow and Mentorship session logging.
      - Reusable UI components and documentation.
      - Mentoring new team members.
      - Actively participated in code review.<br />

      <bold>Tech Used: React, SCSS, Angular, Nodejs/Expressjs, Php/Laravel, Postgres, MYSQL, Firebase.</bold>
      `
    },
    {
      stateDate: new Date('2018/04'),
      endDate: new Date('2018/12'),
      company: 'CleanChoice Energy',
      title: 'Junior Fullstack Software Engineer',
      description: `
      Cleanchoice Energy is a renewable energy company that helps solar farm owners manage their processes.
      I was actively involved in the following:
      <br />
      - Credit checking automation using Equifax API. This flow also enables automation of user enrollment based on credit score, which solar farm to place a user based on their credit score and location, etc.
      - Reconciliation of offline cheque payment with payment record in stripe: Check payments are processed by the bank and uploaded to CleanChoice’s FTP server. My solution pulls new checks every 24 hours reconcile the data with what we have in MongoDB and Stripe. This solution also reports errors by sending an email to the appropriate department.
      - Customer Portal:
      - Presentation of customer’s bills
      - Actively participated in QA
      - Actively participated in all phases of product planning. My major responsibility was to draw flowcharts using lucid chart which is often used to explain concepts to Non-Technical stakeholders

      Technology Used: Angular, Nodejs/Express, MongoDB, Stripe SDK, AWS(S3).
      `
    },
    {
      stateDate: new Date('2019/01'),
      endDate: new Date('2019/04'),
      company: 'Quoter',
      title: 'Software Engineer',
      description: `
      Quoter is software that makes the generation of quotes,
      easier for businesses. I was involved in the following:

      - Implemented a few new integrations during my stay there.
      - This involves the integration of Kaseya BMS, Hubspot, and ConnectWise
      -  Fixed both UI and server-side bugs.
      - I also played the role of a technical writer, creating and modifying the user-facing documentation during the rebranding phase.

      <bold>Tech Used: PHP, JQuery, CakePHP, MySQL</bold>
      `
    },
  ];

  constructor() { }

  ngOnInit(): void {

  }

}
