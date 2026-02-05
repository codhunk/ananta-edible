import { motion } from 'framer-motion';
import { Package, TrendingDown, Shield, Truck, CheckCircle, Phone, Mail, MapPin } from 'lucide-react';
import { useState } from 'react';
import CertificationLogos from '../components/CertificationLogos';
import Footer from '../components/Footer';

const pricingTiers = [
    {
        name: "Starter",
        minOrder: "500 Liters",
        discount: "5%",
        features: ["Standard Packaging", "15-Day Delivery", "Email Support", "Quality Certificate"],
        recommended: false
    },
    {
        name: "Business",
        minOrder: "2000 Liters",
        discount: "12%",
        features: ["Custom Packaging", "7-Day Delivery", "Priority Support", "Quality Certificate", "Dedicated Account Manager"],
        recommended: true
    },
    {
        name: "Enterprise",
        minOrder: "5000+ Liters",
        discount: "18%",
        features: ["Custom Branding", "3-Day Delivery", "24/7 Support", "Quality Certificate", "Dedicated Account Manager", "Flexible Payment Terms"],
        recommended: false
    }
];

const products = [
    { name: "Kachi Ghani Mustard Oil", unit: "15L Tin", image: "https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=400" },
    { name: "Refined Sunflower Oil", unit: "15L Tin", image: "https://images.pexels.com/photos/4198933/pexels-photo-4198933.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { name: "Refined Soybean Oil", unit: "15L Tin", image: "https://images.pexels.com/photos/4226881/pexels-photo-4226881.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { name: "Rice Bran Oil", unit: "15L Tin", image: "https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=400" }
];

export default function BulkOrderPage() {
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        email: '',
        phone: '',
        product: '',
        quantity: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Thank you! We will contact you shortly with a quote.');
    };

    return (
        <div className="w-full bg-background min-h-screen">
            {/* Hero Section */}
            <section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-dark via-primary to-primary-light">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

                <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl sm:text-6xl md:text-7xl font-black text-white mb-6 tracking-tight"
                    >
                        Bulk Orders Made Simple
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg sm:text-2xl text-white/90 font-medium max-w-3xl mx-auto mb-8"
                    >
                        Premium edible oils for distributors, retailers, and food manufacturers. Competitive pricing, reliable supply, and uncompromising quality.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex flex-wrap gap-4 justify-center"
                    >
                        <a href="#quote" className="bg-white text-primary-dark px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl">
                            Request Quote
                        </a>
                        <a href="#pricing" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-all">
                            View Pricing
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 bg-white">
                <div className="container-custom px-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl sm:text-5xl font-black text-center mb-16 text-primary-dark"
                    >
                        Why Choose Ananta for Bulk Orders?
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: <TrendingDown size={40} />, title: "Competitive Pricing", desc: "Volume-based discounts up to 18% off" },
                            { icon: <Shield size={40} />, title: "FSSAI Certified", desc: "100% compliant with food safety standards" },
                            { icon: <Truck size={40} />, title: "Nationwide Delivery", desc: "Fast and reliable logistics network" },
                            { icon: <Package size={40} />, title: "Custom Packaging", desc: "Branding options for enterprise clients" }
                        ].map((benefit, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-gray-50 p-8 rounded-2xl text-center hover:shadow-xl transition-shadow group"
                            >
                                <div className="text-primary-light mb-4 flex justify-center group-hover:scale-110 transition-transform">
                                    {benefit.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-2 text-gray-900">{benefit.title}</h3>
                                <p className="text-gray-600">{benefit.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <CertificationLogos />

            {/* Pricing Tiers */}
            <section id="pricing" className="py-20 bg-gray-50">
                <div className="container-custom px-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl sm:text-5xl font-black text-center mb-4 text-primary-dark"
                    >
                        Flexible Pricing Tiers
                    </motion.h2>
                    <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
                        Choose the plan that fits your business needs. All tiers include quality certification and dedicated support.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {pricingTiers.map((tier, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className={`bg-white rounded-2xl p-8 ${tier.recommended ? 'ring-4 ring-primary-light shadow-2xl scale-105' : 'shadow-lg'} relative`}
                            >
                                {tier.recommended && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary-light text-white px-4 py-1 rounded-full text-sm font-bold">
                                        MOST POPULAR
                                    </div>
                                )}
                                <h3 className="text-2xl font-black mb-2 text-gray-900">{tier.name}</h3>
                                <p className="text-gray-600 mb-4">Min. Order: <span className="font-bold text-primary-dark">{tier.minOrder}</span></p>
                                <div className="mb-6">
                                    <span className="text-5xl font-black text-primary-light">{tier.discount}</span>
                                    <span className="text-gray-600 ml-2">discount</span>
                                </div>
                                <ul className="space-y-3 mb-8">
                                    {tier.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <CheckCircle size={20} className="text-primary-light flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <a
                                    href="#quote"
                                    className={`block text-center py-3 rounded-full font-bold transition-all ${tier.recommended
                                        ? 'bg-primary-light text-white hover:bg-primary'
                                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                                        }`}
                                >
                                    Get Quote
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Products Section */}
            <section className="py-20 bg-white">
                <div className="container-custom px-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl sm:text-5xl font-black text-center mb-16 text-primary-dark"
                    >
                        Available Products
                    </motion.h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {products.map((product, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow group"
                            >
                                <div className="h-48 overflow-hidden">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="font-bold text-lg mb-1 text-gray-900">{product.name}</h3>
                                    <p className="text-gray-600 text-sm">{product.unit}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quote Request Form */}
            <section id="quote" className="py-20 bg-gradient-to-br from-primary-dark to-primary">
                <div className="container-custom px-4">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-12"
                        >
                            <h2 className="text-4xl sm:text-5xl font-black mb-4 text-white">Request a Quote</h2>
                            <p className="text-white/90 text-lg">Fill out the form below and our team will get back to you within 24 hours</p>
                        </motion.div>

                        <motion.form
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            onSubmit={handleSubmit}
                            className="bg-white rounded-2xl p-8 shadow-2xl"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Full Name *</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-light focus:border-primary-light outline-none"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Company Name *</label>
                                    <input
                                        type="text"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-light focus:border-primary-light outline-none"
                                        placeholder="ABC Distributors"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Email *</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-light focus:border-primary-light outline-none"
                                        placeholder="john@example.com"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Phone *</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-light focus:border-primary-light outline-none"
                                        placeholder="+91 98765 43210"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Product *</label>
                                    <select
                                        name="product"
                                        value={formData.product}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-light focus:border-primary-light outline-none"
                                    >
                                        <option value="">Select Product</option>
                                        {products.map((p, i) => (
                                            <option key={i} value={p.name}>{p.name}</option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Quantity (Liters) *</label>
                                    <input
                                        type="number"
                                        name="quantity"
                                        value={formData.quantity}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-light focus:border-primary-light outline-none"
                                        placeholder="500"
                                    />
                                </div>
                            </div>
                            <div className="mb-6">
                                <label className="block text-sm font-bold text-gray-700 mb-2">Additional Requirements</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={4}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-light focus:border-primary-light outline-none"
                                    placeholder="Tell us about your specific requirements..."
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-primary-light text-white py-4 rounded-full font-bold text-lg hover:bg-primary transition-all shadow-lg hover:shadow-xl"
                            >
                                Submit Request
                            </button>
                        </motion.form>

                        {/* Contact Info */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                            {[
                                { icon: <Phone size={24} />, title: "Call Us", info: "+91 98765 43210" },
                                { icon: <Mail size={24} />, title: "Email Us", info: "bulk@ananta.com" },
                                { icon: <MapPin size={24} />, title: "Visit Us", info: "Alwar, Rajasthan" }
                            ].map((contact, idx) => (
                                <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center text-white">
                                    <div className="flex justify-center mb-3">{contact.icon}</div>
                                    <h4 className="font-bold mb-1">{contact.title}</h4>
                                    <p className="text-white/80 text-sm">{contact.info}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
