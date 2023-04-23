import { NgFor } from "@angular/common";
import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [NgFor, RouterModule],
  template: `
    <h1>Preloading Demo App</h1>

    <hr />

    <nav>
      <a routerLink="">Root</a>
      <a routerLink="feature-1">Feature #1</a>
      <a routerLink="feature-2">Feature #2</a>
    </nav>

    <router-outlet />
  `,
  styles: ["a { margin-right: 10px; }"],
})
export class AppComponent {}
