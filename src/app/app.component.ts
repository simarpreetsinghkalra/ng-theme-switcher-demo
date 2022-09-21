import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
 isDarkTheme = false;

 ngOnInit(): void {
  const themeType = localStorage.getItem('themeType');
  if(!themeType) {
    this.isDarkTheme = false;
    localStorage.setItem('themeType', 'light');
    return;
  }
  this.isDarkTheme = themeType === 'dark';
 }

 switchTheme(): void {
  this.isDarkTheme = !this.isDarkTheme;
  const themeType = this.isDarkTheme ? 'dark' : 'light';
  localStorage.setItem('themeType', themeType);
 }
}
