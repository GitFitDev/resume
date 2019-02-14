import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'profile-name',
  templateUrl: './profile-name.component.html',
  styleUrls: ['./profile-name.component.css']
})
export class ProfileNameComponent implements OnInit {
  technicalSkills = [];
  professionalExperiences = [];
  constructor() { 
    this.technicalSkills.push(
      {technicalSkill: 'JavaScript', experienceValue: '65'},
      {technicalSkill: 'HTML', experienceValue: '75'},
      {technicalSkill: 'CSS', experienceValue: '60'},
      {technicalSkill: 'Angular', experienceValue: '50'},
    );
    this.professionalExperiences.push(
      {
        professionalExperience: 'MindRight', 
        jobTitle: 'Software Engineer Intern',
        startDate: 'November 2018 -',
        endDate: 'Present',
        responsibilities: [
         'Using Agile Development to handle company tasks with tickets.',
         'Using Angular framework to handle client side tasks.',
         'Participate in daily stand ups and bi-weekly sprint planning.'
        ]
      },
      {
        professionalExperience: 'Starbucks', 
        jobTitle: 'Assistant Store Manager',
        startDate: 'December 2017 -',
        endDate: 'November 2018',
        responsibilities: [
         'Responsible for maintaining and deploying barista floor plan and schedules.',
         'Assisting store manager with product organization and keeping track of daily sales.',
         'Create daily logs for tracking safe funds, cash tills, and money drops for tips.'
        ]
      },
      
    );
  }

  ngOnInit() {
  }


}
