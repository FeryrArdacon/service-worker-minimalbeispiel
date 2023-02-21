"use strict";
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    document.querySelector("#start-worker").addEventListener("click", () =>
      navigator.serviceWorker
        .register("/service-worker.js")
        .then(() => {
          console.log("service worker successfully registered");
        })
        .catch(console.error)
    );
  });
}
