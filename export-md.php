<?php

header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
header("Cache-Control: post-check=0, pre-check=0", false);
header("Pragma: no-cache");

header('Content-Type: text/markdown; charset=utf-8');
header('Content-Disposition: attachment; filename="path.md"');

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

?>---
title: Preclinical Assessment of Translation to Humans
---

# Target scenario

<?php echo $pathdata['targetScenario']; ?>


<?php

foreach ($steps as $step => $stepdesc) {

    if (substr($step, 0, 1) == "m" | substr($step, 0, 1) == "d") {
	echo "# " . strtoupper(substr($step, 0, 2)) . "-" . strtoupper(substr($step, 2, 2)) . ": " . $stepdesc . "\n\n";
	
    } else {
	echo "# " . strtoupper($step) . ": " . $stepdesc . "\n\n";
    }


    foreach ($evidence as $key => $evi) {

	if ($evi['step'] == $step) {
	    echo $evi['number'] . ". " . trim($evi['text']);

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
		echo " [";
		echo implode("," , $evi_refs);
		echo "]";
	    }
	    
	    echo "\n\n";
	}
	
    }
    
}

if (count($references) > 0) {

    echo "# References\n\n";

    foreach ($references as $ref) {
	echo $ref['number'] . ". ";
	echo $ref['authors'] . ". ";
	echo "*" . $ref['title'] . ".* ";
	echo $ref['journal'] . ". ";
	echo "(" . $ref['year'] . ") ";
	echo "DOI: " . $ref['doi'] . "\n\n";
    }
    
}

?>
