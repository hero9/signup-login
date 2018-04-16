import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";

import { MinLengthDirective, IsEmailDirective } from "./input.directives";

import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { SecureComponent } from "./components/secure/secure.component";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        RegisterComponent,
        SecureComponent,
        MinLengthDirective, 
        IsEmailDirective
    ],
    providers: [],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }