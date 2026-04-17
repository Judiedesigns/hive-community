/* ─── DATA ──────────────────────────────────────────── */
const GRADIENT_PALETTES = [
  'linear-gradient(135deg,#1A1A2E,#4F46E5)',
  'linear-gradient(135deg,#6366F1,#8B5CF6)',
  'linear-gradient(135deg,#10B981,#34D399)',
  'linear-gradient(135deg,#F59E0B,#FBBF24)',
  'linear-gradient(135deg,#EF4444,#F87171)',
  'linear-gradient(135deg,#3B82F6,#60A5FA)',
  'linear-gradient(135deg,#EC4899,#F472B6)',
  'linear-gradient(135deg,#14B8A6,#2DD4BF)',
];

const USERS = [
  { id:1, name:'Kofi Mensah',   handle:'@kofi_builds',   bio:'Full-stack dev building SaaS for emerging markets 🚀',          followers:3200,  following:280, gradient:GRADIENT_PALETTES[1], initials:'KM', avatar:'https://i.pravatar.cc/150?img=11' },
  { id:2, name:'Aisha Diallo',  handle:'@aisha_ux',      bio:'UX researcher obsessed with inclusive design across the continent 🎨', followers:8100, following:410, gradient:GRADIENT_PALETTES[6], initials:'AD', avatar:'https://i.pravatar.cc/150?img=16' },
  { id:3, name:'Emeka Obi',     handle:'@emeka_tech',    bio:'Founder @ Paystream. We make cross-border payments simple 💳',   followers:12400, following:550, gradient:GRADIENT_PALETTES[4], initials:'EO', avatar:'https://i.pravatar.cc/150?img=20' },
  { id:4, name:'Zara Nkosi',    handle:'@zaranko',       bio:'Photographer + storyteller. Documenting African urbanism 📷',    followers:5600,  following:320, gradient:GRADIENT_PALETTES[5], initials:'ZN', avatar:'https://i.pravatar.cc/150?img=28' },
  { id:5, name:'Amara Toure',   handle:'@amara_builds',  bio:'iOS dev & open source contributor. Swahili & French 🌿',         followers:2100,  following:190, gradient:GRADIENT_PALETTES[2], initials:'AT', avatar:'https://i.pravatar.cc/150?img=36' },
  { id:6, name:'Seun Adeyemi',  handle:'@seun_finance',  bio:'Fintech analyst & newsletter writer. Lagos → London 📊',         followers:6800,  following:440, gradient:GRADIENT_PALETTES[3], initials:'SA', avatar:'https://i.pravatar.cc/150?img=42' },
  { id:7, name:'Fatima Hassan', handle:'@fatima_codes',  bio:'Backend engineer. I write about distributed systems ⚡',          followers:4400,  following:260, gradient:GRADIENT_PALETTES[7], initials:'FH', avatar:'https://i.pravatar.cc/150?img=48' },
  { id:8, name:'David Kamau',   handle:'@dkamau',        bio:'Product manager at a Series B startup. Nairobi 🦁',              followers:9200,  following:620, gradient:GRADIENT_PALETTES[0], initials:'DK', avatar:'https://i.pravatar.cc/150?img=53' },
];

const TRENDING = [
  { cat:'Design · Trending',   tag:'#AfricanDesign',    count:'2,841 posts' },
  { cat:'Fintech · Trending',  tag:'#MobilePayments',   count:'1,203 posts' },
  { cat:'Tech · Trending',     tag:'#BuildInPublic',    count:'8,590 posts' },
  { cat:'Community',           tag:'#HiveCreators',     count:'540 posts'   },
  { cat:'Photography · Hot',   tag:'#LagosSunrise',     count:'3,120 posts' },
  { cat:'Founders · Trending', tag:'#StartupAfrica',    count:'6,470 posts' },
  { cat:'Dev · Trending',      tag:'#OpenSourceAfrica', count:'980 posts'   },
  { cat:'Culture',             tag:'#AfroTech2026',     count:'14,200 posts'},
];

let trendingExpanded = false;
let suggestionsExpanded = false;

const POSTS = [
  {
    id:1, userId:3, name:'Emeka Obi', handle:'@emeka_tech', initials:'EO', gradient:GRADIENT_PALETTES[4], avatar:'https://i.pravatar.cc/150?img=20',
    title: 'We just closed our seed round 🎉',
    content:'Cross-border payments in Africa shouldn\'t cost 8%. We\'re bringing that down to under 1%. Grateful for every early believer who saw the vision. The real work starts now.',
    img:'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&h=440',
    time:'2h', likes:284, comments:42, shares:91, bookmarks:67, liked:false, bookmarked:false
  },
  {
    id:2, userId:2, name:'Aisha Diallo', handle:'@aisha_ux', initials:'AD', gradient:GRADIENT_PALETTES[6], avatar:'https://i.pravatar.cc/150?img=16',
    title: 'Inclusive design still centres Western users — and that\'s a problem',
    content:'If your user interviews don\'t include someone who primarily uses mobile data with under 2GB/month, you\'re building for a fraction of the world. Hot take, but the data backs it up.',
    img:'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&h=440',
    time:'4h', likes:512, comments:88, shares:204, bookmarks:143, liked:true, bookmarked:false
  },
  {
    id:3, userId:1, name:'Kofi Mensah', handle:'@kofi_builds', initials:'KM', gradient:GRADIENT_PALETTES[1], avatar:'https://i.pravatar.cc/150?img=11',
    title: 'I built an SMS expense splitter — no app, no internet needed',
    content:'Tested it in areas with patchy coverage and it worked perfectly. Sometimes constraints are the best design brief. Here\'s how I built it in a weekend. 🔧',
    img:'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&h=440',
    time:'6h', likes:178, comments:31, shares:55, bookmarks:89, liked:false, bookmarked:true
  },
  {
    id:4, userId:4, name:'Zara Nkosi', handle:'@zaranko', initials:'ZN', gradient:GRADIENT_PALETTES[5], avatar:'https://i.pravatar.cc/150?img=28',
    title: 'City of Light — 90 nights documenting Lagos after dark 🌃',
    content:'This city never sleeps, and neither did I. Here\'s a first look at my new photo essay on Lagos from dusk to dawn: the street vendors, the generators, the skyline glow. ✨',
    img:'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=800&h=440',
    time:'9h', likes:921, comments:156, shares:340, bookmarks:278, liked:false, bookmarked:false
  },
  {
    id:5, userId:6, name:'Seun Adeyemi', handle:'@seun_finance', initials:'SA', gradient:GRADIENT_PALETTES[3], avatar:'https://i.pravatar.cc/150?img=42',
    title: 'Africa isn\'t "behind" in fintech — the data says otherwise',
    content:'M-Pesa launched in 2007. Nigeria processes more real-time payments than most of Europe. The next wave of global fintech innovation is coming from here. Full breakdown 🧵',
    img:'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&h=440',
    time:'12h', likes:1240, comments:203, shares:687, bookmarks:421, liked:true, bookmarked:true
  },
  {
    id:6, userId:7, name:'Fatima Hassan', handle:'@fatima_codes', initials:'FH', gradient:GRADIENT_PALETTES[7], avatar:'https://i.pravatar.cc/150?img=48',
    title: 'What actually separates senior from junior engineers',
    content:'When asked about a challenging project, don\'t just describe the technical problem. Describe how you navigated ambiguity, realigned stakeholders, and shipped anyway. That\'s the real difference.',
    img:'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&h=440',
    time:'1d', likes:673, comments:94, shares:312, bookmarks:198, liked:false, bookmarked:false
  },
  {
    id:7, userId:5, name:'Amara Toure', handle:'@amara_builds', initials:'AT', gradient:GRADIENT_PALETTES[2], avatar:'https://i.pravatar.cc/150?img=36',
    title: 'Offline-first isn\'t a feature — it\'s a requirement',
    content:'Spent two weeks in rural Côte d\'Ivoire testing our app with real users. Connectivity dropped every 20 minutes. We rewrote the entire sync layer. The lesson: design for no internet first, then layer connectivity on top. Everything else is backwards.',
    img: null,
    time:'2d', likes:389, comments:61, shares:142, bookmarks:95, liked:false, bookmarked:false
  },
  {
    id:8, userId:8, name:'David Kamau', handle:'@dkamau', initials:'DK', gradient:GRADIENT_PALETTES[0], avatar:'https://i.pravatar.cc/150?img=53',
    title: '47 no\'s before the first yes — what I learned fundraising in Nairobi',
    content:'Most investors asked the same three questions. Most said no for the same two reasons. After the 20th meeting I stopped taking it personally and started treating every rejection as a data point. By meeting 35 I had a pitch that worked. Happy to share the deck that finally got us the yes.',
    img: null,
    time:'3d', likes:1102, comments:178, shares:456, bookmarks:312, liked:false, bookmarked:false
  },
];

