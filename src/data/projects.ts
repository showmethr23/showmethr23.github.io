export interface Project {
  id: string;
  title: string;
  summary: string;
  thumbnail: string;
  techTags: string[];
  githubLink?: string;
  demoLink?: string;
  isFeatured: boolean;
  order?: number;
}

export const projects: Project[] = [
  {
    id: 'ai-task-manager',
    title: 'AI-Powered Task Manager',
    summary: 'A smart task management system using OpenAI to prioritize and categorize tasks automatically.',
    thumbnail: 'https://images.unsplash.com/photo-1510519138101-570d1dca3d66?q=80&w=2047&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Placeholder image
    techTags: ['Next.js', 'OpenAI', 'PostgreSQL', 'Tailwind CSS'],
    githubLink: '#',
    demoLink: '#',
    isFeatured: true,
    order: 1,
  },
  {
    id: 'realtime-chat-app',
    title: 'Real-time Chat Application',
    summary: 'Feature-rich chat app with real-time messaging, rooms, and file sharing.',
    thumbnail: 'https://images.unsplash.com/photo-1544717305-ad2d15967008?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Placeholder image
    techTags: ['React', 'Socket.io', 'Node.js', 'Express'],
    githubLink: '#',
    demoLink: '#',
    isFeatured: false,
    order: 2,
  },
  {
    id: 'crypto-dashboard',
    title: 'Crypto Market Dashboard',
    summary: 'A real-time cryptocurrency price tracker with interactive charts and market analysis.',
    thumbnail: 'https://images.unsplash.com/photo-1621087819139-4d618d3615e4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Placeholder image
    techTags: ['React', 'Chart.js', 'CoinGecko API'],
    githubLink: '#',
    demoLink: '#',
    isFeatured: false,
    order: 3,
  },
  {
    id: 'portfolio-v2',
    title: 'Personal Portfolio V2',
    summary: 'The current iteration of my portfolio, optimized for speed and SEO.',
    thumbnail: 'https://images.unsplash.com/photo-1685387406859-f3a7632616f7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Placeholder image
    techTags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    githubLink: '#',
    demoLink: '#',
    isFeatured: false,
    order: 4,
  },
];
