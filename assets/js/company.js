(function(){"use strict";
  var release={
    launchState:"pre-launch", /* Set to "launched" only after all release data below is verified. */
    companyLaunchDate:"2026-08-27",
    version:null, releaseDate:null, downloadUrl:null, documentationUrl:null,
    modelCardUrl:null, sourceUrl:null, licenseUrl:null, checksumUrl:null, releaseNotesUrl:null,
    supportedPlatforms:[], hardwareRequirements:null
  };
  function validUrl(value){try{return typeof value==="string"&&new URL(value).protocol==="https:"}catch(error){return false}}
  function releaseReady(){return release.launchState==="launched"&&[release.version,release.releaseDate,release.downloadUrl,release.documentationUrl,release.modelCardUrl,release.sourceUrl,release.licenseUrl,release.checksumUrl,release.releaseNotesUrl].every(function(value){return value!==null&&value!==""})&&[release.downloadUrl,release.documentationUrl,release.modelCardUrl,release.sourceUrl,release.licenseUrl,release.checksumUrl,release.releaseNotesUrl].every(validUrl)}
  window.CINQIC={
    company:{name:"Cinqic",founder:"Markus Gillyard",publicLaunchDate:"2026-08-27",launchState:release.launchState,mission:"Build software that helps people learn, create, think clearly, and solve problems while respecting user privacy and ownership.",vision:"Create an easily accessible AI ecosystem that is useful, affordable, and trustworthy for everyone."},
    juniper:{name:"Juniper Baby 1",fullName:"Juniper Baby 1 by Cinqic",parameterClass:"0.8B",status:"in-development",release:release},
    getLaunchState:function(){return releaseReady()?"launched":"pre-launch"},
    isReleaseReady:releaseReady,
    companyLaunchMessage:function(){return release.launchState==="launched"?"Cinqic was founded August 27, 2026.":"Cinqic launches August 27, 2026."}
  };
}());
