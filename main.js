
var select0 = document.querySelector(".main");
var select = document.querySelector("#name");
var select1 = document.querySelector("#name1");
var select2 = document.querySelector(".para");


select0.classList.add("main-style");
select.classList.add("style");

select1.addEventListener("click", abu);
select1.addEventListener("mouseout", abu1);

function abu(){
    select1.classList.add("style");
}

function abu1(){
    select1.classList.remove("style");
}

select2.addEventListener("mouseover", function (){
    select2.classList.add("style");
});

select2.addEventListener("mouseout", function (){
    select2.classList.remove("style");
});