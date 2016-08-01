var _log = function(a) {
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
	// Cookie pour modal
	down : function() {
		document.querySelector('#modal').style.top = '40%';
		/*$('#modal-message-close').click(function() {
			$('#modal-message').css('top', '-50%');
		});*/
	},
	cookie : function(nameCookie) {
		if ( nameCookie ) {
			if ( Cookies.get(nameCookie) === undefined ) {
				Cookies.set(nameCookie, nameCookie, { expires: 1 });

				Modal.modalShow();
			} else {
				$('#header_user li.login > a').click(function(e) {
					var href = $(this).attr('href');
					if ( href.indexOf("?mylogout=") != -1 ) {
						if ( Cookies.get(nameCookie) ) Cookies.remove(nameCookie);
					}
				});
			}
		}
	},
	create : function(message, callback) {

		var block = document.createElement('div');
			block.setAttribute('id', 'modal');

		var p = document.createElement('p');
			p.innerHTML = (message) ? message : 'Message vide';

		var btn = document.createElement('button');
			btn.innerHTML = 'X';

		block.appendChild(p);
		block.appendChild(btn);

		document.body.appendChild(block);

		if (callback && typeof(callback) === 'function') callback();

	},
	message : function(params) {

		_log('params =>', params);

		// console.log( 'valeur du Cookie =>', Cookies.get('modal') );

		/*var url = document.location.href;
		var date = new Date(),
		day = date.getDate(),
		month = date.getMonth() + 1,
		year = date.getFullYear();*/
		
		// console.log('date =>', day, month, year);

		/*if ( $('body#index').length == 0 ) {
			if ( url.indexOf('/connexion') == -1 && url.indexOf('/commande-rapide') == -1 ) {
				if ( day >= 1 && day <= 14 && month == 8 && year == 2016 ) {
					Modal.cookieMade('modal-page');
				}
			} else if ( url.indexOf('/connexion') == -1 && url.indexOf('/commande-rapide') != -1 ) {
				if ( day >= 15 && day <= 21 && month == 8 && year == 2016 ) {
					Modal.modalShow();
				}
			}
		}*/

	},
	show : function(params) {
		
		if (params) {
			Modal.create(params.message, function() {
				Modal.down();
			});
		}

	},
	hide : function(callback) {
		document.querySelector('#modal').style.display = 'none';
		if (callback && typeof(callback) === 'function') callback();
	}
}