const COMMENTS_DATA = [
  { name:'Kofi Mensah', initials:'KM', gradient:GRADIENT_PALETTES[1], time:'1h', text:'This is exactly what we need. Congrats on the round, Emeka! 🙌' },
  { name:'Aisha Diallo', initials:'AD', gradient:GRADIENT_PALETTES[6], time:'1h 30m', text:'The 8% fee is insane. I send money home every month and it hurts. Rooting for you!' },
  { name:'David Kamau', initials:'DK', gradient:GRADIENT_PALETTES[0], time:'2h', text:'Would love to chat about expanding to East Africa. DM me when you have a moment!' },
  { name:'Amara Toure', initials:'AT', gradient:GRADIENT_PALETTES[2], time:'3h', text:'Incredible milestone. The diaspora market alone is massive — great timing.' },
];

const DISCOVER_POSTS = [
  {
    id:'dp1', category:'Fintech',
    user:{ name:'Emeka Obi', handle:'@emeka_tech', initials:'EO', gradient:GRADIENT_PALETTES[4], avatar:'https://i.pravatar.cc/150?img=20' },
    title:'Why cross-border payments in Africa still cost 8%',
    excerpt:"The hidden fees in African remittances aren't accidental — they're structural. Here's what needs to change, and why mobile-first infrastructure is the key to unlocking real financial access.",
    img:'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=440&h=280',
    tags:['Fintech','Payments','West Africa'],
    views:2541, likes:284, comments:42, time:'2h'
  },
  {
    id:'dp2', category:'Design',
    user:{ name:'Aisha Diallo', handle:'@aisha_ux', initials:'AD', gradient:GRADIENT_PALETTES[6], avatar:'https://i.pravatar.cc/150?img=16' },
    title:'Inclusive design isn\'t about edge cases — it\'s about the majority',
    excerpt:"Most 'inclusive design' research still centers Western users. If your user interviews don't include someone on under 2GB/month mobile data, you're building for a fraction of the world.",
    img:'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=440&h=280',
    tags:['Design','UX','Inclusion'],
    views:8120, likes:512, comments:88, time:'4h'
  },
  {
    id:'dp3', category:'Dev',
    user:{ name:'Kofi Mensah', handle:'@kofi_builds', initials:'KM', gradient:GRADIENT_PALETTES[1], avatar:'https://i.pravatar.cc/150?img=11' },
    title:'I built an expense splitter that works entirely over SMS',
    excerpt:"No app install. No internet required. Just type a number and split a bill. Tested in areas with patchy coverage — worked perfectly. Sometimes constraints are the best design brief.",
    img:'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=440&h=280',
    tags:['Dev','Mobile','East Africa'],
    views:3870, likes:178, comments:31, time:'6h'
  },
  {
    id:'dp4', category:'Photography',
    user:{ name:'Zara Nkosi', handle:'@zaranko', initials:'ZN', gradient:GRADIENT_PALETTES[5], avatar:'https://i.pravatar.cc/150?img=28' },
    title:'City of Light — 90 nights documenting Lagos from dusk to dawn',
    excerpt:"This city never sleeps, and neither did I. A photo essay on Lagos after dark: the street vendors, the generators, the skyline glow. Here's a first look.",
    img:'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=440&h=280',
    tags:['Photography','Lagos','West Africa'],
    views:14200, likes:921, comments:156, time:'9h'
  },
  {
    id:'dp5', category:'Writing',
    user:{ name:'Seun Adeyemi', handle:'@seun_finance', initials:'SA', gradient:GRADIENT_PALETTES[3], avatar:'https://i.pravatar.cc/150?img=42' },
    title:'The "Africa is behind in fintech" narrative is outdated — and here\'s the data',
    excerpt:"M-Pesa launched in 2007. Nigeria processes more real-time payments than most of Europe. The next wave of global fintech innovation is coming from here. A full breakdown.",
    img:'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=440&h=280',
    tags:['Writing','Fintech','East Africa'],
    views:19400, likes:1240, comments:203, time:'12h'
  },
  {
    id:'dp6', category:'Founders',
    user:{ name:'David Kamau', handle:'@dkamau', initials:'DK', gradient:GRADIENT_PALETTES[0], avatar:'https://i.pravatar.cc/150?img=53' },
    title:'What nobody tells you about raising a seed round in Nairobi',
    excerpt:"The pitch decks look the same, but the conversations are completely different. Investor questions, local context, and what actually got us to yes after 47 no's.",
    img:'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=440&h=280',
    tags:['Founders','Startups','East Africa'],
    views:6780, likes:445, comments:97, time:'1d'
  },
  {
    id:'dp7', category:'Dev',
    user:{ name:'Fatima Hassan', handle:'@fatima_codes', initials:'FH', gradient:GRADIENT_PALETTES[7], avatar:'https://i.pravatar.cc/150?img=48' },
    title:'Senior vs junior engineers: it\'s not about the code',
    excerpt:"When asked about a challenging project, don't just describe the technical problem. Describe how you navigated ambiguity, realigned stakeholders, and shipped anyway. That's the difference.",
    img:'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=440&h=280',
    tags:['Dev','Career','Engineering'],
    views:5300, likes:673, comments:94, time:'1d'
  },
  {
    id:'dp8', category:'Design',
    user:{ name:'Amara Toure', handle:'@amara_builds', initials:'AT', gradient:GRADIENT_PALETTES[2], avatar:'https://i.pravatar.cc/150?img=36' },
    title:'Designing for low-bandwidth: lessons from building in rural Côte d\'Ivoire',
    excerpt:"Offline-first isn't a feature — it's a fundamental design requirement for most of the continent. Here's the mental model shift that changed how I think about every product.",
    img:'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=440&h=280',
    tags:['Design','Mobile','West Africa'],
    views:4100, likes:289, comments:55, time:'2d'
  },
];

