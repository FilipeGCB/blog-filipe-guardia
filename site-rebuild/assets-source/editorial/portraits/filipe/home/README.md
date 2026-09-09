# Home portrait provenance

Status: approved-canonical  
Source: image uploaded by the user in ChatGPT on 2026-09-08 and declared visually authoritative for the Home hero  
Authoritative upload: `Retrato Profissional em Escritório Moderno(1).png`  
Authoritative upload dimensions: 1536 × 1024 (3:2)  
Authoritative upload bytes: 2,779,842  
Authoritative upload SHA-256: `78d7575f2a5ebba92acc5328fc8856daf22c1286073eacca901c51c70bbff6a5`  
Canonical repository file: `hero-approved-master.webp`  
Canonical normalization dimensions: 1536 × 1024  
Canonical normalization bytes: 208,714  
Canonical normalization SHA-256: `1be2843f635080c44386b1bc3b95f891107707c1f410eb3053503b557d6c804c`  
Normalization: same-dimension WebP storage conversion only; no resize, crop, face regeneration or geometric modification  
Allowed: storage-format normalization, deterministic responsive crop, format conversion and downscale-only derivative generation  
Forbidden: face regeneration, face restoration, pose change, expression change, scenario replacement, background extension, source-detail upscaling or non-uniform scaling  
Desktop focal point: 64% 48%  
Mobile focal point: 68% 46%

The uploaded PNG is the visual authority. The repository WebP is only a same-dimension storage normalization; no generative or geometric operation is applied while producing it. The pipeline must preserve the approved face, pose, expression and central composition. Because the source is 1536 × 1024, the site does not fabricate 1920/2560/3840 source detail. Desktop receives deterministic 16:9 derivatives at 960, 1440 and 1536 px. Mobile receives a dedicated 4:5 crop at 480, 768 and 819 px, the largest crop width available without enlargement.

Responsive derivatives are generated deterministically by `scripts/generate-home-hero.mjs`. The browser receives AVIF/WebP variants selected through `srcset`; the canonical source itself is not shipped directly. No generative image operation is permitted in this pipeline.
