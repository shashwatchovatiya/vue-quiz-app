# Interactive Quiz Application with Timer and Results

## Description

Create a quiz app that presents a set of predefined questions. Users answer questions with immediate feedback, and a summary is shown at the end. This app highlights computed properties, watchers, dynamic components, and routing.

## Features

### Vue Instance & Data Binding

- Manage quiz questions and user answers.

### Directives

- Use `v-if`, `v-for`, and `v-show` to:
  - Render questions conditionally.
  - Show/hide feedback.

### Event Handling

- Use `v-on` to:
  - Capture user answers.
  - Navigate between questions.

### Two-way Binding

- Use `v-model` to:
  - Bind selected answers.

### Computed Properties & Watchers

- Calculate score.
- Watch for answer changes to update UI dynamically.

### Components (Global & Local)

- Create:
  - `Question` component
  - `ResultSummary` component

### Props & Events

- Pass question data via props.
- Emit answer events from child components.

### Slots

- Use named slots for:
  - Question content
  - Answer options

### Dynamic & Async Components

- Dynamically load different question types:
  - Multiple choice
  - True/false

### Vue Router Basics

- Set up routes for:
  - Quiz start page
  - Question pages
  - Results page

### Pinia for State Management

- Store:
  - Quiz progress
  - User answers

### Lifecycle Hooks

- Initialize quiz data in `created` or `mounted`.

### Custom Directives

- Highlight selected answers using a custom directive.

### Composables

- Create a reusable timer composable.

### Teleport, Suspense, and `<script setup>`

- Use `Teleport` for:
  - Modals (e.g., quiz instructions)
- Use `Suspense` for:
  - Loading question components
- Use `<script setup>`:
  - For clean and modern component syntax
