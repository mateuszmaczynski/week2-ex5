function Toggler(selector){
    this.elem = document.querySelector(selector);

}
Toggler.prototype.getElem = function(){
    return this.elem;
};

Toggler.prototype.show = function(){
    
    this.elem.style.display = "";
};
Toggler.prototype.hide = function(){
    
    this.elem.style.display = "none";
};

(function(){
var button = document.querySelector("#button");
var elem = new Toggler("#pokaz");

elem.hide();

button.addEventListener("click", function(){
    if(elem.getElem().style.display == "none"){
        elem.show();
    } else {
        elem.hide();
    }
    
}, false);

})();