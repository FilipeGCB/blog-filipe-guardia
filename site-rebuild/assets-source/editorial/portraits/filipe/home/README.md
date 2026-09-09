# Home portrait provenance

Status: approved-canonical  
Source: image uploaded by the user in ChatGPT on 2026-09-08 and declared visually authoritative for the Home hero  
Authoritative upload: `Retrato Profissional em Escritório Moderno(1).png`  
Authoritative upload dimensions: 1536 × 1024 (3:2)  
Authoritative upload bytes: 2,779,842  
Authoritative upload SHA-256: `78d7575f2a5ebba92acc5328fc8856daf22c1286073eacca901c51c70bbff6a5`  
Canva preservation asset: `MAHUqjjXGSc`  
Canonical file: `hero-approved-master.png`  
Canonical SHA-256: pending materialization  
Allowed: deterministic responsive crop, format conversion and downscale-only derivative generation  
Forbidden: face regeneration, face restoration, pose change, expression change, scenario replacement, background extension, source-detail upscaling or non-uniform scaling  
Desktop focal point: 64% 48%  
Mobile focal point: 68% 46%

The uploaded image is the visual authority. The pipeline must preserve its face, pose, expression and central composition exactly. Because the source is 1536 × 1024, the site does not fabricate 1920/2560/3840 source detail. Desktop receives deterministic 16:9 derivatives at 960, 1440 and 1536 px. Mobile receives the dedicated 4:5 crop at 480, 768 and 819 px, the largest crop width available without enlargement.

Responsive derivatives are generated deterministically by `scripts/generate-home-hero.mjs`. The browser receives AVIF/WebP variants selected through `srcset`; the canonical source itself is not shipped directly. No generative image operation is permitted in this pipeline.
