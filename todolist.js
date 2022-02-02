window. onload= inciar;
var tareas=[];

function inciar (){
var btnAgregar = document.getElementById ("btnAgregar");
btnAgregar.addEventListener("click", clickbtnAgregar);


}

function clickbtnAgregar () {
var TxtTarea = document.getElementById ("TxtTarea");
var tarea = TxtTarea.value;
tareas.push(tarea);
alert(tareas);
mostrarTareas (); 



}

function mostrarTareas () { 
    var listado = document.getElementById ("listado");
    var html="";
    debugger;
    for (var tarea of tareas){
        html +=tarea + "<br/>"
    }
    listado.innerHTML = html;
    
    
    }