# Blockchain Developer Portfolio

## Overview

This is a full-stack blockchain developer portfolio website built with modern web technologies. The application showcases professional experience, projects, and skills in the Web3/blockchain space with a sophisticated dark theme inspired by contemporary portfolio designs.

## System Architecture

The application follows a monorepo structure with clear separation between client, server, and shared components:

### Frontend Architecture
- **React 18** with TypeScript for type safety
- **Vite** as the build tool for fast development and optimized production builds
- **Tailwind CSS** with custom CSS variables for theming
- **Framer Motion** for smooth animations and transitions
- **shadcn/ui** components for consistent, accessible UI elements
- **Radix UI** primitives for low-level UI components
- **TanStack Query** for efficient data fetching and state management

### Backend Architecture
- **Express.js** server with TypeScript
- **RESTful API** design with proper error handling middleware
- **Drizzle ORM** for database operations with PostgreSQL
- **Zod** for runtime type validation and schema enforcement
- **Session-based** request logging and monitoring

### Database Architecture
- **PostgreSQL** database with Drizzle ORM
- **Schema-first** approach with shared type definitions
- **Migration system** for database versioning
- Tables: `users`, `contacts` for portfolio functionality

## Key Components

### Client-Side Components
- **Navigation**: Fixed header with smooth scroll navigation
- **Hero Section**: Animated typing effect and call-to-action
- **About Section**: Professional summary with technology showcase
- **Experience Section**: Timeline-based work history
- **Projects Section**: Grid layout with project cards and filtering
- **Contact Section**: Form handling with validation
- **Wallet Integration**: Web3 wallet connection functionality
- **Floating Animations**: Cryptocurrency-themed background elements

### Server-Side Components
- **Contact API**: Handles form submissions with validation
- **Storage Layer**: Abstracted data access with in-memory and database implementations
- **Route Registration**: Centralized API route management
- **Static Serving**: Production-ready static file serving

### Shared Components
- **Database Schema**: Shared type definitions between client and server
- **Validation Schemas**: Zod schemas for form validation
- **Type Definitions**: TypeScript interfaces for data consistency

## Data Flow

1. **Client Interaction**: User interacts with React components
2. **State Management**: TanStack Query manages server state and caching
3. **API Requests**: Client makes HTTP requests to Express server
4. **Validation**: Server validates requests using Zod schemas
5. **Database Operations**: Drizzle ORM handles database interactions
6. **Response**: Server returns JSON responses to client
7. **UI Updates**: React components update based on response data

## External Dependencies

### Web3 Integration
- **@web3-react/core**: Web3 React integration
- **@web3-react/injected-connector**: MetaMask connection
- **@web3-react/walletconnect-connector**: WalletConnect protocol support

### Database & ORM
- **@neondatabase/serverless**: Serverless PostgreSQL connection
- **drizzle-orm**: Type-safe database operations
- **drizzle-kit**: Database migrations and schema management

### UI & Animations
- **framer-motion**: Animation library for smooth transitions
- **@radix-ui/***: Accessible UI component primitives
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Type-safe CSS class variants

### Development & Build
- **vite**: Modern build tool with HMR
- **typescript**: Type safety across the stack
- **@replit/vite-plugin-***: Replit-specific development tools

## Deployment Strategy

### Development
- **Hot Module Replacement**: Vite provides instant feedback during development
- **TypeScript Checking**: Continuous type checking with `tsc`
- **Database Migrations**: `drizzle-kit push` for schema synchronization

### Production Build
- **Client Build**: Vite optimizes React application with code splitting
- **Server Build**: esbuild bundles server code for Node.js
- **Static Assets**: Optimized images and fonts served efficiently
- **Environment Variables**: Database URL and API keys managed securely

### Database
- **PostgreSQL**: Production-ready database with connection pooling
- **Migrations**: Version-controlled schema changes
- **Backup Strategy**: Regular automated backups recommended

## User Preferences

Preferred communication style: Simple, everyday language.

## Changelog

Changelog:
- July 05, 2025. Initial setup