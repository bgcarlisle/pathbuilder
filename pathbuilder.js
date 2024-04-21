var pathdata = {evidence:{}, strength:{}};

var steps = ["m0m1", "t1", "m1m2", "t2", "m2m3", "t3", "d0d1", "d1d2", "d2d3"];

function showdialog (dialogname) {
    $('#pagemask').fadeIn(250, function () {
	$('#' + dialogname).slideDown();
    });
}

function updatepage () {

    // Update target Scenario
    if (pathdata.targetScenario != "") {
	$('#display-target-scenario').html(pathdata.targetScenario);
    } else {
	$('display-target-scenario').html('No target scenario has been specified')
    }

    // Update counters for evidence
    counter = 1;
    for (var nstep in steps) {
	for (var key in pathdata.evidence) {
	    if (steps[nstep] == pathdata.evidence[key].step) {
		pathdata.evidence[key].number = counter;
		counter++;
	    }
	    
	}
    }
    
    // Insert evidence into text summary area
    $('.evidence-container').html('');
    for (var key in pathdata.evidence) {
	evi = pathdata.evidence[key];
	$('#evidence-block-' + evi['step'] + ' div.evidence-container').append(
	    '<div class="evidence-instance" data-index="' + key + '">' +
	    '<svg width="20" height="20" class="evidence-instance-grip"><use href="images/bootstrap-icons.svg#arrow-down-up"/></svg>' +
	    evi['number'] + '. ' + evi['text'] +
	    '<button class="btn btn-sm btn-primary" style="float: right;">' +
	    '<svg width="12" height="12" fill="currentColor"><use href="images/bootstrap-icons.svg#pencil"/></svg> Edit' +
	    '</button>' +
	    '</div>'
	);
    }

    // Put evidence on the PATH figure and show/hide strength of evidence buttons
    for (var nstep in steps) {
	var step_evidence = [];
	var noevidence = true;
	for (var key in pathdata.evidence) {
	    evi = pathdata.evidence[key];
	    if (steps[nstep] == evi.step) {
		step_evidence.push(evi.number);
		noevidence = false;
	    }
	}
	$('#evidence-' + steps[nstep]).html(step_evidence.join(', '));
	if (noevidence) {
	    $('#evidence-block-' + steps[nstep] + ' button.edit-evidence-strength').fadeOut();
	    $('#arrow-' + steps[nstep]).removeClass('strength1 strength2 strength3 strength4 strength5');
	    $('#arrow-' + steps[nstep]).addClass('strength1');
	} else {
	    $('#evidence-block-' + steps[nstep] + ' button.edit-evidence-strength').fadeIn();
	    if (pathdata.strength.hasOwnProperty(steps[nstep])) { // If the strength of evidence is set for this step
		$('#arrow-' + steps[nstep]).removeClass('strength1 strength2 strength3 strength4 strength5');
		$('#arrow-' + steps[nstep]).addClass('strength' + pathdata.strength[steps[nstep]]);
	    } else {
		$('#arrow-' + steps[nstep]).removeClass('strength1');
	    }
	}
    }

}

function gen_index() {
    length = 64;
    result = '';
    characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
      counter += 1;
    }
    // TODO: check that the index isn't already in use before returning result and repeat if it is
    return result;
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

    document.addEventListener('keyup', function (event) {
	if (! $('#pagemask').is(':hidden')) { // If the page mask is visible
	    if (event.keyCode == 27) { // Esc key pressed
		$('#pagemask').click(); // Hide all dialogs and page mask
	    }	    
	}
    });

    $('.evidence-container').sortable({
	connectWith: ".evidence-container",
	placeholder: "evidence-placeholder",
	handle: ".evidence-instance-grip",
	stop: function (event, ui) {
	    // Get the order as shown on the page    
	    var indices = $('.evidence-instance').map(function () {
		return $(this).data('index');
	    }).toArray();

	    // Get the data from the JSON object
	    oldevidence = JSON.parse(JSON.stringify(pathdata.evidence));

	    // Clear the old data from the JSON oject
	    pathdata.evidence = {};

	    // Get the step where the item is being dragged
	    targetstep = ui.item.parent().parent().parent().data('step');
	    console.log(targetstep);

	    // Put the old data back but in the new order
	    for (var ind in indices) {
		for (var key in oldevidence) {
		    if (indices[ind] == key) {
			if (key == ui.item.data('index')) {
			    oldevidence[key].step = targetstep;
			}
			pathdata.evidence[key] = oldevidence[key];
		    }
		}
	    }

	    // Remove strength ratings where there is no evidence
	    for (var nstep in steps) {
		var count_evidence = 0;
		for (var key in pathdata.evidence) {
		    if (steps[nstep] == pathdata.evidence[key].step) {
			count_evidence++;
		    }
		}
		if (count_evidence == 0) {
		    delete pathdata.strength[steps[nstep]];
		}
	    }

	    updatepage();
	}
    });

    // Activate the main menu
    $('.titlebar button').on('click', function(event) {
	showdialog('startup');
    });

    // Edit target scenario
    $('#edit-target-scenario').on('click', function(event) {
	showdialog('target-scenario')
    });

    // Show save/export buttons
    $('#show-save-options').on('click', function(event) {
	showdialog('save-or-export');
    });

    // Confirm target scenario changes
    $('#confirm-target-scenario').on('click', function(event) {
	pathdata.targetScenario = $('#target-scenario textarea').val(); // Update the JSON object
	updatepage();
    });

    // Show evidence editor (insert new)
    $('.edit-new-evidence').on('click', function() {
	showdialog('evidence-editor');
	step = $(this).parent().parent().data('step');
	$('#editor-evidence-step').val(step) // Update step
	$('.editor-evidence-stepname').html(stepname(step)); // Update user-facing step name in editor
	$('#editor-evidence-index').val(''); // Indicate that it's new evidence
	$('#evidence-editor-text').val(''); // Clear old text
    });

    // Show evidence editor (edit old)
    // TO DO
    
    // Show evidence strength editor
    $('.edit-evidence-strength').on('click', function(event) {
	showdialog('evidence-strength');
	step = $(this).parent().parent().data('step');
	$('#evidence-strength-step').val(step);
	$('.evidence-strength-stepname').html(stepname(step));
	if (pathdata.strength.hasOwnProperty(step)) { // 
	    $('#evidence-strength-slider').val(pathdata.strength[step]);
	} else {
	    $('#evidence-strength-slider').val(1);	    
	}
    });

    // Confirm evidence
    $('#confirm-evidence-editor').on('click', function(event) {
	if ($('#evidence-editor-index').val() != '') { // Inserting new evidence
	    newindex = gen_index(); // Index for new evidence entry
	    pathdata.evidence[newindex] = { // Add evidence to JSON object
		step: $('#editor-evidence-step').val(),
		text: $('#evidence-editor-text').val()
	    };
	    updatepage();
	} else { // Updating old evidence
	    eindex = $('#evidence-editor-index').val();
	    // TODO
	    // Update the JSON object
	    
	}
	
	
    });

    // Confirm strength
    $('#confirm-evidence-strength').on('click', function (event){
	pathdata.strength[$('#evidence-strength-step').val()] = $('#evidence-strength-slider').val();
	updatepage();
    });

    // Hover over path figure parts
    $('#arrow-m0m1').on('mouseover', function (event) {
	$('#evidence-block-m0m1').css('border', '1px solid red;');
    });
    
})
