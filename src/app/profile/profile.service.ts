import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  //baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  projects:any = [
    {
      id: 1,
      title: 'Wine and Liquor Ecommerce Application in Angular',
      desc: '',
      livedemo: 'https://wineoutlet.com/index.html',
      githurl: '',
      mediumlink: '',
      imgUrl: 'assets/images/wineoutlet.png',
      tech: 'Angular 13 ,Theme Concept, HTML, CSS, Bootstrap'
    },
    {
      id: 2,
      title: 'Smart Learning School Application Using MEAN Stack',
      desc: '',
      livedemo: 'https://osteen.netlify.app/',
      githurl: '',
      mediumlink: '',
      imgUrl: 'assets/images/osteen.png',
      tech: 'Angualr, Node, Express, MongoDB'
    },
    {
      id: 3,
      title: 'Employees Timesheet Application',
      desc: '',
      livedemo: 'https://ecadmin.net/index.html',
      githurl: '',
      mediumlink: '',
      imgUrl: 'assets/images/ecadmin.png',
      tech: 'Angular 13, HTML, CSS, Bootstrap'
    },
    {
      id: 4,
      title: 'Audio System Managing App',
      desc: '',
      livedemo: 'https://audionxtadmin.netlify.app/',
      githurl: '',
      mediumlink: '',
      imgUrl: 'assets/images/audionext.png',
      tech: 'Angular 11'
    },
    {
      id: 5,
      title: 'Credit Card Managment App',
      desc: '',
      livedemo: 'https://money360-cardholder-web-iat.khumbusystems.net',
      githurl: '',
      mediumlink: '',
      imgUrl: 'assets/images/smione.png',
      tech: 'Angualr 8'
    },
    {
      id: 6,
      title: 'Chatbot Application',
      desc: '',
      livedemo: 'https://sme.aisgrowbiz.com',
      githurl: '',
      mediumlink: '',
      imgUrl: 'assets/images/voila.jpeg',
      tech: 'Angualr 8'
    },
    {
      id: 7,
      title: 'Personal Portfolio Using Angular',
      desc: '',
      livedemo: 'https://shailendrakumarsaini.github.io',
      githurl: '',
      mediumlink: '',
      imgUrl: 'assets/images/portfolio.png',
      tech: 'Angular, HTML, CSS, Bootstrap '
    },
    {
      id: 7,
      title: 'Hospital Managment Application',
      desc: '',
      livedemo: 'https://digitalapp.netlify.app/',
      githurl: '',
      mediumlink: '',
      imgUrl: 'assets/images/digital.png',
      tech: 'Angular, HTML, CSS, Bootstrap '
    },
    // {
    //   id: 8,
    //   title: 'COVID 19 Tracker (Statistics) app Using Angularr',
    //   desc: '',
    //   livedemo: 'https://mehulk05.github.io/COVOID-19/',
    //   githurl: 'https://github.com/mehulk05/COVOID-19',
    //   mediumlink: 'https://codeburst.io/covoid-19-tracker-statistics-app-using-angular-2358347b3d1f',
    //   imgUrl: 'assets/images/z2.png',
    //   tech: 'Angular 10 ,Bootstrap,Javascript'
    // },


    // {
    //   id: 9,
    //   title: 'Weather App with React',
    //   desc: '',
    //   livedemo: 'https://mehulk05.github.io/React-Weather/',
    //   githurl: 'https://github.com/mehulk05/React-Weather-App',
    //   mediumlink: 'https://medium.com/analytics-vidhya/weather-app-with-react-adaa7268bbdb',
    //   imgUrl: 'assets/images/z9.png',
    //   tech: 'React, Open MAp Api'
    // },


    // {
    //   id: 10,
    //   title: 'Spring Boot + Angular 8 CRUD Example',
    //   desc: '',
    //   livedemo: 'https://github.com/mehulk05/Spring-Boot-Angular-8-CRUD-Example',
    //   githurl: 'https://github.com/mehulk05/Spring-Boot-Angular-8-CRUD-Example',
    //   mediumlink: 'https://medium.com/analytics-vidhya/spring-boot-angular-8-crud-example-8aeafd47b54',
    //   imgUrl: 'assets/images/z28.png',
    //   tech: 'Angular8, Java ,Hibernate'
    // },

    // {
    //   id: 12,
    //   title: 'Personal Portfolio Using Django',
    //   desc: '',
    //   livedemo: 'https://personal-portfolio0320.000webhostapp.com/',
    //   githurl: 'https://github.com/mehulk05/My-Personal-Portfolio',
    //   mediumlink: 'https://mehulkothari05.medium.com/personal-portfolio-using-django-dba49c355905',
    //   imgUrl: 'assets/images/z12.png',
    //   tech: 'Django'
    // },

    // {
    //   id: 13,
    //   title: 'Movie Success Prediction',
    //   desc: '',
    //   livedemo: 'https://mehulkothari05.medium.com/',
    //   githurl: 'https://github.com/mehulk05',
    //   mediumlink: 'https://mehulkothari05.medium.com/movie-success-prediction-a67d871a7b1',
    //   imgUrl: 'assets/images/z13.png',
    //   tech: 'Python, Machine Learning, Django Framework.'
    // },

    // {
    //   id: 14,
    //   title: 'Matrimonial Website',
    //   desc: '',
    //   livedemo: 'https://mehulkothari05.medium.com/',
    //   githurl: 'https://github.com/mehulk05/Matrimonial-Website.git',
    //   mediumlink: 'https://mehulkothari05.medium.com/matrimonial-website-9cd5247f477d',
    //   imgUrl: 'assets/images/z14.png',
    //   tech: 'HTML, CSS, Bootstrap, Jquery'
    // },

  ]

  about = `Software Developer with 4.2+ years of experience .
  Worked with Software Development Life Cycle(SDLC) and agile methodologies .
  Expertise in Angular 2+ All versions, Typescript, Javascript, Node JS, Express, Mongo DB and UI with Responsive Designs .
  Have good understanding of HTML, CSS, Bootstrap and Jquery .
  Proficient in building Single Page Application for Web, and Mobile using Angular to support a multitude of browsers and devices .
  Working knowledge of developing Progressive Web App .
  Good Understanding and good Experience with Model View Control (MVC) design pattern .
  Extensive knowledge of Angular, Angular CLI and its new version’s features .
  Good experience with Git and Jira .
  Extensive experience in Visual studio code IDE .
  Sound knowledge of Google Cloud Deployment.`

  resumeurl = "https://drive.google.com/file/d/1cBjUF0QfLsDnqpoljHtQiOUicPT3IOEE/view?usp=sharing"

  skillsData: any = [
    {
      'id': '1',
      'skill': 'ANGULAR 5+',
      'progress': '85%'
    },
    {
      'id': '2',
      'skill': 'NODE JS',
      'progress': '70%'
    },
    {
      'id': '3',
      'skill': 'EXPRESS',
      'progress': '75%'
    },
    {
      'id': '4',
      'skill': 'MONOGO DB',
      'progress': '65%'
    },
    {
      'id': '5',
      'skill': 'JAVASCRIPT',
      'progress': '80%'
    },
    {
      'id': '6',
      'skill': 'TYPESCRIPT',
      'progress': '80%'
    },
    {
      'id': '7',
      'skill': 'JQUERY',
      'progress': '70%'
    },
    {
      'id': '8',
      'skill': 'HTML + CSS',
      'progress': '80%'
    },
    {
      'id': '9',
      'skill': 'BOOTSTRAP',
      'progress': '80%'
    },
    {
      'id': '10',
      'skill': 'PWA',
      'progress': '65%'
    },
    {
      'id': '11',
      'skill': 'GIT + JIRA',
      'progress': '75%'
    },
    {
      'id': '12',
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
