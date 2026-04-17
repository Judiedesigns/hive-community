# Hive — Community & Social Features Platform

## Product Name
**Hive** — A user-generated content platform with profiles, posts, likes, comments, and social discovery.

---

## System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     CLIENT (React)                         │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐   │
│  │Profile  │  │Posts    │  │Comments │  │Discovery│   │
│  │Page     │  │Page     │  │Section  │  │Page     │   │
│  └────┬────┘  └────┬────┘  └────┬────┘  └────┬────┘   │
│       └─────────────┴─────────────┴─────────────┘           │
│                         │                               │
│                    ┌────┴────┐                        │
│                    │  API    │                         │
│                    │ Client  │                         │
│                    └────┬────┘                        │
└─────────────────────────┼──────────────────────────────────┘
                      │
                      │ HTTPS
                      ▼
┌─────────────────────────────────────────────────────────────┐
│                   LOAD BALANCER (Nginx)                    │
└─────────────────────────┬──────────────────────────────────┘
                       │
        ┌──────────────┼──────────────┐
        ▼              ▼              ▼
┌───────────┐  ┌───────────┐  ┌───────────┐
│  API S1   │  │  API S2  │  │  API S3  │
│  Node.js  │  │  Node.js  │  │  Node.js  │
└─────┬─────┘  └─────┬─────┘  └─────┬─────┘
      │              │              │
      └──────────────┼──────────────┘
                   ▼
