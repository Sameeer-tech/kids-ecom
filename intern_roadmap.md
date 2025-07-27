# 12-Week E-commerce Workshop Curriculum: Building a Children's Clothing Store for Pakistan

## Project Overview
Build a modern, responsive children's clothing e-commerce website similar to Carter's, tailored for the Pakistani market with features like dual language support (English/Urdu), local payment methods, and culturally relevant design.

---

## Workshop 1: Project Setup & Modern Development Environment
**Date:** Week 1 | **Duration:** 4 hours

### Learning Objectives
- Set up a professional development environment
- Understand project structure and architecture
- Initialize Git repository and version control workflow
- Create initial Next.js project with TypeScript

### Tools & Technologies
- VS Code with extensions (ESLint, Prettier, GitLens)
- Git & GitHub
- Node.js (v20+) & npm/yarn
- Next.js 14 with App Router
- TypeScript
- Tailwind CSS

### Hands-On Exercises
1. Install development tools and configure VS Code
2. Create GitHub repository with proper .gitignore
3. Initialize Next.js project: `npx create-next-app@latest kidswear-pk --typescript --tailwind --app`
4. Set up ESLint and Prettier configuration
5. Create basic folder structure (components, lib, utils, types)
6. Build "Hello World" page with basic styling

### Resources & References
- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- Git workflow guide
- AI Prompt: "Explain Next.js 14 App Router structure for e-commerce"

### Milestone & Deliverable
- Working Next.js project deployed to Vercel
- GitHub repository with initial commit
- Development environment screenshot

---

## Workshop 2: Component Architecture & Design System
**Date:** Week 2 | **Duration:** 4 hours

### Learning Objectives
- Build reusable React components
- Implement atomic design principles
- Create a consistent design system
- Master Tailwind CSS utilities

### Tools & Technologies
- React 18 functional components
- Tailwind CSS & custom configuration
- Storybook (optional)
- Radix UI primitives
- clsx for conditional classes

### Hands-On Exercises
1. Create base components (Button, Card, Input, Badge)
2. Build layout components (Header, Footer, Container)
3. Implement responsive navigation menu
4. Design product card component
5. Set up custom Tailwind theme (colors, fonts for Pakistani aesthetic)
6. Create loading skeletons

