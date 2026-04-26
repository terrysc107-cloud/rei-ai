# Phase 12 - Backend And Auth Migration

## Purpose

Replace local browser simulation with real persistence, auth, and user-owned data.

## Why This Phase Matters

This is the point where the product stops being a local-first prototype and becomes a real application.

## Scope

- Supabase auth
- persistent progress
- persistent favorites
- quiz attempts
- project submissions
- workflow requests
- RLS

## Required Work

1. Add Supabase auth and route protection.
2. Create the database schema for profiles, curriculum-linked progress, favorites, quiz attempts, submissions, and requests.
3. Add row-level security policies.
4. Replace local app state storage with backend persistence where appropriate.
5. Preserve the same user-facing flows while changing the storage layer underneath.

## Deliverables

- real auth
- real database persistence
- real user-owned product memory

## Dependencies

- product flows should be mature enough that the backend supports a stable model

## Definition Of Done

- users can sign in across devices
- progress and submissions persist
- access control is enforced safely
- the app no longer depends on browser storage for core functionality

## Risks And Notes

- do not migrate too early, or the data model will churn with product changes
