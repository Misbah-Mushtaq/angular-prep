import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule, routingComponents } from './app-routing.module'
import { AppComponent } from './app.component'
import { FirstComponentComponent } from './first-component/first-component.component'
import { HttpClientModule } from '@angular/common/http'
import { DepartmentContactComponent } from './department-contact/department-contact.component'
import { TdfPracticeComponent } from './tdf-practice/tdf-practice.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    routingComponents,
    DepartmentContactComponent,
    TdfPracticeComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, ReactiveFormsModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
