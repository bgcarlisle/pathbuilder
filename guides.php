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

    
    // Find existing guide (linear scan preserves order)
    $guideIndex = null;
    foreach ($data as $i => $g) {
        if ($g['guide_name'] === $guide) {
            $guideIndex = $i;
            break;
        }
    }

    // If guide not found, create it
    if ($guideIndex === null) {
        $data[] = [
            'guide_name' => $guide,
            'pages' => []
        ];
        $guideIndex = array_key_last($data);
    }

    // Now handle pages
    $pages = &$data[$guideIndex]['pages'];

    $pageIndex = null;
    foreach ($pages as $i => $p) {
        if ($p['page_no'] == $page) {  // page maybe numeric or string
            $pageIndex = $i;
            break;
        }
    }

    // If page not found, create it
    if ($pageIndex === null) {
        $pages[] = [
            'page_no' => $page,
            'elements' => []
        ];
        $pageIndex = array_key_last($pages);
    }

    // Add the element
    $pages[$pageIndex]['elements'][] = [
        'element_type' => $item['element_type'],
        'element_details' => $item['element_details'],
        'path_data_location' => $item['path_data_location']
    ];
}

fclose($handle);

// Encode as JSON
echo json_encode($data, JSON_PRETTY_PRINT);

?>
