import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Calendar, Clock, ArrowLeft, Share2, Twitter, Linkedin, Facebook } from 'lucide-react';
import { doc, getDoc, collection, query, orderBy, limit, getDocs } from 'firebase/firestore';
import { db, handleFirestoreError, OperationType } from '../lib/firebase';
import SEO from '../components/SEO';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
}

export default function BlogPost() {
  const { id } = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPost() {
      if (!id) return;
      try {
        const docRef = doc(db, 'blogPosts', id);
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
          setPost({ id: docSnap.id, ...docSnap.data() } as BlogPost);
          
          // Fetch related posts
          const q = query(collection(db, 'blogPosts'), orderBy('createdAt', 'desc'), limit(4));
          const relatedSnap = await getDocs(q);
          const related = relatedSnap.docs
            .map(d => ({ id: d.id, ...d.data() } as BlogPost))
            .filter(p => p.id !== id)
            .slice(0, 3);
          setRelatedPosts(related);
        }
      } catch (error) {
        handleFirestoreError(error, OperationType.GET, `blogPosts/${id}`);
      } finally {
        setLoading(false);
      }
    }

    fetchPost();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-background px-6">
        <h1 className="text-4xl font-black text-primary mb-4">Post Not Found</h1>
        <p className="text-on-surface-variant mb-8">The article you are looking for does not exist or has been moved.</p>
        <Link to="/blog" className="bg-primary text-on-primary px-8 py-3 rounded-xl font-bold uppercase tracking-widest text-sm">
          Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full min-h-screen bg-background">
      <SEO 
        title={post.title} 
        description={post.excerpt} 
        image={post.image}
        type="article"
      />
      {/* Article Header */}
      <header className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 md:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link 
              to="/blog" 
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-on-surface-variant hover:text-primary transition-colors mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              Back to Insights
            </Link>
            
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full">
                {post.category}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-primary leading-[1.1] mb-8">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 md:gap-10">
              <div className="flex items-center gap-3">
                <img 
                  src={post.author.avatar} 
                  alt={post.author.name} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-primary/10"
                />
                <div>
                  <p className="text-sm font-black text-primary">{post.author.name}</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/60">{post.author.role}</p>
                </div>
              </div>

              <div className="flex items-center gap-6 text-xs font-bold text-on-surface-variant/60 uppercase tracking-widest">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  {post.date}
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Featured Image */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 mb-16 md:mb-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl bg-surface-container-high"
        >
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </section>

      {/* Article Content */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 pb-24 md:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Sidebar / Social Share */}
          <aside className="hidden lg:block lg:col-span-1">
            <div className="sticky top-32 flex flex-col items-center gap-6">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant/40 vertical-text mb-4">Share</span>
              <button className="w-10 h-10 rounded-full border border-outline-variant/30 flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary transition-all">
                <Twitter className="w-4 h-4" />
              </button>
              <button className="w-10 h-10 rounded-full border border-outline-variant/30 flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary transition-all">
                <Linkedin className="w-4 h-4" />
              </button>
              <button className="w-10 h-10 rounded-full border border-outline-variant/30 flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary transition-all">
                <Facebook className="w-4 h-4" />
              </button>
              <button className="w-10 h-10 rounded-full border border-outline-variant/30 flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary transition-all">
                <Share2 className="w-4 h-4" />
              </button>
            </div>
          </aside>

          {/* Main Content Body */}
          <article className="lg:col-span-8 lg:col-start-3">
            <div 
              className="prose prose-lg dark:prose-invert max-w-none 
                prose-headings:text-primary prose-headings:font-black prose-headings:tracking-tight
                prose-p:text-on-surface-variant prose-p:leading-relaxed
                prose-strong:text-primary prose-strong:font-black
                prose-img:rounded-2xl prose-img:shadow-xl
                prose-h3:text-2xl prose-h3:mt-12 prose-h3:mb-6"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Tags / Meta */}
            <div className="mt-16 pt-16 border-t border-outline-variant/20">
              <div className="flex flex-wrap gap-3">
                {['Cold Chain', 'Sierra Leone', 'Sustainability', 'Innovation'].map(tag => (
                  <span key={tag} className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/60 bg-surface-container-low px-4 py-2 rounded-full">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Author Bio Card */}
            <div className="mt-16 p-8 md:p-12 bg-surface-container-low rounded-3xl flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left">
              <img 
                src={post.author.avatar} 
                alt={post.author.name} 
                className="w-24 h-24 rounded-full object-cover border-4 border-white dark:border-surface shadow-xl"
              />
              <div>
                <h4 className="text-2xl font-black text-primary mb-2">Written by {post.author.name}</h4>
                <p className="text-sm font-bold uppercase tracking-widest text-on-surface-variant/60 mb-4">{post.author.role}</p>
                <p className="text-on-surface-variant leading-relaxed">
                  Dedicated to advancing the cold chain infrastructure in West Africa. With over a decade of experience in logistics and thermal engineering, {post.author.name.split(' ')[0]} leads our efforts in operational excellence.
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-24 bg-surface-container-lowest border-t border-outline-variant/20">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex justify-between items-end mb-16">
            <div>
              <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase mb-4 block">Keep Reading</span>
              <h2 className="text-4xl font-black tracking-tighter text-primary">Related Articles</h2>
            </div>
            <Link to="/blog" className="text-sm font-black uppercase tracking-widest text-primary hover:underline hidden md:block">
              View All Posts
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPosts.map((relatedPost) => (
              <Link key={relatedPost.id} to={`/blog/${relatedPost.id}`} className="group">
                <div className="aspect-[16/10] rounded-xl overflow-hidden mb-6 bg-surface-container-high">
                  <img 
                    src={relatedPost.image} 
                    alt={relatedPost.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-xl font-black tracking-tight text-primary group-hover:text-primary/80 transition-colors line-clamp-2">
                  {relatedPost.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
