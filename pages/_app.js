// pages/_app.js

-import '@solana/wallet-adapter-react-ui/styles.css';
-import '@/styles/globals.css';
+import '@solana/wallet-adapter-react-ui/styles.css';
+import '../styles/globals.css';

 // existing imports...
 export default function App({ Component, pageProps }) {
-  return (
-    <ConnectionProvider ...>
-      <WalletProvider ...>
-        <WalletModalProvider>
-          <div className="p-4">
-            <WalletMultiButton />
-            <Component {...pageProps} />
-          </div>
-        </WalletModalProvider>
-      </WalletProvider>
-    </ConnectionProvider>
-  );
+  return (
+    <ConnectionProvider ...>
+      <WalletProvider ...>
+        <WalletModalProvider>
+          <div
+            style={{
+              minHeight: '100vh',
+              display: 'flex',
+              flexDirection: 'column',
+              padding: '2rem',
+              boxSizing: 'border-box'
+            }}
+          >
+            <WalletMultiButton
+              style={{
+                background: 'var(--neon)',
+                color: '#0d0d0d',
+                fontWeight: 'bold',
+                alignSelf: 'flex-end',
+                marginBottom: '1rem'
+              }}
+            />
+            <Component {...pageProps} />
+          </div>
+        </WalletModalProvider>
+      </WalletProvider>
+    </ConnectionProvider>
+  );
