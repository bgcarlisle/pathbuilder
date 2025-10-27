<?php

header('Content-Type: application/json');

$result = file_get_contents('https://api.crossref.org/works/' . urlencode(trim($_POST['doi'])), false, null);

$json = json_decode($result);

if (trim($_POST['doi']) != "" & $json !== null) {
    $title = $json->{'message'}->{'title'}[0];

    $authors = implode(
	", ",
	array_map(
	    fn($a) => $a->{'family'} . " " . implode('', array_map( fn($fname) => substr($fname, 0, 1), explode(' ', $a->{'given'}))), $json->{'message'}->{'author'}
	)
    );

    $journal = $json->{'message'}->{'container-title'}[0];

    $year = $json->{'message'}->{'journal-issue'}->{'published-print'}->{'date-parts'}[0][0];

    if (is_null($year)) {
	$year = $json->{'message'}->{'published-online'}->{'date-parts'}[0][0];
    }

    $doi = $json->{'message'}->{'URL'};

    // var_dump($result);

    // echo "<p>" . $authors . ". " . $title . ". " . $journal . ", ", $year . ". " . $doi . "</p>";

    echo json_encode(
	array(
	    "status" => "success",
 	    "authors" => $authors,
 	    "title" => $title,
 	    "journal" => $journal,
 	    "year" => $year,
 	    "doi" => $doi
	)
    );

} else {
    echo json_encode(
	array(
	    "status" => "failure"
	)
    );
}

?>
