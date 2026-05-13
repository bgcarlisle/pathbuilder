var pathdata = {targetScenario:'', evidence:{}, strength:{}, references:[], version:'1.1.0'};

var ex_pathdata = '{"targetScenario":"Antonib given to glioma patients will improve survival","evidence":{"dbsu56sc5urwhm2e7qkdb21g5nglibwjv68p21i08wy5xau37uxhgrl8iysv8nqq":{"step":"m0m1","text":"Antonib IC50 inhibition of XYZ is 2.2 nM.","number":1},"mzrqby4ahx3mb8e57gfoj4wfl6gwmnwirj159wgak1vhka8xmvlgp8r22c7c3e39":{"step":"m0m1","text":"In randomized xenograft glioma models (see #6 below), Antonib led to 157% lowered expression of a ZIP, a downstream target of XYZ.","number":2},"t0nrkkhvh4avh4ei6ymu8qu4pu4izpatnnvdka3tnpv9o5ilrpsu092lgoqqu36q":{"step":"t1","text":"Antonib crossed the blood brain barrier at a rate that was 20% more efficient than morphine.","number":3},"pnvd0ty6ne02o8xd45cikcivmc7t38plo7t9nwn1bco4rd2f1845bxv78qdg7l9a":{"step":"t1","text":"70% of tumours resected from glioma patients show of XYZ overexpression in blinded pathology studies.","number":4},"md3yuobbk8f8nq6k4fanwaojhs08p2s33q3z7hl5ipnw87t8qjfheq007dnlw56m":{"step":"t1","text":"Doses needed to achieve target inhibition in models, when scaled to patients, did not cause any SAEs in studies involving 20 patients.","number":5},"ig140acrkhehcy6bc0r58us7yp3fn7kzwtzulknwf40wuv99kuk4fp3ytc9zw86n":{"step":"m1m2","text":"Antonib given to 8 of 9 different types of glioma cell lines showed growth inhibition of 60% or more.","number":6},"btf1ktm4hrg9pnfnghxws0j8ibigxryjw584ifbxct87efqrff33bt0r1934bc53":{"step":"m1m2","text":"Randomized studies of Antonib in glioma-bearing orthotopic mice significantly shrank by 50% compared with temazolomide. Results \\twere reproduced three times.","number":7},"0ske55px2fw3to9bam25the8eobxa9gcktgi0oakj4jlbici3a754p9tmisof4i2":{"step":"m1m2","text":"Antonib given to patients with lung or colorectal cancers resulted in ≥ 40% objective response (tumour assessments were blinded).","number":8},"bh9kqyzxxz2w9ludzfsns9hc5xurrgcsokpb3ykb3aao6vefnqkuzqu522i8yao6":{"step":"t2","text":"Glioma-bearing orthotopic mice are sensitive, but not specific models for human glioma. Doses in this study were similar to those planned for this trial","number":9},"edxls0exi034nmjrw7deojk41e5z7vtjpr07vf2124v7y6pingcj0r3hcom46kda":{"step":"t2","text":"Lung and colorectal cancers are driven by XYZ over-activation. Doses used in the above (and present) trial were tolerable (5% of patients experienced serious adverse events)","number":10},"309jabx8zhp0bifob5h6htvrisz7en9mgm3d8gvzowfqu5b1d1xeivhjw40ylifr":{"step":"t2","text":"Glioma progression is driven by XYZ hyperactivation, as indicated by several independent studies showing knock-down of XYZ in glioma cells inhibits growth by 70% (p < .05).","number":11},"mbtzzrwt4ssekfz6yszybxkfwcdj2rnvd4zdk4sn0u1p6rgss6l7j2spnurs48ko":{"step":"t2","text":"Robustness of Antonib anti-tumour activity is suggested by achievement of significantly reduced tumour growth (>50% shrinkage) in randomized xenograft studies of three different cancers types.","number":12},"svau0g7xs8iigi5jjs9zaiuekixerysuifhq1plx7v9dls1ngs541nch8tc9unct":{"step":"m2m3","text":"Antonib significantly doubled survival in randomized, blinded studies of glioma xenograft mice.","number":13},"pcphcuwzlj9pdxrchtsvklk5t2hy9e8tmilsxn5s0l3b9106h1slkp244adicfkx":{"step":"t3","text":"Doses of Antonib in #12 matched those planned for this trial. The model is very sensitive but not very specific for predicting human response.","number":14},"7cvlksk1z7tvu8el2l5z9kgwkmwitemiiervba8my6msxm8k5b8nl2aznoefudz0":{"step":"d0d1","text":"Antonib significantly doubled XYZ phosphorylation in gliomas resected from patients in a phase 0 trial.","number":15},"7z0dju7qpjyzxyohpmytfkx7e70q7g9uomvrwg567x2w3leuoth00qgjzbliry07":{"step":"d1d2","text":"Antonib produced a partial response in one of two glioma patients in a phase 1 trial involving mixed cancers.","number":16},"bp76e7crn459o8fn1mdzb3amfrlf7k8gmhvs4jqgi5hjh7xfi2op47n3yi051xxp":{"step":"d2d3","text":"A meta-analysis of glioma trials showed tumour response was moderately but significantly correlated with increased overall survival (R²=0.4). ","number":17}},"strength":{"d0d1":"4","t1":"4","m0m1":"5","d1d2":"2","t2":"4","m1m2":"5","m2m3":"4","t3":"3","d2d3":"2"},"references":[],"version":"1.1.0"}';

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
	"prompt":"What evidence suggests that the drug target engagement / functional effects in models is recapitulated in the target patients such that evidence of the molecular effect of the drug is relevant to the target population?"
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

function getAllEvidenceFlat() {
    const rows = [];

    if (!pathdata?.evidence) return rows;

    // Index with references
    const refMap = {};

    if (Array.isArray(pathdata.references)) {
        pathdata.references.forEach(ref => {
            if (!ref) return;

            let eids = ref.evidence;

            if (typeof eids === "string") {
                eids = [eids];
            } else if (!Array.isArray(eids)) {
                return;
            }

            eids.forEach(eid => {
                if (!eid) return;

                if (!refMap[eid]) refMap[eid] = [];
                refMap[eid].push(ref);
            });
        });
    }

    // Flatten
    Object.entries(pathdata.evidence).forEach(([id, ev]) => {
        if (!ev) return;

        rows.push({
            id,
            step: ev.step || "",
            text: ev.text || "",
            number: ev.number ?? "",
            strength_assigned: parseInt(pathdata.strength?.[ev.step] || 0),

            meta: ev.meta || {},

            references: refMap[id] || []
        });
    });

    // Sort by number (ascending), missing values last
    rows.sort((a, b) => {
        const na = Number(a.number);
        const nb = Number(b.number);

        if (isNaN(na) && isNaN(nb)) return 0;
        if (isNaN(na)) return 1;
        if (isNaN(nb)) return -1;

        return na - nb;
    });

    return rows;
}

