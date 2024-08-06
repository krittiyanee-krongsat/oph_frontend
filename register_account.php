<?php
    // add_to_register_account.php

    // ข้อมูลการเชื่อมต่อฐานข้อมูล
    $hostname = "localhost"; // หรือที่อยู่เซิร์ฟเวอร์ของคุณ
    $username = "root";        // ชื่อผู้ใช้ฐานข้อมูล
    $password = "";            // รหัสผ่านฐานข้อมูล
    $dbname = "deep_sea";      // ชื่อฐานข้อมูล

    // สร้างการเชื่อมต่อ
    $conn = new mysqli($hostname, $username, $password, $dbname);

    // ตรวจสอบการเชื่อมต่อ
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // รับข้อมูลจากการส่ง POST
    $age_id = $_POST['age_id'];
    $gender_id = $_POST['gender_id'];
    $status_id = $_POST['status_id'];
    $degree_id = $_POST['degree_id'];
    $field_study_name = $_POST['field_study_name'];
    $province_id = $_POST['province_id'];
    //$registered_date = $_POST['registered_date'];

    // สร้างคำสั่ง SQL เพื่อเพิ่มข้อมูล
    $sql = "INSERT INTO register_user (age_id,gender_id,status_id,degree_id,field_study_name,province_id)
    VALUES (?, ?, ?, ?, ?, ?)";

    // เตรียมคำสั่ง
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("iiiiis", $age_id, $gender_id, $status_id, $level_id, $field_study_name, $province_id);

    // ตรวจสอบการดำเนินการ
    if ($stmt->execute()) {
        echo json_encode(["success" => true, "message" => "Data added successfully"]);
    } else {
        echo json_encode(["success" => false, "message" => "Error: " . $stmt->error]);
    }

    // ปิดการเชื่อมต่อ
    $stmt->close();
    $conn->close();
?>













