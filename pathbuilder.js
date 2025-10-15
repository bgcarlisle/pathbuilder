var pathdata = {targetScenario:'', evidence:{}, strength:{}, references:{}};

var ex_pathdata = '{"targetScenario":"Antonib given to glioma patients will improve survival","evidence":{"dbsu56sc5urwhm2e7qkdb21g5nglibwjv68p21i08wy5xau37uxhgrl8iysv8nqq":{"step":"m0m1","text":"Antonib IC50 inhibition of XYZ is 2.2 nM.","number":1},"mzrqby4ahx3mb8e57gfoj4wfl6gwmnwirj159wgak1vhka8xmvlgp8r22c7c3e39":{"step":"m0m1","text":"In randomized xenograft glioma models (see #6 below), Antonib led to 157% lowered expression of a ZIP, a downstream target of XYZ.","number":2},"t0nrkkhvh4avh4ei6ymu8qu4pu4izpatnnvdka3tnpv9o5ilrpsu092lgoqqu36q":{"step":"t1","text":"Antonib crossed the blood brain barrier at a rate that was 20% more efficient than morphine.","number":3},"pnvd0ty6ne02o8xd45cikcivmc7t38plo7t9nwn1bco4rd2f1845bxv78qdg7l9a":{"step":"t1","text":"70% of tumours resected from glioma patients show of XYZ overexpression in blinded pathology studies.","number":4},"md3yuobbk8f8nq6k4fanwaojhs08p2s33q3z7hl5ipnw87t8qjfheq007dnlw56m":{"step":"t1","text":"Doses needed to achieve target inhibition in models, when scaled to patients, did not cause any SAEs in studies involving 20 patients.","number":5},"ig140acrkhehcy6bc0r58us7yp3fn7kzwtzulknwf40wuv99kuk4fp3ytc9zw86n":{"step":"m1m2","text":"Antonib given to 8 of 9 different types of glioma cell lines showed growth inhibition of 60% or more.","number":6},"btf1ktm4hrg9pnfnghxws0j8ibigxryjw584ifbxct87efqrff33bt0r1934bc53":{"step":"m1m2","text":"Randomized studies of Antonib in glioma-bearing orthotopic mice significantly shrank by 50% compared with temazolomide. Results \\twere reproduced three times.","number":7},"0ske55px2fw3to9bam25the8eobxa9gcktgi0oakj4jlbici3a754p9tmisof4i2":{"step":"m1m2","text":"Antonib given to patients with lung or colorectal cancers resulted in ≥ 40% objective response (tumour assessments were blinded).","number":8},"bh9kqyzxxz2w9ludzfsns9hc5xurrgcsokpb3ykb3aao6vefnqkuzqu522i8yao6":{"step":"t2","text":"Glioma-bearing orthotopic mice are sensitive, but not specific models for human glioma. Doses in this study were similar to those planned for this trial","number":9},"edxls0exi034nmjrw7deojk41e5z7vtjpr07vf2124v7y6pingcj0r3hcom46kda":{"step":"t2","text":"Lung and colorectal cancers are driven by XYZ over-activation. Doses used in the above (and present) trial were tolerable (5% of patients experienced serious adverse events)","number":10},"309jabx8zhp0bifob5h6htvrisz7en9mgm3d8gvzowfqu5b1d1xeivhjw40ylifr":{"step":"t2","text":"Glioma progression is driven by XYZ hyperactivation, as indicated by several independent studies showing knock-down of XYZ in glioma cells inhibits growth by 70% (p < .05).","number":11},"mbtzzrwt4ssekfz6yszybxkfwcdj2rnvd4zdk4sn0u1p6rgss6l7j2spnurs48ko":{"step":"t2","text":"Robustness of Antonib anti-tumour activity is suggested by achievement of significantly reduced tumour growth (>50% shrinkage) in randomized xenograft studies of three different cancers types.","number":12},"svau0g7xs8iigi5jjs9zaiuekixerysuifhq1plx7v9dls1ngs541nch8tc9unct":{"step":"m2m3","text":"Antonib significantly doubled survival in randomized, blinded studies of glioma xenograft mice.","number":13},"pcphcuwzlj9pdxrchtsvklk5t2hy9e8tmilsxn5s0l3b9106h1slkp244adicfkx":{"step":"t3","text":"Doses of Antonib in #12 matched those planned for this trial. The model is very sensitive but not very specific for predicting human response.","number":14},"7cvlksk1z7tvu8el2l5z9kgwkmwitemiiervba8my6msxm8k5b8nl2aznoefudz0":{"step":"d0d1","text":"Antonib significantly doubled XYZ phosphorylation in gliomas resected from patients in a phase 0 trial.","number":15},"7z0dju7qpjyzxyohpmytfkx7e70q7g9uomvrwg567x2w3leuoth00qgjzbliry07":{"step":"d1d2","text":"Antonib produced a partial response in one of two glioma patients in a phase 1 trial involving mixed cancers.","number":16},"bp76e7crn459o8fn1mdzb3amfrlf7k8gmhvs4jqgi5hjh7xfi2op47n3yi051xxp":{"step":"d2d3","text":"A meta-analyses of glioma trials showed tumour response was moderately but significantly correlated with increased overall survival (R²=0.4). ","number":17}},"strength":{"d0d1":"4","t1":"4","m0m1":"5","d1d2":"2","t2":"4","m1m2":"5","m2m3":"4","t3":"3","d2d3":"2"},"references":{}}';

