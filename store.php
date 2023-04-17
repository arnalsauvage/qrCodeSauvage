<?php
$date = new DateTime();
$nomDossier = "log/";
$nomFichier = "qrCode-" . $date->format('Y-m-d') . ".txt";
$myFile = fopen($nomDossier.$nomFichier, "a+");
$txt = $_POST['url'] . "\n";
fwrite($myFile, $txt);
fclose($myFile);
echo "Le fichier a été sauvegardé.";