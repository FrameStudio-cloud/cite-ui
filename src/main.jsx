import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import { Navbar, Button, Gallery, WhatsAppFloat, Modal, ToastProvider, useToast } from "./index";

const links = [
  { label: "Home", href: "#" },
  { label: "About", href: "#" },
  { label: "Services", href: "#" },
];

const images = [
  { src: "https://picsum.photos/seed/a/400/300", alt: "Image 1" },
  { src: "https://picsum.photos/seed/b/400/300", alt: "Image 2" },
  { src: "https://picsum.photos/seed/c/400/300", alt: "Image 3" },
  { src: "https://picsum.photos/seed/d/400/300", alt: "Image 4" },
  { src: "https://picsum.photos/seed/e/400/300", alt: "Image 5" },
  { src: "https://picsum.photos/seed/f/400/300", alt: "Image 6" },
];

const Section = ({ title, description, children }) => (
  <div className="px-8 py-16 border-b border-gray-200">
    <div className="max-w-5xl mx-auto">
      <p className="mb-1 text-xs font-semibold tracking-widest text-gray-400 uppercase">
        Component
      </p>
      <h2 className="mb-1 text-2xl font-bold text-gray-900">{title}</h2>
      <p className="mb-10 text-gray-500">{description}</p>
      <div className="p-8 border border-gray-200 bg-gray-50 rounded-xl">
        {children}
      </div>
    </div>
  </div>
);

const POSITIONS = ["top-right", "top-left", "top-center", "bottom-right", "bottom-left", "bottom-center"];

const ToastDemo = ({ position, onPositionChange }) => {
  const { toast } = useToast();
  return (
    <div className="flex flex-wrap gap-4 items-center">
      <Button variant="primary" label="Success" onClick={() => toast.success("Operation completed successfully!")} />
      <Button variant="secondary" label="Error" onClick={() => toast.error("Something went wrong.")} />
      <Button variant="secondary" label="Warning" onClick={() => toast.warning("Please check your input.")} />
      <Button variant="secondary" label="Info" onClick={() => toast.info("Your profile was updated.")} />
      <Button variant="secondary" label="Slow (8s)" onClick={() => toast.info("This sticks around for 8 seconds", { duration: 8000 })} />
      <Button variant="secondary" label="Forever" onClick={() => toast.warning("I won't auto-dismiss", { duration: Infinity })} />
      <span className="w-px h-6 bg-gray-300 mx-2" />
      <span className="text-xs text-gray-400">Position:</span>
      <select
        value={position}
        onChange={(e) => onPositionChange(e.target.value)}
        className="text-xs border border-gray-300 rounded px-2 py-1 bg-white"
      >
        {POSITIONS.map((p) => <option key={p} value={p}>{p}</option>)}
      </select>
    </div>
  );
};

const product = {
  name: "Wireless Headphones",
  description: "Premium noise-cancelling wireless headphones with 30-hour battery life, deep bass, and memory foam ear cushions for all-day comfort.",
  price: "KSh 12,500",
  image: "https://picsum.photos/seed/headphones/400/300",
}

const App = () => {
  const [position, setPosition] = useState("top-right");
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <ToastProvider position={position}>
      <div className="min-h-screen bg-white">
        {/* Header */}
        <div className="px-8 py-12 text-center border-b border-gray-200">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">
            cite-ui
          </h1>
          <p className="mt-2 text-gray-500">
            FrameStudio component library — v0.1.3
          </p>
        </div>

        {/* Navbar */}
        <Section
          title="Navbar"
          description="Two variants — default and glass. Glass includes centered links and cart icon."
        >
          <div className="mb-6 overflow-hidden border border-gray-200 rounded-lg">
            <Navbar
              logo="FrameStudio"
              links={links}
              ctaLabel="Get Started"
              ctaHref="#"
            />
          </div>

          <div
            className="relative overflow-hidden border border-gray-200 rounded-lg"
            style={{
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            }}
          >
            <Navbar
              variant="glass"
              logo="FrameStudio"
              links={links}
              cartCount={3}
              onCartClick={() => alert("Cart clicked")}
            />
          </div>
        </Section>

        {/* Button */}
        <Section
          title="Button"
          description="Three variants — primary, secondary, and WhatsApp — all prop-driven."
        >
          <div className="flex flex-wrap gap-4 items-center">
            <Button variant="primary" label="Primary" onClick={() => {}} />
            <Button variant="secondary" label="Secondary" onClick={() => {}} />
            <Button variant="whatsapp" label="WhatsApp" onClick={() => {}} />
          </div>
          <div className="flex flex-wrap gap-4 items-center mt-6 pt-6 border-t border-gray-200">
            <span className="text-xs text-gray-400 font-semibold tracking-wider uppercase">Sizes</span>
            <Button label="Small" variant="primary" size="sm" />
            <Button label="Medium" variant="primary" size="md" />
            <Button label="Large" variant="primary" size="lg" />
          </div>
        </Section>

        {/* Gallery */}
        <Section
          title="Gallery"
          description="Responsive image grid with lightbox on click. Control columns and gap via props."
        >
          <Gallery images={images} columns={3} gap={4} />
        </Section>

        {/* WhatsAppFloat */}
        <Section
          title="WhatsApp Float"
          description="Fixed floating WhatsApp button with pulse animation. Opens a pre-filled chat."
        >
          <div className="relative h-32 bg-gray-100 rounded-lg">
            <p className="pt-6 text-sm text-center text-gray-400">
              Floating button preview — visible bottom right of screen
            </p>
          </div>
        </Section>

        <WhatsAppFloat phoneNumber="254712345678" />

        {/* Toast */}
        <Section
          title="Toast"
          description="Context-based notifications — success, error, warning, info. Supports custom duration, sticky, and 6 positions."
        >
          <ToastDemo position={position} onPositionChange={setPosition} />
        </Section>

        {/* Modal */}
        <Section
          title="Modal"
          description="Overlay modal with product details, image, and action button."
        >
          <Button variant="primary" label="Open Modal" onClick={() => setModalOpen(true)} />
        </Section>
      </div>

      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        product={product}
        actionLabel="Add to Cart"
        onAction={() => { alert("Added to cart!"); setModalOpen(false); }}
      />
    </ToastProvider>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