┌─────────────────────────────────────────────────────────────┐
│                  DATABASE (PostgreSQL)                   │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐       │
│  │ Users  │  │ Posts   │  │ Comments│  │Follows  │       │
│  └─────────┘  └─────────┘  └─────────┘  └─────────┘       │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐                     │
│  │ Likes  │  │ Sessions│  │Activity │  (audit)            │
│  └─────────┘  └─────────┘  └─���───────┘                     │
└─────────────────────────────────────────────────────────────┘
```

---

## Database Schema

### Users Table
```sql
CREATE TABLE users (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  username      VARCHAR(30) UNIQUE NOT NULL,
  email         VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  avatar_url    VARCHAR(500),
  bio           VARCHAR(500),
  created_at   TIMESTAMP DEFAULT NOW(),
  updated_at   TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_users_username ON users(username);
CREATE INDEX idx_users_email ON users(email);
```

### Posts Table
```sql
CREATE TABLE posts (
  id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id    UUID REFERENCES users(id) ON DELETE CASCADE,
  content   VARCHAR(2000) NOT NULL,
  is_deleted BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_posts_user ON posts(user_id);
CREATE INDEX idx_posts_created ON posts(created_at DESC);
```

### Comments Table
```sql
CREATE TABLE comments (
  id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  post_id    UUID REFERENCES posts(id) ON DELETE CASCADE,
  user_id    UUID REFERENCES users(id) ON DELETE CASCADE,
  content   VARCHAR(1000) NOT NULL,
  is_deleted BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_comments_post ON comments(post_id);
```

### Likes Table
```sql
CREATE TABLE likes (
  id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  post_id    UUID REFERENCES posts(id) ON DELETE CASCADE,
  user_id    UUID REFERENCES users(id) ON DELETE CASCADE,
  created_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(post_id, user_id)
);

CREATE INDEX idx_likes_post ON likes(post_id);
```

### Follows Table
```sql
CREATE TABLE follows (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  follower_id UUID REFERENCES users(id) ON DELETE CASCADE,
  following_id UUID REFERENCES users(id) ON DELETE CASCADE,
  created_at   TIMESTAMP DEFAULT NOW(),
  UNIQUE(follower_id, following_id)
);

CREATE INDEX idx_follows_follower ON follows(follower_id);
CREATE INDEX idx_follows_following ON follows(following_id);
```

### Sessions Table
```sql
CREATE TABLE sessions (
  id        UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id   UUID REFERENCES users(id) ON DELETE CASCADE,
  token     VARCHAR(255) UNIQUE NOT NULL,
  expires_at TIMESTAMP NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);
```

---

## API Endpoints

### Authentication
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/auth/register | Register new user |
| POST | /api/auth/login | Login, returns JWT |
| POST | /api/auth/logout | Invalidate session |
| GET | /api/auth/me | Get current user |

### Users
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/users/:id | Get user profile |
| PATCH | /api/users/:id | Update profile |
| GET | /api/users/:id/followers | Get followers list |
| GET | /api/users/:id/following | Get following list |
| GET | /api/users/search | Search users |

### Posts
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/posts | List posts (paginated) |
| POST | /api/posts | Create post |
| GET | /api/posts/:id | Get single post |
| PATCH | /api/posts/:id | Update post |
| DELETE | /api/posts/:id | Soft delete post |

### Likes
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/posts/:id/like | Like post |
| DELETE | /api/posts/:id/like | Unlike post |

### Comments
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/posts/:id/comments | List comments |
| POST | /api/posts/:id/comments | Add comment |
| DELETE | /api/comments/:id | Delete comment |

### Follows
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/users/:id/follow | Follow user |
| DELETE | /api/users/:id/follow | Unfollow user |

---

## Request/Response Formats

### Register
```json
// POST /api/auth/register
Request:  { "username": "string", "email": "string", "password": "string" }
Response: { "user": { "id", "username", "email" }, "token": "jwt" }
```

### Login
```json
// POST /api/auth/login
Request:  { "email": "string", "password": "string" }
Response: { "user": { "id", "username", "email" }, "token": "jwt" }
```

### Create Post
```json
// POST /api/posts
Request:  { "content": "string" }
Response: { "id", "content", "userId", "createdAt" }
```

### List Posts (Feed)
```json
// GET /api/posts?page=1&limit=20
Response: {
  "posts": [{
    "id", "content", "createdAt", "updatedAt",
    "user": { "id", "username", "avatarUrl" },
    "likesCount": number,
    "commentsCount": number,
    "isLiked": boolean
  }],
  "pagination": { "page", "limit", "total", "hasMore" }
}
```

### User Profile
```json
// GET /api/users/:id
Response: {
  "id", "username", "bio", "avatarUrl", "createdAt",
  "postsCount": number,
  "followersCount": number,
  "followingCount": number,
  "isFollowing": boolean
}
```

---

## Component Architecture

```
src/
├── components/
│   ├── auth/
│   │   ├── LoginForm.tsx
│   │   └── RegisterForm.tsx
│   ├── profile/
│   │   ├── ProfileCard.tsx
│   │   ├── EditProfileModal.tsx
│   │   └── ActivityFeed.tsx
│   ├── posts/
│   │   ├── PostCard.tsx
│   │   ├── PostList.tsx
│   │   ├── CreatePost.tsx
│   │   └── PostSkeleton.tsx
│   ├── comments/
│   │   ├── CommentItem.tsx
│   │   ├── CommentList.tsx
│   │   └── AddComment.tsx
│   ├── discovery/
│   │   ├── UserCard.tsx
│   │   ├── FollowButton.tsx
│   │   └── UserSearch.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── Input.tsx
│       ├── Avatar.tsx
│       ├── Modal.tsx
│       └── Toast.tsx
├── hooks/
│   ├── useAuth.ts
│   ├── usePosts.ts
│   ├── useComments.ts
│   └── useFollow.ts
├── services/
│   ├── api.ts
│   ├── auth.service.ts
│   ├── posts.service.ts
│   └── users.service.ts
├── store/
│   ├── auth.store.ts
│   └── posts.store.ts
├── types/
│   └── index.ts
└── styles/
    └── variables.css
```

---

## Design System

### Color Palette
| Role | Token | Value |
|------|-------|-------|
| Background | --color-bg | #0D0D0D |
| Surface | --color-surface | #1A1A1A |
| Surface Elevated | --color-surface-elevated | #242424 |
| Border | --color-border | #333333 |
| Text Primary | --color-text-primary | #FFFFFF |
| Text Secondary | --color-text-secondary | #A0A0A0 |
| Text Muted | --color-text-muted | #666666 |
| Accent | --color-accent | #FF6B35 |
| Accent Hover | --color-accent-hover | #FF8555 |
| Success | --color-success | #22C55E |
| Error | --color-error | #EF4444 |

### Typography
| Token | Font | Size | Weight | Line Height |
|-------|------|------|--------|------------|
| --font-display | Inter | 32px | 700 | 1.2 |
| --font-h1 | Inter | 24px | 600 | 1.3 |
| --font-h2 | Inter | 20px | 600 | 1.4 |
| --font-body | Inter | 16px | 400 | 1.5 |
| --font-small | Inter | 14px | 400 | 1.5 |
| --font-caption | Inter | 12px | 400 | 1.4 |

### Spacing Scale
| Token | Value |
|-------|-------|
| --space-1 | 4px |
| --space-2 | 8px |
| --space-3 | 12px |
| --space-4 | 16px |
| --space-5 | 24px |
| --space-6 | 32px |
| --space-8 | 48px |
| --space-10 | 64px |

### Border Radius
| Token | Value |
|-------|-------|
| --radius-sm | 4px |
| --radius-md | 8px |
| --radius-lg | 12px |
| --radius-full | 9999px |

### Shadows
| Token | Value |
|-------|-------|
| --shadow-sm | 0 1px 2px rgba(0,0,0,0.3) |
| --shadow-md | 0 4px 12px rgba(0,0,0,0.4) |
| --shadow-lg | 0 8px 24px rgba(0,0,0,0.5) |

### Component Specifications

**Button**
- Variants: primary, secondary, ghost, danger
- Sizes: sm (32px), md (40px), lg (48px)
- States: default, hover, active (scale 0.98), disabled (opacity 0.5), loading

**Input**
- Height: 44px
- Padding: 12px 16px
- Border: 1px solid --color-border
- Focus: border-color --color-accent, ring 2px

**Avatar**
- Sizes: xs (24px), sm (32px), md (40px), lg (64px), xl (96px)
- Fallback: initials on gradient background

**PostCard**
- Background: --color-surface
- Padding: 16px
- Border-radius: 12px
- Elements: avatar, username, timestamp, content, actions

---

## Middleware Flow

```
Request → Rate Limiter → Auth Check → Validation → Route Handler → Response
              │            │           │
         max 100/min   JWT check    Joi schemas
                      or 401
```

---

## Security Requirements

| Layer | Implementation |
|-------|---------------|
| Password | bcrypt cost 12 |
| Auth | JWT, 7-day expiry, HTTP-only cookie |
| SQL | Parameterized queries only |
| XSS | React auto-escape |
| CSRF | Same-site cookie |
| Rate Limit | 100 req/min per IP |
| Input | Max length enforced |

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | React + TypeScript |
| Styling | CSS Modules / Tailwind |
| Backend | Node.js + Express |
| Database | PostgreSQL |
| Auth | JWT + bcrypt |
| Deployment | Docker + Vercel (FE) / Railway (BE) |

---

## Definition of Done

- [ ] User can register and log in
- [ ] Profile CRUD (read, update) works
- [ ] Posts can be created, read, edited, deleted
- [ ] Likes toggle on/off, count updates
- [ ] Comments can be added and removed
- [ ] Follow/unfollow updates counts and lists
- [ ] User search returns matches
- [ ] All endpoints return proper HTTP status codes
- [ ] Basic unit tests pass for core logic
- [ ] No critical security vulnerabilities

---

## Out of Scope (V1)

- Rich media uploads (images, video)
- Direct messaging
- Notifications system
- Hashtags / tagging
- Private groups
- Verification / badges
- Analytics dashboard
- Content moderation tools
- API access