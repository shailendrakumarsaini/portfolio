import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { SplitPipe } from './split.pipe';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { IntroComponent } from './intro/intro.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ProjectsComponent } from './projects/projects.component';
import { ReferenceComponent } from './reference/reference.component';
import { SkillsComponent } from './skills/skills.component';

@NgModule({
  declarations: [
    SplitPipe,
    AboutComponent,
    ContactComponent,
    EducationComponent,
    ExperienceComponent,
    FooterComponent,
    HeaderComponent,
    IntroComponent,
    PortfolioComponent,
    ProjectsComponent,
    ReferenceComponent,
    SkillsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgxPaginationModule,
  ],
  exports: [
    SplitPipe,
    AboutComponent,
    ContactComponent,
    EducationComponent,
    ExperienceComponent,
    FooterComponent,
    HeaderComponent,
    IntroComponent,
    PortfolioComponent,
    ProjectsComponent,
    ReferenceComponent,
    SkillsComponent
  ],
})
export class ProfileModule { }
