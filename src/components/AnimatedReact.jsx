import React from 'react';

export default function AnimatedReact(){
  // Minimal React island example. Replace with Framer Motion / GSAP only inside this island if needed.
  return (
    <div style={{padding:16,background:'#fff2cc',borderRadius:8}}>
      <strong>React island</strong>
      <div style={{marginTop:8}}>Small interactive widget (React) — hydrate only where necessary.</div>
    </div>
  );
}