const NOTIFICATIONS = [
  { type:'like', text:'<strong>Kofi Mensah</strong> and <strong>28 others</strong> liked your post about mobile payment infrastructure.', time:'2m', unread:true },
  { type:'follow', text:'<strong>Aisha Diallo</strong> started following you.', time:'15m', unread:true },
  { type:'comment', text:'<strong>Emeka Obi</strong> replied to your comment: "Exactly! The data confirms this..."', time:'1h', unread:true },
  { type:'like', text:'<strong>Seun Adeyemi</strong> liked your reply on the fintech thread.', time:'3h', unread:false },
  { type:'follow', text:'<strong>Zara Nkosi</strong> started following you.', time:'5h', unread:false },
  { type:'comment', text:'<strong>Fatima Hassan</strong> mentioned you in a comment: "...as @florence noted..."', time:'8h', unread:false },
];

/* ─── STATE ─────────────────────────────────────────── */
let posts = [...POSTS];
let followingState = { 2: true, 3: true, 6: true };
let currentScreen = 'feed';
let currentFeedTab = 'for-you';
let myFollowingCount = 318;
let currentDiscoverQuery = '';
let myProfile = {
  name: 'Florence Osei',
  handle: '@florence',
  bio: 'Product designer & community builder. Passionate about fintech for Africa 🌍. Building things at the intersection of design and impact.',
  location: 'Accra, Ghana',
  website: 'florence.design',
  avatar: 'https://i.pravatar.cc/150?img=47'
};

/* ─── AVATAR HELPER ─────────────────────────────────── */
function avatarHTML(initials, gradient, size='avatar-40', imgUrl=null) {
  if (imgUrl) return `<img src="${imgUrl}" class="avatar ${size}" alt="${initials}" loading="lazy">`;
  return `<div class="avatar ${size}" style="background:${gradient}">${initials}</div>`;
}

function fmtNum(n) {
  if (n >= 1000) return (n/1000).toFixed(n >= 10000 ? 0 : 1) + 'K';
  return n;
}

/* ─── RENDER FEED ───────────────────────────────────── */
function renderFeed() {
  const el = document.getElementById('feed-list');
  let list = posts;
  if (currentFeedTab === 'following') {
    list = posts.filter(p => p.userId === 0 || followingState[p.userId]);
  }
  el.innerHTML = list.length
    ? list.map(p => renderPostCard(p)).join('')
    : '<div class="empty-state">Follow people to see their posts here.</div>';
}

function renderPostCard(p) {
  const likeIcon = p.liked
    ? '<i class="iconoir-heart-solid" style="font-size:16px;color:#E03535"></i>'
    : '<i class="iconoir-heart" style="font-size:16px"></i>';
  const bookmarkIcon = p.bookmarked
    ? '<i class="iconoir-bookmark-solid" style="font-size:16px"></i>'
    : '<i class="iconoir-bookmark" style="font-size:16px"></i>';
  const isOwn = p.handle === '@florence';
  const isFollowing = followingState[p.userId];

  const followBtn = (!isOwn && p.userId !== 0) ? `
    <button class="post-card-follow ${isFollowing ? 'following' : ''}" onclick="toggleFollowCard(event,${p.userId},this)">
      ${isFollowing ? 'Following' : '+ Follow'}
    </button>` : '';

  const moreMenu = isOwn ? `
    <div class="post-more-wrap">
      <button class="post-more-btn" onclick="togglePostMenu(event,${p.id})">···</button>
      <div class="post-more-dropdown" id="post-menu-${p.id}">
        <button class="post-more-item" onclick="showEditPostModal(${p.id})"><i class="iconoir-edit-pencil" style="font-size:14px"></i> Edit</button>
        <button class="post-more-item danger" onclick="showDeletePostModal(${p.id})"><i class="iconoir-trash" style="font-size:14px"></i> Delete</button>
      </div>
    </div>` : `
    <div class="post-more-wrap">
      <button class="post-more-btn" onclick="togglePostMenu(event,${p.id})">···</button>
      <div class="post-more-dropdown" id="post-menu-${p.id}">
        <button class="post-more-item">Not interested</button>
        <button class="post-more-item danger">Report post</button>
      </div>
    </div>`;

  return `
  <article class="post-card" id="post-${p.id}">
    <div class="post-header">
      ${avatarHTML(p.initials, p.gradient, 'avatar-40', p.avatar||null)}
      <div class="post-author-meta">
        <span class="post-name">${p.name}</span>
        <span class="post-handle">${p.handle} <span class="post-dot">·</span> ${p.time}</span>
      </div>
      ${followBtn}
      ${moreMenu}
    </div>

    <div class="post-body" onclick="openPost(${p.id})">
      ${p.title ? `<div class="post-title">${p.title}</div>` : ''}
      <div class="post-content">${p.content}</div>
      ${p.img ? `<img class="post-thumb" src="${p.img}" alt="" loading="lazy">` : ''}
    </div>

    <div class="post-actions">
      <button class="post-action like-btn ${p.liked?'liked':''}" onclick="toggleLike(${p.id})">
        ${likeIcon} <span class="post-action-label">${fmtNum(p.likes)}</span>
      </button>
      <button class="post-action comment-btn" onclick="toggleComments(${p.id})">
        <i class="iconoir-chat-bubble" style="font-size:16px"></i>
        <span class="post-action-label">${fmtNum(p.comments)}</span>
      </button>
      <button class="post-action repost-btn">
        <i class="iconoir-repeat" style="font-size:16px"></i>
        <span class="post-action-label">${fmtNum(p.shares)}</span>
      </button>
      <button class="post-action bookmark-btn ${p.bookmarked?'bookmarked':''}" onclick="toggleBookmark(${p.id})" style="margin-left:auto">
        ${bookmarkIcon}
      </button>
    </div>

    <div class="comments-section" id="comments-${p.id}">
      ${COMMENTS_DATA.slice(0,2).map(c => `
        <div class="comment-item">
          ${avatarHTML(c.initials, c.gradient, 'avatar-32', c.avatar||null)}
          <div class="comment-body">
            <div class="comment-header">
              <span class="comment-name">${c.name}</span>
              <span class="comment-time">${c.time}</span>
            </div>
            <div class="comment-text">${c.text}</div>
          </div>
        </div>
      `).join('')}
      <div class="comment-input-row">
        <img src="${myProfile.avatar}" class="avatar avatar-32" alt="FO" loading="lazy">
        <input class="comment-input" placeholder="Write a comment..." onkeydown="if(event.key==='Enter'){addComment(${p.id},this)}">
        <button class="comment-submit" onclick="addComment(${p.id},this.previousElementSibling)">Reply</button>
      </div>
    </div>
  </article>`;
}

