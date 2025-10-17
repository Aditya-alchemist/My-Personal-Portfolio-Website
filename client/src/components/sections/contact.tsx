import { useState } from "react";
import { motion } from "framer-motion";
import { useAccount } from "wagmi";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { address } = useAccount();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    await emailjs.send(
      "service_2qemd2i", // from dashboard
      "template_66zzbon", // from dashboard
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      },
      "xKYpMWJplvMUm1t0m" // from dashboard
    );

    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });

    setFormData({ name: "", email: "", message: "" });
  } catch (error) {
    toast({
      title: "Error",
      description: "Failed to send message. Please try again.",
      variant: "destructive",
    });
  } finally {
    setIsSubmitting(false);
  }
};
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="section-number">04. Contact</div>
        <h2 className="text-4xl font-bold mb-6 text-white">Get In Touch</h2>
        <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
          I'm always open to discussing new opportunities, interesting projects, or just chatting about the latest 
          developments in blockchain technology. Whether you're looking to build something amazing or just want to say hello, 
          I'd love to hear from you.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="glassmorphism border-white/10 bg-[#1a1a1a] p-8">
            <h3 className="text-xl font-semibold text-white mb-4">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="bg-[#1a1a1a] border-white/20 text-white placeholder-gray-400 focus:border-[#00d4ff]"
                required
              />
              <Input
                name="email"
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="bg-[#1a1a1a] border-white/20 text-white placeholder-gray-400 focus:border-[#00d4ff]"
                required
              />
              <Textarea
                name="message"
                placeholder="Your Message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="bg-[#1a1a1a] border-white/20 text-white placeholder-gray-400 focus:border-[#00d4ff]"
                required
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#00d4ff] text-[#0a0a0a] hover:bg-[#00d4ff]/90 transition-colors duration-300"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </Card>
          
          <Card className="glassmorphism border-white/10 bg-[#1a1a1a] p-8">
            <h3 className="text-xl font-semibold text-white mb-4">Connect Directly</h3>
            <div className="space-y-4">
              <a 
                href="mailto:adityakumar41205@gmail.com" 
                className="flex items-center justify-center space-x-3 text-gray-400 hover:text-[#00d4ff] transition-colors duration-300 break-all"
              >
                <i className="fas fa-envelope flex-shrink-0"></i>
                <span className="text-sm">adityakumar41205@gmail.com</span>
              </a>
              <div className="flex items-center justify-center space-x-3 text-gray-400">
                <i className="fas fa-wallet"></i>
                <span className="font-mono text-sm">
                  {address ? `${address.slice(0, 6)}...${address.slice(-4)}` : "Connect wallet to view"}
                </span>
              </div>
              <div className="flex justify-center space-x-4">
                <a 
                  href="https://github.com/Aditya-alchemist" 
                  className="text-gray-400 hover:text-[#00d4ff] transition-colors duration-300"
                >
                  <i className="fab fa-github text-xl"></i>
                </a>
                <a 
                  href="https://x.com/Adityaalchemist?t=snsq45voDbhQVn6oe_UcWw&s=09" 
                  className="text-gray-400 hover:text-[#00d4ff] transition-colors duration-300"
                >
                  <i className="fab fa-twitter text-xl"></i>
                </a>
                <a 
                  href="https://www.linkedin.com/in/aditya-kumar-mishra-alchemy?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
                  className="text-gray-400 hover:text-[#00d4ff] transition-colors duration-300"
                >
                  <i className="fab fa-linkedin text-xl"></i>
                </a>
             
              </div>
            </div>
          </Card>
        </div>
        
<Button 
  onClick={() => window.open('https://calendly.com/adityakumar41205', '_blank')}
  className="bg-[#00d4ff] text-[#0a0a0a] px-8 py-3 hover:bg-[#00d4ff]/90 transition-all duration-300 hover:scale-105"
>
  Schedule a Free Consultation
</Button>
      </motion.div>
    </section>
  );
}
