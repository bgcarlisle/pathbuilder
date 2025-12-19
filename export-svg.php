<?php

header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
header("Cache-Control: post-check=0, pre-check=0", false);
header("Pragma: no-cache");

header('Content-Type: image/svg+xml');
header('Content-Disposition: attachment; filename="path.svg"');

function css_class_to_hex_colour ($css) {

    switch (trim($css)) {
	case "strength1":
	    return "#ff0000";
	    break;
	case "strength2":
	    return "#ff8000";
	    break;
	case "strength3":
	    return "#ffff38";
	    break;
	case "strength4":
	    return "#bbe33d";
	    break;
	case "strength5":
	    return "#127622";
	    break;
	default:
	    return "#666";
	    
    }
    
}

?><svg viewBox="0 0 500 600" xmlns="http://www.w3.org/2000/svg">

    <style>

     @font-face {
	 font-family: 'Atkinson Hyperlegible';
	 src: url('data:font/ttf;base64,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') fromat('woff2');
	 font-weight: normal;
	 font-style: normal;
     }
     svg {
	 font-family: 'Atkinson Hyperlegible';
	 font-weight: 400;
     }
     .path-arrow {
	 stroke: #333;
     }
     .path-arrow:hover {
	 stroke: #000;
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
     .path-evidence-box:hover{
	 fill: #eee;
	 stroke: #ddd;
     }
     .path-evidence-text {
	 fill: #000;
	 font-size: 14px;
     }
    </style>

    <!-- Background -->
    <path d="M0 0 L500 0 L500 600 L0 600 L0 0" fill="#fff"></path>
    
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
    <path d="M110 120 L130 120 L130 240 L140 240 L120 260 L100 240 L110 240 L110 120" fill="<?php echo css_class_to_hex_colour($_POST['d0d1_strength']); ?>" class="path-arrow" id="arrow-d0d1" data-step="d0d1"></path>
    <!-- M0-M1 -->
    <path d="M370 120 L390 120 L390 240 L400 240 L380 260 L360 240 L370 240 L370 120" fill="<?php echo css_class_to_hex_colour($_POST['m0m1_strength']); ?>" class="path-arrow" id="arrow-m0m1" data-step="m0m1"></path>
    <!-- D1-D2 -->
    <path d="M110 280 L130 280 L130 400 L140 400 L120 420 L100 400 L110 400 L110 280" fill="<?php echo css_class_to_hex_colour($_POST['d1d2_strength']); ?>" class="path-arrow" id="arrow-d1d2" data-step="d1d2"></path>
    <!-- M1-M2 -->
    <path d="M370 280 L390 280 L390 400 L400 400 L380 420 L360 400 L370 400 L370 280" fill="<?php echo css_class_to_hex_colour($_POST['m1m2_strength']); ?>" class="path-arrow" id="arrow-m1m2" data-step="m1m2"></path>
    <!-- D2-D3 -->
    <path d="M110 440 L130 440 L130 560 L140 560 L120 580 L100 560 L110 560 L110 440" fill="<?php echo css_class_to_hex_colour($_POST['d2d3_strength']); ?>" class="path-arrow" id="arrow-d2d3" data-step="d2d3"></path>
    <!-- M2-M3 -->
    <path d="M370 440 L390 440 L390 560 L400 560 L380 580 L360 560 L370 560 L370 440" fill="<?php echo css_class_to_hex_colour($_POST['m2m3_strength']); ?>" class="path-arrow" id="arrow-m2m3" data-step="m2m3"></path>

    <!-- Horizontal arrows -->

    <!-- T1 -->
    <path d="M130 180 L150 160 L150 170 L350 170 L350 160 L370 180 L350 200 L350 190 L150 190 L150 200 L130 180" fill="<?php echo css_class_to_hex_colour($_POST['t1_strength']); ?>" class="path-arrow" id="arrow-t1" data-step="t1"></path>
    <!-- T2 -->
    <path d="M130 340 L150 320 L150 330 L350 330 L350 320 L370 340 L350 360 L350 350 L150 350 L150 360 L130 340" fill="<?php echo css_class_to_hex_colour($_POST['t2_strength']); ?>" class="path-arrow" id="arrow-t2" data-step="t2"></path>
    <!-- T3 -->
    <path d="M130 500 L150 480 L150 490 L350 490 L350 480 L370 500 L350 520 L350 510 L150 510 L150 520 L130 500" fill="<?php echo css_class_to_hex_colour($_POST['t3_strength']); ?>" class="path-arrow" id="arrow-t3" data-step="t3"></path>

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
    <text x="50" y="180" dominant-baseline="middle" text-anchor="middle" class="path-evidence-text" id="evidence-d0d1" data-step="d0d1"><?php echo $_POST['d0d1']; ?></text>
    <!-- D1-D2 -->
    <text x="50" y="340" dominant-baseline="middle" text-anchor="middle" class="path-evidence-text" id="evidence-d1d2" data-step="d1d2"><?php echo $_POST['d1d2']; ?></text>
    <!-- D2-D3 -->
    <text x="50" y="500" dominant-baseline="middle" text-anchor="middle" class="path-evidence-text" id="evidence-d2d3" data-step="d2d3"><?php echo $_POST['d2d3']; ?></text>
    <!-- M0-M1 -->
    <text x="450" y="180" dominant-baseline="middle" text-anchor="middle" class="path-evidence-text" id="evidence-m0m1" data-step="m0m1"><?php echo $_POST['m0m1']; ?></text>
    <!-- M1-M2 -->
    <text x="450" y="340" dominant-baseline="middle" text-anchor="middle" class="path-evidence-text" id="evidence-m1m2" data-step="m1m2"><?php echo $_POST['m1m2']; ?></text>
    <!-- M2-M3 -->
    <text x="450" y="500" dominant-baseline="middle" text-anchor="middle" class="path-evidence-text" id="evidence-m2m3" data-step="m2m3"><?php echo $_POST['m2m3']; ?></text>
    <!-- T1 -->
    <text x="250" y="220" dominant-baseline="middle" text-anchor="middle" class="path-evidence-text" id="evidence-t1" data-step="t1"><?php echo $_POST['t1']; ?></text>
    <!-- T2 -->
    <text x="250" y="380" dominant-baseline="middle" text-anchor="middle" class="path-evidence-text" id="evidence-t2" data-step="t2"><?php echo $_POST['t2']; ?></text>
    <!-- T3 -->
    <text x="250" y="540" dominant-baseline="middle" text-anchor="middle" class="path-evidence-text" id="evidence-t3" data-step="t3"><?php echo $_POST['t3']; ?></text>
    
</svg>
