import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import TableOfContents from '@/components/TableOfContents';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Understanding Slab Leaks: A Homeowners Guide',
  description: 'Learn everything you need to know about slab leaks, from causes and signs to repair options and costs.',
};

export default function BlogPost() {
  const tocItems = [
    {
      id: 'what-is-slab-leak',
      title: 'What is a Slab Leak?',
      level: 1,
      subItems: [
        { id: 'under-concrete', title: 'Pipes under the concrete', level: 2 },
        { id: 'hot-vs-cold', title: 'Hot vs Cold water leaks', level: 2 },
      ]
    },
    {
      id: 'causes',
      title: 'Common Causes of Slab Leaks',
      level: 1,
      subItems: [
        { id: 'poor-installation', title: 'Poor installation practices', level: 2 },
        { id: 'water-quality', title: 'Hard water and corrosion', level: 2 },
        { id: 'foundation-shift', title: 'Foundation shifting and settling', level: 2 },
      ]
    },
    {
      id: 'signs',
      title: 'Signs You Have a Slab Leak',
      level: 1,
      subItems: [
        { id: 'water-bill', title: 'Unexplained high water bills', level: 2 },
        { id: 'warm-spots', title: 'Warm spots on your floor', level: 2 },
        { id: 'sounds', title: 'Sounds of running water', level: 2 },
      ]
    },
    {
      id: 'repair-options',
      title: 'Repair Options',
      level: 1,
      subItems: [
        { id: 'spot-repair', title: 'Direct spot repair', level: 2 },
        { id: 'rerouting', title: 'Pipe rerouting (Recommended)', level: 2 },
      ]
    },
    {
      id: 'faq',
      title: 'Frequently Asked Questions',
      level: 1
    },
    {
      id: 'conclusion',
      title: 'Conclusion',
      level: 1
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <section style={{ 
        position: 'relative', 
        padding: '8rem 0 6rem', 
        overflow: 'hidden', 
        minHeight: '400px', 
        display: 'flex', 
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
      }}>
        <div style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          width: '100%', 
          height: '100%', 
          zIndex: 0, 
          backgroundColor: '#18181b' 
        }}>
          <Image 
            src="/images/hero_home.jpg" 
            alt="Slab leak repair" 
            fill 
            sizes="100vw" 
            style={{ objectFit: 'cover', opacity: 0.5 }} 
            priority 
          />
        </div>
        
        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <span style={{ color: 'var(--brand-red)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', display: 'block', marginBottom: '1rem', fontSize: '0.9rem' }}>
            PLUMBING INSIGHTS
          </span>
          <h1 style={{ color: 'var(--white)', marginBottom: '1.5rem', fontSize: '3.5rem', lineHeight: '1.2', fontWeight: '900', maxWidth: '800px', margin: '0 auto' }}>
            Understanding Slab Leaks: A Homeowner's Guide
          </h1>
          <p style={{ color: '#e4e4e7', fontSize: '1.1rem', maxWidth: '600px', margin: '1.5rem auto 0' }}>
            Everything you need to know to protect your home's foundation and your wallet from hidden water damage.
          </p>
        </div>
      </section>

      {/* Main Content Layout */}
      <section style={{ padding: '4rem 0', backgroundColor: 'var(--white)' }}>
        <div className="container">
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 350px', gap: '4rem', alignItems: 'start' }} className="blog-layout">
            
            {/* Left Content Area */}
            <article style={{ color: '#334155', lineHeight: '1.8', fontSize: '1.1rem' }}>
              <div style={{ marginBottom: '3rem' }}>
                <p>
                  Discovering you have a slab leak can be one of the most stressful experiences for a homeowner. Water pooling invisibly beneath your foundation can cause massive structural damage before you even realize there's a problem. In this comprehensive guide, we'll break down exactly what a slab leak is, why they happen, and how to fix them without destroying your home.
                </p>
              </div>

              <h2 id="what-is-slab-leak" style={{ fontSize: '2rem', fontWeight: '800', color: '#0f172a', marginBottom: '1.5rem', paddingTop: '2rem', marginTop: '-2rem' }}>
                What is a Slab Leak?
              </h2>
              <p style={{ marginBottom: '1.5rem' }}>
                A slab leak occurs when one of the pressurized water lines running underneath the concrete foundation of your home develops a pinhole leak or completely ruptures. Because the pipes are encased in concrete or buried in the dirt below it, the water has nowhere to go but up into your flooring or down into the soil, creating a giant sinkhole effect.
              </p>

              <h3 id="under-concrete" style={{ fontSize: '1.5rem', fontWeight: '700', color: '#1e293b', marginBottom: '1rem', paddingTop: '2rem', marginTop: '-2rem' }}>
                Pipes Under the Concrete
              </h3>
              <p style={{ marginBottom: '1.5rem' }}>
                Most modern homes built on a slab-on-grade foundation have their plumbing lines installed before the concrete is poured. While this is efficient during construction, it makes repairs incredibly difficult decades later.
              </p>

              <h3 id="hot-vs-cold" style={{ fontSize: '1.5rem', fontWeight: '700', color: '#1e293b', marginBottom: '1rem', paddingTop: '2rem', marginTop: '-2rem' }}>
                Hot vs Cold Water Leaks
              </h3>
              <p style={{ marginBottom: '2.5rem' }}>
                Approximately 80% of all slab leaks occur on the hot water line. The constant expansion and contraction of the pipe as hot water flows through it creates friction against the concrete and dirt, causing the pipe to wear down much faster than a cold line.
              </p>


              <h2 id="causes" style={{ fontSize: '2rem', fontWeight: '800', color: '#0f172a', marginBottom: '1.5rem', paddingTop: '2rem', marginTop: '-2rem' }}>
                Common Causes of Slab Leaks
              </h2>
              
              <h3 id="poor-installation" style={{ fontSize: '1.5rem', fontWeight: '700', color: '#1e293b', marginBottom: '1rem', paddingTop: '2rem', marginTop: '-2rem' }}>
                Poor Installation Practices
              </h3>
              <p style={{ marginBottom: '1.5rem' }}>
                If the pipes were nicked, kinked, or not properly sleeved when the home was built, those weak points will eventually fail under constant municipal water pressure.
              </p>

              <h3 id="water-quality" style={{ fontSize: '1.5rem', fontWeight: '700', color: '#1e293b', marginBottom: '1rem', paddingTop: '2rem', marginTop: '-2rem' }}>
                Hard Water and Corrosion
              </h3>
              <p style={{ marginBottom: '1.5rem' }}>
                Tucson is notorious for extremely hard water. Over decades, the minerals in the water act like liquid sandpaper, physically eroding the inside of copper pipes until a pinhole develops.
              </p>

              <h3 id="foundation-shift" style={{ fontSize: '1.5rem', fontWeight: '700', color: '#1e293b', marginBottom: '1rem', paddingTop: '2rem', marginTop: '-2rem' }}>
                Foundation Shifting and Settling
              </h3>
              <p style={{ marginBottom: '2.5rem' }}>
                Expansive clay soils expand when wet and shrink when dry. This constant heaving lifts and drops the heavy concrete slab. The rigid copper pipes trapped inside simply cannot bend, eventually snapping under the immense pressure.
              </p>


              <h2 id="signs" style={{ fontSize: '2rem', fontWeight: '800', color: '#0f172a', marginBottom: '1.5rem', paddingTop: '2rem', marginTop: '-2rem' }}>
                Signs You Have a Slab Leak
              </h2>
              
              <h3 id="water-bill" style={{ fontSize: '1.5rem', fontWeight: '700', color: '#1e293b', marginBottom: '1rem', paddingTop: '2rem', marginTop: '-2rem' }}>
                Unexplained High Water Bills
              </h3>
              <p style={{ marginBottom: '1.5rem' }}>
                A sudden spike in your water bill is often the very first sign of a hidden leak. If your usage hasn't changed but your bill has doubled, it's time to check the meter.
              </p>

              <h3 id="warm-spots" style={{ fontSize: '1.5rem', fontWeight: '700', color: '#1e293b', marginBottom: '1rem', paddingTop: '2rem', marginTop: '-2rem' }}>
                Warm Spots on Your Floor
              </h3>
              <p style={{ marginBottom: '1.5rem' }}>
                Because hot water lines fail most frequently, a noticeably warm patch of tile or laminate flooring (especially in a bathroom or kitchen) is a classic symptom of an active hot water slab leak.
              </p>

              <h3 id="sounds" style={{ fontSize: '1.5rem', fontWeight: '700', color: '#1e293b', marginBottom: '1rem', paddingTop: '2rem', marginTop: '-2rem' }}>
                Sounds of Running Water
              </h3>
              <p style={{ marginBottom: '2.5rem' }}>
                If your house is completely quiet and you can hear a faint hissing or running water sound coming from inside the walls or under the floor when all taps are off, you are losing water.
              </p>


              <h2 id="repair-options" style={{ fontSize: '2rem', fontWeight: '800', color: '#0f172a', marginBottom: '1.5rem', paddingTop: '2rem', marginTop: '-2rem' }}>
                Repair Options
              </h2>
              
              <h3 id="spot-repair" style={{ fontSize: '1.5rem', fontWeight: '700', color: '#1e293b', marginBottom: '1rem', paddingTop: '2rem', marginTop: '-2rem' }}>
                Direct Spot Repair
              </h3>
              <p style={{ marginBottom: '1.5rem' }}>
                This involves jackhammering through the concrete directly above the leak to replace a small section of pipe. While sometimes necessary, it is messy, destroys flooring, and leaves the rest of the aging pipe vulnerable to future leaks.
              </p>

              <h3 id="rerouting" style={{ fontSize: '1.5rem', fontWeight: '700', color: '#1e293b', marginBottom: '1rem', paddingTop: '2rem', marginTop: '-2rem' }}>
                Pipe Rerouting (Recommended)
              </h3>
              <p style={{ marginBottom: '2.5rem' }}>
                The gold standard of slab leak repair. We abandon the broken underground pipe completely and route a brand new, highly durable PEX water line through your attic and interior walls. This protects your pristine flooring and guarantees that specific line will never leak under your slab again.
              </p>


              <h2 id="faq" style={{ fontSize: '2rem', fontWeight: '800', color: '#0f172a', marginBottom: '1.5rem', paddingTop: '2rem', marginTop: '-2rem' }}>
                Frequently Asked Questions
              </h2>
              <div style={{ marginBottom: '2.5rem' }}>
                <h4 style={{ fontWeight: '700', color: '#1e293b', marginBottom: '0.5rem' }}>Will insurance cover my slab leak?</h4>
                <p style={{ marginBottom: '1.5rem' }}>Most homeowner policies will cover the "access and egress" (the cost to get to the leak and restore the property), as well as water damage mitigation, but they rarely cover the cost of the actual plumbing repair itself.</p>
                
                <h4 style={{ fontWeight: '700', color: '#1e293b', marginBottom: '0.5rem' }}>How long does rerouting take?</h4>
                <p style={{ marginBottom: '1.5rem' }}>A professional pipe reroute can typically be completed in 1 to 2 days, depending on the length of the run and the complexity of the home's layout.</p>
              </div>

              <h2 id="conclusion" style={{ fontSize: '2rem', fontWeight: '800', color: '#0f172a', marginBottom: '1.5rem', paddingTop: '2rem', marginTop: '-2rem' }}>
                Conclusion
              </h2>
              <p style={{ marginBottom: '1.5rem' }}>
                A slab leak doesn't have to mean the end of your beautiful home. By catching the signs early and opting for non-destructive repair methods like PEX rerouting, you can permanently solve the problem and protect your property's value. 
              </p>
              <p>
                If you suspect you have a leak, don't wait for the damage to spread. <Link href="/contact" style={{ color: 'var(--brand-red)', fontWeight: '600' }}>Contact Tucson Leak Pros</Link> today for a professional, non-invasive diagnostic inspection.
              </p>
              
            </article>

            {/* Right Sidebar - Table of Contents */}
            <aside className="blog-sidebar">
              <TableOfContents items={tocItems} />
            </aside>
            
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 992px) {
          .blog-layout {
            grid-template-columns: 1fr !important;
          }
          .blog-sidebar {
            order: -1;
            margin-bottom: 2rem;
          }
        }
        
        /* Smooth scrolling for the whole page */
        html {
          scroll-behavior: smooth;
        }
      `}} />
    </main>
  );
}