/* ─── INTERACTIONS ──────────────────────────────────── */
function toggleLike(id) {
  const p = posts.find(x => x.id === id);
  if (!p) return;
  p.liked = !p.liked;
  p.likes += p.liked ? 1 : -1;
  renderFeed();
}

function toggleBookmark(id) {
  const p = posts.find(x => x.id === id);
  if (!p) return;
  p.bookmarked = !p.bookmarked;
  renderFeed();
  showToast(p.bookmarked ? 'Saved to bookmarks' : 'Removed from saved');
}

function renderSaved() {
  const saved = posts.filter(p => p.bookmarked);
  const el = document.getElementById('saved-list');
  if (!el) return;
  el.innerHTML = saved.length
    ? saved.map(p => renderPostCard(p)).join('')
    : `<div class="empty-state" style="padding:60px 24px;text-align:center">
        <i class="iconoir-bookmark" style="font-size:40px;color:var(--text-3);display:block;margin-bottom:12px"></i>
        <div style="font-size:16px;font-weight:600;color:var(--text-1);margin-bottom:6px">No saved posts yet</div>
        <div style="font-size:14px;color:var(--text-3)">Tap the bookmark icon on any post to save it here.</div>
      </div>`;
}

function toggleComments(id) {
  const el = document.getElementById(`comments-${id}`);
  if (el) el.classList.toggle('open');
}

function addComment(postId, input) {
  const text = input.value.trim();
  if (!text) return;
  const section = document.getElementById(`comments-${postId}`);
  const newComment = document.createElement('div');
  newComment.className = 'comment-item';
  newComment.style.animation = 'fadeSlide 0.3s ease';
  newComment.innerHTML = `
    ${avatarHTML('FO', GRADIENT_PALETTES[0], 'avatar-32')}
    <div class="comment-body">
      <div class="comment-header">
        <span class="comment-name">Florence Osei</span>
        <span class="comment-time">just now</span>
        <button class="comment-delete-btn" onclick="deleteComment(this)" title="Delete">×</button>
      </div>
      <div class="comment-text">${text}</div>
    </div>`;
  section.insertBefore(newComment, section.querySelector('.comment-input-row'));
  input.value = '';
  const p = posts.find(x => x.id === postId);
  if (p) p.comments++;
}

/* ─── COMPOSER ──────────────────────────────────────── */
const RING_R = 11;
const RING_CIRC = 2 * Math.PI * RING_R;

function updateComposer(el) {
  const len = el.value.length;
  const max = 280;
  const ratio = Math.min(len / max, 1);
  const remaining = max - len;
  const wrap = document.getElementById('progress-wrap');
  const fill = document.getElementById('progress-fill');
  const label = document.getElementById('progress-label');
  wrap.style.opacity = len > 0 ? '1' : '0';
  fill.style.strokeDashoffset = RING_CIRC * (1 - ratio);
  if (remaining <= 0) {
    fill.style.stroke = '#EF4444'; label.textContent = remaining;
    label.style.color = '#EF4444'; label.style.fontSize = '9px';
  } else if (remaining <= 20) {
    fill.style.stroke = '#F59E0B'; label.textContent = remaining;
    label.style.color = '#F59E0B'; label.style.fontSize = '9px';
  } else {
    fill.style.stroke = 'var(--accent)'; label.textContent = '';
  }
  document.getElementById('post-btn').disabled = (len === 0 && !composerImageDataUrl) || len > max;
  el.style.height = 'auto';
  el.style.height = el.scrollHeight + 'px';
}

function switchFeedTab(el) {
  document.querySelectorAll('.feed-tab').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
  currentFeedTab = el.textContent.trim() === 'Following' ? 'following' : 'for-you';
  renderFeed();
}

function switchPill(el) {
  el.closest('.filter-pills').querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
  el.classList.add('active');
  el.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  renderDiscover(currentDiscoverQuery, el.textContent.trim());
}

let composerImageDataUrl = null;

function handleComposerImage(input) {
  const file = input.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = e => {
    composerImageDataUrl = e.target.result;
    document.getElementById('composer-img-preview-img').src = composerImageDataUrl;
    document.getElementById('composer-img-preview').style.display = 'block';
    const ta = document.getElementById('composer-textarea');
    document.getElementById('post-btn').disabled = ta.value.trim().length === 0 && !composerImageDataUrl;
    updateComposer(ta);
  };
  reader.readAsDataURL(file);
  input.value = '';
}

