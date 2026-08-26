# Home portrait provenance

Status: approved-canonical  
Source: user-approved second cinematic portrait from 2026-08-26  
Source encoding: canonical WebP bytes preserved as base64 text for lossless repository transport; build tooling decodes this exact source before creating derivatives.  
Allowed: upscale, format conversion, compression, responsive crop, background extension  
Forbidden: face regeneration, pose change, expression change, scenario replacement, non-uniform scaling  
Desktop focal point: 64% 48%  
Mobile focal point: 68% 46%

The canonical source decodes to the exact approved 16:9 portrait. Responsive derivatives must be generated deterministically by `scripts/generate-home-hero.mjs`; the source itself is never shipped to the browser.
