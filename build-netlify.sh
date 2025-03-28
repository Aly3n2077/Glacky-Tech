#!/bin/bash

# Temporarily replace App.tsx with a static version for Netlify
echo "Preparing static version for Netlify deployment..."

# Create a backup of the original App.tsx
cp client/src/App.tsx client/src/App.tsx.bak

# Create a static version of App.tsx that uses the StaticHomePage
cat > client/src/App.tsx << 'EOF'
import { Switch, Route } from "wouter";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StaticHomePage from "./pages/static-home";
import NotFound from "./pages/not-found";
import { Toaster } from "@/components/ui/toaster";

function Router() {
  return (
    <Switch>
      <Route path="/" component={StaticHomePage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-primary text-white">
      <Header />
      <main className="flex-grow">
        <Router />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
EOF

# Build the static version for Netlify deployment
echo "Building frontend for Netlify deployment..."
npx vite build

# Create a _redirects file for Netlify SPA routing
echo "/* /index.html 200" > dist/_redirects

# Create a hidden form for Netlify form handling
cat > dist/form.html << 'EOF'
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Contact Form</title>
</head>
<body>
  <form name="contact" netlify netlify-honeypot="bot-field" hidden>
    <input type="text" name="name" />
    <input type="email" name="email" />
    <select name="service"></select>
    <textarea name="message"></textarea>
  </form>
</body>
</html>
EOF

# Restore the original App.tsx
mv client/src/App.tsx.bak client/src/App.tsx

echo "Build completed successfully!"