import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { cn } from '../lib/utils';

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
  title: string;
  description: string;
}

const STATIC_FALLBACK: GalleryImage[] = [
  {
    id: '1',
    src: '/images/gallery-production.jpg',
    alt: 'Industrial ice production',
    category: 'operations',
    title: 'Precision Production',
    description: 'Our state-of-the-art ice production line in Freetown.'
  },
  {
    id: '2',
    src: '/images/gallery-coldroom.jpg',
    alt: 'Cold storage facility',
    category: 'facilities',
    title: 'The Cold Room',
    description: '250MT capacity cold storage maintained at -20°C.'
  },
  {
    id: '3',
    src: '/images/gallery-fleet.jpg',
    alt: 'Refrigerated truck',
    category: 'logistics',
    title: 'Primary Fleet',
    description: 'Heavy-duty refrigerated trucks for national distribution.'
  },
  {
    id: '4',
    src: '/images/gallery-fishing.jpg',
    alt: 'Fishermen at sea',
    category: 'community',
    title: 'Coastal Support',
    description: 'Supporting artisanal fishing communities across the coast.'
  },
  {
    id: '5',
    src: '/images/gallery-cubes.jpg',
    alt: 'Premium ice cubes',
    category: 'operations',
    title: 'Premium Purity',
    description: 'Triple-filtered ice cubes for the hospitality sector.'
  },
  {
    id: '6',
    src: '/images/gallery-warehouse.jpg',
    alt: 'Warehouse logistics',
    category: 'facilities',
    title: 'Logistics Hub',
    description: 'Our central warehouse and distribution center.'
  },
  {
    id: '7',
    src: '/images/gallery-tricycle.jpg',
    alt: 'Delivery tricycle',
    category: 'logistics',
    title: 'Urban Delivery',
    description: 'Agile tricycles for rapid urban ice delivery.'
  },
  {
    id: '8',
    src: '/images/gallery-market.jpg',
    alt: 'Local market',
    category: 'community',
    title: 'Market Impact',
    description: 'Ensuring food security in local community markets.'
  }
];

const categories = ['all', 'operations', 'facilities', 'logistics', 'community'];

export default function Gallery() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const q = query(collection(db, 'galleryItems'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const items = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as GalleryImage[];
      
      setImages(items.length > 0 ? items : STATIC_FALLBACK);
    });

    return () => unsubscribe();
  }, []);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});

  const handleImageLoad = (id: string) => {
    setLoadedImages(prev => ({ ...prev, [id]: true }));
  };

  const filteredImages = filter === 'all' 
    ? images 
    : images.filter(img => img.category === filter);

  const openLightbox = (index: number) => {
    // Find the index in the original images array or filtered?
    // Let's use the filtered index for navigation within the lightbox
    setSelectedImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
  };

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % filteredImages.length);
    }
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + filteredImages.length) % filteredImages.length);
    }
  };

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase mb-4 block">Visual Archive</span>
            <h2 className="text-5xl font-black tracking-tighter text-primary">Operations & Facilities</h2>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                  filter === cat 
                    ? 'bg-primary text-white' 
                    : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative aspect-square rounded-xl overflow-hidden bg-surface-container-high cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  decoding="async"
                  onLoad={() => handleImageLoad(image.id)}
                  className={cn(
                    "w-full h-full object-cover transition-all duration-700 group-hover:scale-110",
                    loadedImages[image.id] ? "opacity-100 scale-100 blur-0" : "opacity-0 scale-105 blur-lg"
                  )}
                />
                <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                  <Maximize2 className="absolute top-4 right-4 text-white w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity delay-100" />
                  <h3 className="text-white font-bold text-lg mb-1 translate-y-4 group-hover:translate-y-0 transition-transform">{image.title}</h3>
                  <p className="text-white/80 text-xs translate-y-4 group-hover:translate-y-0 transition-transform delay-75">{image.category}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-12"
            onClick={closeLightbox}
          >
            <button 
              className="absolute top-8 right-8 text-white/60 hover:text-white transition-colors z-[110]"
              onClick={closeLightbox}
            >
              <X className="w-8 h-8" />
            </button>

            <button 
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors z-[110]"
              onClick={prevImage}
            >
              <ChevronLeft className="w-10 h-10" />
            </button>

            <button 
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors z-[110]"
              onClick={nextImage}
            >
              <ChevronRight className="w-10 h-10" />
            </button>

            <motion.div 
              key={selectedImageIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-5xl w-full h-full flex flex-col items-center justify-center gap-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full max-h-[70vh] rounded-xl overflow-hidden bg-white/5">
                <img
                  src={filteredImages[selectedImageIndex].src}
                  alt={filteredImages[selectedImageIndex].alt}
                  decoding="async"
                  onLoad={() => handleImageLoad(`lightbox-${filteredImages[selectedImageIndex].id}`)}
                  className={cn(
                    "w-full h-full object-contain transition-all duration-500",
                    loadedImages[`lightbox-${filteredImages[selectedImageIndex].id}`] ? "opacity-100 scale-100 blur-0" : "opacity-0 scale-95 blur-md"
                  )}
                />
              </div>
              
              <div className="text-center max-w-2xl">
                <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase mb-2 block">
                  {filteredImages[selectedImageIndex].category}
                </span>
                <h3 className="text-3xl font-black text-white mb-4 tracking-tight">
                  {filteredImages[selectedImageIndex].title}
                </h3>
                <p className="text-white/60 leading-relaxed">
                  {filteredImages[selectedImageIndex].description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
