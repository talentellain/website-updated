import techstart from '../assets/techstart.png';
import vibeshop from '../assets/vibeshop.png';
import globalInsights from '../assets/global_insights.png';
import samikshaVideo from '../assets/video/samiksha.mp4';
import whatsappVideoPortfolio from '../assets/video/WhatsApp Video 2026-05-07 at 6.59.49 PM.mp4';
import video0609 from '../assets/video/0609-copy.mp4';
import banarasVideo from '../assets/video/Banaras2.mp4';
import dukeVideo from '../assets/video/Duke250.mp4';

/* ── Cloudinary Video URLs ────────────────────────────────────────── */
const carSpaVideo = "https://res.cloudinary.com/dqauqcgli/video/upload/v1781350012/talentella_portfolio/esbp2dmjr8ik1md9czsl.mp4";
const sjxteVideo = "https://res.cloudinary.com/dqauqcgli/video/upload/v1781350299/talentella_portfolio/djv1xuyiegcaurnz2xnl.mp4";
const sjxteVideo2 = "https://res.cloudinary.com/dqauqcgli/video/upload/v1781350071/talentella_portfolio/z64e0uvd2wbf4ez9xeh6.mp4";
const sjxteVideo3 = "https://res.cloudinary.com/dqauqcgli/video/upload/v1781350105/talentella_portfolio/emhltxgwjj7dhpkpliaq.mp4";
const sjxteVideo4 = "https://res.cloudinary.com/dqauqcgli/video/upload/v1781350139/talentella_portfolio/gk2kmzgfmmi5zzcgqqbt.mp4";
const sjxteVideo5 = "https://res.cloudinary.com/dqauqcgli/video/upload/v1781350188/talentella_portfolio/nvvovzjt15ct6nyku8zj.mp4";
const sjxteVideo6 = "https://res.cloudinary.com/dqauqcgli/video/upload/v1781350236/talentella_portfolio/qw8qhq07si0b2szo6x3z.mp4";
const tecVideo = "https://res.cloudinary.com/dqauqcgli/video/upload/v1781350333/talentella_portfolio/iph3qv1mxgurh6dmxpjv.mp4";
const sjxteSocialCampaign = "https://res.cloudinary.com/dqauqcgli/video/upload/v1781352267/talentella_portfolio/wpqxz7ssule2nn1s0fcj.mp4";

