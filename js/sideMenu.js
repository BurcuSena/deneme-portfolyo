$(document).ready(function(){
    //sidebar açma kapama
    $(`.menu-btn`).click(function(){
        $(`.side-bar`).addClass(`active`);
        $(`.menu-btn`).css("visibility", "hidden");
    });
    //kapama tuşu
    $(`.close-btn`).click(function(){
        $(`.side-bar`).removeClass(`active`);
        $(`.menu-btn`).css("visibility", "visible");
    });
    //toogle sub menu
    $(`.sub-btn`).click(function(){
        $(this).next(`.sub-menu`).slideToggle();
        $(this).find(`.dropdown`).toggleClass(`rotate`);
    });
});

const body = document.querySelector("body"),
  sidebar = body.querySelector(".side-bar"),
  toggle = body.querySelector(".toggle"),
  modeSwtich = body.querySelector(".toggle-switch"),
  modeText = body.querySelector(".mode-text");

  modeSwtich.addEventListener("click", () => {
   body.classList.toggle("dark");

   if(body.classList.contains("dark")){
    modeText.innerText = "Light Mode"
   }else{
    modeText.innerText = "Dark Mode"
   };
  });
   