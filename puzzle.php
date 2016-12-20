<!DOCTYPE html>
<html lang="ru">
	<head>
		<title>Личный сайт студента GeekBrains</title>
		<meta charset="utf-8">
		<link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400" rel="stylesheet">
		<link rel="stylesheet" href="style/style.min.css">
	</head>
	<body>
		<header class="main-header">
			<ul>
				<li>
					<a href="#">Главная</a>
				</li>
				<li class="active">
					<a>Загадка</a>
				</li>
				<li>
					<a href="guess.html">Угадайка</a>
				</li>
				<li>
					<a href="guess2.html">Угадайка Мультиплеер</a>
				</li>
			</ul>
		</header>
		<main class="content">
			<article class="container">
				<h1>Загадка</h1>
				<div class="puzzle-text">
					<p>
						<?php 
						$userAnswer1 = $_GET["userAnswer1"];
						if ($userAnswer1 == "3")
							echo "Вы прошли часового";
						else
							echo "Вас убили";				
						?>
					</p>
				</div>
			</article>
		<footer class="main-footer">
			Copyright © 2016 <a href="http://vk.com/milaev_roman">Роман Милаев</a>
		</footer> 
	</body>
</html>