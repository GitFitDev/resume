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
        startDate: 'November 2018',
        endDate: 'Present',
        responsibilities: [
         'Responsible for maintaining and developing on semi-conductor monitoring software (Cross platform desktop app built with Electron',
         'Responsible for maintaining and developing on semi-conductor monitoring software (Cross platform desktop app built with Electron',
         'Responsible for maintaining and developing on semi-conductor monitoring software (Cross platform desktop app built with Electron'
        ]
      },
      {
        professionalExperience: 'Starbucks', 
        jobTitle: 'Software Engineer Intern',
        startDate: 'November 2018',
        endDate: 'Present',
        responsibilities: [
         'Responsible for maintaining and developing on semi-conductor monitoring software (Cross platform desktop app built with Electron',
         'Responsible for maintaining and developing on semi-conductor monitoring software (Cross platform desktop app built with Electron',
         'Responsible for maintaining and developing on semi-conductor monitoring software (Cross platform desktop app built with Electron'
        ]
      },
      
    );
  }

  ngOnInit() {
  }


}