var steps = ["m0m1", "t1", "m1m2", "t2", "m2m3", "t3", "d0d1", "d1d2", "d2d3"];

var prompts = [
    {
	"step":"m0m1",
	"prompt":"What evidence from models suggests that the drug engages and has the desired effect on its molecular target?"
    },
    {
	"step":"m1m2",
	"prompt":"What evidence from models suggests that the drug, once it has engaged with the molecular target, will go on to produce the intended physiological effect?"
    },
    {
	"step":"m2m3",
	"prompt":"What evidence from models suggests that the drug, once it has produced the intended physiological effect, will go on to also produce the desired clinical effect?"
    },{
	"step":"d0d1",
	"prompt":"What direct evidence from clinical studies in the target population suggests that the drug engages and has the desired effect on its molecular target?"
    },
    {
	"step":"d1d2",
	"prompt":"What direct evidence from clinical studies suggests that the drug, once it has engaged with the molecular target, will go on to produce the intended physiological effect in the target population?"
    },
    {
	"step":"d2d3",
	"prompt":"What direct evidence from clinical studies suggests that the drug, once it has produced the intended physiological effect, will go on to also produce the desired clinical effect in the target population?"
    },
    {
	"step":"t1",
	"prompt":"What evidence suggests that the target system studied in models is recapitulated in humans such that evidence of the molecular effect of the drug is relevant to the target population?"
    },
    {
	"step":"t2",
	"prompt":"What evidence suggests that the target system studied in models is recapitulated in humans such that evidence regarding the physiological effect of the drug is relevant to the target population in humans?"
    },
    {
	"step":"t3",
	"prompt":"What evidence suggests that the target system studied in models is recapitulated in humans such that evidence regarding the clinical effect of the drug is relevant to the target population in humans?"
    }
];

function showdialog (dialogname) {
    $('#pagemask').fadeIn(250, function () {
	$('#' + dialogname).slideDown();
	$('#' + dialogname + ' textarea,#' + dialogname + ' input').first().focus();
    });
}

function export_pathdata_to_json() {
    const dl = document.createElement("a");
    dl.href = URL.createObjectURL(new Blob([JSON.stringify(pathdata, null, 2)], {
	type: "text/plain"
    }));
    dl.setAttribute("download", "pathdata.json");
    document.body.appendChild(dl);
    dl.click();
    document.body.removeChild(dl);
}

