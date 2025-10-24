import{a as d,S as f,i as m}from"./assets/vendor-CZ5zj-u3.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const h="52851423-7ef01ff8a01731751e4011988";function y(i){return d("https://pixabay.com/api/",{params:{key:h,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(({data:r})=>r)}const a=document.querySelector(".gallery"),l=document.querySelector(".loader"),g=new f(".gallery a",{captionsData:"alt",captionDelay:250});function p(i){a.innerHTML=i.map(({webformatURL:r,largeImageURL:o,tags:n,likes:e,views:t,comments:s,downloads:u})=>`
    <a class="card" href="${o}">
    <img src="${r}" alt="${n}" loading="lazy" width="360" height="200" />
    <ul class="meta">
    <li><b>Likes</b> ${e}</li>
    <li><b>Views</b> ${t}</li>
    <li><b>Comments</b> ${s}</li>
    <li><b>Downloads</b> ${u}</li>
    </ul>
      </a>
    `).join(""),g.refresh()}function b(){a.innerHTML=""}function L(){l.classList.remove("is-hidden")}function S(){l.classList.add("is-hidden")}const c=document.querySelector(".form");c.addEventListener("submit",q);function q(i){i.preventDefault(),L(),b();const r=i.target.elements["search-text"].value.trim();y(r).then(o=>{if(p(o.hits),o.hits.length===0)return m.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#EF4040",messageColor:"#FAFAFB"})}).catch(o=>console.log(o)).finally(()=>{S(),c.reset()})}
//# sourceMappingURL=index.js.map
