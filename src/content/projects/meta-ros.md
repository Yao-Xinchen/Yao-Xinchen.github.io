---
title: "Meta ROS"
description: "Low-Level Control System Designed for RoboMaster Competition Team Meta"
category: "Low-Level Control"
technologies: ["C++", "ROS2", "Communication Protocols", "Concurrency"]
order: 2
image: "/projects/meta_ros.jpg"
github: "https://github.com/Meta-Team/Meta-ROS"
---

## Introduction

This project is a comprehensive low-level control system developed for Team Meta's RoboMaster competition robots.
It leverages ROS2 for modularity and real-time performance, enabling efficient control of various robotic subsystems.

## Our Robots

Team Meta's "Infantry" and "Sentry" robots feature:
1. **Omnidirectional Movement**: Equipped with Mecanum wheels for omnidirectional movement, allowing for agile navigation on the competition field.
2. **Automatic Aiming and Firing**: Target detection based on OpenCV, combined with trajectory prediction algorithms for accurate aiming and firing.
3. **Autonomous Navigation**: Utilizes SLAM and path planning algorithms for autonomous movement and obstacle avoidance.

<div style="text-align: center;">
	<video width="80%" controls>
		<source src="/projects/meta_ros_shooting.mp4" type="video/mp4">
		Your browser does not support the video tag.
	</video>
	<p>Automatic Aiming and Firing Demonstration</p>
</div>

<div style="text-align: center;">
	<video width="80%" controls>
		<source src="/projects/meta_ros_movement.mp4" type="video/mp4">
		Your browser does not support the video tag.
	</video>
	<p>Omnidirectional Movement Demonstration</p>
</div>

"Engineering" robot equipped with a SCARA arm for object manipulation tasks:

![Engineering Robot](/projects/meta_ros_engineering.jpg)

Experimental Wheeled-Biped Robot:

![Wheeled-Biped Robot](/projects/meta_ros_wl.jpg)