export const servicesData = [
  {
    id: 'app-development',
    title: 'App Development',
    icon: 'Smartphone',
    description: 'Native & cross-platform mobile applications crafted for seamless user experience and maximum business growth.',
    seo: {
      pageTitle: 'Custom Mobile App Development Agency India',
      metaDescription: 'TalentElla is India\'s custom mobile app development agency. High-performance React Native & Flutter apps built for iOS & Android. Starting ₹15,000.',
      keywords: 'mobile app development agency, custom app development services, React Native apps, Flutter mobile applications, Android iOS developer India, human-centric app design',
      primaryKeyword: 'mobile app development agency',
    },
    answerBlock: {
      question: 'What is Custom Mobile App Development?',
      answer: 'Custom mobile app development is the process of creating tailored software applications that run on mobile devices. At TalentElla, our custom mobile app development services prioritize human-centric design, robust architecture, and cross-platform flexibility with React Native and Flutter, ensuring your brand stands out and scales seamlessly in the competitive digital landscape.',
    },
    faqs: [
      {
        question: 'Which platform will my app be built on?',
        answer: 'We use React Native and Flutter for cross-platform apps to maximize reach while minimizing cost. Native Android (Kotlin) or iOS (Swift) development is also available for custom enterprise-grade plans.'
      },
      {
        question: 'How much does custom mobile app development cost?',
        answer: 'At TalentElla, custom app development starts from ₹15,000 for a basic MVP (Minimum Viable Product). Professional packages with extensive integrations start at ₹40,000, and fully custom enterprise-grade apps begin at ₹80,000.'
      },
      {
        question: 'Do you offer ongoing post-launch support?',
        answer: 'Yes, we provide comprehensive post-launch support and maintenance. Our packages include 1 to 6 months of free support (depending on the plan selected) to handle bug fixes, security updates, and performance optimizations.'
      }
    ],
    relatedServices: ['website-development', 'social-media-management'],
    subItems: [
      { title: 'Cross-Platform Applications', description: 'Leveraging React Native and Flutter to deliver beautiful, native-feeling apps for both iOS and Android from a single codebase.' },
      { title: 'User-Centric UI/UX', description: 'Designing intuitive, high-fidelity app interfaces that optimize user flows, engagement, and conversion rates.' },
      { title: 'Robust Backend Integration', description: 'Connecting your mobile apps with secure APIs, cloud databases, and real-time synchronization systems.' }
    ],
    portfolio: [],
    plans: [
      { 
        name: 'MVP App', 
        subtitle: 'For early validation',
        price: '₹15,000', 
        billing: 'one-time',
        features: ['Up to 5 Screens', 'React Native / Flutter', 'Basic Firebase Auth', 'Standard UI Design', '1 Month Support'],
        priceNum: 15000
      },
      { 
        name: 'Business App', 
        subtitle: 'For growing companies',
        price: '₹40,000', 
        billing: 'one-time',
        features: ['Up to 10 Screens', 'Custom API Integration', 'Payment Gateway Sync', 'Premium Custom UI/UX', '3 Months Support'],
        priceNum: 40000
      },
      { 
        name: 'Enterprise App', 
        subtitle: 'For custom products',
        price: '₹80,000', 
        billing: 'one-time',
        features: ['Unlimited Screens', 'Custom Backend & Admin Panel', 'Advanced Analytics Dashboard', 'Dedicated Architecture', '6 Months Support'],
        priceNum: 80000
      }
    ]
  },
  {
    id: 'website-development',
    title: 'Website Development',
    icon: 'Code',
    description: 'Custom, high-performance websites built with the latest technologies to scale your business.',
    // ── SEO Meta ──
    seo: {
      pageTitle: 'Website Development Services India',
      metaDescription: 'Get custom, high-performance websites from TalentElla — India\'s full-service 360° marketing agency. SEO-friendly architecture, e-commerce & CMS. Starting ₹5,000.',
      keywords: 'website development India, custom web applications, e-commerce solutions, responsive web design, SEO friendly website, full service digital marketing agency, performance optimization',
      primaryKeyword: 'full service digital marketing agency',
    },
    // ── GEO: Answer-first block ──
    answerBlock: {
      question: 'What is Website Development?',
      answer: 'Website development is the process of designing, building, and maintaining websites and web applications. At TalentElla, we create custom, high-performance websites using modern technologies like React, Next.js, and Node.js — optimized for speed, SEO, and conversions. Our full-service digital marketing agency in India delivers responsive designs that work seamlessly across all devices, starting from ₹5,999.',
    },
    // ── FAQs with FAQPage schema ──
    faqs: [
      {
        question: 'How much does website development cost in India?',
        answer: 'At TalentElla, website development starts from ₹5,000 for a basic 5-page responsive website. Professional packages with CMS integration and advanced SEO start at ₹20,000, while enterprise solutions with custom integrations begin at ₹40,000.',
      },
      {
        question: 'How long does it take to build a website?',
        answer: 'A basic website typically takes 1-2 weeks, while professional websites with CMS and e-commerce features take 3-4 weeks. Enterprise-level custom web applications may take 6-8 weeks depending on complexity.',
      },
      {
        question: 'Do you offer SEO-friendly website development?',
        answer: 'Yes, every website we build includes SEO-friendly architecture, optimized page speed (Core Web Vitals), clean URL structure, schema markup, and mobile-first responsive design to ensure high search engine rankings.',
      },
      {
        question: 'What technologies do you use for web development?',
        answer: 'We use cutting-edge technologies including React, Next.js, Vite, Node.js, and modern CSS frameworks. Our websites are optimized for Core Web Vitals with fast LCP under 2.5 seconds.',
      },
      {
        question: 'Do you provide website maintenance and support?',
        answer: 'Yes, all our development packages include post-launch support ranging from 1 to 6 months. We offer security monitoring, regular backups, performance audits, bug fixing, and priority support.',
      },
    ],
    // ── Internal linking: related services ──
    relatedServices: ['social-media-management', 'visual-identity-design'],
    subItems: [
      { title: 'Custom Web Applications', description: 'Highly interactive, data-driven web apps built for speed and high-user engagement.' },
      { title: 'E-commerce Solutions', description: 'Scalable online stores with seamless checkouts, inventory sync, and high-conversion UX.' },
      { title: 'Responsive Design', description: 'Pixel-perfect layouts that provide a premium, consistent experience on any screen size.' },
      { title: 'Performance Optimization', description: 'Lightning-fast load times and smooth animations to maximize retention and SEO rankings.' },
      { title: 'SEO Friendly Architecture', description: 'Structured data and semantic code built-in to ensure your brand dominates search results.' },
      { title: 'Custom API Development', description: 'Robust back-end integrations to connect your digital ecosystem with speed and security.' }
    ],
    maintenance: {
      title: "Long-term Maintenance & Support",
      description: "Building the site is just the beginning. We ensure your digital assets remain fast, secure, and ahead of the curve.",
      features: [
        { title: 'Security Monitoring', desc: 'Proactive protection against threats.', icon: 'Shield' },
        { title: 'Regular Backups', desc: 'Daily data preservation for peace of mind.', icon: 'Database' },
        { title: 'Performance Audits', desc: 'Optimization to maintain high speeds.', icon: 'Zap' },
        { title: 'Bug fixing', desc: 'Priority support for all technical issues.', icon: 'LifeBuoy' },
        { title: 'Priority support', desc: 'Direct access to our development team.', icon: 'Rocket' }
      ]
    },
    portfolio: [
      { 
        title: 'TechStart SaaS', 
        description: 'Built a full-scale dashboard for a fintech startup with real-time analytics, user management, and seamless API integrations.', 
        link: 'https://example.com',
        image: techstart,
        alt: "TechStart SaaS dashboard — fintech startup web application developed by TalentElla, India's full-service digital marketing agency"
      },
      { 
        title: 'VibeShop E-com', 
        description: 'High-converting online store with seamless checkout, inventory management, and mobile-first responsive design.', 
        link: 'https://example.com',
        image: vibeshop,
        alt: 'VibeShop e-commerce platform — high-converting online store built by TalentElla web development team in India'
      },
      { 
        title: 'Global Insights Dashboard', 
        description: 'Next-gen analytics platform for a global logistics firm with real-time data visualization and reporting.', 
        link: 'https://example.com',
        image: globalInsights,
        alt: 'Global Insights analytics dashboard — enterprise data visualization platform developed by TalentElla agency'
      }
    ],
    plans: [
      { 
        name: 'Starter Website', 
        subtitle: 'Perfect for startups and local businesses.',
        price: '₹5,999', 
        billing: 'one-time',
        features: ['Up to 5 Pages', 'Responsive Design', 'Mobile Optimization', 'Contact Form', 'Basic SEO Setup', 'WhatsApp Integration', 'Google Maps Integration', 'Fast Loading Website', 'SSL Setup', '1 Month Support'],
        priceNum: 5999,
        popular: false
      },
      { 
        name: 'Growth Website', 
        subtitle: 'Perfect for growing businesses.',
        price: '₹19,999', 
        billing: 'one-time',
        features: ['Up to 10 Pages', 'Custom Website Design', 'CMS Integration', 'Blog Setup', 'Advanced SEO Setup', 'Analytics Integration', 'WhatsApp & Contact Forms', 'Lead Capture Forms', 'Performance Optimization', '3 Months Support'],
        priceNum: 19999,
        popular: true
      },
      { 
        name: 'Premium Website', 
        subtitle: 'Complete business website solution.',
        price: '₹39,999', 
        billing: 'one-time',
        features: ['Unlimited Pages', 'Premium Custom Design', 'Advanced Animations', 'CMS Integration', 'E-Commerce Functionality', 'Payment Gateway Integration', 'Custom Integrations', 'Advanced SEO Optimization', 'Analytics Dashboard', 'Speed Optimization', 'Security Hardening', 'Priority Support', '6 Months Support', 'Source Code Ownership'],
        priceNum: 39999,
        popular: false
      }
    ]
  },
  {
    id: 'social-media-management',
    title: 'SMM Social Media Management',
    icon: 'Share2',
    description: 'Strategic content creation and community management to build a powerful brand presence across all platforms.',
    // ── SEO Meta ──
    seo: {
      pageTitle: 'SMM Social Media Management — Talent Ella',
      metaDescription: 'Top-tier SMM and social media management services by Talent Ella. Content creation, community management, and growth strategies.',
      keywords: 'SMM, social media management, content creation, brand growth, digital marketing',
      primaryKeyword: 'SMM social media management',
    },
    // ── GEO: Answer-first block ──
    answerBlock: {
      question: 'What is the Talent Ella Showcase?',
      answer: 'The Talent Ella Showcase is a curated collection of our most impactful video productions, brand films, and creative content. It highlights our expertise in cinematic storytelling and visual production, demonstrating how we elevate brands through stunning visuals and creative direction.',
    },
    // ── FAQs ──
    faqs: [
      {
        question: 'What types of videos are in the showcase?',
        answer: 'Our showcase features a variety of work including brand identity films, commercial shoots, event coverage, and high-energy production reels. Each piece is crafted to reflect the unique vision of the brand while maintaining the Talent Ella aesthetic.',
      },
      {
        question: 'Can you create custom video content for my brand?',
        answer: 'Absolutely. We specialize in end-to-end video production, from concept and scriptwriting to filming and post-production. Our goal is to create content that resonates with your audience and builds a powerful brand story.',
      },
      {
        question: 'How do you approach creative production?',
        answer: 'We combine data-driven strategy with artistic storytelling. Every frame is designed to capture attention and deliver a clear message, ensuring your brand stands out in a crowded digital landscape.',
      },
      {
        question: 'What industries do you work with?',
        answer: 'We work across various industries including tech, fashion, lifestyle, and corporate. Our versatile team adapts to different brand voices while maintaining a high standard of creative excellence.',
      },
    ],
    relatedServices: ['website-development', 'visual-identity-design'],
    subItems: [
      { title: 'Content Strategy', description: 'Data-backed roadmaps designed to turn followers into loyal brand advocates.' },
      { title: 'Daily Posting', description: 'Consistent, high-quality presence to keep your brand at the top of every feed, every day.' },
      { title: 'Engagement Growth', description: 'Active community management to spark real conversations and build human connections.' },
      { title: 'Influencer Coordination', description: 'Strategic partnerships with creators to amplify your reach and build authentic trust.' },
      { title: 'Ad Campaign Management', description: 'ROI-focused paid strategies that target the right audience with precision and scale.' }
    ],
    portfolio: [
      { 
        id: 'sm2',
        title: 'Fashion Showcase', 
        description: 'Elegant streetwear and fashion production with trend-focused visual aesthetics.', 
        type: 'video',
        category: 'VIDEO SHOOTING',
        content: samikshaVideo,
        alt: 'Fashion production reel — creative lifestyle content by TalentElla'
      },
      { 
        id: 'sm4',
        title: 'Car Spa Commercial', 
        description: 'Premium automotive aesthetic showcase with high-end detailing and visual dynamic style.', 
        type: 'video',
        category: 'VIDEO SHOOTING',
        content: carSpaVideo,
        alt: 'Car Spa Commercial - premium automotive visual content by TalentElla'
      },
      { 
        id: 'sm5',
        title: 'SJxTE Creative Reel', 
        description: 'Collaborative showcase capturing trending brand aesthetics and youth energy.', 
        type: 'video',
        category: 'INSTAGRAM REELS',
        content: sjxteVideo,
        alt: 'SJxTE Creative Reel - brand partnership content by TalentElla'
      },
      { 
        id: 'sm6',
        title: 'SJxTE Brand Campaign', 
        description: 'Bold promotional aesthetics with vibrant lighting and dynamic editing.', 
        type: 'video',
        category: 'SMM CAMPAIGN',
        content: sjxteVideo2,
        alt: 'SJxTE Brand Campaign - social first promotional campaign by TalentElla'
      },
      { 
        id: 'sm7',
        title: 'SJxTE Storytelling', 
        description: 'High engagement brand story utilizing micro-narratives and trendy audio pacing.', 
        type: 'video',
        category: 'VIDEO EDITING',
        content: sjxteVideo3,
        alt: 'SJxTE Storytelling - cinematic social media narrative by TalentElla'
      },
      { 
        id: 'sm8',
        title: 'SJxTE Cinematic', 
        description: 'Professional visual styling featuring moody color grades and high fidelity shots.', 
        type: 'video',
        category: 'VIDEO SHOOTING',
        content: sjxteVideo4,
        alt: 'SJxTE Cinematic - premium social content by TalentElla'
      },
      { 
        id: 'sm9',
        title: 'SJxTE Aesthetics', 
        description: 'Vibrant streetwear visual presentation styled for maximum social platform reach.', 
        type: 'video',
        category: 'INSTAGRAM REELS',
        content: sjxteVideo5,
        alt: 'SJxTE Aesthetics - fashion streetwear reel by TalentElla'
      },
      { 
        id: 'sm11',
        title: 'SJxTE Behind the Scenes', 
        description: 'Behind the scenes production look with organic lifestyle framing and team synergy.', 
        type: 'video',
        category: 'SMM CAMPAIGN',
        content: sjxteVideo6,
        alt: 'SJxTE Behind the Scenes - authentic brand creation story by TalentElla'
      },
      { 
        id: 'sm12',
        title: 'TEC Brand Showcase', 
        description: 'Clean product highlight and corporate identity production styled for high-end clients.', 
        type: 'video',
        category: 'VIDEO SHOOTING',
        content: tecVideo,
        alt: 'TEC Brand Showcase - premium business portfolio content by TalentElla'
      },
      { 
        id: 'sm13',
        title: 'SJxTE Social Campaign', 
        description: 'Vibrant streetwear campaign combining modern storytelling and cinematic movement.', 
        type: 'video',
        category: 'SMM CAMPAIGN',
        content: sjxteSocialCampaign,
        alt: 'SJxTE Social Campaign - youth brand promotion content by TalentElla'
      },
      { 
        id: 'sm10',
        title: 'Creative Showcase', 
        description: 'Exclusive creative production showcasing brand excellence and cinematic storytelling.', 
        type: 'video',
        category: 'VIDEO EDITING',
        content: whatsappVideoPortfolio,
        alt: 'Creative brand showcase — premium video production by TalentElla'
      },
      { 
        id: 'sm14',
        title: 'Dynamic Brand Reel', 
        description: 'High-energy brand production reel showcasing cinematic motion, bold visuals, and compelling storytelling.', 
        type: 'video',
        category: 'VIDEO SHOOTING',
        content: video0609,
        alt: 'Dynamic brand reel — cinematic video production by TalentElla'
      },
      { 
        id: 'sm15',
        title: 'Banaras Cinematic', 
        description: 'Cinematic travel and cultural exploration showcasing vibrant heritage.', 
        type: 'video',
        category: 'VIDEO SHOOTING',
        content: banarasVideo,
        alt: 'Banaras cinematic video — travel and culture production by TalentElla'
      },
      { 
        id: 'sm16',
        title: 'Duke 250 Dynamic', 
        description: 'High-energy automotive presentation with dynamic movement and aesthetic grading.', 
        type: 'video',
        category: 'VIDEO SHOOTING',
        content: dukeVideo,
        alt: 'Duke 250 dynamic video — automotive video production by TalentElla'
      }
    ],
    plans: [
      { 
        name: 'Starter', 
        subtitle: 'Perfect for businesses building their online presence.',
        price: '₹9,999', 
        billing: '/month',
        features: ['2 Platforms (Instagram + Facebook)', 'Content Strategy', '12 Posts/Month', '7 Reels/Month', 'Basic Graphic Design', 'Video Editing', 'Copywriting & Captions', 'Account Management', 'Monthly Performance Report'],
        priceNum: 9999,
        popular: false
      },
      { 
        name: 'Growth', 
        subtitle: 'Perfect for brands focused on growth and engagement.',
        price: '₹19,999', 
        billing: '/month',
        features: ['4 Platforms (Instagram, Facebook, LinkedIn, X)', 'Advanced Content Strategy', 'Monthly Content Calendar', '24 Posts/Month', '12 Reels/Month', 'Premium Graphic Design', 'Advanced Video Editing', 'Professional Copywriting', 'Account Management', 'Community Management', 'Audience Engagement', 'Meta Ads Management', 'Retargeting Ads', 'Weekly Analytics', 'Monthly Performance Report'],
        priceNum: 19999,
        popular: true
      },
      { 
        name: 'Premium', 
        subtitle: 'Complete 360° Social Media Growth Solution.',
        price: '₹34,999', 
        billing: '/month',
        features: ['Full Social Media Management', 'Advanced Content Strategy', 'Monthly Content Calendar', 'Instagram Reels', 'Posts & Carousels', 'Stories Management', 'Short-Form Video Creation', 'Premium Graphic Design', 'Social Media Creatives', 'Promotional Banners', 'Brand-Focused Designs', 'Advanced Video Editing', 'Motion Graphics', 'Trending Content Adaptation', 'Professional Copywriting', 'Captions & Hooks', 'Hashtag Research', 'Multi-Platform Account Management', 'Community Management', 'Comment & DM Management', 'Audience Engagement', 'Organic Growth Strategies', 'Influencer Collaborations', 'Meta Ads (Facebook & Instagram)', 'Lead Generation Campaigns', 'Retargeting Ads', 'Monthly Reports', 'Performance Tracking', 'Strategy Optimization', 'Dedicated Account Manager'],
        priceNum: 34999,
        popular: false
      },
    ]
  },
  {
    id: 'visual-identity-design',
    title: 'Visual Identity Design',
    icon: 'Palette',
    description: 'Defining your brand voice through stunning visual elements, comprehensive design systems, and strategic brand positioning.',
    // ── SEO Meta ──
    seo: {
      pageTitle: 'Brand Development & Visual Identity Agency India',
      metaDescription: 'TalentElla — India\'s brand development agency. Logo design, visual identity systems, brand guidelines & complete rebranding. Packages from ₹3,000. Book a consultation.',
      keywords: 'brand development agency, visual identity design, brand strategy and visual identity agency, logo design India, brand guidelines, brand identity system, rebranding agency India, brand strategy',
      primaryKeyword: 'brand development agency',
    },
    // ── GEO: Answer-first block ──
    answerBlock: {
      question: 'What is Visual Identity Design?',
      answer: 'Visual identity design encompasses creating all the visual elements that represent a brand — including logos, color palettes, typography, iconography, and comprehensive brand guidelines. TalentElla is India\'s trusted brand strategy and visual identity agency, helping businesses define their unique voice through cohesive design systems. Our brand development packages start from ₹3,000 for logo design.',
    },
    // ── FAQs ──
    faqs: [
      {
        question: 'How much does brand identity design cost in India?',
        answer: 'TalentElla offers logo packages starting at ₹3,000. Complete brand identity packages with guidelines, typography, and stationery design start at ₹10,000. Full rebranding with social media kits and presentation templates is available from ₹30,000.',
      },
      {
        question: 'What\'s included in a complete brand identity package?',
        answer: 'Our Brand Identity package includes 4 logo concepts, a brand guidelines book, complete color and typography system, stationery design, social media templates, and 4 revision rounds — everything you need to launch a cohesive brand.',
      },
      {
        question: 'How long does the brand design process take?',
        answer: 'Logo packages typically take 5-7 business days, brand identity packages take 2-3 weeks, and complete rebrand projects take 4-6 weeks. We follow a discovery, strategy, design, and refinement process.',
      },
      {
        question: 'Do you offer brand strategy along with visual design?',
        answer: 'Yes, we are a brand strategy and visual identity agency. We start with brand positioning, target audience analysis, and competitive research before creating visual elements that authentically represent your brand.',
      },
      {
        question: 'Can you redesign an existing brand identity?',
        answer: 'Absolutely. Our Complete Rebrand package at ₹30,000 includes full brand transformation — 6 logo concepts, complete brand guidelines, business cards, letterhead, a 10-post social media kit, and a presentation template, plus 1 month of free support.',
      },
    ],
    relatedServices: ['website-development', 'social-media-management'],
    subItems: [
      { title: 'Logo & Visual System', description: 'A unique, memorable mark paired with a cohesive system that defines your brand DNA.' },
      { title: 'Brand Guidelines', description: 'Comprehensive bibles ensuring your brand looks perfect and professional everywhere.' },
      { title: 'Marketing Assets', description: 'Premium templates for social, print, and digital that keep your message consistent.' },
      { title: 'Typography & Color Palette', description: 'Psychologically-tuned color and type choices that evoke the right emotions.' },
      { title: 'Iconography Systems', description: 'Custom-crafted visual language that simplifies complex ideas into stunning graphics.' },
      { title: 'Brand Stationery', description: 'Professional physical touchpoints including business cards, letterheads, and premium packaging design.' }
    ],
    portfolio: [
      { 
        title: 'EcoPulse Branding', 
        description: 'Complete brand identity for a green energy startup — logo, guidelines, and marketing collateral.', 
        link: 'https://example.com',
        image: 'https://images.unsplash.com/photo-1586717791821-3f44a563dc4c?auto=format&fit=crop&q=80&w=800',
        alt: 'EcoPulse green energy brand identity — comprehensive branding by TalentElla brand development agency India'
      },
      { 
        title: 'UrbanWear Style', 
        description: 'Edgy visual system for a premium streetwear brand with bold typography and striking color palettes.', 
        link: 'https://example.com',
        image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800',
        alt: 'UrbanWear streetwear brand visual identity — premium brand design by TalentElla visual identity agency'
      },
      { 
        title: 'Luxe Jewelry Identity', 
        description: 'Minimalist and elegant visual system for a premium jewelry firm with luxurious brand elements.', 
        link: 'https://example.com',
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800',
        alt: 'Luxe Jewelry premium brand identity — elegant visual design system by TalentElla branding agency India'
      }
    ],
    plans: [
      { 
        name: 'Logo Package', 
        subtitle: 'Quick brand start',
        price: '₹2,999', 
        billing: 'one-time',
        features: ['2 Logo Concepts', '2 Revision Rounds', 'Color Variations', 'All File Formats (PNG, SVG, PDF, AI)', 'Business Card Design'],
        priceNum: 2999,
        popular: false
      },
      { 
        name: 'Brand Identity', 
        subtitle: 'Complete brand system',
        price: '₹9,999', 
        billing: 'one-time',
        features: ['4 Logo Concepts', 'Brand Strategy Session', 'Color Palette System', 'Typography System', 'Brand Voice & Tone', 'Brand Guidelines Book', 'Business Card Design', 'Letterhead Design', 'Social Media Templates', '4 Revisions'],
        priceNum: 9999,
        popular: true
      },
      { 
        name: 'Complete Rebrand', 
        subtitle: 'Total transformation',
        price: '₹29,999', 
        billing: 'one-time',
        features: ['6 Logo Concepts', 'Complete Brand Strategy', 'Brand Positioning', 'Full Brand Guidelines', 'Color & Typography System', 'Business Card & Letterhead', 'Email Signature', 'Social Media Kit (10 Posts)', 'Presentation Template', 'Company Profile Design', 'Brand Voice & Messaging', '1 Month Free Support'],
        priceNum: 29999,
        popular: false
      }
    ]
  }
];

