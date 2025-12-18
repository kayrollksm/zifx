<?php
$db = new PDO("sqlite:" . __DIR__ . "/../data/zifx.db");
$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