function deriveStrength(e) {
    
    if (!e?.text) return 0;
    
    let score = 0;

    if (steptype(e.step) == "vertical") {
	if (return_unique_matches(e.text, magnitude_regex).length > 0) score += 1;
	if (return_unique_matches(e.text, units_regex).length > 0) score += 1;
	if (return_unique_matches(e.text, precision_regex).length > 0) score += 1;
	if (return_unique_matches(e.text, comparator_regex).length > 0) score += 1;
	if (return_unique_matches(e.text, randomization_regex).length > 0) score += 1;
	if (return_unique_matches(e.text, masking_regex).length > 0) score += 1;
	if (return_unique_matches(e.text, preregistration_regex).length > 0) score += 1;
    }

    if (steptype(e.step) == "horizontal") {
	if (return_unique_matches(e.text, target_evidence_regex).length > 0) score += 1;
	if (return_unique_matches(e.text, construct_validity_regex).length > 0) score += 1;
	if (return_unique_matches(e.text, external_validity_regex).length > 0) score += 1;
	if (return_unique_matches(e.text, interfering_effects_regex).length > 0) score += 1;
	if (return_unique_matches(e.text, systematic_review_regex).length > 0) score += 1;
    }

    return Math.min(5, score);
}

let filters = {
    minStrength: 0,
    step: ""
};

function applyFilters(rows) {
    return rows.filter(r => {
        let derived = deriveStrength(r);
        if (derived < filters.minStrength) return false;
        if (filters.step && r.step !== filters.step) return false;
	if (filters.refs && r.references.length === 0) return false;

        return true;
    });
}

function renderTableView() {

    let rows = applyFilters(getAllEvidenceFlat());

    let html = `
    <table class="table table-bordered table-sm">
    <thead class="table-dark">
        <tr>
            <th>#</th>
            <th style="min-width: 60px;">Step</th>
            <th>Step strength</th>
            <th>Auto scoring</th>
            <th>Evidence</th>
            <th>Flags</th>
            <th>Edit</th>
        </tr>
    </thead><tbody>`;

    rows.forEach(r => {

        let derived = deriveStrength(r);
        let mismatch = Math.abs(derived - r.strength_assigned) >= 2;

        html += `
        <tr class="${mismatch ? 'table-warning ' : ''}${r.step}">
            <td>${r.number}</td>
            <td>${stepname(r.step)}</td>
            <td>${r.strength_assigned}</td>
            <td>${derived}</td>
            <td>${r.text}</td>
            <td>${renderFlags(r)}</td>
            <td>
                <button class="btn btn-sm btn-outline edit-old-evidence" data-step="${r.step}" data-index="${r.id}">
                    <svg width="12" height="12" fill="currentColor"><use href="images/bootstrap-icons.svg#pencil"/></svg>
                    Edit
                </button>
            </td>
        </tr>`;
    });

    html += "</tbody></table>";

    $("#table-view").html(html);
}

function renderRoB(r) {
    return [
        r.meta["randomization"] ? "R" : "",
        r.meta["masking"] ? "M" : "",
        r.meta["pre-registration"] ? "P" : ""
    ].filter(Boolean).join(" ");
}

function renderTypes(r) {
    return [
        r.meta["magnitude-of-effect"] ? "Mag" : "",
        r.meta["units-provided"] ? "Units" : "",
        r.meta["measure-precision"] ? "Prec" : "",
        r.meta["comparator"] ? "Comp" : ""
    ].filter(Boolean).join(", ");
}

function renderFlags(r) {
    let t = r.text.toLowerCase();
    let flags = [];

    if (t.includes("randomized")) flags.push("Rando");
    if (t.includes("blinded")) flags.push("Masked");
    if (t.includes("p <")) flags.push("Stat");
    if (t.includes("%")) flags.push("Effect");

    return flags.join(" ");
}

function scoreStep(step) {

    let ev = getAllEvidenceFlat().filter(e => e.step === step);
    if (ev.length === 0) return 0;

    let scores = ev.map(e => deriveStrength(e));

    return scores.reduce((a,b)=>a+b,0)/scores.length;
}

const PATHS = [
    ["m0m1","t1","d0d1","d1d2","d2d3"],
    ["m0m1","m1m2","t2","d1d2","d2d3"],
    ["m0m1","m1m2","m2m3","t3","d2d3"]
];

function renderAnalysis() {

    let ranked = PATHS.map(p => ({
        path: p,
        score: p.reduce((sum,s)=>sum+scoreStep(s),0)
    })).sort((a,b)=>b.score-a.score);

    let best = ranked[0];

    let html = `
    <div class="card">
    <div class="card-body">

    <h4>Most credible path</h4>
    <p class="fw-bold">${best.path.join(" → ")}</p>
    <p>Score: ${best.score.toFixed(2)}</p>

    <h5>Weak steps</h5>
    <ul>
        ${best.path
            .filter(s => scoreStep(s) < 3)
            .map(s => `<li>${s} (low evidence)</li>`)
            .join("")}
    </ul>

    </div>
    </div>`;

    $("#analysis-view").html(html);
}

function populateStepFilter() {

    let html = `<option value="">All</option>`;
    steps.forEach(s => {
        html += `<option value="${s}">${stepname(s)}</option>`;
    });

    $("#filter-step").html(html);
}

populateStepFilter();

$(document).on("click","#view-table",function(){
    $("#table-view").show();
    $("#analysis-view").hide();
    $("#evidence-view").hide();
    $("#table-controls").show();

    $(this).parent().children(".btn").removeClass("active");
    $(this).parent().children(".btn").removeClass("btn-primary");
    $(this).parent().children(".btn").addClass("btn-outline-primary");
    $(this).removeClass("btn-outline-primary");
    $(this).addClass("btn-primary");
    $(this).addClass("active");
    renderTableView();
});

$(document).on("click","#view-analysis",function(){
    $("#analysis-view").show();
    $("#table-view").hide();
    $("#evidence-view").hide();
    $("#table-controls").hide();

    $(this).parent().children(".btn").removeClass("active");
    $(this).parent().children(".btn").removeClass("btn-primary");
    $(this).parent().children(".btn").addClass("btn-outline-primary");
    $(this).removeClass("btn-outline-primary");
    $(this).addClass("btn-primary");
    $(this).addClass("active");
    renderAnalysis();
});

$(document).on("click","#view-editor",function(){
    $("#analysis-view").hide();
    $("#table-view").hide();
    $("#evidence-view").show();
    $("#table-controls").hide();

    $(this).parent().children(".btn").removeClass("active");
    $(this).parent().children(".btn").removeClass("btn-primary");
    $(this).parent().children(".btn").addClass("btn-outline-primary");
    $(this).removeClass("btn-outline-primary");
    $(this).addClass("btn-primary");
    $(this).addClass("active");
});

$(document).on("input","#filter-strength",function(){
    filters.minStrength = parseInt(this.value);
    renderTableView();
});

$(document).on("change","#filter-step",function(){
    filters.step = this.value;
    renderTableView();
});

$(document).on("change","#f-randomization",function(){
    filters.randomization = this.checked;
    renderTableView();
});

$(document).on("change","#f-comparator",function(){
    filters.comparator = this.checked;
    renderTableView();
});

$(document).on("change","#f-refs",function(){
    filters.refs = this.checked;
    renderTableView();
});

$(document).on("click",".audit-btn",function(){
    auditStrength($(this).data("step"));
});




