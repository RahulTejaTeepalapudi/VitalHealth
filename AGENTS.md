# VitalHealth Development Guidelines

VitalHealth is a healthcare ordering and prescription management platform.

## Repository

This is a monorepo.

Frontend:
frontend/vital-health-web

Backend:
backend/

## Frontend

- Angular 22
- TypeScript
- Standalone components
- SCSS
- Angular Signals where appropriate
- Lazy-loaded feature routes
- Avoid unnecessary third-party UI frameworks
- Prefer reusable components
- Strict TypeScript

Angular source should follow:

src/app/
  core/
  shared/
  features/
  layouts/

## Angular Architecture

The Angular application uses feature-first architecture.

Source structure:

src/app/
- core/ - application-wide services, state, constants and infrastructure
- layouts/ - application layouts
- shared/ - genuinely reusable UI components
- features/ - business features

Each business feature may contain:

- pages/
- components/
- models/
- services/
- state/
- data/
- <feature>.routes.ts

Rules:

- Use Angular standalone components.
- Use lazy-loaded feature routes.
- Use Angular Signals for local and feature state.
- Do not add NgRx unless explicitly requested.
- Page components are route-level orchestration components.
- Presentational components communicate through inputs and outputs.
- Components must not directly access mock data.
- Data access must go through services.
- Mock data must be replaceable by HTTP API calls without changing UI components.
- Do not put feature-specific components in shared/.
- Do not create unused infrastructure or placeholder architecture.
- Use modern Angular control-flow syntax such as @if and @for.
- Keep components focused and strongly typed.

## Backend

- ASP.NET Core
- Clean Architecture
- REST APIs
- Entity Framework Core
- SQL Server

Projects:

VitalHealth.Api
VitalHealth.Application
VitalHealth.Domain
VitalHealth.Infrastructure

## General

- Do not introduce new dependencies unless required.
- Do not modify unrelated files.
- Keep components small and focused.
- Run builds after meaningful changes.
- Fix compiler errors before completing a task.