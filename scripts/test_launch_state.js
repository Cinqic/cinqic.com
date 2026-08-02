"use strict";
const fs=require("fs"),vm=require("vm"),assert=require("assert");
const sandbox={window:{},URL}; vm.runInNewContext(fs.readFileSync("assets/js/company.js","utf8"),sandbox);
const c=sandbox.window.CINQIC;
assert.equal(c.getLaunchState(),"pre-launch","default must remain pre-launch");
const r=c.juniper.release; r.launchState="launched"; assert.equal(c.getLaunchState(),"pre-launch","missing release fields must block launch mode");
r.version="0.1.0";r.releaseDate="2026-08-27";["downloadUrl","documentationUrl","modelCardUrl","sourceUrl","licenseUrl","checksumUrl","releaseNotesUrl"].forEach(k=>r[k]="https://example.com/"+k);
assert.equal(c.getLaunchState(),"launched","complete valid release data should enable launch mode");
console.log("PASS: pre-launch, missing-link guard, and complete launch state.");
