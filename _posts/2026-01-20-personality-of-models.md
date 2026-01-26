---
layout: post
title: Agentic Coding - Personality of Language Models
date: 2026-01-20
description: OpenCode Agentic Coding - Personality of Language Models
tags: coding-agents opencode gemini
categories: coding-agents generative-ai software-engineering
---

There have been many conversations on LLMs having a sycophantic personality. It is very annoying when these LLMs keep repeating their mistakes or when they do not get the intent right. However, while using Gemini 3 Flash Preview model, I got to see a very different personality. 

Gemini 3 Flash Preview has a somewhat aggressive style of communication. While working on one of the coding tasks, it uses words such as "laser focused" to describe itself. On one occassion, it became "puzzled" by the lack of file access it had and then went into a state of "quandary". This was in response to the read first rule that OpenCode mandates for every model before they try to modify the said file contents. Screenshots below.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/gemini_personality.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

Not sure if this the default personality baked into Gemini 3 Flash Preview. The other models that I have tested so far (MiniMax M2.1, GLM-4.7) usually communicate more formally.