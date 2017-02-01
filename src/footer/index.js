var yo = require('yo-yo');
var translate = require('../translate');

module.exports = function() {
	var el = yo`
	<footer class="site-footer">
	  <div class="container">
	    <div class="row">
	      <div class="col s12 l3 center-align">
	        <!-- Dropdown Trigger--><a href="#" data-activates="dropdown1" class="dropdown-button btn btn-flat">${translate.message('language')}</a>
	        <!-- Dropdown Structure-->
	        <ul id="dropdown1" class="dropdown-content">
	          <li><a href="#!">${translate.message('spanish')}</a></li>
	          <li><a href="#!">${translate.message('english')}</a></li>
	        </ul>
	      </div>
	      <div class="col s12 l3 push-l6 center-align">© 2016 Platzigram</div>
	    </div>
	  </div>
	</footer>`;

	return document.body.appendChild(el);
};