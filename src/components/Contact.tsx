import { useState, FormEvent } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      // Using Web3Forms - Get your FREE access key at https://web3forms.com
      // Replace with your actual access key to receive emails
      const ACCESS_KEY = "c38c3ea1-cd71-4a8f-acb5-56087c73705c";
      
      // Check if access key is configured
      if (ACCESS_KEY === "YOUR_ACCESS_KEY_HERE") {
        setStatus("error");
        setErrorMessage("Email service not configured. Please email me directly at faizansipra4545@gmail.com");
        setTimeout(() => setStatus("idle"), 8000);
        return;
      }
      
      const formPayload = {
        access_key: ACCESS_KEY,
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        from_name: formData.name,
        replyto: formData.email,
      };
      
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formPayload),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        throw new Error(result.message || "Failed to send message");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage("Failed to send message. Please try emailing directly at faizansipra4545@gmail.com");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl">Let's Work Together</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Looking for a dedicated frontend developer? Let's connect and discuss how I can 
            help bring your web project to life with clean code and beautiful design.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <Mail className="h-5 w-5 text-primary" />
                  <div>
                    <h4>Email</h4>
                    <a 
                      href="mailto:faizansipra4545@gmail.com" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      faizansipra4545@gmail.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <Phone className="h-5 w-5 text-primary" />
                  <div>
                    <h4>Phone / WhatsApp</h4>
                    <a 
                      href="tel:+923074069622" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +92 307 4069622
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <h4>Location</h4>
                    <p className="text-muted-foreground">Pakistan • Available for Remote Work</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input 
                    name="name"
                    placeholder="Your Name" 
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={status === "loading"}
                  />
                  <Input 
                    name="email"
                    type="email"
                    placeholder="Your Email" 
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={status === "loading"}
                  />
                </div>
                <Input 
                  name="subject"
                  placeholder="Subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  disabled={status === "loading"}
                />
                <Textarea 
                  name="message"
                  placeholder="Your Message" 
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={status === "loading"}
                />
                
                {/* Status Messages */}
                {status === "success" && (
                  <div className="flex items-center gap-2 text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-950/30 p-3 rounded-lg">
                    <CheckCircle className="h-5 w-5" />
                    <p>Message sent successfully! I'll get back to you soon.</p>
                  </div>
                )}
                
                {status === "error" && (
                  <div className="flex items-center gap-2 text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-950/30 p-3 rounded-lg">
                    <AlertCircle className="h-5 w-5" />
                    <p>{errorMessage}</p>
                  </div>
                )}
                
                <Button 
                  type="submit" 
                  className="w-full gap-2"
                  disabled={status === "loading"}
                >
                  <Send className="h-4 w-4" />
                  {status === "loading" ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}