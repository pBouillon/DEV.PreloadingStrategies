import { bootstrapApplication } from "@angular/platform-browser";
import { provideRouter, Route, withPreloading } from "@angular/router";

import { AppComponent } from "./app/app.component";
import { FlagBasedPreloadingStrategy } from "./app/flag-based.preloading-strategy";

export const routes: Route[] = [
  {
    path: "feature-1",
    loadComponent: () =>
      import("./app/feature-1/feature-1.component").then(
        (m) => m.Feature1Component
      ),
    data: { preload: true },
  },
  {
    path: "feature-2",
    loadChildren: () =>
      import("./app/feature-2/feature-2.route").then((m) => m.routes),
  },
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes, withPreloading(FlagBasedPreloadingStrategy)),
  ],
});
