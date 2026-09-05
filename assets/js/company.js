(function () {
  "use strict";

  window.CINQIC = {
    name: "Cinqic",
    founder: "Markus Gillyard",
    launchDate: "2026-08-02",
    launchState: "launched",
    mission:
      "Build helpful open-source software that helps people learn, create, think clearly, and solve problems while respecting users’ privacy and ownership.",
    vision: "Create accessible, useful, and modifiable software while keeping AI a choice.",
    projects: {
      juniper: {
        name: "Juniper",
        category: "app",
        status: "Published prerelease",
        publishedVersion: "0.3.0-rc.7",
        repository: "https://github.com/Cinqic/Juniper-App",
        release: "https://github.com/Cinqic/Juniper-App/releases/tag/v0.3.0-rc.7",
      },
      notes: {
        name: "Cinqic Notes",
        category: "app",
        status: "In development",
        repository: "https://github.com/Cinqic/Cinqic-Notes",
      },
      calculator: {
        name: "Cinqic Calculator",
        category: "app",
        status: "Released",
        windowsVersion: "1.0.1",
        androidVersion: "1.0.0",
        repository: "https://github.com/Cinqic/Cinqic-Calculator",
      },
      juniperAuto: {
        name: "Juniper Auto",
        category: "research",
        status: "Phase 3 candidate pending independent review",
        repository: "https://github.com/Cinqic/Juniper-Auto",
      },
      juniperMath1: {
        name: "Juniper Math 1",
        category: "completed research",
        status: "Research complete; no approved Phase 8 release",
        repository: "https://github.com/Cinqic/juniper-math-1",
      },
    },
  };

  window.CINQIC.companyCopy = function () {
    return window.CINQIC.launchState === "launched"
      ? "Cinqic officially launched August 2, 2026."
      : "Cinqic is launching August 2, 2026.";
  };
}());
