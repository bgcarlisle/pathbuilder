pathdata = {};

function showdialog (dialogname) {
    $('#pagemask').fadeIn(250, function () {
	$('#' + dialogname).slideDown();
    });
}

function updatepage () {

    // Target Scenario
    if (pathdata.targetScenario != "") {
	$('#display-target-scenario').html(pathdata.targetScenario);
    } else {
	$('display-target-scenario').html('No target scenario has been specified')
    }
    
}

$(document).ready(function () {

    $('#pagemask, .dialog-close').on('click', function (event) {
	$('.dialog').slideUp(250, function () {
	    $('#pagemask').fadeOut(250);
	});
    });

    showdialog('startup');

    $('.titlebar button').on('click', function(event) {
	showdialog('startup');
    });

    $('#edit-target-scenario').on('click', function(event) {
	showdialog('target-scenario')
    });

    $('#show-save-options').on('click', function(event) {
	showdialog('save-or-export');
    });

    $('#confirm-target-scenario').on('click', function(event) {
	// Update the JSON object
	pathdata.targetScenario = $('#target-scenario textarea').val();
	updatepage();
    });

    
    
})