function removeComposerImage() {
  composerImageDataUrl = null;
  document.getElementById('composer-img-preview').style.display = 'none';
  document.getElementById('composer-img-preview-img').src = '';
  const ta = document.getElementById('composer-textarea');
  document.getElementById('post-btn').disabled = ta.value.trim().length === 0;
}

function insertComposerLink() {
  const url = prompt('Paste a link:');
  if (!url) return;
  const ta = document.getElementById('composer-textarea');
  const pos = ta.selectionStart;
  ta.value = ta.value.slice(0, pos) + url + ta.value.slice(pos);
  ta.selectionStart = ta.selectionEnd = pos + url.length;
  ta.focus();
  updateComposer(ta);
}

const EMOJI_LIST = ['😀','😂','🥹','😍','🤩','🙏','🔥','💯','✨','🚀','💡','🎉','❤️','👏','💪','🌍','🌟','🎨','📱','💳','🦁','🌿','📊','⚡','🎯','🤝','💬','📸','🏆','🛠️'];

function toggleEmojiPicker(e) {
  e.stopPropagation();
  const picker = document.getElementById('emoji-picker');
  const isOpen = picker.style.display === 'flex';
  if (!isOpen) {
    picker.innerHTML = EMOJI_LIST.map(em =>
      `<button onclick="insertEmoji('${em}')" style="background:none;border:none;font-size:20px;cursor:pointer;padding:4px;border-radius:6px;line-height:1;" onmouseover="this.style.background='var(--hover)'" onmouseout="this.style.background='none'">${em}</button>`
    ).join('');
  }
  picker.style.display = isOpen ? 'none' : 'flex';
}

function insertEmoji(em) {
  const ta = document.getElementById('composer-textarea');
  const pos = ta.selectionStart;
  ta.value = ta.value.slice(0, pos) + em + ta.value.slice(pos);
  ta.selectionStart = ta.selectionEnd = pos + em.length;
  ta.focus();
  updateComposer(ta);
  document.getElementById('emoji-picker').style.display = 'none';
}

