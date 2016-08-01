// @TODO
/*
- loadScript Cookie
- faire cookie
- améliorer debug
- ajouter des tailles (small, medium, big) de la modal
- faire alert
- faire confirm
- ajouter style css
- ajouter effet css
- faire doc
- faire landing page
*/
var DEBUG = false;
var _log  = function(a) {
	console.log(a);
}

/*var loadScript = function(url, callback) {
    // Prépare l'ajoute du script au head
    var head   = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
	    script.type = 'text/javascript';
	    script.src = url;
 
    // Lance une callback à la fin de la tâche
    script.onreadystatechange = callback;
    script.onload = callback;
 
    // Ajoute le script
    head.appendChild(script);
}

loadScript('/js/cookie.js', function() {
	_log('Cookie chargé !');
});*/

var Modal = {
	up : function() {
		document.querySelector('#modal').style.top = '-100%';
	},
	down : function() {
		document.querySelector('#modal').style.top = '40%';
	},
	cookie : function(name) {
		if ( name ) {
			if ( Cookies.get(name) === undefined ) {
				Cookies.set(name, name, { expires: 1 });

				Modal.show();
			} else {
				/*$('#header_user li.login > a').click(function(e) {
					var href = $(this).attr('href');
					if ( href.indexOf("?mylogout=") != -1 ) {*/

						if ( Cookies.get(name) ) {
							Modal.hide(function() {
								Cookies.remove(name);
							});
						}

					/*}
				});*/
			}
		}
	},
	create : function(params, callback) {

		params.width = (params.width) ? params.width : 300;
		params.padding = (params.padding) ? params.padding : 20;
		params.backgroundColor = (params.backgroundColor) ? params.backgroundColor : '#000000';
		params.border = (params.borderColor) ? '2px solid ' + params.borderColor : '2px solid #FFFFFF';

		var block = document.createElement('div');
			block.setAttribute('id', 'modal');
			block.style.position = 'absolute';
			block.style.left     = '50%';
			block.style.marginLeft = '-'+parseInt(params.width/2)+'px';
			block.style.width    = params.width + 'px';
			block.style.padding  = params.padding + 'px';
			block.style.backgroundColor = params.backgroundColor;
			block.style.transition = 'all .5s ease-in-out';
			block.style.boxShadow = '0 0 25px rgba(0,0,0,.4)';

		var p = document.createElement('p');
			p.style.position = 'relative';
			p.style.color = '#FFFFFF';
			p.style.fontWeight = 'bold';
			p.style.textAlign = 'center';
			p.style.padding = params.padding + 'px ' + parseInt(params.padding/2) + 'px';
			p.style.borderTop = params.border;
			p.style.borderBottom = params.border;
			p.innerHTML = (params.message) ? params.message : 'Message vide';

		var btn = document.createElement('button');
			btn.innerHTML = 'X';
			btn.style.position = 'absolute';
			btn.style.top = '0';
			btn.style.right = '0';
			btn.style.color = '#FFFFFF';
			btn.style.fontWeight = 'bold';
			btn.style.fontSize = '18px';
			btn.style.background = 'none';
			btn.style.border = '0 none';
			btn.style.cursor = 'pointer';
			btn.addEventListener('click', function(e) {
				Modal.up();
			}, false)
			/*btn.addEventListener('hover', function() {
				btn.style.backgroundColor = '#FFFFFF';
				btn.style.color = '#000000';
			});*/

		block.appendChild(p);
		block.appendChild(btn);

		document.body.appendChild(block);

		if (callback && typeof(callback) === 'function') callback();

	},
	show : function(params) {
		
		if (params && typeof(params) === 'object') {
			Modal.create(params, function() {
				Modal.down();
			});
		}

	},
	hide : function(callback) {

		document.querySelector('#modal').style.display = 'none';
		if (callback && typeof(callback) === 'function') callback();

	}
}
