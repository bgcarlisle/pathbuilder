<?php

$result = file_get_contents('https://api.crossref.org/works/' . urlencode('10.1016/j.medj.2024.07.014'), false, null);

// var_dump($http_response_header);

var_dump($result);

$json = json_decode($result);

echo "<p>Title: " . $json->{'message'}->{'title'}[0] . "</p>";

?>
