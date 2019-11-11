var checkNumber = 1;
var editNumber = 1;
var deleteNumber = 1;
var labelNumber = 1;
var keepId;
var curentId;
var editStat = new Boolean(false);
document.getElementById("task").value = "";

function AddTaskApear(){
	document.getElementById("input").style.top = "0em";
}

function AddTaskDesapear() {
	document.getElementById("input").style.top = "-13.5em";
}

function CancelTask() {

	AddTaskDesapear();
	document.getElementById("task").value = "";

}

function extraitNombre(str){ return Number(str.replace(/[^\d]/g, "")) } // je sais pas comment elle marche mais elle marche mdrr

function editTask() {

	editStat = true;
	var nbLi = extraitNombre(curentId);
	keepId = nbLi;
	AddTaskApear();
	document.getElementById("task").value = document.getElementById("label" + nbLi).textContent;
}

function ToDoToDone() {

	var nbLi = extraitNombre(curentId);

	deleteTaskToDo();

	var liD = document.createElement("li");

	var checkButD = document.createElement("button");
	var checkIconD = document.createElement("I");
	checkButD.id = "checkBut" + nbLi ;
	checkButD.classList.add("check-done");
	checkIconD.classList.add("fas", "fa-check-square");
	checkButD.onclick = function() { curentId = this.id; DoneToToDo();} 
	liD.appendChild(checkButD);
	checkButD.appendChild(checkIconD);

	var inputValueD = "label" + nbLi;
	var nbLiValueD = document.getElementById(inputValueD).textContent;
	var labelD = document.createElement("Label");
	labelD.id = "labelD" + nbLi;
	labelD.innerHTML = nbLiValueD;
	liD.appendChild(labelD);

	var deleteButD = document.createElement("button");
	var deleteIconD = document.createElement("I");
	deleteButD.id = "deleteBut" + nbLi ;
	deleteButD.classList.add("delete");
	deleteIconD.classList.add("fas", "fa-times-circle");
	deleteButD.onclick = function() { curentId = this.id; deleteTaskDone();} 
	liD.appendChild(deleteButD);
	deleteButD.appendChild(deleteIconD);

	document.getElementById("Done").appendChild(liD);
}

function DoneToToDo() {

	var nbLi = extraitNombre(curentId);

	deleteTaskDone();

	var li = document.createElement("li");

	var checkBut = document.createElement("button");
	var checkIcon = document.createElement("I");
	checkBut.id = "checkButton" + nbLi ;
	checkBut.classList.add("check-todo");
	checkIcon.classList.add("fas", "fa-check-square");
	checkBut.onclick = function() { curentId = this.id; ToDoToDone(); } 
	li.appendChild(checkBut);
	checkBut.appendChild(checkIcon);

	var inputValue = "label" + nbLi;
	var nbLiValue = document.getElementById(inputValue).textContent;
	var label = document.createElement("Label");
	label.id = "label" + nbLi;
	label.innerHTML = nbLiValue;
	li.appendChild(label);

	var editBut = document.createElement("button");
	var editIcon = document.createElement("I");
	editBut.id = "editButton" + nbLi ;
	editBut.classList.add("edit");
	editIcon.classList.add("fas", "fa-pen");
	editBut.onclick = function() { curentId = this.id; editTask();} 
	li.appendChild(editBut);
	editBut.appendChild(editIcon);

	var deleteBut = document.createElement("button");
	var deleteIcon = document.createElement("I");
	deleteBut.id = "deleteButton" + nbLi ;
	deleteBut.classList.add("delete");
	deleteIcon.classList.add("fas", "fa-times-circle");
	deleteBut.onclick = function() { curentId = this.id; deleteTaskToDo();} 
	li.appendChild(deleteBut);
	deleteBut.appendChild(deleteIcon);

	document.getElementById("To-do").appendChild(li);
}

function AddTask(){


	if(editStat == false){

		AddTaskDesapear();

		var li = document.createElement("li");

		// button check

		var checkBut = document.createElement("button");
		var checkIcon = document.createElement("I");
		checkBut.id = "checkButton" + checkNumber ;
		checkNumber ++;
		checkBut.classList.add("check-todo");
		checkBut.onclick = function() { curentId = this.id; ToDoToDone(); } 
		checkIcon.classList.add("fas", "fa-check-square");
		li.appendChild(checkBut);
		checkBut.appendChild(checkIcon);

		// label

		var inputValue = document.getElementById("task").value;
		var label = document.createElement("Label");
		label.innerHTML = inputValue;
		label.id = "label" + labelNumber ;
		labelNumber ++;
		li.appendChild(label);
		if (inputValue === '') {
			alert("Please write a task !");
		}else {
			document.getElementById("To-do").appendChild(li);
		}
		document.getElementById("task").value = "";

		// button edit

		var editBut = document.createElement("button");
		var editIcon = document.createElement("I");
		editBut.id = "editButton" + editNumber ;
		editNumber ++;
		editBut.classList.add("edit");
		editBut.onclick = function() { curentId = this.id; editTask();}
		editIcon.classList.add("fas", "fa-pen");
		li.appendChild(editBut);
		editBut.appendChild(editIcon);


		// button delete

		var deleteBut = document.createElement("button");
		var deleteIcon = document.createElement("I");
		deleteBut.id = "deleteButton" + deleteNumber ;
		deleteNumber ++;
		deleteBut.classList.add("delete");
		deleteBut.onclick = function() { curentId = this.id; deleteTaskToDo() } 
		deleteIcon.classList.add("fas", "fa-times-circle");
		li.appendChild(deleteBut);
		deleteBut.appendChild(deleteIcon);

	}else{
		var inputValue = document.getElementById("task").value;
		if (inputValue === '') {
			alert("Please write a task !");
		}else {
		document.getElementById("label" + keepId).innerHTML = inputValue;	
		}	
		AddTaskDesapear();
		editStat = false;
		keepId = "";
		document.getElementById("task").value = "";
	}
}

function deleteTaskToDo() {

	var nbLi = extraitNombre(curentId);

	document.getElementById("checkButton" + nbLi).style.display = "none";
	document.getElementById("editButton" + nbLi).style.display = "none";
	document.getElementById("deleteButton" + nbLi).style.display = "none";
	document.getElementById("label" + nbLi).style.display = "none";	
}

function deleteTaskDone() {

	var nbLiD = extraitNombre(curentId);
	
	document.getElementById("checkBut" + nbLiD).style.display = "none";
	document.getElementById("deleteBut" + nbLiD).style.display = "none";
	document.getElementById("labelD" + nbLiD).style.display = "none";
}

onkeypress = function(key){
	if(key.charCode == 13){
		AddTask();
	}
}