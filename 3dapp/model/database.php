<?php
header('Content-Type: application/json');
try {
    $db = new PDO('sqlite:database.db');
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $model = $_GET['model'] ?? '';

    if ($model) {
        $stmt = $db->prepare("SELECT * FROM models WHERE name = ?");
        $stmt->execute([$model]);
        $result = $stmt->fetch(PDO::FETCH_ASSOC);
        echo json_encode($result);
    } else {
        echo json_encode(['error' => 'Model not specified']);
    }
} catch (PDOException $e) {
    echo json_encode(['error' => $e->getMessage()]);
}
?>
