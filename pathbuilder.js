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

function stepname (step) {

    firstletter = step.substring(0, 1);

    if (firstletter == 'm' | firstletter == 'd') {
	// Takes e.g. m0m1 and turns it to M0-M1
	firstpart = step.substring(0, 2);
	secondpart = step.substring(2, 4);
	combined = firstpart + '-' + secondpart;
	return combined.toUpperCase();
    } else {
	// Takes e.g. t1 and turns it to T1
	return step.toUpperCase();
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

    $('.edit-evidence-strength').on('click', function(event) {
	showdialog('evidence-strength');
	step = $(this).parent().parent().data('step');
	$('#evidence-strength-step').html(stepname(step));
    });
    
})
