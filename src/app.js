const url =
  "https://services1.arcgis.com/0MSEUqKaxRlEPj5g/arcgis/rest/services/ncov_cases/FeatureServer/1/query?f=json&where=Confirmed%20%3E%200&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=Confirmed%20desc%2CCountry_Region%20asc%2CProvince_State%20asc&resultOffset=0&resultRecordCount=1000&cacheHint=false";

const maxDiffMs = 1000 * 60 * 60;

const version = "1.2.0";

// make sure this current
if (localStorage.version !== version) {
  localStorage.clear();
  localStorage.version = version;
}

const elements = {
  yourLocation: document.querySelector("#your-location"),
  closestLocation: document.querySelector("#closest-location"),
  distance: document.querySelector("#distance"),
  confirmed: document.querySelector("#confirmed"),
  deaths: document.querySelector("#deaths"),
  recovered: document.querySelector("#recovered"),
  updated: document.querySelector("#updated"),
  locationButton: document.querySelector("#locationButton"),
  refreshButton: document.querySelector("#refreshButton"),
  lastDataRequest: document.querySelector("#lastDataRequest"),
  locationError: document.querySelector("#locationError"),
  casesError: document.querySelector("#casesError"),
  active: document.querySelector("#active")
};
