---
layout: post
title: Agentic Coding - Improving Code Coverage
date: 2026-01-25
description: OpenCode Agentic Coding - Improving Code Coverage
tags: coding-agents opencode unit-tests integration-tests code-coverage
categories: coding-agents opencode unit-tests integration-tests code-coverage
---

This is the continuation of my exploration of [coding agents](/blog/2026/coding-agents-opencode/).

Instead of starting with a fresh project where there are enough examples on the internet (and frankly, too much noise) on how coding agents can one shot create something working (though the usefulness of that work is a topic for another day), I wanted to use it on an existing code base and see how best I can augment my work. Therefore, I picked that one area that most of the software engineers don't like working on - *test coverage*.

Even though TDDs have been around for decades, in practice, tests are an afterthought in most of the codebases. Honestly, they are not that well appreciated untill one or more of the following happens:

- The codebase is complex and large enough that simple changes can break random existing features.
- There are new members who have partial understanding of the codebase and they can make changes that can also break existing features.
- Your software will be used in a regulated setup and the one of the requirements to ensure the quality of your software is to have proper test coverage.

I picked up a project that has been under development for sometime by a team of 10+ software engineers. My approach to writing the test cases went through the following steps:

- Start with a one shot instruction to improve the test coverage.
- Read the test case documentation online, plan for the test cases and then improve the existing setup
- Look at specific functions and then give instructions to write unit/integration tests for those functions

For this exercise, I used the out-of-the-box open source models available in OpenCode. They were **<u>MiniMax M2.1</u>** and **<u>GLM 4.7</u>**. In my experience, I found them powerful enough to understand the codebase and do guided work but not smart enough to one shot the problem. I would sometime in the near future perform the same exercise using vendor models such as Claude Opus, GPT Codex or Gemini and compare the performance.

### Start with a one shot instruction to improve the test coverage

I started with a simple instruction to analyze the code coverage of a codebase that has been in active development for a year by a team of 10+ engineers. Like many other codebases, this had no tests and the team mostly relies on a QA team to ensure that the product has no bugs. The model (**<u>MiniMax M2.1</u>**) found no tests and therefore, I asked to write unit-tests for the codebase. OpenCode ran for a while, did some compaction in the middle and wrote the test cases. The final test coverage report looked like below:

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/one_shot_unit_test_coverage.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

43% may be an impressive number to look at for a one-shot prompt. However, when I looked at the tests, I realized I need to do more work. A few notes from looking at the tests:

- The model came up with the most trivial assertions that checks the controller path and controller class.
- There were no input/output based assertions and no negative tests.

**<u>These tests do not give me any confidence that they will be able to catch any regression.</u>**

Before trying to steer the agent to "THINK HARDER" and write something useful, I asked it to focus on only one of the services in the codebase and write some integration tests to improve the coverage further. Agent went and wrote some integration tests. I asked to execute it and it couldn't because there were syntax errors!!

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/integration_tests_syntax_error.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

I tried another one-shot prompt where I asked the agent to fix the syntax errors and run the tests again. The agent ran for approx. 15 mins (*it is truly impressive to look at something like that generate coherent, not necessarily useful, output*). Here is what happened after 15 mins:

- It was quite something to see the model think and fix syntax issues. It tried to read the PYTHONPATH, understand the classes and understand dependencies. 
- The agent had written a bunch of fixtures and mocks but the final output was still underwhelming.
- Wrote generic tests (screenshot below) that again do not guarantee that we can catch any regressions.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/integration_tests_generic.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

The coverage went up to 50% but as I said, it really does not tell me that I can make changes to the codebase with confidence.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/50_percent_test_coverage.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

### Read the test case documentation online, plan for the test cases and then improve the existing setup

In a new session, I asked OpenCode to read the Litestar documentation tests first. OpenCode out of the box uses the Exa Web Search tool to check information online. The next prompt was to ask OpenCode to build a plan to write test cases based on what it has learnt in the documentation. You can switch between the Build and Plan agents in OpenCode and when it is in the Plan mode, it won't make any edits to the codebase. It identified the following issues with its own test cases:

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/test_case_issues_identified.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

OpenCode asked a bunch of clarifying questions (a huge shoutout to the OpenCode team for the TUI work!!) and came up with the following plan:
<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/test_plan_scope.png" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/test_plan_details.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

The plan looked ok to me and I asked OpenCode to start working on it (Switch to the Build agent). It ran again for another ~10 mins and then ran the all the tests. The screenshot of the test coverage is below:

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/52_percent_test_coverage.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

There is an incremental increase in the test coverage. However, the quality of test cases remain quite low.

### Look at specific functions and then give instructions to write unit/integration tests for those functions

I don't have any screenshots to share here because I was not able to make any significant progress with this approach. In a new session, I asked the agent to understand the implementation of a single method, build a plan to write test cases and then write those test cases. The agent failed to make any progress. Here are some of the observations:

- It continued in a loop where it first assumed that the fixtures/mocks were not appropriate, created new ones, failed to run the tests, realized it has created a duplicate, tried to fix the issue and then went back to square one.
- It failed to understand the underlying code structure and struggled with a custom package that was present in the codebase.

### Next steps

I thoroughly enjoyed using OpenCode. Though the output of my activity is not very frutiful in the sense of code coverage, it gave me an idea of what such coding harnesses can do. These tools can create some very complex POCs in a short amount of time but need a different level of guidance to do production quality work. Here is what I am going to do next:

- I would want to try the same exercise with Opus or Codex and see if they fare any better. Using ClaudeCode or the Codex CLI may also produce different results. One of my queries at the [end of the last year](/blog/2025/ai-takeaways-2025/) was whether we are entering an era where the choice of the tool/IDE and the model will play big a role between the output of 2 equally skilled developers.
- I avoided giving extremely specific instructions on what to tests to write. This is what may be needed at the end of the day. However, that is not too far removed from writing the actual code. However, it would be an experiment worth trying.
- One of the main struggles of the agent was to understand the complexity of an existing codebase. This will need some hit-and-trial to build codebase specific instructions.