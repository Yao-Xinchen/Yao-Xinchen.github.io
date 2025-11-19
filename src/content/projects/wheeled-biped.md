---
title: "Custom Wheeled-Biped Robot"
description: "A custom wheeled biped robot with 4 DOF, featuring an RL-based locomotion controller"
category: "RL Algorithm"
technologies: ["Isaac Gym", "RSL-RL", "ROS2"]
order: 5
image: "/projects/wheeled_biped.jpg"

github: "https://github.com/Yao-Xinchen/Meta-WL-Gym"

# Optional: Video link
# video: "https://youtube.com/watch?v=..."
---

## Overview

We designed a wheeled biped robot with 4 DOF and closed chain structure. I trained an RL-based locomotion controller in Isaac Gym using custom RSL-RL and deployed it with ROS2. It is an prototype for a larger wheeled biped robot used in our RoboMaster competition team.

## Sim-to-Real Challenges

The deployment revealed significant sim-to-real transfer challenges. The robot could stand up initially but started shaking and eventually fell, demonstrating the difficulty of transferring learned policies from simulation to physical hardware.

<div style="text-align: center;">
    <video width="80%" controls style="border-radius: 8px; margin: 1rem auto;">
        <source src="/projects/wheeled_biped_deploy_earlier.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
    <p><em>Early deployment attempt</em></p>
</div>

<div style="text-align: center;">
    <video width="80%" controls style="border-radius: 8px; margin: 1rem auto;">
        <source src="/projects/wheeled_biped_deploy_later.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
    <p><em>Later deployment attempt</em></p>
</div>
