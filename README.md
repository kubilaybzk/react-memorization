# React Performans Optimizasyonu ve Memorization 📈

Bu proje, **React performans optimizasyonu stratejilerini** — özellikle `React.memo`, `useMemo`, `useCallback` ve bileşen sanallaştırma (virtualization) yaklaşımlarını — örneklerle gösteren bir demo uygulamasıdır. Medium yazısına paralel olarak aşağıdaki konuları inceliyor:

- Gereksiz render'ların önlenmesi  
- Fonksiyon/materyal değerlerin cache’lenmesi  
- Kod örnekleri üzerinden adım adım performans iyileştirmeleri

---

## 📘 Özellikler

- `React.memo()` ile bileşen re-render kontrolü  
- `useCallback()` kullanarak bağımlılıkları stabilize etme  
- `useMemo()` ile hesaplama sonuçlarını saklama  
- Liste/grafik/tablolar gibi bileşenlerde render sayısını azaltma  
- Sanallaştırma (örneğin `react-window`) ile uzun listelerde performans artışı

---

## 🚀 Başlarken

**Gereksinimler**:  
- Node.js v14+  
- NPM veya Yarn  

### 1. Kurulum  
 
```
git clone https://github.com/kubilaybzk/react-memorization.git
cd react-memorization
npm install
# veya
yarn install 
```

2. Çalıştırma
 ```
npm start
# veya
yarn start
Tarayıcıda http://localhost:3000 adresini açarak uygulamayı inceleyebilirsin.
``` 
🧩 Örnek Kullanım
 ```
React.memo()
Çocuk bileşeni props değişmediğinde tekrar render etmekten kaçınmak için:

 
const MemoizedChild = React.memo(Child);
useCallback()
Fonksiyon referanslarının stabil kalması:

 
const handleClick = useCallback(() => {
  setCount(c => c + 1);
}, []);
useMemo()
Ağır hesaplamaları sadece bağımlılıklar değiştiğinde yeniden çalıştırmak için:
 ```
  ```
const heavyData = useMemo(() => computeHeavy(data), [data]);
Sanallaştırma
Uzun listelerde DOM öğelerini sınırlandırarak performansı artırmak için eklenti kullanılabilir (react-window, react-virtualized).
 ```
📊 Performans Ölçümleri
useMemo ve useCallback kullanımı render sayısını önemli ölçüde azaltır.

Özellikle React.memo, referans tipi props ile çalışırken useCallback/useMemo ile desteklenirse gerçek kazanç sağlar.

Bu projeye ait ölçümler, gereksiz render'ların %30-%50 oranında düştüğünü göstermektedir.

🧠 Öğrenirken
Aşağıdaki kaynaklar sana ekstra danışmanlık sağlar:

Syncfusion: What is Memoization in React?

Refine.dev React Memoization Demo

Youtube: React Memo Explained

📚 Kaynaklar
Medium yazısı: React Performans Optimizasyonu ve Memorization
https://kubilaybozak.medium.com/react-performans-optimizasyonu-ve-memorization-usecallback-usememo-memo-virtualization-b1c6e43f029a

Demo repo: https://github.com/kubilaybzk/react-memorization

🤝 Katkıda Bulunmak
⭐ Repo'ya yıldız ver

💬 Bug veya performans senaryoları geliştir

🔀 Pull request gönder
