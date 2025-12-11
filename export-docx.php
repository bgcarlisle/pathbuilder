<?php

include("config.php");

header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
header("Cache-Control: post-check=0, pre-check=0", false);
header("Pragma: no-cache");

$rawData = file_get_contents("php://input");

$data = json_decode($rawData, true);

if (json_last_error() !== JSON_ERROR_NONE) {
    http_response_code(400);
    echo json_encode(["error" => "Invalid JSON"]);
    exit;
}

$pathdata = $data['pd'] ?? null;

$steps = [
    "m0m1" => "Target modulation in models",
    "t1" => "Translatability",
    "m1m2" => "Physiological effect in models",
    "t2" => "Translatability",
    "m2m3" => "Clinical effect in models",
    "t3" => "Translatability",
    "d0d1" => "Target modulation in the target scenario",
    "d1d2" => "Physiological effect in the target scenario",
    "d2d3" => "Clinical effect in the target scenario"
];

$evidence = $pathdata['evidence'];
$references = $pathdata['references'];

$md = "---\n";
$md .= "title: Preclinical Assessment of Translation to Humans\n";
$md .= "---\n\n";

$md .= "# Target scenario\n\n";

$md .= trim($pathdata['targetScenario']) . "\n\n";

foreach ($steps as $step => $stepdesc) {

    if (substr($step, 0, 1) == "m" || substr($step, 0, 1) == "d") {
	$md .= "# " . strtoupper(substr($step, 0, 2)) . "-" . strtoupper(substr($step, 2, 2)) . ": " . $stepdesc . "\n\n";
	
    } else {
	$md .= "# " . strtoupper($step) . ": " . $stepdesc . "\n\n";
    }


    foreach ($evidence as $key => $evi) {

	if ($evi['step'] == $step) {
	    $md .= $evi['number'] . ". " . trim($evi['text']);

	    $evi_refs = [];
	    foreach ($references as $ref) {
		$refevis = $ref['evidence'];
		foreach ($refevis as $refevi) {
		    if ($refevi == $key) {
			array_push($evi_refs, $ref['number']);
		    }
		    
		}
	    }

	    if (count($evi_refs) > 0) {
		$md .= " [";
		$md .= implode("," , $evi_refs);
		$md .= "]";
	    }
	    
	    $md .= "\n\n";
	}
	
    }
    
}

if (count($references) > 0) {

    $md .= "# References\n\n";

    foreach ($references as $ref) {
	$md .= $ref['number'] . ". ";
	$md .= $ref['authors'] . ". ";
	$md .= "*" . $ref['title'] . ".* ";
	$md .= $ref['journal'] . ". ";
	$md .= "(" . $ref['year'] . ") ";
	$md .= "DOI: " . $ref['doi'] . "\n\n";
    }
    
}

// Now $md contains the document in MD

// Temporary filenames
$tmpDir = sys_get_temp_dir();
$mdFile = tempnam($tmpDir, 'path_') . '.md';
$docxFile = tempnam($tmpDir, 'path_') . '.docx';

// save the MD
file_put_contents($mdFile, $md);

// Build pandoc command
$pandoc = escapeshellcmd(PATH_TO_PANDOC);
$cmd = "$pandoc " . escapeshellarg($mdFile) . " -o " . escapeshellarg($docxFile);

exec($cmd, $output, $returnVar);
if ($returnVar !== 0 || !file_exists($docxFile)) {
    unlink($mdFile);
    http_response_code(500);
    echo "Pandoc conversion failed";
    exit;
}

header('Content-Type: application/vnd.openxmlformats-officedocument.wordprocessingml.document');
header('Content-Disposition: attachment; filename="document.docx"');
header('Content-Length: ' . filesize($docxFile));
readfile($docxFile);

unlink($mdFile);
unlink($docxFile);

?>
