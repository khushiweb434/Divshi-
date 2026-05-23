function openMessage(){

  document.getElementById("message")
  .classList.remove("hidden");

  document.getElementById("message")
  .scrollIntoView({
    behavior:'smooth'
  });

}
