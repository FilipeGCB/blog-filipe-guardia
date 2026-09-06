# Home portrait provenance

Status: approved-canonical  
Source: user-approved cinematic portrait from 2026-08-26  
Canonical file: `hero-approved-master.webp`  
Canonical target: 3840 × 2160 (16:9)  
Allowed: aspect-preserving upscale, format conversion, high-quality compression, responsive crop, background extension outside the subject  
Forbidden: face regeneration, face restoration that changes identity, pose change, expression change, scenario replacement, non-uniform scaling  
Desktop focal point: 64% 48%  
Mobile focal point: 68% 46%

The canonical master must preserve the exact approved face, pose, expression and central composition. Desktop derivatives are generated at 960, 1440, 1920, 2560 and 3840 px so Full HD, QHD, 4K and high-density/zoomed displays do not fall back to a low-resolution source. Mobile keeps its dedicated 4:5 crop at 480, 768 and 960 px.

Responsive derivatives are generated deterministically by `scripts/generate-home-hero.mjs`. The browser receives AVIF/WebP variants selected through `srcset`; the canonical source itself is not shipped directly. No generative face enhancement is permitted in this pipeline.
