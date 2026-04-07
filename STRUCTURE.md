## Overall structure

```
src/
├── app/            # Next.js App Router pages and layouts
├── components/     # Truly shared UI components
├── features/       # Feature modules
│   ├── auth/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── services/
│   │   └── types/
│   ├── posts/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── services/
│   │   └── types/
│   └── shared/     # Cross-feature shared code
├── lib/            # Core utilities
└── types/          # Global types
```

## Feature structure

```
features/auth/
├── components/
│ ├── sign-in.tsx
│ ├── sign-up.tsx
│ └── index.ts
├── hooks/
│ ├── use-auth.ts
│ └── index.ts
├── services/
│ ├── auth.ts
│ └── index.ts
├── types/
│ ├── auth.types.ts
│ └── index.ts
└── index.ts
```

## Index file example

```
// features/auth/components/index.ts
export * from './sign-in';
export * from './sign-up';
// Internal components are not exported
```