function showdialog (dialogname) {
    if (! $('#pagemask').is(':hidden')) { // If the page mask is visible
	$('.dialog').slideUp(0);
    }
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

function removeDuplicates(arr) {
    return [...new Set(arr)];
}

function return_unique_matches(text, regexes) {
    var matches = [];
    for (var key in regexes) {
        regex_matches = text.matchAll(regexes[key]);
        for (var regex_match of regex_matches) {
            matches.push(regex_match[0]);
        }
    }
    // Remove duplicates
    return removeDuplicates(matches);
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
	    '<div class="evidence-instance" id="evidence-instance-' + key + '" data-index="' + key + '">' +
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
	    '<div class="evidence-references-section">Reference(s): ' +
	    '<span class="evidence-references-numbers"></span>' +
	    '</div>' +
	    '</div>'
	);
    }

    // Put evidence on the PATH figure and enable/disable strength of evidence sliders
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
	    $('#evidence-block-' + steps[nstep] + ' input.evidence-strength-slider').attr('disabled', true);
	    $('#evidence-block-' + steps[nstep] + ' input.evidence-strength-slider').val('1');
	    $('#arrow-' + steps[nstep]).removeClass('strength1 strength2 strength3 strength4 strength5');
	    $('#arrow-' + steps[nstep]).addClass('strength1');
	} else {
	    $('#evidence-block-' + steps[nstep] + ' input.evidence-strength-slider').attr('disabled', false);
	    if (pathdata.strength.hasOwnProperty(steps[nstep])) { // If the strength of evidence is set for this step
		$('#arrow-' + steps[nstep]).removeClass('strength1 strength2 strength3 strength4 strength5');
		$('#arrow-' + steps[nstep]).addClass('strength' + pathdata.strength[steps[nstep]]);
		$('#evidence-block-' + steps[nstep] + ' input.evidence-strength-slider').val(pathdata.strength[steps[nstep]]);
	    } else {
		$('#evidence-block-' + steps[nstep] + ' input.evidence-strength-slider').val('1');
		$('#arrow-' + steps[nstep]).removeClass('strength1');
	    }
	}
    }

    update_references();

}

function add_new_reference_by_doi (authors, title, journal, year, doi, evidence, doi_field, doi_field_feedback) {
    // Check that there isn't already one with an identical DOI

    ref_already_added = false;
    key_of_potential_dupe = '';
    for (var key in pathdata.references) {
	if (pathdata.references[key].doi == doi) {
	    ref_already_added = true;
	    key_of_potential_dupe = key;
	}
    }

    if (! ref_already_added) {
	if (evidence !== null) {
	    pathdata.references.push({
		authors: authors,
		title: title,
		journal: journal,
		year: year,
		doi: doi,
		published: true, // This will always be true for ones fetched by DOI
		evidence: [evidence]
	    });
	} else {
	    pathdata.references.push({
		authors: authors,
		title: title,
		journal: journal,
		year: year,
		doi: doi,
		published: true, // This will always be true for ones fetched by DOI
		evidence: []
	    });	    
	}

	update_references();

	$('.cancel-add-refs').click();
    } else {
	doi_field.addClass('is-invalid');
	doi_field_feedback.html('A reference with this DOI has already been added');
    }
    
}

function add_new_manual_reference (authors, title, journal, year, url, evidence) {
    // Check that there isn't already one with an identical DOI

    if (evidence !== null) {
	pathdata.references.push({
	    authors: authors,
	    title: title,
	    journal: journal,
	    year: year,
	    url: url,
	    published: false, // This will always be true for ones added manually
	    evidence: [evidence]
	});
    } else {
	pathdata.references.push({
	    authors: authors,
	    title: title,
	    journal: journal,
	    year: year,
	    url: url,
	    published: false, // This will always be true for ones added manually
	    evidence: []
	});	    
    }

    update_references();

    $('.cancel-add-refs').click();
    
}

function update_references () {
    // First, alphabetize by author
    pathdata.references.sort((a, b) => {
	return a.authors.localeCompare(b.authors);
    });

    // Then number the references
    counter = 1;
    for (var key in pathdata.references) {
	pathdata.references[key].number = counter;
	counter++
    }

    // Then add them to the text summary references section
    $('#references-block').find('.references-container').html('');
    for (var key in pathdata.references) {

	ref_in_steps = [];
	for (var ekey in pathdata.references[key].evidence) {
	    ref_in_steps.push(
		evidence_number(pathdata.references[key].evidence[ekey])
	    );
	}
	ref_in_steps.sort();
	refsteps = ref_in_steps.join(', ');

	if (refsteps != '') {
	    refsteps = 'Cited in PATH evidence: ' + refsteps;
	}

	if (pathdata.references[key].authors != '') {
	    authorref = '<span class="references-authors">' +
			pathdata.references[key].authors +
			'.</span> ';
	} else {
	    authorref = '';
	}

	if (pathdata.references[key].title != '') {
	    titleref = '<span class="references-title">' +
		       pathdata.references[key].title +
		       '.</span> ';
	} else {
	    titleref = '';
	}

	if (pathdata.references[key].journal != '') {
	    journalref = '<span class="references-journal">' +
			 pathdata.references[key].journal +
			 '.</span> ';
	} else {
	    journalref = '';
	}

	if (pathdata.references[key].year != '') {
	    yearref = '<span class="references-year">(' +
		      pathdata.references[key].year +
		      ')</span> ';
	} else {
	    yearref = '';
	}

	if (pathdata.references[key].published) {
	    extlink = '<span class="references-doi">DOI: <a href="' +
		      pathdata.references[key].doi +
		      '" target="_blank">' +
		      pathdata.references[key].doi +
		      '</a></span>'
	} else {

	    if (pathdata.references[key].url != '') {
		extlink = '<span class="references-doi">URL: <a href="' +
			  pathdata.references[key].url +
			  '" target="_blank">' +
			  pathdata.references[key].url +
			  '</a></span>'		
	    } else {
		extlink = '';
	    }
	    
	}
	
	$('#references-block').find('.references-container').append(
	    '<div class="reference-instance" data-key="' + key + '"><div>' +
	    '<div style="float: right; margin-left: 10px;"><button class="btn btn-sm btn-danger delete-reference">' +
	    '<svg width="12" height="12" fill="currentColor"><use href="images/bootstrap-icons.svg#backspace"/></svg> Delete' +
	    '</button></div>' +
	    '<span class="references-number">' +
	    pathdata.references[key].number +
	    '.</span> ' +
	    authorref +
	    titleref +
	    journalref +
	    yearref +
	    extlink +
	    '</div>' +
	    '<div class="ref-path-steps">' +
	    refsteps +
	    '</div>' +
	    '</div>'
	);
    }

    // Then add them to the evidence editor references section
    $('#references-in-editor-block').find('.references-container').html('');
    for (var key in pathdata.references) {

	refchecked = '';
	for (var ekey in pathdata.references[key].evidence) {
	    if ($('#editor-evidence-index').val() == pathdata.references[key].evidence[ekey]) {
		refchecked = ' checked';
	    }
	}

	if (pathdata.references[key].authors != '') {
	    authorref = '<span class="references-authors">' +
			pathdata.references[key].authors +
			'.</span> ';
	} else {
	    authorref = '';
	}
	
	if (pathdata.references[key].title != '') {
	    titleref = '<span class="references-title">' +
		       pathdata.references[key].title +
		       '.</span> ';
	} else {
	    titleref = '';
	}

	if (pathdata.references[key].journal != '') {
	    journalref = '<span class="references-journal">' +
			 pathdata.references[key].journal +
			 '.</span> ';
	} else {
	    journalref = '';
	}

	if (pathdata.references[key].year != '') {
	    yearref = '<span class="references-year">(' +
		      pathdata.references[key].year +
		      ')</span> ';
	} else {
	    yearref = '';
	}

	if (pathdata.references[key].published) {
	    extlink = '<span class="references-doi">DOI: <a href="' +
		      pathdata.references[key].doi +
		      '" target="_blank">' +
		      pathdata.references[key].doi +
		      '</a></span>'
	} else {

	    if (pathdata.references[key].url != '') {
		extlink = '<span class="references-doi">URL: <a href="' +
			  pathdata.references[key].url +
			  '" target="_blank">' +
			  pathdata.references[key].url +
			  '</a></span>'		
	    } else {
		extlink = '';
	    }
	    
	}
	
	$('#references-in-editor-block').find('.references-container').append(
	    '<div class="reference-instance">' +
	    '<label class="d-flex gap-2">' +
	    '<input class="form-check-input flex-shrink-0" type="checkbox" data-refkey="' + key + '" ' + refchecked + '>' +
	    '<span>' +
	    '<span class="references-number">' +
	    pathdata.references[key].number +
	    '.</span> ' +
	    authorref +
	    titleref+
	    journalref+
	    yearref+
	    extlink +
	    '</span></label>' +
	    '</div>'
	);
    }

    // Then add them to the text summary section evidence boxes
    $('.evidence-references-section').slideUp(0);
    $('.evidence-references-number-instance').remove();
    for (var key in pathdata.references) {
	for (var ekey in pathdata.references[key].evidence) {
	    console.log('#evidence-instance-' + pathdata.references[key].evidence[ekey] + ' .evidence-references-numbers');
	    $('#evidence-instance-' + pathdata.references[key].evidence[ekey] + ' .evidence-references-numbers').parent().slideDown(0);
	    $('#evidence-instance-' + pathdata.references[key].evidence[ekey] + ' .evidence-references-numbers').append(
		'<span class="evidence-references-number-instance">' +
		pathdata.references[key].number +
		'</span>'
	    );
	}
    }
    
    
}

