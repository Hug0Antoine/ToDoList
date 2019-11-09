var checkNumber = 1;
var editNumber = 1;
var deleteNumber = 1;

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

function AddTask(){

	AddTaskDesapear();

	var li = document.createElement("li");

	// button check

	var checkBut = document.createElement("button");
	var checkIcon = document.createElement("I");
	checkBut.id = "checkButton" + checkNumber ;
	checkNumber ++;
	checkBut.classList.add("check-todo");
	checkIcon.classList.add("fas", "fa-check-square");
	li.appendChild(checkBut);
	checkBut.appendChild(checkIcon);

	// label

	var inputValue = document.getElementById("task").value;
	var label = document.createTextNode(inputValue);
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
	editIcon.classList.add("fas", "fa-pen");
	li.appendChild(editBut);
	editBut.appendChild(editIcon);


	// button delete

	var deleteBut = document.createElement("button");
	var deleteIcon = document.createElement("I");
	deleteBut.id = "deleteButton" + deleteNumber ;
	deleteNumber ++;
	deleteBut.classList.add("delete");
	deleteIcon.classList.add("fas", "fa-times-circle");
	li.appendChild(deleteBut);
	deleteBut.appendChild(deleteIcon);
}

function deleteTask() {
	
}

onkeypress = function(key){
	if(key.charCode == 13){
		AddTask();

	}
}