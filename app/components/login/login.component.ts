import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { SnackBar } from "nativescript-snackbar";
import * as ApplicationSettings from "application-settings";

@Component({
    moduleId: module.id,
    selector: "ns-login",
    templateUrl: "login.component.html",
    styleUrls: ["login.component.css"],
})
export class LoginComponent implements OnInit {
    title = "Логин";
    acc: Boolean = false;

    paths: any[] = [
        {
            "title": "~/assets/icon-vk.png"
        },
        {
            "title": "~/assets/icon-fb.png"
        },
        {
            "title": "~/assets/icon-tw.png"
        },
        {
            "title": "~/assets/icon-tg.png"
        },
        {
            "title": "~/assets/icon-li.png"
        },
        {
            "title": "~/assets/icon-gp.png"
        }
    ]

    public input: any;

    public constructor(private router: RouterExtensions) {
        this.input = {
            "email": "",
            "password": ""
        }
    }

    public ngOnInit() {
        if(ApplicationSettings.getBoolean("authenticated", false)) {
            this.router.navigate(["/secure"], { clearHistory: true });
        }
    }

    public login() {
        if(this.input.email && this.input.password) {
            let account = JSON.parse(ApplicationSettings.getString("account", "{}"));
            if(this.input.email == account.email && this.input.password == account.password) {
                ApplicationSettings.setBoolean("authenticated", true);
                this.router.navigate(["/secure"], { clearHistory: true });
                this.acc = false;
            } else {
                this.acc = true;
                (new SnackBar()).simple("Incorrect Credentials!");
            }
        } else {
            (new SnackBar()).simple("All Fields Required!");
        }
    }

}
