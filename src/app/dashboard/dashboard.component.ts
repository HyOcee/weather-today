import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  name: string = 'Jalalat'

  students = [
    {
        name: 'Divine Ogbonna',
        department: 'Computer Science',
        cgpa: 1.90,
        hasExtra: true
    },
    {
        name: 'Alaketu Olamilekan',
        department: 'Mathematics',
        cgpa: 3.05,
        hasExtra: true
    },
    {
        name: 'Arinze Okorji',
        department: 'Mathematics',
        cgpa: 0.95,
        hasExtra: true
    },
    {
        name: 'Peace Itimi',
        department: 'Statistics',
        cgpa: 1.95,
        hasExtra: false
    },
    {
        name: 'Idris Alli',
        department: 'Sociology',
        cgpa: 2.37,
        hasExtra: false
    },
    {
        name: 'Ebube Dike',
        department: 'Statistics',
        cgpa: 5.00,
        hasExtra: false
    },
    {
        name: 'Ademola Dademu',
        department: 'MicroBiology',
        cgpa: 1.90,
        hasExtra: true
    },
    {
        name: 'Daniel Ekum',
        department: 'English',
        cgpa: 2.50,
        hasExtra: true
    },
    {
        name: 'Samson Badmus',
        department: 'Performing Art',
        cgpa: 4.10,
        hasExtra: true
    },
    {
        name: 'David James',
        department: 'English',
        cgpa: 1.61,
        hasExtra: false
    },
    {
        name: 'Abu Abel',
        department: 'Computer Science',
        cgpa: 2.20,
        hasExtra: true
    },
    {
        name: 'Joseph James',
        department: 'Yoruba',
        cgpa: 2.61,
        hasExtra: true
    },
]

  constructor() { }

  ngOnInit(): void {
  }

}
