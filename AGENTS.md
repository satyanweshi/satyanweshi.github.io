# Agentic Coding Instructions

This is a Jekyll-based personal website using the [al-folio](https://alshedivat.github.io/al-folio/) theme. It includes blog posts, book reviews, projects, and a CV.

## Build Commands

```bash
# Local development server (most common)
bundle exec jekyll serve --livereload

# Build the site
bundle exec jekyll build

# Install dependencies
bundle install

# Update dependencies
bundle update
```

## Lint/Format Commands

```bash
# Check formatting with Prettier
npx prettier . --check

# Fix formatting with Prettier
npx prettier . --write

# Pre-commit hooks (runs automatically)
pre-commit run --all-files
```

## Testing Commands

This is a static site - no unit tests. Quality is ensured via:

```bash
# Check for broken links (uses lychee)
lychee --user-agent 'curl/7.54' './**/*.md' './**/*.html'

# Build with strict mode to catch errors
bundle exec jekyll build --strict_front_matter
```

## Code Style Guidelines

### Markdown/Content Files

- **Front matter**: Use YAML format between triple dashes
- **Dates**: Format as `YYYY-MM-DD` in filenames and front matter
- **Tags/Categories**: Space-separated in front matter, lowercase with hyphens
- **URLs**: Always use `relative_url` filter for internal links
- **Line length**: No strict limit, but keep paragraphs readable
- **Images**: Use WebP format when possible, store in `assets/img/`

### Liquid Templates

- **Indentation**: 2 spaces
- **Filters**: Use `| escape`, `| strip_html`, `| relative_url` appropriately
- **Conditionals**: Use `{%-` and `-%}` to avoid extra whitespace
- **Comments**: Use `{%- comment -%}` for multi-line, `#` for single-line in logic

### JavaScript

- **Style**: Standard ES5/ES6, uses jQuery where appropriate
- **Indentation**: 2 spaces
- **Quotes**: Double quotes for strings
- **Semicolons**: Required
- **Location**: `assets/js/` for global scripts, `_scripts/` for Jekyll-processed JS
- **Event handlers**: Use `$(document).ready()` for jQuery

### CSS/SCSS

- **Location**: `_sass/` directory for partials
- **Indentation**: 2 spaces
- **Naming**: Use kebab-case for class names
- **Variables**: Use theme variables where available

### YAML Configuration

- **Indentation**: 2 spaces (critical for Jekyll)
- **Quotes**: Use quotes for strings containing special characters
- **Lists**: Use `-` for array items

## Project Structure

```
├── _config.yml          # Site configuration
├── _data/               # Data files (JSON, YAML, CSV)
├── _includes/           # Reusable HTML components
├── _layouts/            # Page templates (*.liquid)
├── _pages/              # Static pages
├── _posts/              # Blog posts (YYYY-MM-DD-title.md)
├── _books/              # Book reviews
├── _projects/           # Project pages
├── _sass/               # SCSS stylesheets
├── _scripts/            # Jekyll-processed JavaScript
├── assets/              # Static assets (js, css, img)
├── _bibliography/       # BibTeX files for publications
└── _site/               # Generated site (gitignored)
```

## Key Conventions

### Front Matter Template for Posts

```yaml
---
layout: post
title: "Post Title"
date: YYYY-MM-DD
description: "Brief description"
tags: tag-one tag-two
categories: category-name
---
```

### Creating New Posts

1. Create file in `_posts/` with format: `YYYY-MM-DD-title.md`
2. Add required front matter
3. Use Markdown for content
4. Run `bundle exec jekyll serve` to preview

### Adding Images

1. Place in `assets/img/`
2. Reference with: `![alt text](/assets/img/filename.webp)`
3. Enable responsive images via `imagemagick` in config

### External Links

- Automatically get `target="_blank"` and security attributes via `jekyll-link-attributes`
- No manual HTML needed

## Pre-commit Hooks

Configured in `.pre-commit-config.yaml`:
- Trailing whitespace removal
- End-of-file fixer
- YAML validation
- Large file check

## Deployment

- Automatic deployment via GitHub Actions on push to `master`
- Uses GitHub Pages for hosting
- See `.github/workflows/deploy.yml` for details

## Common Tasks

```bash
# Add new post
touch _posts/$(date +%Y-%m-%d)-my-post.md

# Check site health
bundle exec jekyll doctor

# Clean build artifacts
bundle exec jekyll clean
```
