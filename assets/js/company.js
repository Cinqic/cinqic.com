(function () {
  "use strict";
  window.CINQIC = { name: "Cinqic", founder: "Markus Gillyard", launchDate: "2026-08-27", launchState: "pre-launch", mission: "Build helpful open-source software that helps people learn, create, think clearly, and solve problems while respecting users’ privacy and ownership.", vision: "Create an accessible, lightweight, local-first AI assistant that is useful, trustworthy, and modifiable by everyone.", juniper: { name: "Juniper", modelProject: "Juniper 1 20M", status: "In development", modelTarget: "Approximately 20 million parameters", architectureTarget: "Dense decoder-only transformer", interface: "Text conversation", availability: "Open-source target" } };
  window.CINQIC.launchCopy = function () { return window.CINQIC.launchState === "launched" ? "Founded August 27, 2026." : "Cinqic is launching August 27, 2026."; };
}());
