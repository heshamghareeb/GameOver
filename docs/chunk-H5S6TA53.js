import{v as a,w as u}from"./chunk-7O7LVR3D.js";import{Q as p,V as l,k as c}from"./chunk-PN7LSG4T.js";var i=class extends Error{};i.prototype.name="InvalidTokenError";function f(r){return decodeURIComponent(atob(r).replace(/(.)/g,(t,o)=>{let e=o.charCodeAt(0).toString(16).toUpperCase();return e.length<2&&(e="0"+e),"%"+e}))}function g(r){let t=r.replace(/-/g,"+").replace(/_/g,"/");switch(t.length%4){case 0:break;case 2:t+="==";break;case 3:t+="=";break;default:throw new Error("base64 string is not of the correct length")}try{return f(t)}catch{return atob(t)}}function d(r,t){if(typeof r!="string")throw new i("Invalid token specified: must be a string");t||(t={});let o=t.header===!0?0:1,e=r.split(".")[o];if(typeof e!="string")throw new i(`Invalid token specified: missing part #${o+1}`);let n;try{n=g(e)}catch(s){throw new i(`Invalid token specified: invalid base64 for part #${o+1} (${s.message})`)}try{return JSON.parse(n)}catch(s){throw new i(`Invalid token specified: invalid json for part #${o+1} (${s.message})`)}}var y=(()=>{let t=class t{constructor(e){this._HttpClient=e,this.userData=new c(null),this.saveUserData()}signUpApi(e){return this._HttpClient.postRequest(`${a.authApi}signup`,e)}signInApi(e){return this._HttpClient.postRequest(`${a.authApi}signin`,e)}signOutApi(e){return this._HttpClient.postRequest(`${a.authApi}signOut`,{token:JSON.stringify(localStorage.getItem("uGame"))})}saveUserData(){if(localStorage.getItem("uGame")){let e=localStorage.getItem("uGame"),n=d(e);this.userData.next(n),console.log(n)}}};t.\u0275fac=function(n){return new(n||t)(l(u))},t.\u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"});let r=t;return r})();export{y as a};