### Resources & References
- [Tailwind CSS Components](https://tailwindui.com/)
- [Radix UI Documentation](https://www.radix-ui.com/)
- Component library best practices
- AI Prompt: "Create accessible React component with TypeScript"

### Milestone & Deliverable
- Component library with 8-10 base components
- Responsive header/footer
- Style guide documentation

---

## Workshop 3: Product Catalog & Data Modeling
**Date:** Week 3 | **Duration:** 4 hours

### Learning Objectives
- Design database schema for products
- Implement product listing pages
- Add filtering and sorting functionality
- Handle product variants (size, color)

### Tools & Technologies
- MongoDB/PostgreSQL with Prisma ORM
- Zod for schema validation
- React Query/SWR for data fetching
- Image optimization with Next.js

### Hands-On Exercises
1. Design product schema (name, price, sizes, colors, categories)
2. Create mock data for 20-30 products
3. Build product grid with responsive layout
4. Implement category filtering sidebar
5. Add sorting (price, popularity, new arrivals)
6. Create product detail page with image gallery

### Resources & References
- [Prisma Documentation](https://www.prisma.io/docs)
- MongoDB schema design patterns
- AI Prompt: "Design e-commerce product schema for children's clothing"

### Milestone & Deliverable
- Working product catalog with 3 categories
- Product detail pages
- Filtering and sorting functionality

---

## Workshop 4: Shopping Cart & State Management
**Date:** Week 4 | **Duration:** 4 hours

### Learning Objectives
- Implement global state management
- Build shopping cart functionality
- Handle cart persistence
- Create cart animations and feedback

### Tools & Technologies
- Zustand for state management
- Local Storage API
- React Context (for comparison)
- Framer Motion for animations

### Hands-On Exercises
1. Set up Zustand store for cart state
2. Implement add/remove/update cart items
3. Create cart drawer/modal component
4. Add quantity controls and size selection
5. Persist cart data in localStorage
6. Build cart summary with subtotal calculation

### Resources & References
- [Zustand Documentation](https://github.com/pmndrs/zustand)
- State management patterns
- AI Prompt: "Implement shopping cart with Zustand and TypeScript"

### Milestone & Deliverable
- Fully functional shopping cart
- Cart persistence across sessions
- Animated cart interactions

---

## Workshop 5: User Authentication & Profiles
**Date:** Week 5 | **Duration:** 4 hours

### Learning Objectives
- Implement secure authentication
- Create user registration/login flows
- Build user profile management
- Handle protected routes

### Tools & Technologies
- NextAuth.js v5
- JWT tokens
- bcrypt for password hashing
- React Hook Form + Yup validation
- Email verification (Resend API)

### Hands-On Exercises
1. Set up NextAuth.js with credentials provider
2. Create registration form with validation
3. Build login page with "Remember Me"
4. Implement password reset flow
5. Create user profile page
6. Add protected routes middleware

### Resources & References
- [NextAuth.js Documentation](https://next-auth.js.org/)
- JWT best practices
- AI Prompt: "Secure authentication flow with NextAuth.js"

### Milestone & Deliverable
- Complete authentication system
- User profile management
- Protected checkout route

---

## Workshop 6: Checkout Process & Forms
**Date:** Week 6 | **Duration:** 4 hours

### Learning Objectives
- Build multi-step checkout flow
- Create complex form handling
- Implement address management
- Add order summary

### Tools & Technologies
- React Hook Form
- Yup/Zod validation
- Multi-step form patterns
- Pakistani city/area data

### Hands-On Exercises
1. Design 3-step checkout (Address → Payment → Confirm)
2. Create address form with Pakistani cities
3. Build form validation and error handling
4. Implement shipping calculator
5. Add guest checkout option
6. Create order review page

### Resources & References
- [React Hook Form Advanced](https://react-hook-form.com/advanced-usage)
- Pakistani postal codes database
- AI Prompt: "Multi-step checkout form with React Hook Form"

### Milestone & Deliverable
- Complete checkout flow
- Address management system
- Order confirmation page

---

## Workshop 7: Payment Integration
**Date:** Week 7 | **Duration:** 4 hours

### Learning Objectives
- Integrate local payment gateways
- Handle payment security
- Implement order processing
- Add payment method selection

### Tools & Technologies
- JazzCash/EasyPaisa SDK
- Stripe (for cards)
- Webhook handling
- Payment encryption

### Hands-On Exercises
1. Set up JazzCash sandbox account
2. Implement payment gateway integration
3. Create payment method selector
4. Handle payment callbacks
5. Build order confirmation flow
6. Implement COD (Cash on Delivery) option

### Resources & References
- JazzCash Developer Documentation
- Payment security best practices
- AI Prompt: "Integrate Pakistani payment gateway in Next.js"

### Milestone & Deliverable
- Working payment integration
- Multiple payment methods
- Order success/failure handling

---

## Workshop 8: Admin Dashboard - Part 1
**Date:** Week 8 | **Duration:** 4 hours

### Learning Objectives
- Build admin authentication
- Create dashboard layout
- Implement product management
- Add inventory tracking

### Tools & Technologies
- Role-based access control
- Admin UI components
- Chart.js/Recharts for analytics
- Data tables with sorting

### Hands-On Exercises
1. Create admin login with role checking
2. Build dashboard layout with sidebar
3. Implement product CRUD operations
4. Create inventory management system
5. Add bulk upload for products
6. Build category management

### Resources & References
- [React Admin](https://marmelab.com/react-admin/)
- Dashboard UI patterns
- AI Prompt: "Build admin dashboard for e-commerce with Next.js"

### Milestone & Deliverable
- Admin authentication
- Product management interface
- Inventory tracking system

---

## Workshop 9: Admin Dashboard - Part 2 & Analytics
**Date:** Week 9 | **Duration:** 4 hours

### Learning Objectives
- Implement order management
- Create sales analytics
- Build customer management
- Add reporting features

### Tools & Technologies
- Data visualization libraries
- Export to CSV/PDF
- Real-time updates
- Email notifications

### Hands-On Exercises
1. Build order management interface
2. Create order status workflow
3. Implement sales analytics dashboard
4. Add customer database with search
5. Build revenue reports
6. Create email notification system

### Resources & References
- [Recharts Documentation](https://recharts.org/)
- Analytics best practices
- AI Prompt: "Create e-commerce analytics dashboard with charts"

### Milestone & Deliverable
- Complete order management
- Analytics dashboard
- Reporting system

---

## Workshop 10: Internationalization & Localization
**Date:** Week 10 | **Duration:** 4 hours

### Learning Objectives
- Implement multi-language support
- Add RTL support for Urdu
- Localize currency and dates
- Create language switcher

### Tools & Technologies
- next-intl or i18next
- RTL CSS techniques
- Urdu fonts (Noto Nastaliq)
- Currency formatting

### Hands-On Exercises
1. Set up i18n configuration
2. Create translation files (English/Urdu)
3. Implement language switcher
4. Add RTL support with Tailwind
5. Localize prices to PKR
6. Translate key pages and components

### Resources & References
- [next-intl Documentation](https://next-intl-docs.vercel.app/)
- RTL design guidelines
- AI Prompt: "Implement Urdu language support in Next.js"

### Milestone & Deliverable
- Bilingual website (English/Urdu)
- RTL layout support
- Localized content

---

## Workshop 11: Performance, SEO & Optimization
**Date:** Week 11 | **Duration:** 4 hours

### Learning Objectives
- Optimize Core Web Vitals
- Implement SEO best practices
- Add structured data
- Optimize images and assets

### Tools & Technologies
- Next.js Image component
- Lighthouse CI
- Schema.org markup
- Sitemap generation
- PWA features

### Hands-On Exercises
1. Implement dynamic meta tags
2. Add structured data for products
3. Optimize images with next/image
4. Create XML sitemap
5. Implement lazy loading
6. Add PWA manifest

### Resources & References
- [Web.dev Performance](https://web.dev/performance/)
- SEO for e-commerce guide
- AI Prompt: "Optimize Next.js e-commerce site for SEO"

### Milestone & Deliverable
- Lighthouse score > 90
- SEO-optimized pages
- PWA features

---

## Workshop 12: Deployment & DevOps
**Date:** Week 12 | **Duration:** 4 hours

### Learning Objectives
- Deploy to production
- Set up CI/CD pipeline
- Configure monitoring
- Implement security best practices

### Tools & Technologies
- Vercel/AWS deployment
- GitHub Actions
- Environment variables
- Cloudflare CDN
- Error tracking (Sentry)
- Analytics (Google Analytics)

### Hands-On Exercises
1. Set up production database
2. Configure environment variables
3. Deploy to Vercel with custom domain
4. Set up GitHub Actions for CI/CD
5. Implement error tracking
6. Add analytics and monitoring

### Resources & References
- [Vercel Deployment Guide](https://vercel.com/docs)
- DevOps best practices
- AI Prompt: "Deploy Next.js e-commerce to production"

### Milestone & Deliverable
- Live production website
- CI/CD pipeline
- Monitoring setup

---

## Summary Table

| Week | Workshop Title | Key Technologies | Deliverable |
|------|---------------|------------------|-------------|
| 1 | Project Setup & Environment | Next.js, TypeScript, Git | Working Next.js project on GitHub |
| 2 | Component Architecture | React, Tailwind CSS | Component library |
| 3 | Product Catalog | Prisma, MongoDB | Product listing & details |
| 4 | Shopping Cart | Zustand, localStorage | Functional cart system |
| 5 | Authentication | NextAuth.js, JWT | User auth & profiles |
| 6 | Checkout Process | React Hook Form | Multi-step checkout |
| 7 | Payment Integration | JazzCash, Stripe | Working payments |
| 8 | Admin Dashboard Pt.1 | RBAC, Charts | Product management |
| 9 | Admin Dashboard Pt.2 | Analytics, Reports | Order management |
| 10 | Internationalization | i18next, RTL | Bilingual site |
| 11 | Performance & SEO | Lighthouse, Schema | Optimized site |
| 12 | Deployment | Vercel, CI/CD | Live production site |

## Additional Notes

### Code Review Checkpoints
- End of Week 3: Architecture review
- End of Week 6: Security review
- End of Week 9: Performance review
- End of Week 12: Final review

### Version Control Best Practices
- Feature branch for each workshop
- Pull requests for all merges
- Conventional commit messages
- Tagged releases for milestones

### Continuous Learning Resources
- Official documentation for all tools
- Community Discord/Slack channels
- Weekly AI pair programming sessions
- Code review with instructor feedback
