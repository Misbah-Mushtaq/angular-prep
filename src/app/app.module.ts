import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { AppRoutingModule, routingComponents } from './app-routing.module'
import { AppComponent } from './app.component'
import { FirstComponentComponent } from './first-component/first-component.component'
import { HttpClientModule } from '@angular/common/http'
import { DepartmentContactComponent } from './department-contact/department-contact.component'
import { TdfPracticeComponent } from './tdf-practice/tdf-practice.component'

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    routingComponents,
    DepartmentContactComponent,
    TdfPracticeComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
