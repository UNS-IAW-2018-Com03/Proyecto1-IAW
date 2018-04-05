


function mostrar(arreglo){
	var cell = document.getElementById("panelReclamos");
	if ( cell.hasChildNodes() ){
		while ( cell.childNodes.length >= 1 ){
			cell.removeChild( cell.firstChild );
		}
	}
	
	var titulo = $("<h4></h4>").text("Elija su Reclamo:");
	titulo.attr("class","modal-title");
	var divHeader = $("<div></div>").attr("class","modal-header");
	divHeader.append(titulo);
	var divBody	= $("<div></div>").attr("class","modal-body");
	var divContent = $("<div></div>").attr("class","modal-content");
	divContent.append(divHeader);
	divContent.append(divBody);
	$(panelReclamos).append(divContent);
	
	var index;
	for(index = 0; index < arreglo.length; ++index){
		agregarComponente(arreglo[index],divContent);
	}
	
	$(panelReclamos).dialog();
	$(panelReclamos).show();
	
}

function agregarComponente(componente,divContent){
	var tituloReclamo = $("<label></label>").text(componente.titulo);
	tituloReclamo.attr("class","modal-title");
	var imgReclamo = $("<img></img>").attr("src", componente.imagen);
	var botonReclamo = $("<button></button>");
	botonReclamo.append(imgReclamo);
	botonReclamo.click(function(){
		ingresarDescripcion(componente);
	});
	var divReclamo = $("<div></div>").attr("class","modal-content");
	divReclamo.attr("id",componente.id);
	
	divReclamo.append(botonReclamo);
	divReclamo.append(tituloReclamo);
	
	divContent.append(divReclamo);
	
}

function ingresarDescripcion(componente){
	$(panelReclamos).hide();
	$(panelReclamos).dialog("close");
	var cell = document.getElementById("panelDescripcion");

	if ( cell.hasChildNodes() ){
		while ( cell.childNodes.length >= 1 ){
			cell.removeChild( cell.firstChild );
		}
	}
	$(panelDescripcion).show();
	var textArea = $("<textarea></textarea>").attr("class","form-control");
	textArea.attr("type","textarea");
	textArea.attr("name","message");
	textArea.attr("id","txtDescripcion");
	textArea.attr("placeholder","Escriba su mensaje aquí.");
	textArea.attr("maxlength","500");
	textArea.attr("rows","7");
	var lblText = $("<label></label>").text("Descripción:");
	lblText.attr("for","name");
	var divGroup = $("<div></div>").attr("class","form-group");
	divGroup.append(lblText);
	divGroup.append(textArea);
	var p = $("<p></p>").text( "Escriba una descripcion de su reclamo con un máximo de 500 caracteres.");
	var btnEnviar = $("<button></button>").text("Enviar Reclamo →");
	btnEnviar.attr("type","submit");
	btnEnviar.attr("class","btn btn-lg btn-success btn-block");
	btnEnviar.click(function(){
		guardarReclamo(componente, latitud, longitud);
	});
	var divBody	= $("<div></div>").attr("class","modal-body");
	divBody.append(p);
	divBody.append(divGroup);
	divBody.append(btnEnviar);
	var titulo = $("<h4></h4>").text("Describa su Reclamo:");
	titulo.attr("class","modal-title");
	var divHeader = $("<div></div>").attr("class","modal-header");
	divHeader.append(titulo);
	var divContent = $("<div></div>").attr("class","modal-content");
	divContent.append(divHeader);
	divContent.append(divBody);
	
	$(panelDescripcion).append(divContent);
	$(panelDescripcion).dialog();
}