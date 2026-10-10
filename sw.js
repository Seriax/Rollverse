const CACHE='rollverse-0.2.0';
const ASSETS=['./','./index.html','./manifest.webmanifest','./icon-180.png','./icon-192.png','./icon-512.png'];
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(ASSETS.map(url=>new Request(url,{cache:'reload'})))).then(()=>self.skipWaiting())));
self.addEventListener('message',event=>{if(event.data?.type==='SKIP_WAITING')self.skipWaiting();});
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key.startsWith('rollverse-')&&key!==CACHE).map(key=>caches.delete(key)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',event=>{
  const request=event.request,url=new URL(request.url);
  if(request.method!=='GET'||url.origin!==self.location.origin||!url.pathname.startsWith(self.registration.scope.replace(url.origin,'')))return;
  if(request.mode==='navigate'){
    event.respondWith(fetch(request,{cache:'no-cache'}).then(async response=>{if(response.ok){const cache=await caches.open(CACHE);await cache.put('./index.html',response.clone());}return response;}).catch(async()=>await caches.match('./index.html')||Response.error()));return;
  }
  event.respondWith(caches.match(request).then(cached=>cached||fetch(request)));
});