function updatepage () {

    // Update target Scenario
    if (pathdata.targetScenario != "") {
	$('#display-target-scenario').html(pathdata.targetScenario);
    } else {
	$('#display-target-scenario').html('No target scenario has been specified')
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
	    '<div style="float: right; margin-left: 10px;">' +
	    '<button class="btn btn-sm btn-primary edit-old-evidence" style="margin-right: 10px;">' +
	    '<svg width="12" height="12" fill="currentColor"><use href="images/bootstrap-icons.svg#pencil"/></svg> Edit' +
	    '</button>' +
	    '<button class="btn btn-sm btn-danger delete-evidence">' +
	    '<svg width="12" height="12" fill="currentColor"><use href="images/bootstrap-icons.svg#backspace"/></svg> Delete' +
	    '</button>' +
	    '</div>' +
	    '<svg width="20" height="20" class="evidence-instance-grip"><use href="images/bootstrap-icons.svg#arrow-down-up"/></svg>' +
	    evi['number'] + '. ' + evi['text'] +
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

function gen_index () {
    
   generate_another_index = 1;
    while (generate_another_index == 1) {
	length = 64;
	result = '';
	characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
	counter = 0;
	while (counter < length) {
	    result += characters.charAt(Math.floor(Math.random() * characters.length));
	    counter += 1;
	}
	// Check that the index isn't already in use before returning
	// result and repeat if it is
	if (! (result in pathdata.evidence)) {
	    generate_another_index = 0;
	}
    }
    
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

function steptype (step) {

    firstletter = step.substring(0, 1);

    if (firstletter == 'm' | firstletter == 'd') {
	// It's an M- or D-type step
	return 'vertical';
    } else {
	// It's a T-type step
	return 'horizontal';
    }
    
}

function stepprompt (step) {
    for (var nstep in prompts) {
	if (prompts[nstep].step == step) {
	    return(prompts[nstep].prompt);
	}
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
	showdialog('target-scenario');
	$('#target-scenario-text').val(pathdata.targetScenario);
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

    // Show evidence editor (insert new, button click)
    $('.edit-new-evidence').on('click', function() {
	showdialog('evidence-editor');
	step = $(this).parent().parent().data('step');
	$('#editor-evidence-step').val(step); // Update step
	$('.editor-evidence-stepname').html(stepname(step)); // Update user-facing step name in editor
	$('#editor-evidence-index').val(''); // Indicate that it's new evidence
	$('#evidence-editor-text').val(''); // Clear old text
	$('#evidence-editor-prompt-text').html(stepprompt(step)); // Show the prompt that's relevant for the step
	if (steptype(step) == "vertical") {
	    $('#evidence-editor-vertical-arrow-fields').slideDown();
	    $('#evidence-editor-horizontal-arrow-fields').slideUp();
	} else {
	    $('#evidence-editor-vertical-arrow-fields').slideUp();
	    $('#evidence-editor-horizontal-arrow-fields').slideDown();
	}
    });

    // Show evidence editor (insert new, arrow click)
    $('.path-evidence-box').on('click', function () {
	showdialog('evidence-editor');
	step = $(this).data('step');
	$('#editor-evidence-step').val(step); // Update step
	$('.editor-evidence-stepname').html(stepname(step)); // Update user-facing step name in editor
	$('#editor-evidence-index').val(''); // Indicate that it's new evidence
	$('#evidence-editor-text').val(''); // Clear old text
	$('#evidence-editor-prompt-text').html(stepprompt(step)); // Show the prompt that's relevant for the step
	if (steptype(step) == "vertical") {
	    $('#evidence-editor-vertical-arrow-fields').slideDown();
	    $('#evidence-editor-horizontal-arrow-fields').slideUp();
	} else {
	    $('#evidence-editor-vertical-arrow-fields').slideUp();
	    $('#evidence-editor-horizontal-arrow-fields').slideDown();
	}
    });

    // Show evidence editor (edit old)
    $('.evidence-block').on('click', '.edit-old-evidence', function(event) {
	showdialog('evidence-editor');
	step = $(this).parent().parent().parent().parent().parent().data('step');
	index = $(this).parent().parent().data('index');
	$('#editor-evidence-step').val(step); // Update step
	$('.editor-evidence-stepname').html(stepname(step)); // Update user-facing step name in editor
	$('#editor-evidence-index').val(index); // Indicate that it's new evidence
	$('#evidence-editor-text').val(pathdata.evidence[index].text); // Bring back old text
	$('#evidence-editor-prompt-text').html(stepprompt(step)); // Show the prompt that's relevant for the step
	if (steptype(step) == "vertical") {
	    $('#evidence-editor-vertical-arrow-fields').slideDown();
	    $('#evidence-editor-horizontal-arrow-fields').slideUp();
	} else {
	    $('#evidence-editor-vertical-arrow-fields').slideUp();
	    $('#evidence-editor-horizontal-arrow-fields').slideDown();
	}
    });
    
    // Show delete evidence dialog
    $('.evidence-block').on('click', '.delete-evidence', function(event) {
	showdialog('evidence-delete');
	step = $(this).parent().parent().parent().parent().parent().data('step');
	index = $(this).parent().parent().data('index');
	$('.delete-evidence-stepname').html(stepname(step)); // Update user-facing step name in dialog
	$('#delete-evidence-index').val(index); // Indicate index to be deleted
	$('#delete-evidence-text').html(pathdata.evidence[index].text); // Show text for reference
    });

    // Show evidence strength editor
    $('.edit-evidence-strength').on('click', function(event) {
	showdialog('evidence-strength');
	step = $(this).parent().parent().data('step');
	$('#evidence-strength-step').val(step);
	$('.evidence-strength-stepname').html(stepname(step));
	if (pathdata.strength.hasOwnProperty(step)) {
	    $('#evidence-strength-slider').val(pathdata.strength[step]);
	} else {
	    $('#evidence-strength-slider').val(1);	    
	}
	// Enable slider and confirm
	$('#evidence-strength-slider').attr('disabled', false);
	$('#confirm-evidence-strength').attr('disabled', false);
    });

    // Show evidence strength editor (arrow click)
    $('.path-arrow').on('click', function (event) {
	// Check whether there's any evidence
	step = $(this).data('step');
	var count_evidence = 0;
	for (var key in pathdata.evidence) {
	    if (step == pathdata.evidence[key].step) {
		count_evidence ++;
	    }
	}
	if (count_evidence > 0) { // There is evidence for this step
	    showdialog('evidence-strength');
	    $('#evidence-strength-step').val(step);
	    $('.evidence-strength-stepname').html(stepname(step));
	    if (pathdata.strength.hasOwnProperty(step)) {
		$('#evidence-strength-slider').val(pathdata.strength[step]);
	    } else {
		$('#evidence-strength-slider').val(1);	    
	    }
	    // Enable slider and confirm
	    $('#evidence-strength-slider').attr('disabled', false);
	    $('#confirm-evidence-strength').attr('disabled', false);
	} else { // No evidence for this step
	    showdialog('evidence-strength');
	    $('#evidence-strength-step').val(step);
	    $('.evidence-strength-stepname').html(stepname(step));
	    $('#evidence-strength-slider').val(1);
	    // Disable slider and confirm
	    $('#evidence-strength-slider').attr('disabled', true);
	    $('#confirm-evidence-strength').attr('disabled', true);   
	}
	
    });

    // Confirm evidence
    $('#confirm-evidence-editor').on('click', function(event) {
	if ($('#editor-evidence-index').val() == '') { // Inserting new evidence
	    newindex = gen_index(); // Index for new evidence entry
	    pathdata.evidence[newindex] = { // Add evidence to JSON object
		step: $('#editor-evidence-step').val(),
		text: $('#evidence-editor-text').val()
	    };
	} else { // Updating old evidence
	    index = $('#editor-evidence-index').val();
	    pathdata.evidence[index].text = $('#evidence-editor-text').val();
	}
	updatepage();
    });

    // Confirm delete
    $('#confirm-delete').on('click', function (event) {
	delete pathdata.evidence[$('#delete-evidence-index').val()];
	updatepage()
    });

    // Confirm strength
    $('#confirm-evidence-strength').on('click', function(event){
	pathdata.strength[$('#evidence-strength-step').val()] = $('#evidence-strength-slider').val();
	updatepage();
    });
    
    // Replace data with example or warn if there's already something there
    $('#view-example').on('click', function(event) {
	if (Object.keys(pathdata.evidence).length == 0 & Object.keys(pathdata.strength).length == 0 & pathdata.targetScenario == '' & Object.keys(pathdata.references).length == 0) {
	    $('.dialog-close-x').click();
	    pathdata = JSON.parse(ex_pathdata);
	    updatepage();
	} else {
	    showdialog('replace-with-example-path');
	}
    });

    // Replace data with example
    $('#confirm-replace-with-example').on('click', function(event) {
	pathdata = JSON.parse(ex_pathdata);
	updatepage();
    });

    // Show file selector and warn if this will replace existing data
    $('#open-json-file').on('click', function (event) {
	if (Object.keys(pathdata.evidence).length == 0 & Object.keys(pathdata.strength).length == 0 & pathdata.targetScenario == '' & Object.keys(pathdata.references).length == 0) {
	    showdialog('open-saved-json-path');
	    $('#open-saved-json-path div.alert').fadeOut();
	} else {
	    showdialog('open-saved-json-path');
	    $('#open-saved-json-path div.alert').fadeIn();
	}
    });

    // Read JSON from disk and replace PATH data in memory
    $('#confirm-replace-with-file-data').on('click', function(event) {
        let fr = new FileReader();
        fr.onload = function () {
	    pathdata = JSON.parse(fr.result);
	    updatepage();
        }
        fr.readAsText(document.getElementById('inputfile').files[0]);
    });

    $('#new-path-from-scratch').on('click', function(event) {
	if (Object.keys(pathdata.evidence).length == 0 & Object.keys(pathdata.strength).length == 0 & pathdata.targetScenario == '' & Object.keys(pathdata.references).length == 0) {
	    $('.dialog-close-x').click();
	} else {
	    showdialog('replace-with-empty-path');
	}
    });

    $('#confirm-replace-with-empty').on('click', function(event) {
	pathdata = {targetScenario:'', evidence:{}, strength:{}};
	updatepage();
	$('.path-arrow').removeClass('strength1');
    });
    
});
