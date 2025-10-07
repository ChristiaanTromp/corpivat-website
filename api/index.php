<?php
/**
 * CoPrivat API - Serverless PHP Backend
 * Dit bestand kan direct op coprivat.nl/api/ worden geplaatst
 */

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: https://coprivat.nl');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Log function
function logMessage($message) {
    $logFile = __DIR__ . '/../logs/api.log';
    $timestamp = date('Y-m-d H:i:s');
    file_put_contents($logFile, "[$timestamp] $message\n", FILE_APPEND | LOCK_EX);
}

// Email function
function sendEmail($to, $subject, $message, $isHtml = false) {
    $headers = "From: info@coprivat.nl\r\n";
    $headers .= "Reply-To: info@coprivat.nl\r\n";
    
    if ($isHtml) {
        $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
    } else {
        $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
    }
    
    return mail($to, $subject, $message, $headers);
}

// Get request data
$method = $_SERVER['REQUEST_METHOD'];
$path = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

// Route handling
if ($method === 'GET' && $path === '/api/') {
    echo json_encode([
        'message' => 'CoPrivat API is running',
        'status' => 'healthy'
    ]);
    exit();
}

if ($method === 'POST' && $path === '/api/contact') {
    $input = json_decode(file_get_contents('php://input'), true);
    
    if (!$input) {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => 'Invalid JSON data']);
        exit();
    }
    
    // Validate required fields
    $required = ['naam', 'email', 'onderwerp', 'bericht'];
    foreach ($required as $field) {
        if (empty($input[$field])) {
            http_response_code(400);
            echo json_encode(['success' => false, 'message' => "Field $field is required"]);
            exit();
        }
    }
    
    // Log the submission
    logMessage("Contact form submission from: " . $input['email']);
    
    // Send email to admin
    $adminSubject = "CoPrivat Contact Bericht - " . $input['onderwerp'];
    $adminMessage = "
Nieuw Contact Bericht - CoPrivat

Contactgegevens:
Naam: " . $input['naam'] . "
Email: " . $input['email'] . "
" . (!empty($input['telefoon']) ? "Telefoon: " . $input['telefoon'] . "\n" : "") . "
Onderwerp: " . $input['onderwerp'] . "

Bericht:
" . $input['bericht'] . "

Bericht ontvangen op: " . date('d-m-Y om H:i') . "
";
    
    $adminSent = sendEmail('info@coprivat.nl', $adminSubject, $adminMessage);
    
    // Send confirmation to user
    $userSubject = "Bericht Ontvangen - CoPrivat";
    $userMessage = "
Beste " . $input['naam'] . ",

Hartelijk dank voor uw bericht! We hebben uw contactverzoek ontvangen en zullen zo snel mogelijk contact met u opnemen.

Uw bericht:
Onderwerp: " . $input['onderwerp'] . "
Bericht: " . $input['bericht'] . "

Wat gebeurt er nu?
- We bekijken uw bericht zorgvuldig
- Een van onze teamleden neemt binnen 24 uur contact met u op
- We beantwoorden uw vragen over CoPrivat

Heeft u dringende vragen? Neem gerust contact met ons op via info@coprivat.nl

Met vriendelijke groet,
Het CoPrivat Team
www.coprivat.nl
";
    
    $userSent = sendEmail($input['email'], $userSubject, $userMessage);
    
    if ($adminSent && $userSent) {
        echo json_encode([
            'success' => true,
            'message' => 'Bericht succesvol verzonden. U ontvangt een bevestigingsmail. We nemen zo snel mogelijk contact met u op.'
        ]);
    } else {
        http_response_code(500);
        echo json_encode([
            'success' => false,
            'message' => 'Er is een fout opgetreden bij het verzenden van uw bericht'
        ]);
    }
    exit();
}

if ($method === 'POST' && $path === '/api/wachtlijst') {
    $input = json_decode(file_get_contents('php://input'), true);
    
    if (!$input) {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => 'Invalid JSON data']);
        exit();
    }
    
    // Validate required fields
    $required = ['naam', 'email'];
    foreach ($required as $field) {
        if (empty($input[$field])) {
            http_response_code(400);
            echo json_encode(['success' => false, 'message' => "Field $field is required"]);
            exit();
        }
    }
    
    // Log the submission
    logMessage("Wachtlijst submission from: " . $input['email']);
    
    // Send email to admin
    $adminSubject = "CoPrivat Wachtlijst Aanmelding - " . $input['naam'];
    $adminMessage = "
Nieuwe Wachtlijst Aanmelding - CoPrivat

Contactgegevens:
Naam: " . $input['naam'] . "
Email: " . $input['email'] . "
" . (!empty($input['telefoon']) ? "Telefoon: " . $input['telefoon'] . "\n" : "") . "
" . (!empty($input['praktijk']) ? "Praktijk: " . $input['praktijk'] . "\n" : "") . "

Actie vereist: Neem contact op met deze persoon zodra de pilot start.

Aanmelding ontvangen op: " . date('d-m-Y om H:i') . "
";
    
    $adminSent = sendEmail('info@coprivat.nl', $adminSubject, $adminMessage);
    
    // Send confirmation to user
    $userSubject = "Aanmelding Wachtlijst Bevestigd - CoPrivat";
    $userMessage = "
Beste " . $input['naam'] . ",

Hartelijk dank voor uw aanmelding voor de CoPrivat wachtlijst! Uw interesse in onze AI-gedreven software voor de verwerking van digitale post in huisartsenpraktijken wordt zeer gewaardeerd.

Uw aanmelding:
Naam: " . $input['naam'] . "
Email: " . $input['email'] . "
" . (!empty($input['telefoon']) ? "Telefoon: " . $input['telefoon'] . "\n" : "") . "
" . (!empty($input['praktijk']) ? "Praktijk: " . $input['praktijk'] . "\n" : "") . "

Wat gebeurt er nu?
- U staat op de wachtlijst voor de CoPrivat pilot
- We nemen contact met u op zodra we starten met de pilot
- U ontvangt updates over de ontwikkeling van CoPrivat

Heeft u vragen? Neem gerust contact met ons op via info@coprivat.nl

Met vriendelijke groet,
Het CoPrivat Team
www.coprivat.nl
";
    
    $userSent = sendEmail($input['email'], $userSubject, $userMessage);
    
    if ($adminSent && $userSent) {
        echo json_encode([
            'success' => true,
            'message' => 'Aanmelding succesvol verwerkt. U ontvangt een bevestigingsmail. We nemen contact met u op zodra we starten met de pilot.'
        ]);
    } else {
        http_response_code(500);
        echo json_encode([
            'success' => false,
            'message' => 'Er is een fout opgetreden bij het verwerken van uw aanmelding'
        ]);
    }
    exit();
}

// 404 for other routes
http_response_code(404);
echo json_encode(['success' => false, 'message' => 'Endpoint not found']);
?>
