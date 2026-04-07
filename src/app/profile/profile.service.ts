import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(
    private http: HttpClient
  ) { }

  projects:any = [
    {
      id: 1,
      title: 'MYLOFT Web App in Angular with Angular Material',
      desc: '',
      livedemo: 'https://app.myloft.xyz',
      imgUrl: 'assets/images/myloftWeb.gif',
      tech: 'Angular 17, Angular Material, Multilingual support'
    },
    {
      id: 2,
      title: 'MYLOFT Admin App in Angular with Angular Material',
      desc: '',
      livedemo: 'https://admin.myloft.xyz',
      imgUrl: 'assets/images/myloftAdmin.gif',
      tech: 'Angular 15, Angular Material, HTML, CSS, Flex-Layout lib'
    },
    {
      id: 3,
      title: 'Ecommerce Application in Angular & Spartacus',
      desc: '',
      livedemo: 'https://www.bestandless.com.au',
      imgUrl: 'assets/images/bestAndLess.png',
      tech: 'Angular 13, Spartacus strorefront, HTML, CSS, Bootstrap'
    },
    {
      id: 4,
      title: 'Wine and Liquor Ecommerce Application in Angular',
      desc: '',
      livedemo: 'https://wineoutlet.com/index.html',
      imgUrl: 'assets/images/wineoutlet.png',
      tech: 'Angular 13, Theme Concept, HTML, CSS, Bootstrap'
    },
    {
      id: 5,
      title: 'Smart Learning School Application Using MEAN Stack',
      desc: '',
      livedemo: 'https://osteen.netlify.app/',
      imgUrl: 'assets/images/osteen.png',
      tech: 'Angular, Node, Express, MongoDB'
    },
    {
      id: 6,
      title: 'Employees Timesheet Application',
      desc: '',
      livedemo: 'https://ecadmin.net/index.html',
      imgUrl: 'assets/images/ecadmin.png',
      tech: 'Angular 13, HTML, CSS, Bootstrap'
    },
    {
      id: 7,
      title: 'Audio System Managing App',
      desc: '',
      livedemo: 'https://audionxtadmin.netlify.app/',
      imgUrl: 'assets/images/audionext.png',
      tech: 'Angular 11'
    },
    {
      id: 8,
      title: 'Credit Card Managment App',
      desc: '',
      livedemo: 'https://money360-cardholder-web-iat.khumbusystems.net',
      imgUrl: 'assets/images/smione.png',
      tech: 'Angular 8'
    },
    {
      id: 9,
      title: 'Chatbot Application',
      desc: '',
      livedemo: 'https://sme.aisgrowbiz.com',
      imgUrl: 'assets/images/voila.jpeg',
      tech: 'Angular 8'
    },
    {
      id: 10,
      title: 'Personal Portfolio Using Angular',
      desc: '',
      livedemo: 'https://shailendrakumarsaini.github.io',
      imgUrl: 'assets/images/portfolio.png',
      tech: 'Angular, HTML, CSS, Bootstrap '
    },
    {
      id: 11,
      title: 'Hospital Managment Application',
      desc: '',
      livedemo: 'https://digitalapp.netlify.app/',
      imgUrl: 'assets/images/digital.png',
      tech: 'Angular, HTML, CSS, Bootstrap '
    }
  ]

  about = `
  Senior Software Developer with 6.4 years of experience as Frontend Developer .
  Worked with Software Development Life Cycle(SDLC) with Agile and Waterfall methodologies .
  Expertise in Angular 2+ All versions, TypeScript, JavaScript and UI with Responsive Designs .
  Have good understanding of HTML, CSS, SCSS, Bootstrap and Jquery .
  Familiar with React JS .
  Sound knowledge with MongoDB, ExpressJS, NodeJS and Angular(MEAN Stack) technologies .
  Proficient in building Single Page Application(SPA) for Web, Mobile and Desktop to support a multitude of browsers and devices .
  Working knowledge of developing Progressive Web App(PWA) .
  Good Understanding with Model View Control (MVC) design pattern .
  Extensive knowledge of Angular, Angular CLI and its new version’s features .
  Good experience with Git, GitHub, GitLab, Bitbucket and Jira .
  Extensive experience in Visual studio code IDE .
  Good knowledge of Regression and Cross Browser testing on various types of devices`

  resumeurl = "https://drive.google.com/file/d/1o3KrRaG9WIunL3Z9WAjh4EaBXwok3YVu/view?usp=sharing"

  skillsData: any = [
    {
      'id': '1',
      'skill': 'ANGULAR',
      'progress': '85%'
    },
    {
      'id': '2',
      'skill': 'ReactJS',
      'progress': '70%'
    },
    {
      'id': '3',
      'skill': 'TYPESCRIPT',
      'progress': '80%'
    },
    {
      'id': '4',
      'skill': 'JAVASCRIPT',
      'progress': '80%'
    },
    {
      'id': '5',
      'skill': 'JQUERY',
      'progress': '70%'
    },
    {
      'id': '6',
      'skill': 'HTML',
      'progress': '70%'
    },
    {
      'id': '7',
      'skill': ' CSS',
      'progress': '70%'
    },
    {
      'id': '8',
      'skill': 'BOOTSTRAP',
      'progress': '80%'
    },
    {
      'id': '9',
      'skill': 'NODE JS',
      'progress': '50%'
    },
    {
      'id': '10',
      'skill': 'EXPRESS',
      'progress': '50%'
    },
    {
      'id': '11',
      'skill': 'MONOGO DB',
      'progress': '50%'
    },
    {
      'id': '12',
      'skill': 'PWA',
      'progress': '75%'
    },
    {
      'id': '13',
      'skill': 'GIT + JIRA',
      'progress': '75%'
    },
    {
      'id': '14',
      'skill': 'GitHub, Bitbucket, GitLab',
      'progress': '75%'
    },

  ];

  // contactus(data: any): Observable<any> {
  //   return this.http.post(this.baseUrl + 'contact', data);
  // }

  skills(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.skillsData;
  }

  getProjects(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.projects;
  }
}
