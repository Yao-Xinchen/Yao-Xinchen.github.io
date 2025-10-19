---
title: "Omni WBR"
description: "Omni-directional Wheeled-Biped Robot Control with Emergent Gaits"
category: "RL Algorithm"
technologies: ["Isaac Lab", "Teacher-Student Framework", "PPO", "PyTorch"]
order: 1
image: "/projects/omni_wbr.png"
---

## Overview

Wheeled-biped robots combine the energy efficiency and speed of wheeled locomotion with the terrain adaptability of legged systems, making them ideal for applications like delivery, inspection, and rescue. However, existing control methods face critical limitations:

1. Model-based approaches rely on simplified dynamics and non-holonomic constraints that restrict omnidirectional mobility and terrain adaptability, essentially reducing the robot to a "Segway with legs"
2. Existing RL-based methods remain constrained to forward motion with explicit mode switching, lacking true omnidirectional mobility and adaptive hybrid locomotion
3. The potential of the wheeled-biped structure for adaptive hybrid locomotion across diverse terrains remains largely unexploited

## Isaac Lab Evaluation

The trained policy exhibits emergent gaits, seamlessly transitioning between wheeled and legged locomotion based on demands.

<div style="text-align: center;">
	<video width="80%" controls>
		<source src="/projects/omni_wbr_lab.mp4" type="video/mp4">
		Your browser does not support the video tag.
	</video>
	<p>Policy Evaluation in Isaac Lab</p>
</div>

## Sim-to-Sim in Mujoco

We have deployed the trained policy to Mujoco for further evaluation and simulation.

<div style="text-align: center;">
	<video width="80%" controls>
		<source src="/projects/omni_wbr_mujoco.mp4" type="video/mp4">
		Your browser does not support the video tag.
	</video>
	<p>Policy Evaluation in Mujoco</p>
</div>
