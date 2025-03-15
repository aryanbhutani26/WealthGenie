export interface Course {
  id: string;
  title: string;
  description: string;
  progress: number;
  duration: string;
  level: string;
  image: string;
}

export const courses: Course[] = [
  {
    id: '1',
    title: 'Investment Fundamentals',
    description: 'Learn the basics of investing, asset classes, and portfolio management.',
    progress: 45,
    duration: '2.5 hours',
    level: 'Beginner',
    image: '💰'
  },
  {
    id: '2',
    title: 'Stock Market Analysis',
    description: 'Master technical and fundamental analysis for stock trading.',
    progress: 20,
    duration: '3 hours',
    level: 'Intermediate',
    image: '📈'
  },
  {
    id: '3',
    title: 'Risk Management',
    description: 'Learn strategies to manage and mitigate investment risks.',
    progress: 0,
    duration: '2 hours',
    level: 'Advanced',
    image: '🛡️'
  },
  {
    id: '4',
    title: 'Cryptocurrency Trading',
    description: 'Understanding blockchain technology and crypto trading strategies.',
    progress: 15,
    duration: '4 hours',
    level: 'Intermediate',
    image: '🪙'
  },
  {
    id: '5',
    title: 'Real Estate Investment',
    description: 'Learn about property investment, REITs, and market analysis.',
    progress: 0,
    duration: '3.5 hours',
    level: 'Advanced',
    image: '🏢'
  },
  {
    id: '6',
    title: 'Personal Finance Basics',
    description: 'Master budgeting, savings, and debt management strategies.',
    progress: 75,
    duration: '2 hours',
    level: 'Beginner',
    image: '📊'
  }
];