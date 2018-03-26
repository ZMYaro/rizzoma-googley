// Search panel

// Sidebar
document.querySelector('.topics.tab').innerHTML =
	document.querySelector('.topics.tab').innerHTML.replace('Topics', 'Inbox');

// Inbox search.
document.getElementById('js-search-query').placeholder = 'Search your waves';

// Mention search.
document.getElementById('js-message-list-query').placeholder = 'Search your mentions';

// Public wave search.
document.getElementById('js-public-search-query').placeholder = 'Search all public waves';

// Task search.
if (document.getElementById('js-task-list-query')) {
	document.getElementById('js-task-list-query').placeholder = 'Search your tasks';
}



// New wave buttons

// Empty wave panel
if (document.querySelector('.message-container > .create-wave')) {
	document.querySelector('.message-container > div').textContent = 'Select wave from list or create new wave';
	document.querySelector('.message-container > .create-wave').textContent = 'Create new wave';
}

// New wave button/wizard
if (document.querySelector('.js-common-create-wave')) {
	document.querySelector('.js-common-create-wave').title = 'Create new wave';
}
if (document.querySelector('.create-wave-by-wizard')) {
	document.querySelector('.create-wave-by-wizard').title = 'Create new wave with wizard';
}
if (document.querySelector('.common-create-wave-by-wizard')) {
	document.querySelector('.common-create-wave-by-wizard').title = 'Create new wave';
}
if (document.querySelector('.create-wave-by-wizard, .common-create-wave-by-wizard')) {
	document.querySelector('.create-wave-by-wizard, .common-create-wave-by-wizard').addEventListener('click', function () {
		document.querySelector('.ctm-create-topic').textContent = 'Create new wave';
	}, false);
}



// Wave panel
function setParticipantSearch() {
	if (!document.querySelector('.show-more-participants')) {
		requestAnimationFrame(setParticipantSearch);
		return;
	}
	document.querySelector('.show-more-participants').title = 'Manage people with access';
	document.querySelector('.show-more-participants').addEventListener('click', function () {
		document.querySelector('.showing-participants-id').placeholder = 'Search people on this wave';
	}, false);
	
	document.querySelector('.js-saving-message-saving').textContent = 'Saving...';
	document.querySelector('.js-saving-message-saved').textContent = 'Saved \u2714';
}

try {
	setParticipantSearch();
} catch (err) {
	// Must use jQuery version to add a popstate listener to Rizzoma.
	document.body.setAttribute('onmousemove',
		'$(window).on(\'popstate\', ' +
		setParticipantSearch.toString() +
		'); document.body.removeAttribute(\'onmousemove\');');
}
