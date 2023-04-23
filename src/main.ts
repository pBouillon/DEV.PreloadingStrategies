import { bootstrapApplication } from "@angular/platform-browser";
import {
  NoPreloading,
  provideRouter,
  Route,
  withPreloading,
} from "@angular/router";

import { AppComponent } from "./app/app.component";

export const routes: Route[] = [
  // Lazy load a standalone component
  {
    path: "feature-1",
    loadComponent: () =>
      import("./app/feature-1/feature-1.component").then(
        (m) => m.Feature1Component
      ),
  },
  // Lazy load another routing config
  {
    path: "feature-2",
    loadChildren: () =>
      import("./app/feature-2/feature-2.route").then((m) => m.routes),
  },
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes, withPreloading(NoPreloading))],
});