/**
 * Homepage FAQs — targeting voice search, AI answer boxes, and long-tail keywords
 */
export const homepageFAQs = [
  {
    question: 'What is a 360 degree marketing agency?',
    answer: 'A 360 degree marketing agency provides comprehensive marketing solutions covering every touchpoint — from brand development and website design to social media management, influencer marketing, content marketing, lead generation, and offline marketing. TalentElla is India\'s leading 360° marketing agency offering integrated marketing solutions that combine online and offline strategies for maximum brand impact.',
  },
  {
    question: 'Why choose TalentElla as your marketing agency in India?',
    answer: 'TalentElla combines cutting-edge technology with creative storytelling to deliver measurable results. As a full-service digital marketing agency, we offer brand development, social media marketing, influencer marketing, website development, and lead generation — all under one roof. Our data-driven approach, transparent reporting, and affordable INR pricing (starting ₹3,000) make us the ideal partner for businesses of all sizes across India.',
  },
  {
    question: 'What services does TalentElla offer?',
    answer: 'TalentElla offers comprehensive 360° marketing services including: website development (from ₹5,000), social media management (from ₹10,000/month), visual identity and brand development (from ₹3,000), influencer marketing, content creation, lead generation, SEO optimization, and integrated marketing solutions for both online and offline channels.',
  },
  {
    question: 'How much do TalentElla\'s marketing services cost?',
    answer: 'TalentElla offers competitive pricing in INR designed for Indian businesses. Website development starts at ₹5,000, social media management from ₹10,000/month, and brand identity design from ₹3,000. We provide customized packages for small businesses, startups, and enterprise clients. Contact us for a free strategy call to get a tailored quote.',
  },
  {
    question: 'Does TalentElla work with small businesses and startups?',
    answer: 'Absolutely! TalentElla is an affordable 360 marketing agency for small businesses and startups in India. We offer scalable packages starting from ₹3,000, ensuring businesses of every size can access professional marketing services. Our Starter and Basic plans are specifically designed for early-stage brands looking to establish their digital presence.',
  },
  {
    question: 'What makes TalentElla different from other marketing agencies in India?',
    answer: 'TalentElla stands out as a talent management marketing agency that combines creative excellence with data-driven strategy. We offer omnichannel marketing solutions for brands, with expertise spanning digital and offline channels. Our team brings hands-on experience in brand development, influencer marketing, and lead generation — backed by transparent analytics and reporting at every step.',
  },
];
