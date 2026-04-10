export interface BlogPost {
  id: number;
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

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Optimizing the Cold Chain: Lessons from Freetown",
    excerpt: "How we navigated the unique logistical challenges of Sierra Leone's capital to build a resilient ice distribution network.",
    content: `
      <p>Freetown's geography is as beautiful as it is challenging for logistics. With its steep hills, narrow streets, and humid coastal climate, maintaining a consistent cold chain requires more than just refrigerated trucks—it requires a deep understanding of the local landscape.</p>
      
      <h3>The Challenge of Urban Density</h3>
      <p>In many parts of Freetown, large industrial reefers simply cannot navigate the tight corners of community markets. This is where our hybrid fleet strategy came into play. By utilizing custom-built cold-box tricycles for the "last mile," we've been able to reach vendors who were previously underserved.</p>
      
      <h3>Thermal Integrity in High Humidity</h3>
      <p>Humidity is the enemy of ice. We've invested heavily in high-thermal-mass insulation for our delivery containers. This ensures that even during the peak of the rainy season or the hottest dry spells, our ice arrives with minimal sublimation.</p>
      
      <h3>The Human Element</h3>
      <p>Technology is only half the battle. Our drivers and handlers are trained in rapid-transfer protocols to minimize the time ice is exposed to ambient air. Every second counts when you're preserving the quality of a catch or a premium beverage program.</p>
    `,
    category: "Logistics",
    date: "April 5, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200",
    author: {
      name: "Alusine Bangura",
      role: "Head of Operations",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100",
    }
  },
  {
    id: 2,
    title: "The Science of Purity: Why Triple-Filtered Ice Matters",
    excerpt: "Exploring the reverse osmosis process and why high-quality ice is critical for both food safety and premium hospitality.",
    content: `
      <p>Not all ice is created equal. At Ice Me Inc., we treat ice as a food product, which means purity is our absolute priority. The journey from water to crystal-clear cube involves a rigorous purification process that sets us apart.</p>
      
      <h3>The Reverse Osmosis Advantage</h3>
      <p>Our facility utilizes a three-stage reverse osmosis system. This removes 99.9% of dissolved solids, chlorine, and organic contaminants. The result is ice that is not only safer to consume but also harder and slower to melt than standard tap-water ice.</p>
      
      <h3>Clarity and Presentation</h3>
      <p>For the hospitality sector, clarity is key. Impurities in water cause ice to look cloudy and can introduce unwanted flavors to premium spirits. Our triple-filtration ensures that the only thing our ice adds to a drink is a perfect chill.</p>
      
      <h3>Microbiological Safety</h3>
      <p>In a tropical climate, water safety is paramount. Our automated production line minimizes human contact, and our final UV-sterilization stage ensures that every cube is microbiologically pristine before it enters our sealed packaging.</p>
    `,
    category: "Quality Control",
    date: "March 28, 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=1200",
    author: {
      name: "Fatmata Koroma",
      role: "Finance Director",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100",
    }
  },
  {
    id: 3,
    title: "Supporting Artisanal Fisheries: A Community Impact Report",
    excerpt: "A deep dive into how reliable ice supply has transformed the livelihoods of over 500 local fishing boat operators.",
    content: `
      <p>The artisanal fishing sector is the heartbeat of Sierra Leone's coastal economy. For decades, however, post-harvest loss was a major hurdle for local fishers. Without reliable ice, a significant portion of the daily catch would spoil before reaching the market.</p>
      
      <h3>Stabilizing Incomes</h3>
      <p>By providing consistent, high-thermal-mass crushed ice at key coastal hubs, we've helped fishers extend their time at sea and preserve their catch for longer. This has led to a measurable increase in the market value of their products and more stable incomes for hundreds of families.</p>
      
      <h3>Reducing Waste</h3>
      <p>Our impact report shows a 30% reduction in spoilage among the fleets we support. This isn't just a win for the fishers; it's a win for national food security, ensuring that more high-quality protein reaches the tables of Sierra Leoneans.</p>
      
      <h3>A Partnership for Growth</h3>
      <p>We view our relationship with the fishing community as a partnership. We're not just a vendor; we're an infrastructure provider that enables local entrepreneurs to scale their operations and compete more effectively in the regional market.</p>
    `,
    category: "Community",
    date: "March 15, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1498623116890-37e912163d5d?auto=format&fit=crop&q=80&w=1200",
    author: {
      name: "Marie Garber",
      role: "Founder & CEO",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100",
    }
  },
  {
    id: 4,
    title: "Future of Cold Storage: IoT and Real-Time Monitoring",
    excerpt: "How Ice Me Inc. is leveraging technology to ensure 99.9% uptime and absolute thermal integrity in our 250MT facility.",
    content: `
      <p>In the world of cold storage, a single degree can make a massive difference. To manage our 250MT facility, we've moved beyond manual checks to a fully integrated IoT monitoring system.</p>
      
      <h3>Real-Time Visibility</h3>
      <p>Our facility is equipped with a network of high-precision sensors that transmit temperature and humidity data every 60 seconds. This data is accessible to our operations team via a centralized dashboard, allowing for immediate intervention if any parameters drift.</p>
      
      <h3>Predictive Maintenance</h3>
      <p>By analyzing performance data over time, our system can identify subtle signs of equipment wear before a failure occurs. This predictive approach to maintenance is key to our 99.9% uptime guarantee.</p>
      
      <h3>Energy Optimization</h3>
      <p>IoT isn't just about safety; it's also about efficiency. Our system automatically adjusts cooling cycles based on ambient external temperatures and facility load, significantly reducing our energy consumption without compromising thermal integrity.</p>
    `,
    category: "Technology",
    date: "March 2, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1200",
    author: {
      name: "Sahr Mattia",
      role: "Logistics Coordinator",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100",
    }
  },
  {
    id: 5,
    title: "Sustainable Cooling: Reducing Our Carbon Footprint",
    excerpt: "Our journey towards more energy-efficient operations and the implementation of solar-assisted cooling systems.",
    content: `
      <p>As a leader in industrial cooling, we recognize our responsibility to minimize our environmental impact. The cold chain is energy-intensive, but we're proving that it can also be sustainable.</p>
      
      <h3>Solar-Assisted Operations</h3>
      <p>We've recently completed the first phase of our solar integration project. By utilizing solar panels to supplement our facility's power needs during peak daylight hours, we've reduced our reliance on the national grid and lowered our operational carbon footprint.</p>
      
      <h3>Eco-Friendly Refrigerants</h3>
      <p>We are transitioning our entire fleet and facility to next-generation refrigerants with zero ozone depletion potential and significantly lower global warming potential. It's a long-term investment in the health of our planet.</p>
      
      <h3>Waste Water Management</h3>
      <p>Our commitment to sustainability extends to water. We've implemented a closed-loop system that captures and filters melt-water for non-potable uses within our facility, drastically reducing our overall water consumption.</p>
    `,
    category: "Sustainability",
    date: "February 18, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=1200",
    author: {
      name: "Ibrahim Sesay",
      role: "Fleet Manager",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100",
    }
  },
  {
    id: 6,
    title: "Hospitality Trends: The Rise of Artisanal Ice Programs",
    excerpt: "Why Freetown's top bars and restaurants are investing in premium ice to elevate their beverage programs.",
    content: `
      <p>The cocktail culture in Freetown is evolving rapidly. Discerning consumers are no longer satisfied with standard drinks; they're looking for an experience. Central to this experience is the quality of the ice.</p>
      
      <h3>The "Big Cube" Movement</h3>
      <p>We've seen a surge in demand for our premium 2-inch cubes. These larger, denser cubes melt significantly slower than standard ice, preventing the dilution of high-end spirits and allowing the complex flavors of a well-crafted cocktail to shine.</p>
      
      <h3>Aesthetic Perfection</h3>
      <p>In the age of social media, presentation is everything. Our crystal-clear ice provides a stunning visual element that elevates the entire aesthetic of a beverage program. It's a small detail that makes a massive impact on customer perception.</p>
      
      <h3>Consistency is Key</h3>
      <p>For high-volume venues, consistency is the greatest challenge. By outsourcing their ice production to Ice Me Inc., Freetown's top establishments can ensure that every drink served meets the same high standard of chill and clarity, every single night.</p>
    `,
    category: "Hospitality",
    date: "February 5, 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1200",
    author: {
      name: "Marie Garber",
      role: "Founder & CEO",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100",
    }
  },
];