function gen_index () {
    generate_another_index = 1;
    while (generate_another_index == 1) {
	// Make a random alphanumeric 64-character string
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

function return_matches (text, regexes) {
    var matches = [];
    for (var key in regexes) {
	regex_matches = text.matchAll(regexes[key]);
	for (var regex_match of regex_matches) {
	    matches.push(regex_match[0]);
	}
    }
    return(matches);
}

function evidence_number (evidence_key) {
    for (var key in pathdata.evidence) {
	if (key == evidence_key) {
	    return(pathdata.evidence[key].number);
	}
    }
}

async function export_as_svg () {

    const response = await fetch("export-svg.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams ({
            d0d1: $('#evidence-d0d1').html(),
	    d1d2: $('#evidence-d1d2').html(),
	    d2d3: $('#evidence-d2d3').html(),
            m0m1: $('#evidence-m0m1').html(),
	    m1m2: $('#evidence-m1m2').html(),
	    m2m3: $('#evidence-m2m3').html(),
            t1: $('#evidence-t1').html(),
	    t2: $('#evidence-t2').html(),
	    t3: $('#evidence-t3').html(),

	    d0d1_strength: $('#arrow-d0d1').attr("class").replace("path-arrow", ""),
	    d1d2_strength: $('#arrow-d1d2').attr("class").replace("path-arrow", ""),
	    d2d3_strength: $('#arrow-d2d3').attr("class").replace("path-arrow", ""),
	    m0m1_strength: $('#arrow-m0m1').attr("class").replace("path-arrow", ""),
	    m1m2_strength: $('#arrow-m1m2').attr("class").replace("path-arrow", ""),
	    m2m3_strength: $('#arrow-m2m3').attr("class").replace("path-arrow", ""),
	    t1_strength: $('#arrow-t1').attr("class").replace("path-arrow", ""),
	    t2_strength: $('#arrow-t2').attr("class").replace("path-arrow", ""),
	    t3_strength: $('#arrow-t3').attr("class").replace("path-arrow", "")
        })
    });

    if (!response.ok) {
        console.error("SVG download failed");
        return;
    }
    
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "path.svg";
    a.click();

    URL.revokeObjectURL(url);
    
}

async function export_as_md () {

    const response = await fetch("export-md.php", {
	method: "POST",
	headers: {
	    "Content-Type": "application/json"
	},
	body: JSON.stringify({ pd: pathdata })
    });

    if (!response.ok) {
        console.error("Markdown download failed");
        return;
    }
    
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "path.md";
    a.click();

    URL.revokeObjectURL(url);
    
}

async function export_as_docx () {

    const response = await fetch("export-docx.php", {
	method: "POST",
	headers: {
	    "Content-Type": "application/json"
	},
	body: JSON.stringify({ pd: pathdata })
    });

    if (!response.ok) {
        console.error("Word download failed");
        return;
    }
    
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "path.docx";
    a.click();

    URL.revokeObjectURL(url);
    
}

