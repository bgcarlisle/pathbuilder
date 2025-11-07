<!doctype html>
<html lang="en">
    <head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>PATH Builder</title>
	<link rel="stylesheet" href="bootstrap-5.3.3-dist/css/bootstrap.min.css">
	<style>
	 @font-face {
	     font-family: 'Atkinson Hyperlegible';
	     src: url('font/Atkinson-Hyperlegible-Regular-102a.woff2') format('woff2'),
	     url('font/Atkinson-Hyperlegible-Regular-102.woff') format('woff');
	     font-weight: normal;
	     font-style: normal;
	 }
	 @font-face {
	     font-family: 'Atkinson Hyperlegible';
	     src: url('font/Atkinson-Hyperlegible-Bold-102a.woff2') format('woff2'),
	     url('font/Atkinson-Hyperlegible-Bold-102.woff') format('woff');
	     font-weight: bold;
	     font-style: normal;
	 }
	 body {
	     font-family: 'Atkinson Hyperlegible';
	     font-weight: 400;
	 }
	 h1,h2,h3,h4,h5,h6 {
	     color: #423629;
	     font-weight: 600;
	 }
	 .subtitle {
	     font-size: 50%;
	     font-weight: 400;
	 }
	 #pagemask {
	     position: fixed;
	     top: 0;
	     z-index: 1999;
	     width: 100%;
	     height: 100%;
	     background: #000;
	     opacity: 0.5;
	 }
	 .dialog {
	     display: none;
	     width: 50%;
	     margin: 5% 25%;
	     border: 1px solid #666;
	     background: #fff;
	     position: fixed;
	     padding: 20px;
	     z-index: 2000;
	     height: 70%;
	     overflow-y: scroll;
	 }
	 @media (max-width: 900px) {
	     .dialog {
		 margin: 5% 5%;
		 width: 90%;
		 height: 80%;
	     }
	 }
	 .dialog-close-x {
	     float: right;
	     padding: 0;
	     border: none;
	 }
	 .titlebar {
	     color: #fff;
	     background: #423629;
	     border-bottom: 10px solid #89b6a5;
	     margin-bottom: 20px;
	     padding-top: 10px;
	 }
	 .titlebar h1 {
	     color: #fff;
	 }
	 .titlebar button {
	     color: #fff;
	     float: right;
	 }
	 .btn-primary, .btn-primary:hover, .btn-primary:active, .btn-primary:visited, .badge-primary {
	     background-color: #423629 !important;
	 }
	 .btn {
	     border-color: #423629 !important;
	 }
	 .evidence-space,.references-space {
	     padding: 10px;
	     background-color: #ddd;
	     margin-bottom: 40px;
	 }
	 .evidence-container,.references-container {
	     min-height: 40px;
	     margin-bottom: 10px;
	 }
	 .evidence-instance {
	     background-color: #ddd;
	     border: 1px solid #fff;
	     padding: 8px 10px;
	     margin-bottom: 10px;
	     min-height: 100px;
	 }
	 .reference-instance {
	     background-color: #ddd;
	     border: 1px solid #fff;
	     padding: 8px 10px;
	     margin-bottom: 10px;
	 }
	 .evidence-placeholder,.reference-placeholder {
	     min-height: 100px;
	     margin-bottom: 10px;
	     border: 5px dashed #fff;
	 }
	 .evidence-instance-grip,.reference-instance-grip {
	     fill: #333;
	     margin-right: 20px;
	 }
	 #path-figure-container {
	     padding-top: 20px;
	     padding-bottom: 80px;
	 }
	 .edit-evidence-strength {
	     display: none;
	 }
	 .add-ref-by-doi {
	     display: none;
	 }
	 .references-title {
	     font-style: italic;
	 }
	 .ref-path-steps {
	     font-size: small;
	     margin-top: 5px;
	 }
	 .evidence-references-section {
	     font-size: small;
	     margin-top: 5px;
	 }
	 .evidence-references-number-instance {
	     margin: 0 3px;
	 }
	 /* Beginning of PATH figure styles */
	 #pathfigure {
	     padding: 2%;
	     border: 1px solid #666;
	     width: 100%;
	     margin-bottom: 20px;
	 }
	 .path-arrow {
	     fill: #666;
	     stroke: #333;
	 }
	 .strength1 {
	     fill: #ff0000;
	 }
	 .strength2 {
	     fill: #ff8000;
	 }
	 .strength3 {
	     fill: #ffff38;
	 }
	 .strength4 {
	     fill: #bbe33d;
	 }
	 .strength5 {
	     fill: #127622;
	 }
	 .path-step-label {
	     font-size: 16px;
	     fill: #000;
	 }
	 .top-box-text {
	     fill: #fff;
	 }
	 .path-evidence-box {
	     fill: #ddd;
	 }
	 .path-evidence-text {
	     fill: #000;
	     font-size: 14px;
	 }
	 /* End of PATH figure styles */
	</style>
    </head>
    <body>
	<div id="pagemask"></div>
	<!-- Start of dialog boxes -->
	<div id="startup" class="dialog">
	    <button class="btn dialog-close-x dialog-close">
		<svg width="32" height="32" fill="currentColor">
		    <use href="images/bootstrap-icons.svg#x"/>
		</svg>
	    </button>
	    <h2>Welcome to PATH Builder</h2>
	    <p>PATH (Preclinical Assessment of Translation to Humans) is a structured approach for presenting a comprehensive, accurate and transparent scientific rationale for early phase clinical trials and innovative care. Read <a href="https://doi.org/10.1016/j.medj.2024.07.014">the PATH paper (Kimmelman et al, 2024)</a> for a detailed rationale and worked examples.</p>
	    <div class="d-grid gap-2">
		<button class="btn btn-primary" id="new-path-from-scratch">
		    <svg width="32" height="32" fill="currentColor">
			<use href="images/bootstrap-icons.svg#file-earmark-plus"/>
		    </svg>
		    Start a new PATH from scratch
		</button>
		<button class="btn btn-primary" id="view-example">
		    <svg width="32" height="32" fill="currentColor">
			<use href="images/bootstrap-icons.svg#easel"/>
		    </svg>
		    View an example PATH
		</button>
		<button class="btn btn-primary" disabled>
		    <svg width="32" height="32" fill="currentColor">
			<use href="images/bootstrap-icons.svg#person-raised-hand"/>
		    </svg>
		    Start a new PATH with guidance
		</button>
		<button class="btn btn-primary" id="open-json-file">
		    <svg width="32" height="32" fill="currentColor">
			<use href="images/bootstrap-icons.svg#filetype-json"/>
		    </svg>
		    Open a PATH previously saved to your computer
		</button>
		<button class="btn btn-primary" disabled>
		    <svg width="32" height="32" fill="currentColor">
			<use href="images/bootstrap-icons.svg#cloud"/>
		    </svg>
		    Open a PATH saved online (requires account)
		</button>
	    </div>
	</div>

	<div id="open-saved-json-path" class="dialog">
	    <button class="btn dialog-close-x dialog-close">
		<svg width="32" height="32" fill="currentColor">
		    <use href="images/bootstrap-icons.svg#x"/>
		</svg>
	    </button>
	    <h2>Open a PATH previously saved to your computer</h2>
	    <div class="alert alert-warning" role="alert">This will replace the PATH that you currently have loaded with the data from the selected file. Are you sure?</div>
	    <div class="mb-3">
		<label for="inputfile" class="form-label">Choose a JSON file from your computer</label>
		<input class="form-control" type="file" id="inputfile" name="inputfile">
	    </div>
	    <button class="btn btn-primary dialog-close" id="confirm-replace-with-file-data">
		<svg width="20" height="20" fill="currentColor">
		    <use href="images/bootstrap-icons.svg#check-circle"/>
		</svg>
		Confirm
	    </button>
	</div>

	<div id="replace-with-example-path" class="dialog">
	    <button class="btn dialog-close-x dialog-close">
		<svg width="32" height="32" fill="currentColor">
		    <use href="images/bootstrap-icons.svg#x"/>
		</svg>
	    </button>
	    <h2>Confirm view example PATH</h2>
	    <div class="alert alert-warning" role="alert">Are you sure you want to replace the PATH that you currently have loaded with the example PATH?</div>
	    <button class="btn btn-primary dialog-close" id="confirm-replace-with-example">
		<svg width="20" height="20" fill="currentColor">
		    <use href="images/bootstrap-icons.svg#check-circle"/>
		</svg>
		Confirm
	    </button>
	</div>

	<div id="replace-with-empty-path" class="dialog">
	    <button class="btn dialog-close-x dialog-close">
		<svg width="32" height="32" fill="currentColor">
		    <use href="images/bootstrap-icons.svg#x"/>
		</svg>
	    </button>
	    <h2>Confirm start new PATH</h2>
	    <div class="alert alert-warning" role="alert">Are you sure you want to clear the PATH that you currently have loaded? You will lose any unsaved work.</div>
	    <button class="btn btn-primary dialog-close" id="confirm-replace-with-empty">
		<svg width="20" height="20" fill="currentColor">
		    <use href="images/bootstrap-icons.svg#check-circle"/>
		</svg>
		Confirm
	    </button>
	</div>

	<div id="save-or-export" class="dialog">
	    <button class="btn dialog-close-x dialog-close">
		<svg width="32" height="32" fill="currentColor">
		    <use href="images/bootstrap-icons.svg#x"/>
		</svg>
	    </button>
	    <h2>Save and export options</h2>
	    <!-- Export buttons -->
	    <div class="d-grid gap-2">
		
		<button class="btn btn-sm btn-primary" onclick="export_pathdata_to_json()">
		    <svg width="32" height="32" fill="currentColor">
			<use href="images/bootstrap-icons.svg#filetype-json"/>
		    </svg>
		    Save PATH as JSON
		</button>
		<p>Saving your work to your computer as a JSON will allow you to edit it again using JSON Builder</p>
		
		<button class="btn btn-sm btn-primary" disabled>
		    <svg width="32" height="32" fill="currentColor">
			<use href="images/bootstrap-icons.svg#cloud"/>
		    </svg>
		    Save PATH online (requires account)
		</button>
		<p>Continue working on your PATH later</p>
		
		<button class="btn btn-sm btn-primary" disabled>
		    <svg width="32" height="32" fill="currentColor">
			<use href="images/bootstrap-icons.svg#filetype-svg"/>
		    </svg>
		    Export PATH as SVG (figure only)
		</button>
		<p>SVG export will only include the image of the PATH figure</p>
		
		<button class="btn btn-sm btn-primary" disabled>
		    <svg width="32" height="32" fill="currentColor">
			<use href="images/bootstrap-icons.svg#filetype-md"/>
		    </svg>
		    Export PATH summary as Markdown (text only)
		</button>
		<p>Markdown export will only include the text of the PATH summary</p>
		
		<button class="btn btn-sm btn-primary" disabled>
		    <svg width="32" height="32" fill="currentColor">
			<use href="images/bootstrap-icons.svg#filetype-pdf"/>
		    </svg>
		    Export PATH figure and summary as PDF
		</button>
		<p>PDF export will include both the text of the PATH summary and the PATH figure</p>
	    </div>
	    <!-- End of export buttons -->
	</div>

	<div id="target-scenario" class="dialog">
	    <button class="btn dialog-close-x dialog-close">
		<svg width="32" height="32" fill="currentColor">
		    <use href="images/bootstrap-icons.svg#x"/>
		</svg>
	    </button>
	    <h2>Define your target scenario</h2>
	    <div>The main task for assessing a proposal is to determine the level of confidence that a drug, when given to a target population, will produce a desired response. We call this the "target scenario."</div>
	    <hr>
	    <div class="mb-3">
		<label for="target-scenario-text" class="form-label">Target scenario</label>
		<textarea class="form-control" id="target-scenario-text" rows="3"></textarea>
	    </div>
	    <button class="btn btn-primary dialog-close" id="confirm-target-scenario">
		<svg width="20" height="20" fill="currentColor">
		    <use href="images/bootstrap-icons.svg#check-circle"/>
		</svg>
		Confirm
	    </button>
	</div>

	<div id="evidence-editor" class="dialog">
	    <button class="btn dialog-close-x dialog-close">
		<svg width="32" height="32" fill="currentColor">
		    <use href="images/bootstrap-icons.svg#x"/>
		</svg>
	    </button>
	    <h2>Evidence for <span class="editor-evidence-stepname"></span></h2>
	    <div id="evidence-editor-prompt-text"></div>
	    <hr>
	    <div class="mb-3">
		<label for="evidence-editor-text" class="form-label">Evidence</label>
		<textarea class="form-control mb-2" id="evidence-editor-text" rows="3"></textarea>
		<button class="btn btn-primary btn-sm mb-2 auto-analyze-evidence">
		    <svg width="16" height="16" fill="currentColor">
			<use href="images/bootstrap-icons.svg#magic"/>
		    </svg>
		    Auto-analyze evidence
		</button>
		<div id="auto-analysis-report"></div>
	    </div>

	    <!-- Conditional display depending on whether we're looking at evidence for a horizontal or vertical arrow -->
	    <div id="evidence-metadata-checkboxes">
		<div id="evidence-editor-vertical-arrow-fields">
		    <label>Types of evidence provided</label>
		    <div class="mb-3 list-group" id="vertical-arrow-evidence">
			<label class="list-group-item d-flex gap-2">
			    <input class="form-check-input flex-shrink-0" type="checkbox" value="magnitude-of-effect">
			    <span>
				Magnitude of effect
				<small class="d-block text-body-secondary">The size of the effect being reported is quantified</small>
			    </span>
			</label>
			<label class="list-group-item d-flex gap-2">
			    <input class="form-check-input flex-shrink-0" type="checkbox" value="units-provided">
			    <span>
				Units provided
				<small class="d-block text-body-secondary">Units are provided for all reported measures of effect where appropriate</small>
			    </span>
			</label>
			<label class="list-group-item d-flex gap-2">
			    <input class="form-check-input flex-shrink-0" type="checkbox" value="measure-precision">
			    <span>
				Precision around estimate
				<small class="d-block text-body-secondary">If appropriate, some measure of precision around the estimate of effect has been provided, e.g. p-value, 95% confidence interval, etc.</small>
			    </span>
			</label>
			<label class="list-group-item d-flex gap-2">
			    <input class="form-check-input flex-shrink-0" type="checkbox" value="comparator">
			    <span>
				Comparator
				<small class="d-block text-body-secondary">Identity of comparator mentioned</small>
			    </span>
			</label>
		    </div>

		    
		    <label>Measures to address risk of bias</label>
		    <div class="mb-3 list-group" id="vertical-arrow-evidence-rob">
			<label class="list-group-item d-flex gap-2">
			    <input class="form-check-input flex-shrink-0" type="checkbox" value="randomization">
			    <span>
				Randomization
				<small class="d-block text-body-secondary">Randomized experimental design is mentioned</small>
			    </span>
			</label>
			<label class="list-group-item d-flex gap-2">
			    <input class="form-check-input flex-shrink-0" type="checkbox" value="masking">
			    <span>
				Masking
				<small class="d-block text-body-secondary">Masked experimental design is mentioned</small>
			    </span>
			</label>
			<label class="list-group-item d-flex gap-2">
			    <input class="form-check-input flex-shrink-0" type="checkbox" value="pre-registration">
			    <span>
				Pre-registration
				<small class="d-block text-body-secondary">Study in question was pre-registered</small>
			    </span>
			</label>
			
		    </div>
		    
		</div>

		<!-- Conditional display depending on whether we're looking at evidence for a horizontal or vertical arrow -->
		<div id="evidence-editor-horizontal-arrow-fields">
		    <label>Types of evidence provided</label>
		    <div class="mb-3 list-group" id="horizontal-arrow-evidence-types">
			<label class="list-group-item d-flex gap-2">
			    <input class="form-check-input flex-shrink-0" type="checkbox" value="target-present">
			    <span>
				Target evidence
				<small class="d-block text-body-secondary">Evidence suggesting drug target/functional assay used in models is also present in target patients</small>
			    </span>
			</label>
			<label class="list-group-item d-flex gap-2">
			    <input class="form-check-input flex-shrink-0" type="checkbox" value="construct-validity">
			    <span>
				Construct validity
				<small class="d-block text-body-secondary">Explanation of relationships between various features of a model systems and those for the target scenario</small>
			    </span>
			</label>
			<label class="list-group-item d-flex gap-2">
			    <input class="form-check-input flex-shrink-0" type="checkbox" value="external-validity">
			    <span>
				External validity
				<small class="d-block text-body-secondary">Replication of effects in different model systems</small>
			    </span>
			</label>
			<label class="list-group-item d-flex gap-2">
			    <input class="form-check-input flex-shrink-0" type="checkbox" value="interfering-effects">
			    <span>
				Interfering effects
				<small class="d-block text-body-secondary">Evidence suggesting the absence of "interfering effects" in the target scenario</small>
			    </span>
			</label>
			<label class="list-group-item d-flex gap-2">
			    <input class="form-check-input flex-shrink-0" type="checkbox" value="systematic-review">
			    <span>
				Systematic review
				<small class="d-block text-body-secondary">Systematic review evidence regarding the model's predictive value</small>
			    </span>
			</label>
		    </div>
		    
		</div>
	    </div>
	    <!-- End of conditional display -->

	    <hr>
	    
	    <div id="references-in-editor-block">
		<h3>References</h3>
		<div class="references-space">
		    <div class="references-container"></div>
		    <div class="add-ref-space add-ref-by-doi">
			<div class="mb-1">
			    <label for="dialog-doi-to-look-up">Add reference by DOI lookup</label>
			    <input type="text" class="form-control doi-to-look-up" id="dialog-doi-to-look-up" placeholder="E.g. 10.1016/j.medj.2024.07.014">
			</div>
			<button class="btn btn-primary btn-sm do-doi-lookup">
			    <svg width="16" height="16" fill="currentColor">
				<use href="images/bootstrap-icons.svg#plus-circle"/>
			    </svg>
			    Look up reference by DOI
			</button>
			<button class="btn btn-primary btn-sm cancel-add-refs">
			    <svg width="16" height="16" fill="currentColor">
				<use href="images/bootstrap-icons.svg#x-circle"/>
			    </svg>
			    Cancel
			</button>
		    </div>
		    <button class="btn btn-primary btn-sm edit-new-reference-doi add-refs-buttons">
			<svg width="16" height="16" fill="currentColor">
			    <use href="images/bootstrap-icons.svg#plus-circle"/>
			</svg>
			Add reference by DOI lookup
		    </button>
		    <button class="btn btn-primary btn-sm edit-new-reference-manual add-refs-buttons">
			<svg width="16" height="16" fill="currentColor">
			    <use href="images/bootstrap-icons.svg#plus-circle"/>
			</svg>
			Add reference manually
		    </button>
		</div>
	    </div>

	    
	    <input type="hidden" id="editor-evidence-step" value="">
	    <input type="hidden" id="editor-evidence-index" value="">
	    <input type="hidden" id="editor-evidence-index-new" value="true">
	    <button class="btn btn-primary dialog-close" id="confirm-evidence-editor">
		<svg width="20" height="20" fill="currentColor">
		    <use href="images/bootstrap-icons.svg#check-circle"/>
		</svg>
		Confirm
	    </button>
	</div>

	<div id="evidence-delete" class="dialog">
	    <button class="btn dialog-close-x dialog-close">
		<svg width="32" height="32" fill="currentColor">
		    <use href="images/bootstrap-icons.svg#x"/>
		</svg>
	    </button>
	    <h2>Confirm delete evidence</h2>
	    <div class="alert alert-warning" role="alert">Are you sure you want to delete the following evidence for <span class="delete-evidence-stepname"></span>?</div>
	    <hr>
	    <div id="delete-evidence-text" style="margin-bottom: 20px"></div>
	    <hr>
	    <input type="hidden" id="delete-evidence-index" value="">
	    <button class="btn btn-danger dialog-close" id="confirm-delete">
		<svg width="20" height="20" fill="currentColor">
		    <use href="images/bootstrap-icons.svg#backspace"/>
		</svg>
		Delete
	    </button>
	</div>

	<div id="evidence-strength" class="dialog">
	    <button class="btn dialog-close-x dialog-close">
		<svg width="32" height="32" fill="currentColor">
		    <use href="images/bootstrap-icons.svg#x"/>
		</svg>
	    </button>
	    <h2>Rate strength of <span class="evidence-strength-stepname"></span> evidence</h2>
	    <div>
		<label for="evidence-strength-slider" class="form-label">The <span class="evidence-strength-stepname"></span> arrow will be colour-coded from red (no evidence) to green (strong evidence) according to the selection below.</label>
		<div style="float: left;">No evidence</div>
		<div style="float: right;">Strong evidence</div>
		<input type="range" class="form-range" min="1" max="5" id="evidence-strength-slider">
	    </div>
	    <input type="hidden" id="evidence-strength-step" value="">
	    <button class="btn btn-primary dialog-close" id="confirm-evidence-strength">
		<svg width="20" height="20" fill="currentColor">
		    <use href="images/bootstrap-icons.svg#check-circle"/>
		</svg>
		Confirm
	    </button>
	</div>

	<!-- End of dialog boxes -->
	<div class="container-fluid titlebar">
	    <div class="row">
		<div class="col">		    
		    <button class="btn">			
			<svg width="32" height="32" fill="currentColor">
			    <use href="images/bootstrap-icons.svg#menu-down"/>
			</svg>
		    </button>
		    <h1>
			PATH Builder
			<span class="subtitle">Preclinical Assessment of Translation to Humans</span>
		    </h1>
		</div>
	    </div>
	</div>
	<div class="container-md">
	    <div class="row">
		<div class="col-md-5">
		    
		    <div id="path-figure-container" class="sticky-top">
			<!-- PATH figure -->
			<svg viewBox="0 0 500 600" id="pathfigure">

			    <!-- Top labels -->
			    
			    <!-- Direct steps -->
			    <path d="M50 0 L150 0 L150 80 L50 80 L50 0" fill="#666"></path>
			    <text x="100" y="40" dominant-baseline="middle" text-anchor="middle" class="top-box-text">Direct steps</text>
			    <!-- Translational steps -->
			    <path d="M160 0 L340 0 L340 80 L160 80 L160 0" fill="#666"></path>
			    <text x="250" y="40" dominant-baseline="middle" text-anchor="middle" class="top-box-text">Translational steps</text>
			    <!-- Model steps -->
			    <path d="M350 0 L450 0 L450 80 L350 80 L350 0" fill="#666"></path>
			    <text x="400" y="40" dominant-baseline="middle" text-anchor="middle" class="top-box-text">Model steps</text>

			    <!-- Step text labels -->
			    
			    <!-- Rx (D0) -->
			    <text x="120" y="110" dominant-baseline="middle" text-anchor="middle" class="path-step-label">Rx (D0)</text>
			    <!-- Rx (M0) -->
			    <text x="380" y="110" dominant-baseline="middle" text-anchor="middle" class="path-step-label">Rx (M0)</text>
			    <!-- T1 -->
			    <text x="250" y="160" dominant-baseline="middle" text-anchor="middle" class="path-step-label">T1</text>
			    <!-- Molecular (D1) -->
			    <text x="120" y="270" dominant-baseline="middle" text-anchor="middle" class="path-step-label">Molecular (D1)</text>
			    <!-- Molecular (M1) -->
			    <text x="380" y="270" dominant-baseline="middle" text-anchor="middle" class="path-step-label">Molecular (M1)</text>
			    <!-- T2 -->
			    <text x="250" y="320" dominant-baseline="middle" text-anchor="middle" class="path-step-label">T2</text>
			    <!-- Physiological (D2) -->
			    <text x="120" y="430" dominant-baseline="middle" text-anchor="middle" class="path-step-label">Physiological (D2)</text>
			    <!-- Physiological (M2) -->
			    <text x="380" y="430" dominant-baseline="middle" text-anchor="middle" class="path-step-label">Physiological (M2)</text>
			    <!-- T3 -->
			    <text x="250" y="480" dominant-baseline="middle" text-anchor="middle" class="path-step-label">T3</text>
			    <!-- Clinical (D3) -->
			    <text x="120" y="590" dominant-baseline="middle" text-anchor="middle" class="path-step-label">Clinical (D3)</text>
			    <!-- Clinical (M3) -->
			    <text x="380" y="590" dominant-baseline="middle" text-anchor="middle" class="path-step-label">Clinical (M3)</text>

			    <!-- Vertical arrows -->

			    <!-- D0-D1 -->
			    <path d="M110 120 L130 120 L130 240 L140 240 L120 260 L100 240 L110 240 L110 120" class="path-arrow" id="arrow-d0d1" data-step="d0d1"></path>
			    <!-- M0-M1 -->
			    <path d="M370 120 L390 120 L390 240 L400 240 L380 260 L360 240 L370 240 L370 120" class="path-arrow" id="arrow-m0m1" data-step="m0m1"></path>
			    <!-- D1-D2 -->
			    <path d="M110 280 L130 280 L130 400 L140 400 L120 420 L100 400 L110 400 L110 280" class="path-arrow" id="arrow-d1d2" data-step="d1d2"></path>
			    <!-- M1-M2 -->
			    <path d="M370 280 L390 280 L390 400 L400 400 L380 420 L360 400 L370 400 L370 280" class="path-arrow" id="arrow-m1m2" data-step="m1m2"></path>
			    <!-- D2-D3 -->
			    <path d="M110 440 L130 440 L130 560 L140 560 L120 580 L100 560 L110 560 L110 440" class="path-arrow" id="arrow-d2d3" data-step="d2d3"></path>
			    <!-- M2-M3 -->
			    <path d="M370 440 L390 440 L390 560 L400 560 L380 580 L360 560 L370 560 L370 440" class="path-arrow" id="arrow-m2m3" data-step="m2m3"></path>

			    <!-- Horizontal arrows -->

			    <!-- T1 -->
			    <path d="M130 180 L150 160 L150 170 L350 170 L350 160 L370 180 L350 200 L350 190 L150 190 L150 200 L130 180" class="path-arrow" id="arrow-t1" data-step="t1"></path>
			    <!-- T2 -->
			    <path d="M130 340 L150 320 L150 330 L350 330 L350 320 L370 340 L350 360 L350 350 L150 350 L150 360 L130 340" class="path-arrow" id="arrow-t2" data-step="t2"></path>
			    <!-- T3 -->
			    <path d="M130 500 L150 480 L150 490 L350 490 L350 480 L370 500 L350 520 L350 510 L150 510 L150 520 L130 500" class="path-arrow" id="arrow-t3" data-step="t3"></path>

			    <!-- Evidence statement boxes -->

			    <!-- D0-D1 -->
			    <path d="M0 160 L100 160 L100 200 L0 200 L0 160" class="path-evidence-box" data-step="d0d1"></path>
			    <!-- D1-D2 -->
			    <path d="M0 320 L100 320 L100 360 L0 360 L0 320" class="path-evidence-box" data-step="d1d2"></path>
			    <!-- D2-D3 -->
			    <path d="M0 480 L100 480 L100 520 L0 520 L0 480" class="path-evidence-box" data-step="d2d3"></path>
			    <!-- M0-M1 -->
			    <path d="M400 160 L500 160 L500 200 L400 200 L400 160" class="path-evidence-box" data-step="m0m1"></path>
			    <!-- M1-M2 -->
			    <path d="M400 320 L500 320 L500 360 L400 360 L400 320" class="path-evidence-box" data-step="m1m2"></path>
			    <!-- M2-M3 -->
			    <path d="M400 480 L500 480 L500 520 L400 520 L400 480" class="path-evidence-box" data-step="m2m3"></path>
			    <!-- T1 -->
			    <path d="M200 200 L300 200 L300 240 L200 240 L200 200" class="path-evidence-box" data-step="t1"></path>
			    <!-- T2 -->
			    <path d="M200 360 L300 360 L300 400 L200 400 L200 360" class="path-evidence-box" data-step="t2"></path>
			    <!-- T3 -->
			    <path d="M200 520 L300 520 L300 560 L200 560 L200 520" class="path-evidence-box" data-step="t3"></path>

			    <!-- Evidence statement text -->

			    <!-- D0-D1 -->
			    <text x="50" y="180" dominant-baseline="middle" text-anchor="middle" class="path-evidence-text" id="evidence-d0d1" data-step="d0d1"></text>
			    <!-- D1-D2 -->
			    <text x="50" y="340" dominant-baseline="middle" text-anchor="middle" class="path-evidence-text" id="evidence-d1d2" data-step="d1d2"></text>
			    <!-- D2-D3 -->
			    <text x="50" y="500" dominant-baseline="middle" text-anchor="middle" class="path-evidence-text" id="evidence-d2d3" data-step="d2d3"></text>
			    <!-- M0-M1 -->
			    <text x="450" y="180" dominant-baseline="middle" text-anchor="middle" class="path-evidence-text" id="evidence-m0m1" data-step="m0m1"></text>
			    <!-- M1-M2 -->
			    <text x="450" y="340" dominant-baseline="middle" text-anchor="middle" class="path-evidence-text" id="evidence-m1m2" data-step="m1m2"></text>
			    <!-- M2-M3 -->
			    <text x="450" y="500" dominant-baseline="middle" text-anchor="middle" class="path-evidence-text" id="evidence-m2m3" data-step="m2m3"></text>
			    <!-- T1 -->
			    <text x="250" y="220" dominant-baseline="middle" text-anchor="middle" class="path-evidence-text" id="evidence-t1" data-step="t1"></text>
			    <!-- T2 -->
			    <text x="250" y="380" dominant-baseline="middle" text-anchor="middle" class="path-evidence-text" id="evidence-t2" data-step="t2"></text>
			    <!-- T3 -->
			    <text x="250" y="540" dominant-baseline="middle" text-anchor="middle" class="path-evidence-text" id="evidence-t3" data-step="t3"></text>
			    
			</svg>
			<!-- End of PATH figure -->

			<div class="d-grid gap-2">
			    <button class="btn btn-primary" id="show-save-options">
				<svg width="32" height="32" fill="currentColor">
				    <use href="images/bootstrap-icons.svg#download"/>
				</svg>
				Save or export
			    </button>
			</div>
		    </div>
		    
		</div>
		<div class="col-md-7">
		    <!-- Beginning of text summary -->
		    <h2>Target scenario</h2>
		    <div>
			<span id="display-target-scenario">No target scenario has been specified</span>
			<button class="btn btn-primary btn-sm" id="edit-target-scenario">
			    <svg width="16" height="16" fill="currentColor">
				<use href="images/bootstrap-icons.svg#pencil"/>
			    </svg>
			    Define target scenario
			</button>
		    </div>

		    <hr>

		    <div class="evidence-block" id="evidence-block-m0m1" data-step="m0m1">
			<h3>
			    Target modulation in models (M0-M1)
			    <button class="btn btn-primary btn-sm edit-evidence-strength">
				<svg width="16" height="16" fill="currentColor">
				    <use href="images/bootstrap-icons.svg#award"/>
				</svg>
				Rate strength of evidence
			    </button>
			</h3>
			<div class="evidence-space">
			    <div class="evidence-container"></div>
			    <button class="btn btn-primary btn-sm edit-new-evidence">
				<svg width="16" height="16" fill="currentColor">
				    <use href="images/bootstrap-icons.svg#plus-circle"/>
				</svg>
				Add evidence
			    </button>
			</div>
		    </div>

		    <div class="evidence-block" id="evidence-block-t1" data-step="t1">
			<h3>
			    Translatability (T1)
			    <button class="btn btn-primary btn-sm edit-evidence-strength">
				<svg width="16" height="16" fill="currentColor">
				    <use href="images/bootstrap-icons.svg#award"/>
				</svg>
				Rate strength of evidence
			    </button>
			</h3>
			<div class="evidence-space">
			    <div class="evidence-container"></div>
			    <button class="btn btn-primary btn-sm edit-new-evidence">
				<svg width="16" height="16" fill="currentColor">
				    <use href="images/bootstrap-icons.svg#plus-circle"/>
				</svg>
				Add evidence
			    </button>
			</div>
		    </div>

		    <div class="evidence-block" id="evidence-block-m1m2" data-step="m1m2">
			<h3>
			    Physiological effect in models (M1-M2)
			    <button class="btn btn-primary btn-sm edit-evidence-strength">
				<svg width="16" height="16" fill="currentColor">
				    <use href="images/bootstrap-icons.svg#award"/>
				</svg>
				Rate strength of evidence
			    </button>
			</h3>
			<div class="evidence-space">
			    <div class="evidence-container"></div>
			    <button class="btn btn-primary btn-sm edit-new-evidence">
				<svg width="16" height="16" fill="currentColor">
				    <use href="images/bootstrap-icons.svg#plus-circle"/>
				</svg>
				Add evidence
			    </button>
			</div>
		    </div>

		    <div class="evidence-block" id="evidence-block-t2" data-step="t2">
			<h3>
			    Translatability (T2)
			    <button class="btn btn-primary btn-sm edit-evidence-strength">
				<svg width="16" height="16" fill="currentColor">
				    <use href="images/bootstrap-icons.svg#award"/>
				</svg>
				Rate strength of evidence
			    </button>
			</h3>
			<div class="evidence-space">
			    <div class="evidence-container"></div>
			    <button class="btn btn-primary btn-sm edit-new-evidence">
				<svg width="16" height="16" fill="currentColor">
				    <use href="images/bootstrap-icons.svg#plus-circle"/>
				</svg>
				Add evidence
			    </button>
			</div>
		    </div>

		    <div class="evidence-block" id="evidence-block-m2m3" data-step="m2m3">
			<h3>
			    Clinical effect in models (M2-M3)
			    <button class="btn btn-primary btn-sm edit-evidence-strength">
				<svg width="16" height="16" fill="currentColor">
				    <use href="images/bootstrap-icons.svg#award"/>
				</svg>
				Rate strength of evidence
			    </button>
			</h3>
			<div class="evidence-space">
			    <div class="evidence-container"></div>
			    <button class="btn btn-primary btn-sm edit-new-evidence">
				<svg width="16" height="16" fill="currentColor">
				    <use href="images/bootstrap-icons.svg#plus-circle"/>
				</svg>
				Add evidence
			    </button>
			</div>
		    </div>

		    <div class="evidence-block" id="evidence-block-t3" data-step="t3">
			<h3>
			    Translatability (T3)
			    <button class="btn btn-primary btn-sm edit-evidence-strength">
				<svg width="16" height="16" fill="currentColor">
				    <use href="images/bootstrap-icons.svg#award"/>
				</svg>
				Rate strength of evidence
			    </button>
			</h3>
			<div class="evidence-space">
			    <div class="evidence-container"></div>
			    <button class="btn btn-primary btn-sm edit-new-evidence">
				<svg width="16" height="16" fill="currentColor">
				    <use href="images/bootstrap-icons.svg#plus-circle"/>
				</svg>
				Add evidence
			    </button>
			</div>
		    </div>

		    <hr>

		    <div class="evidence-block" id="evidence-block-d0d1" data-step="d0d1">
			<h3>
			    Target modulation in the target scenario (D0-D1)
			    <button class="btn btn-primary btn-sm edit-evidence-strength">
				<svg width="16" height="16" fill="currentColor">
				    <use href="images/bootstrap-icons.svg#award"/>
				</svg>
				Rate strength of evidence
			    </button>
			</h3>
			<div class="evidence-space">
			    <div class="evidence-container"></div>
			    <button class="btn btn-primary btn-sm edit-new-evidence">
				<svg width="16" height="16" fill="currentColor">
				    <use href="images/bootstrap-icons.svg#plus-circle"/>
				</svg>
				Add evidence
			    </button>
			</div>
		    </div>

		    <div class="evidence-block" id="evidence-block-d1d2" data-step="d1d2">
			<h3>
			    Physiological effect in the target scenario (D1-D2)
			    <button class="btn btn-primary btn-sm edit-evidence-strength">
				<svg width="16" height="16" fill="currentColor">
				    <use href="images/bootstrap-icons.svg#award"/>
				</svg>
				Rate strength of evidence
			    </button>
			</h3>
			<div class="evidence-space">
			    <div class="evidence-container"></div>
			    <button class="btn btn-primary btn-sm edit-new-evidence">
				<svg width="16" height="16" fill="currentColor">
				    <use href="images/bootstrap-icons.svg#plus-circle"/>
				</svg>
				Add evidence
			    </button>
			</div>
		    </div>

		    <div class="evidence-block" id="evidence-block-d2d3" data-step="d2d3">	    
			<h3>
			    Clinical effect in the target scenario (D2-D3)
			    <button class="btn btn-primary btn-sm edit-evidence-strength">
				<svg width="16" height="16" fill="currentColor">
				    <use href="images/bootstrap-icons.svg#award"/>
				</svg>
				Rate strength of evidence
			    </button>
			</h3>
			<div class="evidence-space">
			    <div class="evidence-container"></div>
			    <button class="btn btn-primary btn-sm edit-new-evidence">
				<svg width="16" height="16" fill="currentColor">
				    <use href="images/bootstrap-icons.svg#plus-circle"/>
				</svg>
				Add evidence
			    </button>
			</div>
		    </div>

		    <hr>

		    <div id="references-block">
			<h3>References</h3>
			<div class="references-space">
			    <div class="references-container"></div>
			    <button class="btn btn-primary btn-sm edit-new-reference-doi add-refs-buttons">
				<svg width="16" height="16" fill="currentColor">
				    <use href="images/bootstrap-icons.svg#plus-circle"/>
				</svg>
				Add reference by DOI lookup
			    </button>
			    <button class="btn btn-primary btn-sm edit-new-reference-manual add-refs-buttons">
				<svg width="16" height="16" fill="currentColor">
				    <use href="images/bootstrap-icons.svg#plus-circle"/>
				</svg>
				Add reference manually
			    </button>
			</div>
		    </div>

		    <!-- End of text summary -->
		</div>
	    </div>
	</div>

	<!-- Here's the Javascript -->
	<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>
	<script src="bootstrap-5.3.3-dist/js/bootstrap.bundle.min.js"></script>
	<script src="jquery-3.7.1.min.js"></script>
	<script src="jquery-ui-1.13.2/jquery-ui.min.js"></script>
	<script>
	 <?php include("pathbuilder.js"); ?>
	</script>
	<!-- End of Javascript -->
    </body>
</html>

