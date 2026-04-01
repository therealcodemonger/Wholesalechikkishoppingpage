import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert("Thank you for your inquiry! We'll get back to you within 24 hours.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to place your wholesale order? Contact us for pricing and bulk discounts
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <Input
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <Input
                  required
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <Input
                  required
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+91 98765 43210"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Message *
                </label>
                <Textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your requirements..."
                  rows={5}
                />
              </div>

              <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700">
                Submit Inquiry
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Locations</h3>
              
              <div className="space-y-6">
                {/* Head Office */}
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="flex items-start gap-4">
                    <div className="size-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="size-6 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Head Office & Factory</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Plot No. 45, MIDC Industrial Area,<br />
                        Kolhapur - 416234, Maharashtra, India
                      </p>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="flex items-start gap-4">
                    <div className="size-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="size-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Phone Numbers</h4>
                      <p className="text-gray-600 text-sm">
                        Sales: +91 98765 43210<br />
                        Support: +91 98765 43211<br />
                        Toll Free: 1800-123-4567
                      </p>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="flex items-start gap-4">
                    <div className="size-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="size-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Email Addresses</h4>
                      <p className="text-gray-600 text-sm">
                        Sales: sales@chikkiwholesale.com<br />
                        Support: support@chikkiwholesale.com<br />
                        Info: info@chikkiwholesale.com
                      </p>
                    </div>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="flex items-start gap-4">
                    <div className="size-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="size-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Business Hours</h4>
                      <p className="text-gray-600 text-sm">
                        Monday - Saturday: 9:00 AM - 6:00 PM<br />
                        Sunday: Closed<br />
                        24/7 Email Support
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Regional Offices */}
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-xl border border-orange-200">
              <h4 className="font-semibold text-lg mb-4">Regional Distribution Centers</h4>
              <div className="space-y-3 text-sm text-gray-700">
                <div className="flex items-start gap-2">
                  <MapPin className="size-4 text-orange-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Mumbai:</strong> Andheri East, Mumbai - 400069
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="size-4 text-orange-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Pune:</strong> Hadapsar, Pune - 411028
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="size-4 text-orange-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Bangalore:</strong> Whitefield, Bangalore - 560066
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="size-4 text-orange-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Delhi NCR:</strong> Okhla Phase 2, New Delhi - 110020
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
