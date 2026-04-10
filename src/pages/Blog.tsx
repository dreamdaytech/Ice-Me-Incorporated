import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';
import { db, handleFirestoreError, OperationType } from '../lib/firebase';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
}

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(collection(db, 'blogPosts'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const postsData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as BlogPost[];
      setPosts(postsData);
      setLoading(false);
    }, (error) => {
      handleFirestoreError(error, OperationType.LIST, 'blogPosts');
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="flex flex-col w-full min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden border-b border-outline-variant/20">
        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase mb-6 block">Insights & Updates</span>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-primary leading-[0.9] mb-8">
              COLD<br/>CHRONICLES.
            </h1>
            <p className="text-xl text-on-surface-variant leading-relaxed max-w-xl">
              Exploring the intersection of logistics, technology, and community impact in Sierra Leone's cold chain industry.
            </p>
          </motion.div>
        </div>
        
        {/* Decorative Element */}
        <div className="absolute right-0 top-0 h-full w-1/3 bg-surface-container-low/50 -skew-x-12 translate-x-1/2 pointer-events-none"></div>
      </section>

      {/* Blog Grid */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[1, 2, 3].map(i => (
                <div key={i} className="animate-pulse">
                  <div className="aspect-[16/10] bg-surface-container-high rounded-xl mb-6"></div>
                  <div className="h-4 bg-surface-container-high rounded w-1/2 mb-4"></div>
                  <div className="h-8 bg-surface-container-high rounded w-3/4 mb-4"></div>
                  <div className="h-20 bg-surface-container-high rounded mb-6"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-8 lg:gap-12">
              {posts.map((post, i) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group flex flex-col h-full"
                >
                  <Link to={`/blog/${post.id}`} className="block relative aspect-[16/10] overflow-hidden rounded-xl mb-6 bg-surface-container-high">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 dark:bg-surface/90 backdrop-blur-md text-primary text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-sm">
                        {post.category}
                      </span>
                    </div>
                  </Link>
                  
                  <div className="flex items-center gap-4 text-xs font-bold text-on-surface-variant/60 uppercase tracking-widest mb-4">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </div>
                  </div>

                  <h2 className="text-2xl font-black tracking-tight text-primary mb-4 group-hover:text-primary/80 transition-colors line-clamp-2">
                    <Link to={`/blog/${post.id}`}>
                      {post.title}
                    </Link>
                  </h2>
                  
                  <p className="text-on-surface-variant leading-relaxed mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="mt-auto">
                    <Link 
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-widest text-primary group/link"
                    >
                      Read Article
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-surface-container-low border-t border-outline-variant/20">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="bg-primary rounded-3xl p-12 md:p-20 text-center relative overflow-hidden">
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-6">Stay in the Loop.</h2>
              <p className="text-on-primary-container text-lg mb-10 opacity-90">
                Get the latest updates on cold chain innovation and community impact delivered straight to your inbox.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="email@example.com"
                  className="flex-grow bg-white/10 border border-white/20 rounded-xl px-6 py-4 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all"
                />
                <button className="bg-white text-primary font-black uppercase tracking-widest text-sm px-8 py-4 rounded-xl hover:bg-secondary-container transition-colors">
                  Subscribe
                </button>
              </form>
            </div>
            
            {/* Decorative Background */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
              <div className="absolute -top-24 -left-24 w-96 h-96 bg-white rounded-full blur-3xl"></div>
              <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