// Stuff to do when the page is loaded
$(document).ready(function() {

    // Show the startup dialog
    showdialog('startup');

    // Make the evidence draggable
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

    // Show save/export buttons
    $('#show-save-options').on('click', function(event) {
	showdialog('save-or-export');
    });
    // Populate the PATH guidances
    for (var guideno in pathguides) {
	// Add buttons to chooser
	$('#path-guide-options-container').append(
	    '<button class="btn btn-primary choose-guide" data-guideno="' + guideno + '">' +
	    pathguides[guideno]['guide_name'] +
	    '</button> '
	);
	// Add pages from guides as dialogs
	for (var pageno in pathguides[guideno]['pages']) {

	    // Put together all the page elements into a string
	    page_elements = '';
	    for (var elementno in pathguides[guideno]['pages'][pageno]['elements']) {
		element_type = pathguides[guideno]['pages'][pageno]['elements'][elementno]['element_type'];
		switch (element_type) {
		    case 'prompt':
			page_elements += '<p class="mb-3">';
			page_elements += pathguides[guideno]['pages'][pageno]['elements'][elementno]['element_details'];
			page_elements += '</p>';
			break;
		    case 'text':
			page_elements += '<div class="mb-3">';
			page_elements += '<label class="form-label" for="' + pathguides[guideno]['pages'][pageno]['elements'][elementno]['path_data_location'] + '">';
			page_elements += pathguides[guideno]['pages'][pageno]['elements'][elementno]['element_details'];
			page_elements += '</label>';
			page_elements += '<textarea id="' + pathguides[guideno]['pages'][pageno]['elements'][elementno]['path_data_location'] + '" class="form-control" rows="3"></textarea>';
			page_elements += '</div>';
			break;
		    case 'check':
			page_elements += '<div class="mb-3 list-group">';
			page_elements += '<label class="list-group-item d-flex gap-2">';
			page_elements += '<input class="form-check-input flex-shrink-0" type="checkbox" value="">';
			page_elements += '<span>' + pathguides[guideno]['pages'][pageno]['elements'][elementno]['element_details'] + '</span>';
			page_elements += '</label>';
			page_elements += '</div>';
			break;
		}
	    }
	    guide_pagination = '<div class="mb-3 text-center">';
	    count_pages_in_guide = 0;
	    for (var pageno2 in pathguides[guideno]['pages']) {
		count_pages_in_guide++;
		if (pageno != pageno2) {
		    guide_pagination += '<button class="btn btn-sm" onclick="showdialog(\'guide-' + guideno + '-' + pathguides[guideno]['pages'][pageno2]['page_no'] + '\');">' + pathguides[guideno]['pages'][pageno2]['page_no'] + '</button> '
		} else {
		    guide_pagination += '<button class="btn btn-sm" disabled>' + pathguides[guideno]['pages'][pageno2]['page_no'] + '</button> '
		}
	    }
	    guide_pagination += '</div>';

	    $('#guidance-pages-container').append(
		'<div class="dialog" id="guide-' + guideno + '-' + pathguides[guideno]['pages'][pageno]['page_no'] + '">' +
		'<button class="btn dialog-close-x dialog-close"><svg width="32" height="32" fill="currentColor"><use href="images/bootstrap-icons.svg#x"/></svg></button>' +
		'<h2>' + pathguides[guideno]['guide_name'] + '</h2>' +
		page_elements +
		guide_pagination +
		'</div>'
	    );
	}
	$('#guidance-pages-container').append(
	    '<div class="dialog">' +
	    '<button class="btn dialog-close-x dialog-close"><svg width="32" height="32" fill="currentColor"><use href="images/bootstrap-icons.svg#x"/></svg></button>' +
	    '</div>'
	);
    }
    $('#path-guide-options-container .choose-guide').on('click', function (event) {
	// Make the choose guide buttons clicky
	console.log($(this).data('guideno'));
	showdialog('guide-' + $(this).data('guideno') + '-' + 1);
    });
    $('').on('click', function(event) {
	// Make the navigation buttons in the guides clicky	
    });
    // End populating the PATH guidances

    // Add functionality for dismissing dialogs
    $('#pagemask, .dialog-close').on('click', function (event) {
	$('.dialog').slideUp(250, function () {
	    $('#pagemask').fadeOut(250);
	});
	$('.cancel-add-refs').click();
    });
    
    // Add functionality for dismissing dialogs with Esc key
    document.addEventListener('keyup', function (event) {
	if (! $('#pagemask').is(':hidden')) { // If the page mask is visible
	    if (event.keyCode == 27) { // Esc key pressed
		$('#pagemask').click(); // Hide all dialogs and page mask
	    }	    
	}
    });

    // Show PATH guidance chooser
    $('#choose-guide').on('click', function(event) {	
	showdialog('guide-chooser');
    });

    // Edit target scenario
    $('#edit-target-scenario').on('click', function(event) {
	showdialog('target-scenario');
	$('#target-scenario-text').val(pathdata.targetScenario);
    });

    // Confirm target scenario changes
    $('#confirm-target-scenario').on('click', function(event) {
	pathdata.targetScenario = $('#target-scenario textarea').val(); // Update the JSON object
	updatepage();
    });

    // Show evidence editor (insert new)
    $('.edit-new-evidence, .path-evidence-box').on('click', function() {
	showdialog('evidence-editor');
	step = $(this).parent().parent().data('step');
	if (typeof step === 'undefined') {
	    step = $(this).data('step');
	}
	newindex = gen_index();
	$('#editor-evidence-index').val(newindex);
	$('#editor-evidence-index-new').val('true');
	$('#editor-evidence-step').val(step); // Update step
	$('.editor-evidence-stepname').html(stepname(step)); // Update user-facing step name in editor
	$('#evidence-editor-text').val(''); // Clear old text
	$('#evidence-metadata-checkboxes').find('input[type=\'checkbox\']').prop('checked', false); // Clear checkboxes
	$('#evidence-editor-prompt-text').html(stepprompt(step)); // Show the prompt that's relevant for the step
	if (steptype(step) == "vertical") {
	    $('#evidence-editor-vertical-arrow-fields').slideDown();
	    $('#evidence-editor-horizontal-arrow-fields').slideUp();
	} else {
	    $('#evidence-editor-vertical-arrow-fields').slideUp();
	    $('#evidence-editor-horizontal-arrow-fields').slideDown();
	}
	$('#auto-analysis-report').slideUp();
	update_references();
    });

    // Show evidence editor (edit old)
    $('.evidence-block,#table-view').on('click', '.edit-old-evidence', function(event) {
	showdialog('evidence-editor');
	if ($(this).attr('data-index') !== undefined) {
	    index = $(this).data('index');
	} else {
	    index = $(this).parent().parent().data('index');
	}
	if ($(this).attr('data-step') !== undefined) {
	    step = $(this).data('step');
	} else {
	    step = $(this).parent().parent().parent().parent().parent().data('step');
	}
	$('#editor-evidence-index-new').val('false');
	$('#editor-evidence-step').val(step); // Update step
	$('.editor-evidence-stepname').html(stepname(step)); // Update user-facing step name in editor
	$('#editor-evidence-index').val(index); // Indicate that it's old evidence
	$('#evidence-editor-text').val(pathdata.evidence[index].text); // Bring back old text
	// Bring back the checks
	$('#evidence-metadata-checkboxes').find('input[type=\'checkbox\']').prop('checked', false); // Clear checkboxes
	if (typeof(pathdata.evidence[index].checks) != 'undefined') {
	    var checks = pathdata.evidence[index].checks;
	} else {
	    var checks = [];
	}
	$('#evidence-metadata-checkboxes').find('input[type=\'checkbox\']').each(function() {
	    if (checks.includes($(this).val())) {
		$(this).prop('checked', true);
	    }
	});
	$('#evidence-editor-prompt-text').html(stepprompt(step)); // Show the prompt that's relevant for the step
	if (steptype(step) == "vertical") {
	    $('#evidence-editor-vertical-arrow-fields').slideDown();
	    $('#evidence-editor-horizontal-arrow-fields').slideUp();
	} else {
	    $('#evidence-editor-vertical-arrow-fields').slideUp();
	    $('#evidence-editor-horizontal-arrow-fields').slideDown();
	}
	$('#auto-analysis-report').slideUp();
	update_references();
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

    // Show delete reference dialog
    $('#references-block').on('click', '.delete-reference', function(event) {

	console.log('yes');

	key = $(this).parent().parent().parent().data('key');

	
	if (pathdata.references[key].authors != '') {
	    authorref = '<span class="references-authors">' +
			pathdata.references[key].authors +
			'.</span> ';
	} else {
	    authorref = '';
	}

	if (pathdata.references[key].title != '') {
	    titleref = '<span class="references-title">' +
		       pathdata.references[key].title +
		       '.</span> ';
	} else {
	    titleref = '';
	}

	if (pathdata.references[key].journal != '') {
	    journalref = '<span class="references-journal">' +
			 pathdata.references[key].journal +
			 '.</span> ';
	} else {
	    journalref = '';
	}

	if (pathdata.references[key].year != '') {
	    yearref = '<span class="references-year">(' +
		      pathdata.references[key].year +
		      ')</span> ';
	} else {
	    yearref = '';
	}

	if (pathdata.references[key].published) {
	    extlink = '<span class="references-doi">DOI: <a href="' +
		      pathdata.references[key].doi +
		      '" target="_blank">' +
		      pathdata.references[key].doi +
		      '</a></span>'
	} else {

	    if (pathdata.references[key].url != '') {
		extlink = '<span class="references-doi">URL: <a href="' +
			  pathdata.references[key].url +
			  '" target="_blank">' +
			  pathdata.references[key].url +
			  '</a></span>'		
	    } else {
		extlink = '';
	    }
	    
	}
	
	$('#delete-reference-text').html(
	    '<span class="references-number">' +
	    pathdata.references[key].number +
	    '.</span> ' +
	    authorref +
	    titleref +
	    journalref +
	    yearref +
	    extlink
	);

	$('#delete-reference-key').val(key);
	
	showdialog('reference-delete');
    });

    // Show evidence strength editor (arrow click)
    $('.path-arrow').on('click', function (event) {
	step = $(this).data('step');
	// Check which view is visible
	// If in evidence editor view
	if ($('#evidence-view').is(':visible')) {	    
	    $('html, body').animate({
		scrollTop: $('#evidence-block-' + step).offset().top - 10
	    }, 500);
	    $('#evidence-block-' + step + ' h3').addClass('highlight');
	    setTimeout(() => {
		$('h3').removeClass('highlight');
	    }, 1500)
	}
	// If in table view
	if ($('#table-view').is(':visible')) {
	    // Check that there is at least one row for that step
	    if ($('tr.' + step).length) {
		$('html, body').animate({
		    scrollTop: $('tr.' + step).first().offset().top - 10
		}, 500);
		$('tr.' + step).addClass('highlight-row');
		setTimeout(() => {
		    $('tr').removeClass('highlight-row');
		}, 1500)
	    }
	}
    });

    // Confirm evidence
    $('#confirm-evidence-editor').on('click', function(event) {
	// Get all the checkboxes
	var checks = [];
	$('#evidence-metadata-checkboxes').find('input[type=\'checkbox\']:checked:visible').each(function () {
	    checks.push($(this).val());
	});
	
	index = $('#editor-evidence-index').val(); // Index for new evidence entry
	if ($('#editor-evidence-index-new').val() == 'true') { // Inserting new evidence
	    if (checks.length > 0) {
		pathdata.evidence[index] = { // Add evidence to JSON object
		    step: $('#editor-evidence-step').val(),
		    text: $('#evidence-editor-text').val(),
		    checks: checks
		};
	    } else {
		pathdata.evidence[index] = { // Add evidence to JSON object
		    step: $('#editor-evidence-step').val(),
		    text: $('#evidence-editor-text').val()
		};
	    }
	} else { // Updating old evidence
	    if (checks.length > 0) {
		pathdata.evidence[index].text = $('#evidence-editor-text').val();
		pathdata.evidence[index].checks = checks;
	    } else {
		index = $('#editor-evidence-index').val();
		pathdata.evidence[index].text = $('#evidence-editor-text').val();
		delete pathdata.evidence[index].checks;
	    }
	}

	// Add the evidence key to all the checked references
	$('#references-in-editor-block .form-check-input').each(function() {
	    if ($(this).is(':checked')) {
		// If it's checked, make sure that the evidence key is is the references array
		if (! pathdata.references[$(this).data('refkey')].evidence.includes(index)) {
		    pathdata.references[$(this).data('refkey')].evidence.push(index);
		}
	    } else {
		if (pathdata.references[$(this).data('refkey')].evidence.includes(index)) {
		    pathdata.references[$(this).data('refkey')].evidence = pathdata.references[$(this).data('refkey')].evidence.filter(i => i !== index);
		}
	    }
	});
	
	updatepage();
    });

    // Confirm delete
    $('#confirm-delete').on('click', function (event) {
	delete pathdata.evidence[$('#delete-evidence-index').val()];
	updatepage()
    });

    // Confirm delete reference
    $('#confirm-delete-ref').on('click', function (event) {
	delete pathdata.references[$('#delete-reference-key').val()];
	updatepage()
    });

    // Save strength on slider change
    $('.evidence-strength-slider').on('input', function(event){
	step = $(this).parent().parent().data('step');
	strength = $('#evidence-block-' + step + ' .evidence-strength-slider').val();
	pathdata.strength[step] = strength;
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
	$('#view-editor').click();
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
	$('#view-editor').click();
        let fr = new FileReader();
        fr.onload = function () {
	    pathdata = JSON.parse(fr.result);
	    updatepage();
        }
        fr.readAsText(document.getElementById('inputfile').files[0]);
    });

    $('#new-path-from-scratch').on('click', function(event) {
	$('#view-editor').click();
	if (Object.keys(pathdata.evidence).length == 0 & Object.keys(pathdata.strength).length == 0 & pathdata.targetScenario == '' & Object.keys(pathdata.references).length == 0) {
	    $('.dialog-close-x').click();
	} else {
	    showdialog('replace-with-empty-path');
	}
    });

    $('#confirm-replace-with-empty').on('click', function(event) {
	pathdata = {targetScenario:'', evidence:{}, strength:{}, references:[], version:'1.1.0'};
	updatepage();
	$('.path-arrow').removeClass('strength1');
    });

    // Auto-analyze evidence
    $('.auto-analyze-evidence').on('click', function (event) {
	evidence_text = $('#evidence-editor-text').val();
	
	// Clear previous results
	$('#auto-analysis-report').html('').slideUp();
	
	// Get the current step type
	var step = $('#editor-evidence-step').val();
	var step_type = steptype(step);
	
	var report_html = '<div class="auto-analysis-results"><h5>Auto-Analysis Results</h5>';
	var indicators_found = false;
	
	// Function to check if a box is checked but no indicators found
	function checkMissingIndicator(checkboxValue, categoryName, matches, autoCheck = false) {
            var isChecked = $('#evidence-metadata-checkboxes input[value="' + checkboxValue + '"]').is(':checked');
            var hasIndicators = matches && matches.length > 0;
            
            if (autoCheck && hasIndicators) {
		// Auto-check the box if indicators found
		$('#evidence-metadata-checkboxes input[value="' + checkboxValue + '"]').prop('checked', true);
		return { found: true, warning: false };
            }
            
            if (isChecked && !hasIndicators) {
		// Box is checked but no indicators found - warning needed
		return { found: false, warning: true };
            }
            
            if (hasIndicators && !isChecked) {
		// Indicators found but box not checked - auto-check it
		$('#evidence-metadata-checkboxes input[value="' + checkboxValue + '"]').prop('checked', true);
		return { found: true, warning: false };
            }
            
            return { found: hasIndicators, warning: false };
	}
	
	// Always check precision and comparator for vertical steps
	if (step_type == 'vertical') {
            // Precision analysis - USE UNIQUE MATCHES
            var precision_matches = return_unique_matches(evidence_text, precision_regex);
            var precision_result = checkMissingIndicator('measure-precision', 'Precision', precision_matches, true);
            if (precision_result.found) {
		indicators_found = true;
		report_html += '<div class="mb-2"><strong>Precision indicators found:</strong><br>';
		for (var key in precision_matches) {
                    report_html += '<span class="badge bg-primary me-1 mb-1">' + precision_matches[key] + '</span>';
		}
		report_html += '</div>';
            } else if (precision_result.warning) {
		report_html += '<div class="mb-2 alert alert-warning"><strong>⚠️ Warning:</strong> "Precision around estimate" box is checked but no precision indicators found in the text. Consider adding p-values, confidence intervals, or statistical measures.</div>';
            }
            
            // Comparator analysis - USE UNIQUE MATCHES
            var comparator_matches = return_unique_matches(evidence_text, comparator_regex);
            var comparator_result = checkMissingIndicator('comparator', 'Comparator', comparator_matches, true);
            if (comparator_result.found) {
		indicators_found = true;
		report_html += '<div class="mb-2"><strong>Comparator indicators found:</strong><br>';
		for (var key in comparator_matches) {
                    report_html += '<span class="badge bg-primary me-1 mb-1">' + comparator_matches[key] + '</span>';
		}
		report_html += '</div>';
            } else if (comparator_result.warning) {
		report_html += '<div class="mb-2 alert alert-warning"><strong>⚠️ Warning:</strong> "Comparator" box is checked but no comparator indicators found. Consider adding "compared to", "versus", "placebo", "control group", etc.</div>';
            }
            
            // Randomization analysis - USE UNIQUE MATCHES
            var randomization_matches = return_unique_matches(evidence_text, randomization_regex);
            var randomization_result = checkMissingIndicator('randomization', 'Randomization', randomization_matches, true);
            if (randomization_result.found) {
		indicators_found = true;
		report_html += '<div class="mb-2"><strong>Randomization indicators found:</strong><br>';
		for (var key in randomization_matches) {
                    report_html += '<span class="badge bg-primary me-1 mb-1">' + randomization_matches[key] + '</span>';
		}
		report_html += '</div>';
            } else if (randomization_result.warning) {
		report_html += '<div class="mb-2 alert alert-warning"><strong>⚠️ Warning:</strong> "Randomization" box is checked but no randomization indicators found. Consider adding "randomized", "random assignment", "RCT", etc.</div>';
            }
            
            // Masking analysis - USE UNIQUE MATCHES
            var masking_matches = return_unique_matches(evidence_text, masking_regex);
            var masking_result = checkMissingIndicator('masking', 'Masking', masking_matches, true);
            if (masking_result.found) {
		indicators_found = true;
		report_html += '<div class="mb-2"><strong>Masking/blinding indicators found:</strong><br>';
		for (var key in masking_matches) {
                    report_html += '<span class="badge bg-primary me-1 mb-1">' + masking_matches[key] + '</span>';
		}
		report_html += '</div>';
            } else if (masking_result.warning) {
		report_html += '<div class="mb-2 alert alert-warning"><strong>⚠️ Warning:</strong> "Masking" box is checked but no masking indicators found. Consider adding "blinded", "masked", "double-blind", etc.</div>';
            }
            
            // Pre-registration analysis - USE UNIQUE MATCHES
            var preregistration_matches = return_unique_matches(evidence_text, preregistration_regex);
            var preregistration_result = checkMissingIndicator('pre-registration', 'Pre-registration', preregistration_matches, true);
            if (preregistration_result.found) {
		indicators_found = true;
		report_html += '<div class="mb-2"><strong>Pre-registration indicators found:</strong><br>';
		for (var key in preregistration_matches) {
                    report_html += '<span class="badge bg-primary me-1 mb-1">' + preregistration_matches[key] + '</span>';
		}
		report_html += '</div>';
            } else if (preregistration_result.warning) {
		report_html += '<div class="mb-2 alert alert-warning"><strong>⚠️ Warning:</strong> "Pre-registration" box is checked but no pre-registration indicators found. Consider adding "pre-registered", "clinicaltrials.gov", "registered protocol", etc.</div>';
            }
            
            // Magnitude of effect analysis - USE UNIQUE MATCHES
            var magnitude_matches = return_unique_matches(evidence_text, magnitude_regex);
            var magnitude_result = checkMissingIndicator('magnitude-of-effect', 'Magnitude of effect', magnitude_matches, true);
            if (magnitude_result.found) {
		indicators_found = true;
		report_html += '<div class="mb-2"><strong>Magnitude of effect indicators found:</strong><br>';
		for (var key in magnitude_matches) {
                    report_html += '<span class="badge bg-primary me-1 mb-1">' + magnitude_matches[key] + '</span>';
		}
		report_html += '</div>';
            } else if (magnitude_result.warning) {
		report_html += '<div class="mb-2 alert alert-warning"><strong>⚠️ Warning:</strong> "Magnitude of effect" box is checked but no magnitude indicators found. Consider adding effect sizes, HR/OR/RR values, or percentage changes.</div>';
            }
            
            // Units provided analysis - USE UNIQUE MATCHES
            var units_matches = return_unique_matches(evidence_text, units_regex);
            var units_result = checkMissingIndicator('units-provided', 'Units provided', units_matches, true);
            if (units_result.found) {
		indicators_found = true;
		report_html += '<div class="mb-2"><strong>Units provided indicators found:</strong><br>';
		for (var key in units_matches) {
                    report_html += '<span class="badge bg-primary me-1 mb-1">' + units_matches[key] + '</span>';
		}
		report_html += '</div>';
            } else if (units_result.warning) {
		report_html += '<div class="mb-2 alert alert-warning"><strong>⚠️ Warning:</strong> "Units provided" box is checked but no unit indicators found. Consider adding measurement units (mg, mL, %), statistical measures (HR, OR), or time units.</div>';
            }
            
	} else if (step_type == 'horizontal') {
            // Horizontal step analyses - ALL USE UNIQUE MATCHES
            
            // Target evidence analysis
            var target_matches = return_unique_matches(evidence_text, target_evidence_regex);
            var target_result = checkMissingIndicator('target-present', 'Target evidence', target_matches, true);
            if (target_result.found) {
		indicators_found = true;
		report_html += '<div class="mb-2"><strong>Target evidence indicators found:</strong><br>';
		for (var key in target_matches) {
                    report_html += '<span class="badge bg-primary me-1 mb-1">' + target_matches[key] + '</span>';
		}
		report_html += '</div>';
            } else if (target_result.warning) {
		report_html += '<div class="mb-2 alert alert-warning"><strong>⚠️ Warning:</strong> "Target evidence" box is checked but no target indicators found. Consider adding "target expression", "biomarker present", "receptor expressed", etc.</div>';
            }
            
            // Construct validity analysis
            var construct_matches = return_unique_matches(evidence_text, construct_validity_regex);
            var construct_result = checkMissingIndicator('construct-validity', 'Construct validity', construct_matches, true);
            if (construct_result.found) {
		indicators_found = true;
		report_html += '<div class="mb-2"><strong>Construct validity indicators found:</strong><br>';
		for (var key in construct_matches) {
                    report_html += '<span class="badge bg-primary me-1 mb-1">' + construct_matches[key] + '</span>';
		}
		report_html += '</div>';
            } else if (construct_result.warning) {
		report_html += '<div class="mb-2 alert alert-warning"><strong>⚠️ Warning:</strong> "Construct validity" box is checked but no construct validity indicators found. Consider adding "construct validity", "similar mechanism", "conserved pathway", "model validation", etc.</div>';
            }
            
            // External validity analysis
            var external_matches = return_unique_matches(evidence_text, external_validity_regex);
            var external_result = checkMissingIndicator('external-validity', 'External validity', external_matches, true);
            if (external_result.found) {
		indicators_found = true;
		report_html += '<div class="mb-2"><strong>External validity indicators found:</strong><br>';
		for (var key in external_matches) {
                    report_html += '<span class="badge bg-primary me-1 mb-1">' + external_matches[key] + '</span>';
		}
		report_html += '</div>';
            } else if (external_result.warning) {
		report_html += '<div class="mb-2 alert alert-warning"><strong>⚠️ Warning:</strong> "External validity" box is checked but no external validity indicators found. Consider adding "replicated", "multiple models", "cross-species", "independent validation", etc.</div>';
            }
            
            // Interfering effects analysis
            var interfering_matches = return_unique_matches(evidence_text, interfering_effects_regex);
            var interfering_result = checkMissingIndicator('interfering-effects', 'Interfering effects', interfering_matches, true);
            if (interfering_result.found) {
		indicators_found = true;
		report_html += '<div class="mb-2"><strong>Interfering effects indicators found:</strong><br>';
		for (var key in interfering_matches) {
                    report_html += '<span class="badge bg-primary me-1 mb-1">' + interfering_matches[key] + '</span>';
		}
		report_html += '</div>';
            } else if (interfering_result.warning) {
		report_html += '<div class="mb-2 alert alert-warning"><strong>⚠️ Warning:</strong> "Interfering effects" box is checked but no interfering effects indicators found. Consider adding "no interfering effects", "well-tolerated", "no confounding factors", "no adverse effects", etc.</div>';
            }
            
            // Systematic review analysis
            var systematic_matches = return_unique_matches(evidence_text, systematic_review_regex);
            var systematic_result = checkMissingIndicator('systematic-review', 'Systematic review', systematic_matches, true);
            if (systematic_result.found) {
		indicators_found = true;
		report_html += '<div class="mb-2"><strong>Systematic review indicators found:</strong><br>';
		for (var key in systematic_matches) {
                    report_html += '<span class="badge bg-primary me-1 mb-1">' + systematic_matches[key] + '</span>';
		}
		report_html += '</div>';
            } else if (systematic_result.warning) {
		report_html += '<div class="mb-2 alert alert-warning"><strong>⚠️ Warning:</strong> "Systematic review" box is checked but no systematic review indicators found. Consider adding "systematic review", "meta-analysis", "literature review", "evidence synthesis", etc.</div>';
            }
	}
	
	report_html += '</div>';
	
	if (indicators_found) {
            $('#auto-analysis-report').html(report_html).slideDown();
	} else {
            // Enhanced feedback when no indicators are found
            var step_name = stepname(step);
            var feedback_message = '<div class="alert alert-info">';
            feedback_message += '<h6>No specific evidence indicators found</h6>';
            feedback_message += '<p class="mb-2">The auto-analysis didn\'t detect any specific patterns for <strong>' + step_name + '</strong>.</p>';
            
            // Add specific suggestions based on step type
            if (step_type == 'vertical') {
		feedback_message += '<p class="mb-1"><strong>Suggestions for ' + step_name + ':</strong></p>';
		feedback_message += '<ul class="mb-2">';
		feedback_message += '<li>Include specific numbers with units (e.g., "20 mg/kg", "50% reduction")</li>';
		feedback_message += '<li>Add statistical measures (e.g., "HR = 0.75", "p < 0.05", "95% CI: 0.6-0.9")</li>';
		feedback_message += '<li>Mention comparators (e.g., "compared to placebo", "versus control group")</li>';
		feedback_message += '<li>Include study design details (e.g., "randomized", "blinded", "pre-registered")</li>';
		feedback_message += '</ul>';
            } else if (step_type == 'horizontal') {
		feedback_message += '<p class="mb-1"><strong>Suggestions for ' + step_name + ':</strong></p>';
		feedback_message += '<ul class="mb-2">';
		feedback_message += '<li>Mention target/biomarker expression in patients (e.g., "target present in 70% of tumors")</li>';
		feedback_message += '<li>Describe model validity (e.g., "similar mechanism", "conserved pathway")</li>';
		feedback_message += '<li>Include replication evidence (e.g., "replicated in multiple models", "external validation")</li>';
		feedback_message += '<li>Address potential confounders (e.g., "no interfering effects", "well-tolerated")</li>';
		feedback_message += '<li>Reference systematic reviews (e.g., "systematic review shows", "meta-analysis found")</li>';
		feedback_message += '</ul>';
            }
            
            feedback_message += '<p class="mb-0"><small>You can still save this evidence and manually check the relevant boxes below.</small></p>';
            feedback_message += '</div>';
            
            $('#auto-analysis-report').html(feedback_message).slideDown();
	}
    }); // End of auto-analyze evidence

    $('.edit-new-reference-doi').on('click', function(event) {
	$(this).parent().children('.add-refs-buttons').slideUp();
	$(this).parent().children('.add-ref-by-doi').slideDown();
    });

    $('.edit-new-reference-manual').on('click', function(event) {
	$(this).parent().children('.add-refs-buttons').slideUp();
	$(this).parent().children('.add-ref-manual').slideDown();
    });

    $('.cancel-add-refs').on('click', function(event) {
	$(this).parent().parent().children('.add-ref-space').slideUp();
	$(this).parent().parent().children('.add-refs-buttons').slideDown();
	$(this).parent().find('.doi-to-look-up').val('');
	$(this).parent().find('.doi-to-look-up').removeClass('is-invalid');
	$(this).parent().find('.doi-to-look-up-feedback').html('');
	$(this).parent().parent().find('.add-ref-manual input').val('');
    });

    $('.do-doi-lookup').on('click', function (event) {

	doi_field = $(this).parent().find('.doi-to-look-up');
	doi_field_feedback = $(this).parent().find('.doi-to-look-up-feedback');
	doi_to_look_up = doi_field.val();
	if ($('#evidence-editor').is(":visible")) {
	    index = $('#editor-evidence-index').val();
	} else {
	    index = null;
	}

	if (doi_to_look_up != '') {
	    
	    $.ajax ({
		url: 'crossref.php',
		type: 'post',
		data: {
		    doi: doi_to_look_up
		},
		dataType: 'html'
	    }).done ( function (response) {
		response_json = JSON.parse(response);

		if (response_json.status == "success") {
		    add_new_reference_by_doi(
			response_json.authors,
			response_json.title,
			response_json.journal,
			response_json.year,
			response_json.doi,
			index,
			doi_field,
			doi_field_feedback
		    );
		} else {
		    // What to do in case of error
		    doi_field.addClass('is-invalid');
		    doi_field_feedback.html('Failure to look up provided DOI');
		}
		
	    });
	    
	} else {
	    doi_field.addClass('is-invalid');
	    doi_field_feedback.html('Please enter a DOI');
	}

    });

    $('.add-manual-reference').on('click', function (event) {

	authors_field = $(this).parent().find('.manual-ref-authors');
	title_field = $(this).parent().find('.manual-ref-title');
	journal_field = $(this).parent().find('.manual-ref-journal');
	year_field = $(this).parent().find('.manual-ref-year');
	url_field = $(this).parent().find('.manual-ref-url');

	if ($('#evidence-editor').is(":visible")) {
	    index = $('#editor-evidence-index').val();
	} else {
	    index = null;
	}
	
	add_new_manual_reference(
	    authors_field.val(),
	    title_field.val(),
	    journal_field.val(),
	    year_field.val(),
	    url_field.val(),
	    index
	);
	
    });
    
});
