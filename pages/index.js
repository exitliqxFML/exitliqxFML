   useEffect(() => {
-    async function load() {
-      const res = await fetch('/api/launches');
-      setLaunches(await res.json());
-    }
+    async function load() {
+      try {
+        const res = await fetch('/api/launches');
+        const data = await res.json();
+        // only update if it's actually an array
+        if (Array.isArray(data)) {
+          setLaunches(data);
+        } else {
+          console.error('Invalid API response:', data);
+        }
+      } catch (e) {
+        console.error('Fetch error:', e);
+      }
+    }
     load();
     const iv = setInterval(load, 5000);
     return () => clearInterval(iv);
   }, []);
