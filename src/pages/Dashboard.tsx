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
  Tag,
  Grid,
  FileText,
  LogOut,
  ArrowLeft
} from 'lucide-react';
import { db, handleFirestoreError, OperationType } from '../lib/firebase';
import { useAuth } from '../contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { cn } from '../lib/utils';

// --- Types ---

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

interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  category: string;
  title: string;
  description: string;
}

// --- Main Component ---

export default function Dashboard() {
  const { user, isEditor, isAdmin, signIn, logout } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'blog' | 'gallery'>('blog');
  
  // State for Blog
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isBlogModalOpen, setIsBlogModalOpen] = useState(false);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [blogFormData, setBlogFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    category: 'Logistics',
    image: '',
    readTime: '5 min read'
  });

  // State for Gallery
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);
  const [isGalleryModalOpen, setIsGalleryModalOpen] = useState(false);
  const [editingGalleryItem, setEditingGalleryItem] = useState<GalleryItem | null>(null);
  const [galleryFormData, setGalleryFormData] = useState({
    title: '',
    description: '',
    category: 'operations',
    src: '',
    alt: ''
  });

  // Fetch Data
  useEffect(() => {
    if (!user) return;

    const blogQuery = query(collection(db, 'blogPosts'), orderBy('createdAt', 'desc'));
    const unsubscribeBlog = onSnapshot(blogQuery, (snapshot) => {
      setPosts(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as BlogPost[]);
    }, (error) => handleFirestoreError(error, OperationType.LIST, 'blogPosts'));

    const galleryQuery = query(collection(db, 'galleryItems'), orderBy('createdAt', 'desc'));
    const unsubscribeGallery = onSnapshot(galleryQuery, (snapshot) => {
      setGalleryItems(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as GalleryItem[]);
    }, (error) => handleFirestoreError(error, OperationType.LIST, 'galleryItems'));

    return () => {
      unsubscribeBlog();
      unsubscribeGallery();
    };
  }, [user]);

  // --- Blog Handlers ---

  const handleBlogSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const data = {
        ...blogFormData,
        date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
        author: {
          name: user?.displayName || 'Anonymous',
          role: isAdmin ? 'Administrator' : 'Editor',
          avatar: user?.photoURL || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100'
        },
        authorUid: user?.uid,
        updatedAt: serverTimestamp()
      };

      if (editingPost) {
        await updateDoc(doc(db, 'blogPosts', editingPost.id), data);
      } else {
        await addDoc(collection(db, 'blogPosts'), { ...data, createdAt: serverTimestamp() });
      }
      setIsBlogModalOpen(false);
    } catch (error) {
      handleFirestoreError(error, editingPost ? OperationType.UPDATE : OperationType.CREATE, 'blogPosts');
    }
  };

  const handleBlogDelete = async (id: string) => {
    if (window.confirm('Delete this article?')) {
      try { await deleteDoc(doc(db, 'blogPosts', id)); }
      catch (error) { handleFirestoreError(error, OperationType.DELETE, `blogPosts/${id}`); }
    }
  };

  // --- Gallery Handlers ---

  const handleGallerySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const data = { ...galleryFormData, updatedAt: serverTimestamp() };
      if (editingGalleryItem) {
        await updateDoc(doc(db, 'galleryItems', editingGalleryItem.id), data);
      } else {
        await addDoc(collection(db, 'galleryItems'), { ...data, createdAt: serverTimestamp() });
      }
      setIsGalleryModalOpen(false);
    } catch (error) {
      handleFirestoreError(error, editingGalleryItem ? OperationType.UPDATE : OperationType.CREATE, 'galleryItems');
    }
  };

  const handleGalleryDelete = async (id: string) => {
    if (window.confirm('Delete this image?')) {
      try { await deleteDoc(doc(db, 'galleryItems', id)); }
      catch (error) { handleFirestoreError(error, OperationType.DELETE, `galleryItems/${id}`); }
    }
  };

  // --- Auth Guards ---

  if (!user) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-background px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
          <h1 className="text-5xl font-black text-primary mb-6 tracking-tighter">Command Center.</h1>
          <p className="text-on-surface-variant mb-10 max-w-md mx-auto">Authorized access only for Ice Me Incorporated management.</p>
          <button onClick={signIn} className="bg-primary text-on-primary px-10 py-4 rounded-2xl font-black uppercase tracking-widest text-xs arctic-gradient shadow-2xl hover:scale-105 transition-all">
            Sign In with Google
          </button>
        </motion.div>
      </div>
    );
  }

  if (!isEditor) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-background px-6 text-center">
        <h1 className="text-4xl font-black text-primary mb-4">RESTRICTED</h1>
        <p className="text-on-surface-variant mb-8 max-w-md">You need Editor permissions to access this monolith.</p>
        <Link to="/" className="text-primary font-bold flex items-center gap-2 justify-center hover:gap-4 transition-all"><ArrowLeft className="w-5 h-5"/> Back to Base</Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full min-h-screen bg-background">
      {/* Header */}
      <section className="pt-32 pb-16 border-b border-outline-variant/10 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[10px] font-bold tracking-[0.3em] text-primary uppercase bg-primary/10 px-3 py-1 rounded-full">Systems Online</span>
                <span className="text-[10px] font-bold tracking-[0.3em] text-primary uppercase">v2.0 Console</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-primary leading-none">MONOLITH.</h1>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-black text-primary">{user.displayName}</p>
                <p className="text-[10px] font-bold tracking-widest uppercase text-on-surface-variant/60">{isAdmin ? 'Admin' : 'Editor'}</p>
              </div>
              <button onClick={logout} className="p-3 bg-surface-container-high rounded-xl text-on-surface-variant hover:text-error transition-all" title="Logout">
                <LogOut className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <div className="sticky top-[80px] z-40 bg-background/80 backdrop-blur-md border-b border-outline-variant/10">
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
          <div className="flex gap-8">
            <button 
              onClick={() => setActiveTab('blog')}
              className={cn(
                "py-6 text-sm font-black uppercase tracking-widest transition-all border-b-2 flex items-center gap-2",
                activeTab === 'blog' ? "text-primary border-primary" : "text-on-surface-variant/40 border-transparent hover:text-primary"
              )}
            >
              <FileText className="w-4 h-4" /> Articles
            </button>
            <button 
              onClick={() => setActiveTab('gallery')}
              className={cn(
                "py-6 text-sm font-black uppercase tracking-widest transition-all border-b-2 flex items-center gap-2",
                activeTab === 'gallery' ? "text-primary border-primary" : "text-on-surface-variant/40 border-transparent hover:text-primary"
              )}
            >
              <Grid className="w-4 h-4" /> Gallery
            </button>
          </div>

          <button 
            onClick={() => activeTab === 'blog' ? setIsBlogModalOpen(true) : setIsGalleryModalOpen(true)}
            className="hidden sm:flex items-center gap-2 bg-primary text-on-primary px-6 py-2.5 rounded-xl font-bold uppercase tracking-widest text-[10px] hover:scale-105 transition-all"
          >
            <Plus className="w-4 h-4" /> New {activeTab === 'blog' ? 'Article' : 'Image'}
          </button>
        </div>
      </div>

      <main className="flex-grow py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <AnimatePresence mode="wait">
            {activeTab === 'blog' ? (
              <motion.div key="blog" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="space-y-4">
                {posts.map(post => (
                  <div key={post.id} className="bg-surface-container-lowest border border-outline-variant/10 rounded-3xl p-6 flex flex-col md:flex-row items-center gap-6 group hover:shadow-xl transition-shadow">
                    <img src={post.image} className="w-full md:w-40 aspect-video rounded-xl object-cover bg-surface-container-high" alt="" />
                    <div className="flex-grow">
                      <div className="flex gap-2 mb-2">
                        <span className="text-[10px] font-black uppercase tracking-widest text-primary bg-primary/5 px-2 py-0.5 rounded">{post.category}</span>
                      </div>
                      <h3 className="text-xl font-black text-primary">{post.title}</h3>
                      <p className="text-on-surface-variant text-xs line-clamp-1">{post.excerpt}</p>
                    </div>
                    <div className="flex gap-2">
                      <button onClick={() => { setEditingPost(post); setBlogFormData(post); setIsBlogModalOpen(true); }} className="p-3 bg-surface-container rounded-xl hover:text-primary transition-all"><Edit2 className="w-4 h-4" /></button>
                      <button onClick={() => handleBlogDelete(post.id)} className="p-3 bg-surface-container rounded-xl hover:text-error transition-all"><Trash2 className="w-4 h-4" /></button>
                    </div>
                  </div>
                ))}
              </motion.div>
            ) : (
              <motion.div key="gallery" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {galleryItems.map(item => (
                  <div key={item.id} className="bg-surface-container-lowest border border-outline-variant/10 rounded-3xl overflow-hidden group hover:shadow-xl transition-shadow">
                    <div className="aspect-square relative">
                      <img src={item.src} className="w-full h-full object-cover" alt={item.title} />
                      <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                        <p className="text-white font-black text-sm">{item.title}</p>
                        <p className="text-white/60 text-[10px] uppercase tracking-widest">{item.category}</p>
                      </div>
                    </div>
                    <div className="p-4 flex justify-end gap-2 bg-surface-container-low">
                      <button onClick={() => { setEditingGalleryItem(item); setGalleryFormData(item); setIsGalleryModalOpen(true); }} className="p-2.5 bg-background rounded-lg hover:text-primary transition-all"><Edit2 className="w-4 h-4" /></button>
                      <button onClick={() => handleGalleryDelete(item.id)} className="p-2.5 bg-background rounded-lg hover:text-error transition-all"><Trash2 className="w-4 h-4" /></button>
                    </div>
                  </div>
                ))}
                {/* Add new card */}
                <button onClick={() => { setEditingGalleryItem(null); setGalleryFormData({ title: '', description: '', category: 'operations', src: '', alt: '' }); setIsGalleryModalOpen(true); }} className="aspect-square rounded-3xl border-2 border-dashed border-outline-variant/20 flex flex-col items-center justify-center gap-4 text-on-surface-variant/40 hover:text-primary hover:border-primary transition-all">
                  <Plus className="w-8 h-8" />
                  <span className="text-xs font-black uppercase tracking-widest">Add Snapshot</span>
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      {/* Blog Modal (Simplified version for space) */}
      <AnimatePresence>
        {isBlogModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <div className="absolute inset-0 bg-background/80 backdrop-blur-md" onClick={() => setIsBlogModalOpen(false)} />
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="relative w-full max-w-4xl bg-surface-container-lowest rounded-3xl p-8 shadow-2xl border border-outline-variant/10 max-h-[90vh] overflow-y-auto">
              <h2 className="text-3xl font-black text-primary mb-8 tracking-tighter uppercase">{editingPost ? 'Edit Article' : 'New Article'}</h2>
              <form onSubmit={handleBlogSubmit} className="space-y-6">
                <input required placeholder="Title" value={blogFormData.title} onChange={e => setBlogFormData({ ...blogFormData, title: e.target.value })} className="w-full bg-surface-container border-none rounded-xl px-6 py-4 font-bold" />
                <div className="grid grid-cols-2 gap-4">
                  <select value={blogFormData.category} onChange={e => setBlogFormData({ ...blogFormData, category: e.target.value })} className="bg-surface-container border-none rounded-xl px-6 py-4 font-bold">
                    {['Logistics', 'Technology', 'Community', 'Sustainability', 'Hospitality'].map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                  <input required placeholder="Read Time" value={blogFormData.readTime} onChange={e => setBlogFormData({ ...blogFormData, readTime: e.target.value })} className="bg-surface-container border-none rounded-xl px-6 py-4 font-bold" />
                </div>
                <input required placeholder="Image URL" value={blogFormData.image} onChange={e => setBlogFormData({ ...blogFormData, image: e.target.value })} className="w-full bg-surface-container border-none rounded-xl px-6 py-4 font-bold" />
                <textarea required placeholder="Excerpt" value={blogFormData.excerpt} onChange={e => setBlogFormData({ ...blogFormData, excerpt: e.target.value })} className="w-full bg-surface-container border-none rounded-xl px-6 py-4 min-h-[100px]" />
                <textarea required placeholder="Content (HTML)" value={blogFormData.content} onChange={e => setBlogFormData({ ...blogFormData, content: e.target.value })} className="w-full bg-surface-container border-none rounded-xl px-6 py-4 min-h-[300px] font-mono text-sm" />
                <button type="submit" className="w-full bg-primary text-on-primary py-4 rounded-xl font-black uppercase tracking-widest arctic-gradient">Save Article</button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Gallery Modal */}
      <AnimatePresence>
        {isGalleryModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <div className="absolute inset-0 bg-background/80 backdrop-blur-md" onClick={() => setIsGalleryModalOpen(false)} />
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="relative w-full max-w-2xl bg-surface-container-lowest rounded-3xl p-8 shadow-2xl border border-outline-variant/10">
              <h2 className="text-3xl font-black text-primary mb-8 tracking-tighter uppercase">{editingGalleryItem ? 'Edit Snapshot' : 'New Snapshot'}</h2>
              <form onSubmit={handleGallerySubmit} className="space-y-6">
                <input required placeholder="Title" value={galleryFormData.title} onChange={e => setGalleryFormData({ ...galleryFormData, title: e.target.value })} className="w-full bg-surface-container border-none rounded-xl px-6 py-4 font-bold" />
                <select value={galleryFormData.category} onChange={e => setGalleryFormData({ ...galleryFormData, category: e.target.value })} className="w-full bg-surface-container border-none rounded-xl px-6 py-4 font-bold">
                  {['operations', 'facilities', 'logistics', 'community'].map(c => <option key={c} value={c}>{c}</option>)}
                </select>
                <input required placeholder="Image URL" value={galleryFormData.src} onChange={e => { setGalleryFormData({ ...galleryFormData, src: e.target.value, alt: galleryFormData.title }); }} className="w-full bg-surface-container border-none rounded-xl px-6 py-4 font-bold" />
                <textarea required placeholder="Brief Description" value={galleryFormData.description} onChange={e => setGalleryFormData({ ...galleryFormData, description: e.target.value })} className="w-full bg-surface-container border-none rounded-xl px-6 py-4 min-h-[100px]" />
                <button type="submit" className="w-full bg-primary text-on-primary py-4 rounded-xl font-black uppercase tracking-widest arctic-gradient">Save Snapshot</button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
