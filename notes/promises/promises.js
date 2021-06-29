let watchTurorialCallback = new Promise((resolve, reject) => {
  let userWatchingLiveStream = Math.round(Math.random());

  if (userWatchingLiveStream) {
    resolve("Thumbs up and Subscribe");
  } else {
    reject({
      name: "User Left",
      message: "The livestream has been disconnected :(",
    });
  }
});

function createAlert(success, value) {
  let message = value;
  let para = document.createElement("p");
  para.textContent = message;
  para.style.padding = "2rem";
  para.style.margin = "3rem auto";
  para.style.border = `0.5px solid ${success ? "green" : "red"}`;
  para.style.maxWidth = "600px";
  document.body.appendChild(para);
  setTimeout(() => {
    document.body.removeChild(para);
  }, 3000);
}

watchTurorialCallback
  .then((value) => {
    createAlert(true, value);
  })
  .catch((error) => {
    createAlert(false, error.message);
  });
