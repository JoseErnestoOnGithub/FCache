<!-- generic form functions -->

function submitOnEnter(field, event)
{
	var keycode;
	if(window.event)
		keycode = window.event.keyCode;
	else if(event)
		keycode = event.which;
	else
		return true;
		
	if (keycode == 13) {
		field.form.submit();
		return false;
	} else
		return true;
}

function updateMediaSelectFromCheckbox(element) {
	document.getElementById("display_" + element.name).className = element.checked ? 'slideR3lon' :  'slideR3loff';
}

function updateMediaSelectOnClick(element) {
	document.getElementById("display_" + element.name).className = element.checked ? 'slideR3lonOver' :  'slideR3loffOver';
}

function onMediaSelectClicked(form, checkboxName) {
	checkbox = form.elements[checkboxName];
	checkbox.checked = !checkbox.checked;
	updateMediaSelectOnClick(checkbox);
}

function onMediaSelectPageLoad() {
	form = document.select_form;
	elementCount = form.elements.length;
	for(index = 0; index < elementCount; index++) {
		element = form.elements[index];
		if(element.type == "checkbox") {
			updateMediaSelectFromCheckbox(element);
		}
	}
}

function onMediaSelectAllClicked() {
	form = document.select_form;
	elementCount = form.elements.length;
	for(index = 0; index < elementCount; index++) {
		element = form.elements[index];
		if(element.type == "checkbox") {
			element.checked = true;
			updateMediaSelectFromCheckbox(element);
		}
	}
}

function onMediaClearAllClicked() {
	form = document.select_form;
	elementCount = form.elements.length;
	for(index = 0; index < elementCount; index++) {
		element = form.elements[index];
		if(element.type == "checkbox") {
			element.checked = false;
			updateMediaSelectFromCheckbox(element);
		}
	}
}
			
function limitCharacters(field, maxlen) {
	if (field.value.length > maxlen) {
		field.value = field.value.substring(0, maxlen);
	}
}			

function selectCheckboxById(id){
	document.getElementById(id).checked = 'true';
}

function toggleCheckboxById(id){
	document.getElementById(id).checked = (document.getElementById(id).checked == true) ? false : true;
}

function highlightElement(elementId) {
	element = document.getElementById(elementId);
	element.focus();
	element.select();
}

function submitForm(formName, submitButtonValue) {
	document.forms[formName].submit_button.value=submitButtonValue;
	document.forms[formName].submit();
}

function toggleSelectFields(direction) {
	var selectFields = document.getElementsByTagName("select");
	if (direction == 'hidden') {
		for (i=0 ; i<=selectFields.length-1 ; i++) {
			selectFields[i].style.visibility='hidden';
	  	}
  	}
  	else {
		for (i=0 ; i<=selectFields.length-1 ; i++) {
			selectFields[i].style.visibility='visible';
	  	}
  	}
}