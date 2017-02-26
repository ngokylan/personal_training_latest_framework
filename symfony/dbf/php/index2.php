<?php
// function dbfToCsv($file) 
// {
//     $output_path = 'output' . DIRECTORY_SEPARATOR . 'path';
//     $path_parts = pathinfo($file);
//     $csvFile = path_parts['filename'] . '.csv';
//     $output_path_file = $output_path . DIRECTORY_SEPARATOR . $csvFile;

//     if (!$dbf = dbase_open( $file, 0 )) {
//         return false;
//     }

//     $num_rec = dbase_numrecords( $dbf );

//     $fp = fopen($output_path_file, 'w');
//     for( $i = 1; $i <= $num_rec; $i++ ) {
//         $row = dbase_get_record_with_names( $dbf, $i );
//         if ($i == 1) {
//             //print header
//             fputcsv($fp, array_keys($row));
//         }
//         fputcsv($fp, $row);
//     }
//     fclose($fp);
// }
// dbfToCsv('invoice.dbf');
phpinfo();
?>