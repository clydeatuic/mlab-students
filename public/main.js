// main.js
var studentid = document.getElementById('studentid');
var firstname = document.getElementById('firstname');
var lastname = document.getElementById('lastname');

document.getElementById('update').addEventListener('click', doUpdate);
document.getElementById('delete').addEventListener('click', doDelete);

function doUpdate(){
	var data = {
		studentid: studentid.value,
		firstname: firstname.value,
		lastname: lastname.value
	};
	return fetch('/students', {
	    method: 'PUT',
	    body: JSON.stringify(data),
	    headers: {
	      'Accept': 'application/json',
	      'Content-Type': 'application/json'
	    }
	  })
    .then(checkStatus)
    .then((data) => {
    	console.log(data.studentid,'has been updated!!!');
    	window.location.reload(true);
    });	
}

function doDelete(){
	var data = {
		studentid: studentid.value,
		firstname: firstname.value,
		lastname: lastname.value
	};
	return fetch('/students', {
	    method: 'DELETE',
	    body: JSON.stringify(data),
	    headers: {
	      'Accept': 'application/json',
	      'Content-Type': 'application/json'
	    }
	  })
    .then(checkStatus)
    .then((data) => {
    	console.log(data.message);
    	window.location.reload(true);
    });	
}

function checkStatus(response) {
	if (response.status >= 200 && response.status < 300) {
		return response.json();
	} else {
		var error = new Error(response.statusText);
		error.response = response;
		throw error;
	}
}

// update.addEventListener('click', function () {

// 	function updateStudent(student){
// 		return fetch('students/',{
// 			method: 'PUT',
// 			body: {}
// 		})
// 		.then(response => response.json());
// 	}

// 	updateStudent({
// 		studentid: studentid.value,
// 		firstname: firstname.value,
// 		lastname: lastname.value	
// 	})
// 	.then((json) => console.log("success"))
// 	.catch(error => console.error(error));

// 	// fetch('students/'+studentid.value, {
// 	// 	method: 'put',
// 	// 	headers: {'Content-Type': 'application/json'},
// 	// 	body: JSON.stringify({
// 	// 		'firstname': firstname.value,
// 	// 		'lastname': lastname.value
// 	// 	})
// 	// })
// 	// .then(res => {
// 	// 	if (res.ok) return res.json();
// 	// })
// 	// .then(data => {
// 	// 	// console.log(data);
// 	// 	if (data.n==1){
// 	// 		console.log("updated successfully");
// 	// 		// window.location = window.location.href.split("?")[0];
// 	// 	}
// 	// 	else{console.log("something went wrong");}	
// 	// });
// });

function modifyStudent(student){
	student = JSON.parse(student);
	
	studentid.value = student.studentid;
	firstname.value = student.firstname;
	lastname.value = student.lastname;
}

