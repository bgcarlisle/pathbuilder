<?php

header('Content-Type: application/json; charset=utf-8');

$filename = "guides.csv";

if (!file_exists($filename)) {
    die("CSV file not found.");
}

$handle = fopen($filename, 'r');

$headers = fgetcsv($handle); // header row

$data = [];

// Read each line
while (($row = fgetcsv($handle)) !== false) {

    // Skip empty lines
    if (count(array_filter($row)) == 0) {
        continue;
    }

    $item = array_combine($headers, $row);

    $guide  = $item['guide_name'];
    $page   = $item['page_no'];

    // Create nested structure
    if (!isset($data[$guide])) {
        $data[$guide] = [];
    }
    if (!isset($data[$guide][$page])) {
        $data[$guide][$page] = [];
    }

    $data[$guide][$page][] = [
        'element_type'     => $item['element_type'],
        'element_details'  => $item['element_details'],
        'path_data_location' => $item['path_data_location']
    ];
}

fclose($handle);

// Encode as JSON
echo json_encode($data, JSON_PRETTY_PRINT);

?>
