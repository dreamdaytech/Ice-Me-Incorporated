import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  collection, 
  onSnapshot, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  doc, 
  serverTimestamp, 
  query, 
  orderBy 
} from 'firebase/firestore';
import { 
  Plus, 
  Edit2, 
  Trash2, 
  Copy, 
  X, 
  Save, 
  Image as ImageIcon,
  Layout,
  Type,
  User as UserIcon,
  Clock as ClockIcon,
  Tag
} from 'lucide-react';
import { db, handleFirestoreError, OperationType } from '../lib/firebase';
import { useAuth } from '../contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

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
  authorUid: string;
}

export default function BlogAdmin() {
  const { user, isEditor, isAdmin, signIn } = useAuth();
  const navigate = useNavigate();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    category: 'Logistics',
    image: '',
    readTime: '5 min read'
  });

  useEffect(() => {
    if (!user) return;

    const q = query(collection(db, 'blogPosts'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const postsData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as BlogPost[];
      setPosts(postsData);
    }, (error) => {
      handleFirestoreError(error, OperationType.LIST, 'blogPosts');
    });

    return () => unsubscribe();
  }, [user]);

  if (!user) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-background px-6">
        <h1 className="text-4xl font-black text-primary mb-4">Admin Access</h1>
        <p className="text-on-surface-variant mb-8 text-center max-w-md">
          Please sign in with an authorized account to manage the blog.
        </p>
        <button 
          onClick={signIn}
          className="bg-primary text-on-primary px-8 py-3 rounded-xl font-bold uppercase tracking-widest text-sm"
        >
          Sign In with Google
        </button>
      </div>
    );
  }

  if (!isEditor) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-background px-6">
        <h1 className="text-4xl font-black text-primary mb-4">Access Denied</h1>
        <p className="text-on-surface-variant mb-8 text-center max-w-md">
          You do not have permission to access this page. Please contact an administrator.
        </p>
        <Link to="/" className="bg-primary text-on-primary px-8 py-3 rounded-xl font-bold uppercase tracking-widest text-sm">
          Back to Home
        </Link>
      </div>
    );
  }

  const handleOpenModal = (post: BlogPost | null = null) => {
    if (post) {
      setEditingPost(post);
      setFormData({
        title: post.title,
        excerpt: post.excerpt,
        content: post.content,
        category: post.category,
        image: post.image,
        readTime: post.readTime
      });
    } else {
      setEditingPost(null);
      setFormData({
        title: '',
        excerpt: '',
        content: '',
        category: 'Logistics',
        image: '',
        readTime: '5 min read'
      });
    }
    setIsModalOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const postData = {
        ...formData,
        date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
        author: {
          name: user.displayName || 'Anonymous',
          role: isAdmin ? 'Administrator' : 'Editor',
          avatar: user.photoURL || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100'
        },
        authorUid: user.uid,
        updatedAt: serverTimestamp()
      };

      if (editingPost) {
        await updateDoc(doc(db, 'blogPosts', editingPost.id), postData);
      } else {
        await addDoc(collection(db, 'blogPosts'), {
          ...postData,
          createdAt: serverTimestamp()
        });
      }
      setIsModalOpen(false);
    } catch (error) {
      handleFirestoreError(error, editingPost ? OperationType.UPDATE : OperationType.CREATE, 'blogPosts');
    }
  };

  const handleDelete = async (postId: string) => {
    if (!window.confirm('Are you sure you want to delete this post?')) return;
    try {
      await deleteDoc(doc(db, 'blogPosts', postId));
    } catch (error) {
      handleFirestoreError(error, OperationType.DELETE, `blogPosts/${postId}`);
    }
  };

  const handleDuplicate = async (post: BlogPost) => {
    try {
      const { id, ...rest } = post;
      await addDoc(collection(db, 'blogPosts'), {
        ...rest,
        title: `${rest.title} (Copy)`,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      });
    } catch (error) {
      handleFirestoreError(error, OperationType.CREATE, 'blogPosts');
    }
  };

  return (
    <div className="flex flex-col w-full min-h-screen bg-background">
      <section className="py-24 md:py-32 border-b border-outline-variant/20">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div>
              <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase mb-4 block">Management Console</span>
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-primary leading-none">BLOG ADMIN.</h1>
            </div>
            <button 
              onClick={() => handleOpenModal()}
              className="flex items-center gap-3 bg-primary text-on-primary px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-sm hover:opacity-90 transition-opacity shadow-xl"
            >
              <Plus className="w-5 h-5" />
              New Article
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 gap-6">
            {posts.map((post) => (
              <motion.div 
                key={post.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-surface-container-lowest border border-outline-variant/20 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-8 group"
              >
                <div className="w-full md:w-48 aspect-[16/10] rounded-2xl overflow-hidden bg-surface-container-high shrink-0">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                
                <div className="flex-grow">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[10px] font-black uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/40">
                      {post.date}
                    </span>
                  </div>
                  <h2 className="text-2xl font-black text-primary tracking-tight mb-2">{post.title}</h2>
                  <p className="text-on-surface-variant text-sm line-clamp-2 mb-4">{post.excerpt}</p>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <button 
                    onClick={() => handleDuplicate(post)}
                    className="p-3 rounded-xl bg-surface-container-high text-on-surface-variant hover:text-primary transition-colors"
                    title="Duplicate"
                  >
                    <Copy className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={() => handleOpenModal(post)}
                    className="p-3 rounded-xl bg-surface-container-high text-on-surface-variant hover:text-primary transition-colors"
                    title="Edit"
                  >
                    <Edit2 className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={() => handleDelete(post.id)}
                    className="p-3 rounded-xl bg-surface-container-high text-on-surface-variant hover:text-error transition-colors"
                    title="Delete"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            ))}

            {posts.length === 0 && (
              <div className="text-center py-20 bg-surface-container-low rounded-3xl border-2 border-dashed border-outline-variant/30">
                <Layout className="w-16 h-16 text-on-surface-variant/20 mx-auto mb-6" />
                <h3 className="text-2xl font-black text-primary mb-2">No articles yet</h3>
                <p className="text-on-surface-variant mb-8">Start by creating your first blog post.</p>
                <button 
                  onClick={() => handleOpenModal()}
                  className="bg-primary text-on-primary px-8 py-3 rounded-xl font-bold uppercase tracking-widest text-sm"
                >
                  Create Post
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Editor Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-background/80 backdrop-blur-md"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-4xl bg-surface-container-lowest rounded-3xl shadow-2xl border border-outline-variant/20 overflow-hidden flex flex-col max-h-[90vh]"
            >
              <div className="p-8 border-b border-outline-variant/20 flex justify-between items-center bg-surface-container-low">
                <h2 className="text-3xl font-black text-primary tracking-tighter">
                  {editingPost ? 'EDIT ARTICLE' : 'NEW ARTICLE'}
                </h2>
                <button onClick={() => setIsModalOpen(false)} className="p-2 hover:bg-surface-container-high rounded-full transition-colors">
                  <X className="w-6 h-6 text-primary" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="p-8 overflow-y-auto space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-on-surface-variant/60">
                      <Type className="w-3 h-3" /> Title
                    </label>
                    <input 
                      required
                      value={formData.title}
                      onChange={e => setFormData({...formData, title: e.target.value})}
                      className="w-full bg-surface-container-high border-none rounded-xl px-6 py-4 text-primary font-bold focus:ring-2 focus:ring-primary/20 transition-all"
                      placeholder="Enter article title..."
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-on-surface-variant/60">
                      <Tag className="w-3 h-3" /> Category
                    </label>
                    <select 
                      value={formData.category}
                      onChange={e => setFormData({...formData, category: e.target.value})}
                      className="w-full bg-surface-container-high border-none rounded-xl px-6 py-4 text-primary font-bold focus:ring-2 focus:ring-primary/20 transition-all appearance-none"
                    >
                      {['Logistics', 'Technology', 'Community', 'Sustainability', 'Hospitality', 'Quality Control'].map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-on-surface-variant/60">
                    <Layout className="w-3 h-3" /> Excerpt
                  </label>
                  <textarea 
                    required
                    value={formData.excerpt}
                    onChange={e => setFormData({...formData, excerpt: e.target.value})}
                    className="w-full bg-surface-container-high border-none rounded-xl px-6 py-4 text-primary font-medium focus:ring-2 focus:ring-primary/20 transition-all h-24 resize-none"
                    placeholder="Brief summary for the grid view..."
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-on-surface-variant/60">
                      <ImageIcon className="w-3 h-3" /> Image URL
                    </label>
                    <input 
                      required
                      value={formData.image}
                      onChange={e => setFormData({...formData, image: e.target.value})}
                      className="w-full bg-surface-container-high border-none rounded-xl px-6 py-4 text-primary font-medium focus:ring-2 focus:ring-primary/20 transition-all"
                      placeholder="https://images.unsplash.com/..."
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-on-surface-variant/60">
                      <ClockIcon className="w-3 h-3" /> Read Time
                    </label>
                    <input 
                      required
                      value={formData.readTime}
                      onChange={e => setFormData({...formData, readTime: e.target.value})}
                      className="w-full bg-surface-container-high border-none rounded-xl px-6 py-4 text-primary font-medium focus:ring-2 focus:ring-primary/20 transition-all"
                      placeholder="5 min read"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-on-surface-variant/60">
                    <Type className="w-3 h-3" /> Content (HTML/Markdown)
                  </label>
                  <textarea 
                    required
                    value={formData.content}
                    onChange={e => setFormData({...formData, content: e.target.value})}
                    className="w-full bg-surface-container-high border-none rounded-xl px-6 py-4 text-primary font-mono text-sm focus:ring-2 focus:ring-primary/20 transition-all h-64 resize-none"
                    placeholder="<p>Write your article content here...</p>"
                  />
                </div>

                <div className="pt-8 border-t border-outline-variant/20 flex justify-end gap-4">
                  <button 
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-xs text-on-surface-variant hover:bg-surface-container-high transition-colors"
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit"
                    className="flex items-center gap-3 bg-primary text-on-primary px-10 py-4 rounded-xl font-black uppercase tracking-widest text-xs hover:opacity-90 transition-opacity shadow-lg"
                  >
                    <Save className="w-4 h-4" />
                    {editingPost ? 'Update Article' : 'Publish Article'}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
