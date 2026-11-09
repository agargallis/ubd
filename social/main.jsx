import React from 'react';
import ReactDOM from 'react-dom/client';
import '@/index.css';
import '@/styles/luxury.css';
import './social.css';
import { POSTS } from './posts';

const params = new URLSearchParams(window.location.search);
const post = POSTS.find((item) => item.id === params.get('post'));
const theme = params.get('theme') || post?.theme || 'dark';

const root = document.documentElement;
root.classList.add(theme);
root.setAttribute('data-theme', theme);

const Index = () => (
  <div className="social-index">
    <h1 className="text-3xl font-bold mb-6">UBD · Social posts</h1>
    <ul className="space-y-2 text-xl">
      {POSTS.map((item) => (
        <li key={item.id}>
          <a className="text-primary" href={`?post=${item.id}`}>{item.id}</a>
        </li>
      ))}
    </ul>
  </div>
);

ReactDOM.createRoot(document.getElementById('root')).render(post ? post.render(theme) : <Index />);

// The export script waits for this flag: fonts loaded, images settled,
// entrance animations finished.
const waitForImages = () =>
  Promise.all(
    [...document.images].map((img) =>
      img.complete ? Promise.resolve() : new Promise((resolve) => {
        img.addEventListener('load', resolve, { once: true });
        img.addEventListener('error', resolve, { once: true });
      })
    )
  );

window.setTimeout(async () => {
  await document.fonts.ready;
  await waitForImages();
  window.setTimeout(() => {
    window.__SOCIAL_READY = true;
  }, 2200);
}, 50);