function submitPost() {
  const ta = document.getElementById('composer-textarea');
  const text = ta.value.trim();
  if (!text && !composerImageDataUrl) return;
  const newPost = {
    id: Date.now(), userId: 0,
    name: myProfile.name, handle: '@florence', initials: 'FO',
    gradient: 'linear-gradient(135deg,#1A1A2E,#4F46E5)', avatar: myProfile.avatar,
    title: '', content: text, img: composerImageDataUrl || null,
    time: 'just now',
    likes: 0, comments: 0, shares: 0, bookmarks: 0, liked: false, bookmarked: false
  };
  posts.unshift(newPost);
  ta.value = '';
  ta.style.height = 'auto';
  document.getElementById('progress-wrap').style.opacity = '0';
  document.getElementById('post-btn').disabled = true;
  removeComposerImage();
  renderFeed();
  const newEl = document.getElementById(`post-${newPost.id}`);
  if (newEl) newEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function focusComposer() {
  switchScreen('feed');
  setTimeout(() => document.getElementById('composer-textarea').focus(), 100);
}

/* ─── SINGLE POST ───────────────────────────────────── */
function openPost(id) {
  const p = posts.find(x => x.id === id) || POSTS.find(x => x.id === id);
  if (!p) return;
  const el = document.getElementById('single-post-content');
  el.innerHTML = `
    <div class="single-post-body">
      <div class="single-post-header">
        ${avatarHTML(p.initials, p.gradient, 'avatar-48', p.avatar||null)}
        <div class="single-post-user-info">
          <div class="name">${p.name}</div>
          <div class="handle">${p.handle}</div>
        </div>
      </div>
      ${p.title ? `<div class="single-post-title">${p.title}</div>` : ''}
      <div class="single-post-content">${p.content}</div>
      ${p.img ? `<img src="${p.img}" alt="" style="width:100%;border-radius:var(--r-md);margin-bottom:16px;object-fit:cover;max-height:400px;display:block;" loading="lazy">` : ''}
      <div class="single-post-time">Posted ${p.time} ago</div>
      <div class="single-post-stats">
        <span class="single-stat"><strong>${fmtNum(p.likes)}</strong> Likes</span>
        <span class="single-stat"><strong>${fmtNum(p.comments)}</strong> Comments</span>
        <span class="single-stat"><strong>${fmtNum(p.shares)}</strong> Reposts</span>
      </div>
      <div class="single-post-actions">
        <button class="post-action ${p.liked?'liked':''}" onclick="toggleLikeSingle(${p.id})">
          <i class="${p.liked?'iconoir-heart-solid':'iconoir-heart'}" style="font-size:18px${p.liked?';color:#E03535':''}"></i>
          Like
        </button>
        <button class="post-action">
          <i class="iconoir-chat-bubble" style="font-size:18px"></i>
          Reply
        </button>
        <button class="post-action">
          <i class="iconoir-repeat" style="font-size:18px"></i>
          Repost
        </button>
        <button class="post-action" style="margin-left:auto">
          <i class="iconoir-bookmark" style="font-size:18px"></i>
        </button>
      </div>
    </div>
    <div class="reply-composer">
      <img src="${myProfile.avatar}" class="avatar avatar-32" alt="FO" loading="lazy">
      <textarea placeholder="Post your reply…" rows="1"
        oninput="this.style.height='40px';this.style.height=Math.min(this.scrollHeight,120)+'px'"></textarea>
      <button class="reply-btn">Reply</button>
    </div>
    <div class="comments-list">
      ${COMMENTS_DATA.map(c => `
        <div class="comment-card">
          ${avatarHTML(c.initials, c.gradient, 'avatar-40')}
          <div style="flex:1">
            <div class="comment-header" style="margin-bottom:4px">
              <span class="comment-name" style="font-size:15px;font-weight:600">${c.name}</span>
              <span class="comment-time" style="font-size:13px;margin-left:6px">${c.time} ago</span>
            </div>
            <div style="font-size:15px;color:var(--text-2);line-height:1.6">${c.text}</div>
            <div class="post-actions" style="margin-top:10px">
              <button class="post-action"><i class="iconoir-heart" style="font-size:15px"></i> 12</button>
              <button class="post-action"><i class="iconoir-chat-bubble" style="font-size:15px"></i> Reply</button>
            </div>
          </div>
        </div>
      `).join('')}
    </div>
  `;
  switchScreen('single');
}

function toggleLikeSingle(id) {
  toggleLike(id);
  openPost(id);
}

/* ─── DISCOVER ──────────────────────────────────────── */
function renderDiscover(query='', category='All') {
  const q = query.toLowerCase();
  const filtered = DISCOVER_POSTS.filter(p => {
    const matchSearch = !q ||
      p.title.toLowerCase().includes(q) ||
      p.excerpt.toLowerCase().includes(q) ||
      p.user.name.toLowerCase().includes(q) ||
      p.tags.some(t => t.toLowerCase().includes(q));
    const matchCat = category === 'All' || p.category === category ||
      p.tags.some(t => t === category);
    return matchSearch && matchCat;
  });
  document.getElementById('discover-grid').innerHTML = filtered.length
    ? filtered.map(p => renderDiscoverCard(p)).join('')
    : '<div class="empty-state">No posts found</div>';
}

function renderDiscoverCard(p) {
  return `
    <div class="discover-card" onclick="openDiscoverPost('${p.id}')" style="cursor:pointer">
      <div class="discover-card-body">
        <div class="discover-card-author">
          ${avatarHTML(p.user.initials, p.user.gradient, 'avatar-32', p.user.avatar||null)}
          <span class="discover-card-author-name">${p.user.name}</span>
          <span>·</span>
          <span>${p.time}</span>
          <span>·</span>
          <span class="discover-card-cat">${p.category}</span>
        </div>
        <div class="discover-card-title">${p.title}</div>
        <div class="discover-card-excerpt">${p.excerpt}</div>
        <div class="discover-card-tags">${p.tags.map(t => `<span class="discover-card-tag">#${t}</span>`).join('')}</div>
        <div class="discover-card-stats">
          <span class="discover-card-stat"><i class="iconoir-eye-solid" style="font-size:13px"></i> ${fmtNum(p.views)}</span>
          <span class="discover-card-stat"><i class="iconoir-heart" style="font-size:13px"></i> ${fmtNum(p.likes)}</span>
          <span class="discover-card-stat"><i class="iconoir-chat-bubble" style="font-size:13px"></i> ${fmtNum(p.comments)}</span>
          <span style="margin-left:auto"><i class="iconoir-bookmark" style="font-size:15px;color:var(--text-3)"></i></span>
        </div>
      </div>
      ${p.img ? `<img class="discover-card-thumb" src="${p.img}" alt="" loading="lazy">` : ''}
    </div>
  `;
}

function openDiscoverPost(id) {
  const p = DISCOVER_POSTS.find(x => x.id === id);
  if (!p) return;
  const el = document.getElementById('single-post-content');
  el.innerHTML = `
    <div class="single-post-body">
      <div class="single-post-header">
        ${avatarHTML(p.user.initials, p.user.gradient, 'avatar-48', p.user.avatar||null)}
        <div class="single-post-user-info">
          <div class="name">${p.user.name}</div>
          <div class="handle">${p.user.handle}</div>
        </div>
      </div>
      <div class="single-post-title">${p.title}</div>
      <div class="single-post-content">${p.excerpt}</div>
      ${p.img ? `<img src="${p.img}" alt="" style="width:100%;border-radius:var(--r-md);margin-bottom:16px;object-fit:cover;max-height:400px;display:block;" loading="lazy">` : ''}
      <div class="single-post-time">Posted ${p.time} ago</div>
      <div class="single-post-stats">
        <span class="single-stat"><strong>${fmtNum(p.likes)}</strong> Likes</span>
        <span class="single-stat"><strong>${fmtNum(p.comments)}</strong> Comments</span>
        <span class="single-stat"><strong>${fmtNum(p.views)}</strong> Views</span>
      </div>
      <div class="single-post-actions">
        <button class="post-action">
          <i class="iconoir-heart" style="font-size:18px"></i>
          Like
        </button>
        <button class="post-action">
          <i class="iconoir-chat-bubble" style="font-size:18px"></i>
          Reply
        </button>
        <button class="post-action">
          <i class="iconoir-repeat" style="font-size:18px"></i>
          Repost
        </button>
        <button class="post-action" style="margin-left:auto">
          <i class="iconoir-bookmark" style="font-size:18px"></i>
        </button>
      </div>
    </div>
    <div class="reply-composer">
      <img src="${myProfile.avatar}" class="avatar avatar-32" alt="FO" loading="lazy">
      <textarea placeholder="Post your reply…" rows="1"
        oninput="this.style.height='40px';this.style.height=Math.min(this.scrollHeight,120)+'px'"></textarea>
      <button class="reply-btn">Reply</button>
    </div>
    <div class="comments-list">
      ${COMMENTS_DATA.map(c => `
        <div class="comment-card">
          ${avatarHTML(c.initials, c.gradient, 'avatar-40')}
          <div style="flex:1">
            <div class="comment-header" style="margin-bottom:4px">
              <span class="comment-name" style="font-size:15px;font-weight:600">${c.name}</span>
              <span class="comment-time" style="font-size:13px;margin-left:6px">${c.time} ago</span>
            </div>
            <div style="font-size:15px;color:var(--text-2);line-height:1.6">${c.text}</div>
            <div class="post-actions" style="margin-top:10px">
              <button class="post-action"><i class="iconoir-heart" style="font-size:15px"></i> 12</button>
              <button class="post-action"><i class="iconoir-chat-bubble" style="font-size:15px"></i> Reply</button>
            </div>
          </div>
        </div>
      `).join('')}
    </div>
  `;
  switchScreen('single');
}

function filterUsers(q) {
  currentDiscoverQuery = q;
  const activePill = document.querySelector('.filter-pills .pill.active');
  renderDiscover(q, activePill ? activePill.textContent.trim() : 'All');
}

function toggleFollowCard(e, userId, btn) {
  e.stopPropagation();
  toggleFollow(userId, btn);
  btn.textContent = followingState[userId] ? 'Following' : '+ Follow';
  btn.classList.toggle('following', !!followingState[userId]);
}

function toggleFollow(id, btn) {
  followingState[id] = !followingState[id];
  btn.classList.toggle('following', followingState[id]);
  if (!btn.classList.contains('post-card-follow')) {
    btn.textContent = followingState[id] ? 'Following' : 'Follow';
  }
  const user = USERS.find(u => u.id === id);
  if (user) user.followers += followingState[id] ? 1 : -1;
  myFollowingCount += followingState[id] ? 1 : -1;
  const followingEl = document.getElementById('profile-following-num');
  if (followingEl) followingEl.textContent = fmtNum(myFollowingCount);
  renderRSidebar();
  renderDiscover(currentDiscoverQuery);
}

/* ─── RIGHT SIDEBAR ─────────────────────────────────── */
function renderRSidebar() {
  const limit = suggestionsExpanded ? USERS.length : 4;
  document.getElementById('rsidebar-suggestions').innerHTML = USERS.slice(0, limit).map(u => `
    <div class="suggest-user">
      ${avatarHTML(u.initials, u.gradient, 'avatar-40', u.avatar||null)}
      <div class="suggest-info">
        <div class="suggest-name">${u.name}</div>
        <div class="suggest-handle">${u.handle}</div>
      </div>
      <button class="follow-btn ${followingState[u.id]?'following':''}" onclick="toggleFollow(${u.id},this)">
        ${followingState[u.id] ? 'Following' : 'Follow'}
      </button>
    </div>
  `).join('');

  const tLimit = trendingExpanded ? TRENDING.length : 4;
  document.getElementById('trending-list').innerHTML = TRENDING.slice(0, tLimit).map(t => `
    <div class="trending-item">
      <div class="trending-item-body">
        <div class="trending-cat">${t.cat}</div>
        <div class="trending-tag-pill">${t.tag}</div>
        <div class="trending-count">${t.count}</div>
      </div>
      <button class="trending-more-btn">···</button>
    </div>
  `).join('');
}

function toggleSuggestions(btn) {
  suggestionsExpanded = !suggestionsExpanded;
  btn.textContent = suggestionsExpanded ? 'Show less' : 'Show more';
  renderRSidebar();
}

function toggleTrending(btn) {
  trendingExpanded = !trendingExpanded;
  btn.textContent = trendingExpanded ? 'Show less' : 'Show more';
  renderRSidebar();
}

/* ─── PROFILE ───────────────────────────────────────── */
function renderProfile() {
  document.getElementById('profile-posts').innerHTML = POSTS.slice(0,3).map(p => renderPostCard(p)).join('');
}

/* ─── NOTIFICATIONS ─────────────────────────────────── */
function renderNotifications() {
  document.getElementById('notif-list').innerHTML = NOTIFICATIONS.map(n => `
    <div class="notif-item ${n.unread ? 'unread' : ''}">
      <div class="notif-icon ${n.type}">
        ${n.type === 'like' ? '<i class="iconoir-heart-solid" style="font-size:16px"></i>' : ''}
        ${n.type === 'follow' ? '<i class="iconoir-user-plus" style="font-size:16px"></i>' : ''}
        ${n.type === 'comment' ? '<i class="iconoir-chat-bubble" style="font-size:16px"></i>' : ''}
      </div>
      <div style="flex:1">
        <div class="notif-text">${n.text}</div>
        <div class="notif-time">${n.time}</div>
      </div>
      ${n.unread ? '<div class="unread-dot"></div>' : ''}
    </div>
  `).join('');
}

/* ─── MODAL ─────────────────────────────────────────── */
let pendingDeleteId = null;
let pendingEditId   = null;

function openModal(id) {
  document.querySelectorAll('.modal-box').forEach(b => b.classList.add('hidden'));
  document.getElementById(id).classList.remove('hidden');
  document.getElementById('modal-overlay').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}
function closeModal() {
  document.getElementById('modal-overlay').classList.add('hidden');
  document.body.style.overflow = '';
  pendingDeleteId = null;
  pendingEditId   = null;
}

function togglePostMenu(e, id) {
  e.stopPropagation();
  const menu = document.getElementById(`post-menu-${id}`);
  const wasOpen = menu.classList.contains('open');
  document.querySelectorAll('.post-more-dropdown.open').forEach(d => d.classList.remove('open'));
  if (!wasOpen) menu.classList.add('open');
}
document.addEventListener('click', () => {
  document.querySelectorAll('.post-more-dropdown.open').forEach(d => d.classList.remove('open'));
});

function showDeletePostModal(id) {
  document.querySelectorAll('.post-more-dropdown.open').forEach(d => d.classList.remove('open'));
  pendingDeleteId = id;
  openModal('modal-delete-post');
}
function confirmDeletePost() {
  posts = posts.filter(p => p.id !== pendingDeleteId);
  closeModal();
  renderFeed();
  if (currentScreen === 'profile') renderProfile();
}

function showEditPostModal(id) {
  document.querySelectorAll('.post-more-dropdown.open').forEach(d => d.classList.remove('open'));
  const p = posts.find(x => x.id === id);
  if (!p) return;
  pendingEditId = id;
  document.getElementById('edit-post-textarea').value = p.content;
  openModal('modal-edit-post');
}
function confirmEditPost() {
  const p = posts.find(x => x.id === pendingEditId);
  if (!p) return;
  const text = document.getElementById('edit-post-textarea').value.trim();
  if (!text) return;
  p.content = text;
  closeModal();
  renderFeed();
  if (currentScreen === 'profile') renderProfile();
}

function deleteComment(btn) {
  btn.closest('.comment-item').remove();
}

function showEditProfileModal() {
  document.getElementById('ep-name').value     = myProfile.name;
  document.getElementById('ep-bio').value      = myProfile.bio;
  document.getElementById('ep-location').value = myProfile.location;
  document.getElementById('ep-website').value  = myProfile.website;
  document.getElementById('ep-avatar').value   = myProfile.avatar;
  openModal('modal-edit-profile');
}
function confirmEditProfile() {
  myProfile.name     = document.getElementById('ep-name').value.trim()     || myProfile.name;
  myProfile.bio      = document.getElementById('ep-bio').value.trim();
  myProfile.location = document.getElementById('ep-location').value.trim();
  myProfile.website  = document.getElementById('ep-website').value.trim();
  const newAvatar    = document.getElementById('ep-avatar').value.trim();
  if (newAvatar) myProfile.avatar = newAvatar;
  closeModal();
  applyProfileUpdate();
}
function applyProfileUpdate() {
  document.querySelector('.profile-name').textContent = myProfile.name;
  document.querySelector('.profile-bio').textContent  = myProfile.bio;
  const meta = document.querySelectorAll('.profile-meta-item');
  if (meta[0]) meta[0].innerHTML = `<i class="iconoir-map-pin" style="font-size:14px"></i> ${myProfile.location}`;
  if (meta[1]) meta[1].innerHTML = `<i class="iconoir-link" style="font-size:14px"></i> ${myProfile.website}`;
  ['.profile-avatar-border img', '.sidebar-user img', '.composer img'].forEach(sel => {
    document.querySelectorAll(sel).forEach(img => { img.src = myProfile.avatar; });
  });
  document.querySelector('.sidebar-user-name').textContent = myProfile.name;
  // sync settings avatar preview
  const sAvatar = document.getElementById('s-avatar-img');
  if (sAvatar) sAvatar.src = myProfile.avatar;
  const sName = document.getElementById('s-avatar-name');
  if (sName) sName.textContent = myProfile.name;
}

/* ─── SCREEN SWITCHING ──────────────────────────────── */
function switchScreen(name) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  document.querySelectorAll('.mobile-tab').forEach(t => t.classList.remove('active'));

  const screen = document.getElementById(`screen-${name}`);
  if (screen) screen.classList.add('active');

  document.querySelectorAll(`[data-nav="${name}"]`).forEach(el => el.classList.add('active'));

  currentScreen = name;

  const titles = { feed:'Feed', discover:'Discover', profile:'Profile', notifications:'Notifications', single:'Post', settings:'Settings', saved:'Saved' };
  document.querySelectorAll('.main-header h1').forEach(el => el.textContent = titles[name] || name);

  if (name === 'saved') renderSaved();
  window.scrollTo(0, 0);
}

/* ─── THEME ─────────────────────────────────────────── */
function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const sun = document.getElementById('theme-sun');
  const moon = document.getElementById('theme-moon');
  const label = document.getElementById('theme-label');
  const mIcon = document.getElementById('mobile-theme-icon');
  if (theme === 'dark') {
    if (sun) sun.style.display = 'none';
    if (moon) moon.style.display = 'block';
    if (label) label.textContent = 'Dark mode';
    if (mIcon) mIcon.textContent = '🌙';
  } else {
    if (sun) sun.style.display = 'block';
    if (moon) moon.style.display = 'none';
    if (label) label.textContent = 'Light mode';
    if (mIcon) mIcon.textContent = '☀️';
  }
}

function enterApp() {
  const landing = document.getElementById('landing-screen');
  landing.classList.add('hide');
  setTimeout(() => landing.remove(), 500);
}

function toggleTheme() {
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  applyTheme(isDark ? 'light' : 'dark');
  // sync appearance setting cards
  const targetCard = isDark ? 'light' : 'dark';
  document.querySelectorAll('.theme-card').forEach(c => {
    c.classList.toggle('selected', c.dataset.theme === targetCard);
  });
}

/* ─── SETTINGS ──────────────────────────────────────── */
function switchSettingsSection(btn, section) {
  document.querySelectorAll('.settings-nav-item').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.settings-section').forEach(s => s.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById(`settings-${section}`).classList.add('active');
}

function selectThemeCard(el, theme) {
  document.querySelectorAll('.theme-card').forEach(c => c.classList.remove('selected'));
  el.classList.add('selected');
  if (theme === 'system') {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(prefersDark ? 'dark' : 'light');
  } else {
    applyTheme(theme);
  }
}

function selectFontSize(el) {
  document.querySelectorAll('.font-size-btn').forEach(b => b.classList.remove('selected'));
  el.classList.add('selected');
  const size = el.dataset.size;
  document.documentElement.style.fontSize = size === 'small' ? '14px' : size === 'large' ? '18px' : '16px';
}

function selectRadio(el) {
  const group = el.closest('.settings-radio-group');
  group.querySelectorAll('.settings-radio-item').forEach(i => i.classList.remove('selected'));
  el.classList.add('selected');
  el.querySelector('input[type=radio]').checked = true;
}

function toggleInterest(el) {
  el.classList.toggle('selected');
}

function revokeSession(btn) {
  const item = btn.closest('.session-item');
  item.style.transition = 'opacity 0.3s';
  item.style.opacity = '0';
  setTimeout(() => item.remove(), 300);
}

function saveAccountSettings() {
  const name = document.getElementById('s-name').value.trim();
  const bio = document.getElementById('s-bio').value.trim();
  const location = document.getElementById('s-location').value.trim();
  const website = document.getElementById('s-website').value.trim();
  if (name) myProfile.name = name;
  myProfile.bio = bio;
  myProfile.location = location;
  myProfile.website = website;
  applyProfileUpdate();
  showToast('Account settings saved');
}

function savePrivacySettings() {
  showToast('Privacy settings saved');
}

function saveNotifSettings() {
  showToast('Notification preferences saved');
}

function saveContentSettings() {
  showToast('Content preferences saved');
}

function savePasswordSettings() {
  const cur = document.getElementById('s-pw-current').value;
  const next = document.getElementById('s-pw-new').value;
  const confirm = document.getElementById('s-pw-confirm').value;
  if (!cur || !next || !confirm) return showToast('Please fill all fields');
  if (next !== confirm) return showToast('Passwords do not match');
  if (next.length < 8) return showToast('Password must be at least 8 characters');
  document.getElementById('s-pw-current').value = '';
  document.getElementById('s-pw-new').value = '';
  document.getElementById('s-pw-confirm').value = '';
  showToast('Password updated successfully');
}

function togglePwVisibility(inputId, btn) {
  const input = document.getElementById(inputId);
  const isHidden = input.type === 'password';
  input.type = isHidden ? 'text' : 'password';
  btn.querySelector('i').className = isHidden ? 'iconoir-eye-off' : 'iconoir-eye';
}

function showToast(msg) {
  const toast = document.getElementById('settings-toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.style.opacity = '1';
  toast.style.transform = 'translateX(-50%) translateY(0)';
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(-50%) translateY(10px)';
  }, 2500);
}

function initSettingsValues() {
  const n = document.getElementById('s-name');
  if (n) n.value = myProfile.name;
  const b = document.getElementById('s-bio');
  if (b) b.value = myProfile.bio;
  const l = document.getElementById('s-location');
  if (l) l.value = myProfile.location;
  const w = document.getElementById('s-website');
  if (w) w.value = myProfile.website;
  const img = document.getElementById('s-avatar-img');
  if (img) img.src = myProfile.avatar;
  const sName = document.getElementById('s-avatar-name');
  if (sName) sName.textContent = myProfile.name;
  const sHandle = document.getElementById('s-avatar-handle');
  if (sHandle) sHandle.textContent = myProfile.handle;
  // sync current theme card
  const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
  document.querySelectorAll('.theme-card').forEach(c => {
    c.classList.toggle('selected', c.dataset.theme === currentTheme);
  });
}

/* ─── INIT ───────────────────────────────────────────── */
document.addEventListener('click', () => {
  const picker = document.getElementById('emoji-picker');
  if (picker) picker.style.display = 'none';
});

renderFeed();
renderDiscover();
renderProfile();
renderNotifications();
renderRSidebar();
initSettingsValues();
