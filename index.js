import{a as m,S as f,i as a}from"./assets/vendor-CZ5zj-u3.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const h="52851423-7ef01ff8a01731751e4011988";function g(i){return m("https://pixabay.com/api/",{params:{key:h,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(({data:r})=>r)}const l=document.querySelector(".gallery"),c=document.querySelector(".loader"),p=new f(".gallery a",{captionsData:"alt",captionDelay:250});function y(i){l.innerHTML=i.map(({webformatURL:r,largeImageURL:o,tags:n,likes:e,views:t,comments:s,downloads:d})=>`
    <a class="card" href="${o}">
    <img src="${r}" alt="${n}" loading="lazy" width="360" height="200" />
    <ul class="meta">
    <li><b>Likes</b> ${e}</li>
    <li><b>Views</b> ${t}</li>
    <li><b>Comments</b> ${s}</li>
    <li><b>Downloads</b> ${d}</li>
    </ul>
      </a>
    `).join(""),p.refresh()}function b(){l.innerHTML=""}function L(){c.classList.remove("is-hidden")}function F(){c.classList.add("is-hidden")}const u=document.querySelector(".form");u.addEventListener("submit",w);function w(i){i.preventDefault();const r=i.target.elements["search-text"].value.trim();if(!r){a.show({message:"Please enter a search term.",position:"topRight",backgroundColor:"#EF4040",messageColor:"#FAFAFB"});return}L(),b(),g(r).then(o=>{if(o.hits.length===0)return a.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#EF4040",messageColor:"#FAFAFB"});y(o.hits)}).catch(o=>{a.show({message:o.message||"Something went wrong. Please try again.",position:"topRight",backgroundColor:"#EF4040",messageColor:"#FAFAFB"})}).finally(()=>{F(),u.reset()})}
//# sourceMappingURL=index.js.map
