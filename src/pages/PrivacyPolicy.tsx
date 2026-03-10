import React from 'react';
import { motion } from 'motion/react';
import { Shield, Lock, Eye, FileText, ChevronRight } from 'lucide-react';

export const PrivacyPolicy = () => {
    const sections = [
        {
            title: "Introduction",
            content: "This Privacy Policy outlines Clean Finish Car Wash's (\" we \", \" our \" or \" the Company \") practices with respect to information collected from users who access our website at cleanfinishcarwash.com (\" Site \"), or otherwise share personal information with us (collectively: \" Users \")."
        },
        {
            title: "Grounds for data collection",
            content: "Processing of your personal information (meaning, any information which may potentially allow your identification with reasonable means; hereinafter \" Personal Information \") is necessary for the performance of our contractual obligations towards you and providing you with our services and car wash memberships, to protect our legitimate interests, and for compliance with legal and financial regulatory obligations to which we are subject. When you use the Site, you consent to the collection, storage, use, disclosure and other uses of your Personal Information as described in this Privacy Policy. We encourage our Users to carefully read the Privacy Policy and use it to make informed decisions."
        },
        {
            title: "What information do we collect?",
            content: "We collect two types of data and information from Users. \n\nThe first type of information is un-identified and non-identifiable information pertaining to a User(s), which may be made available or gathered via your use of the Site (“ Non-personal Information ”). We are not aware of the identity of a User from which the Non-personal Information was collected. \n\nThe second type of information is Personal Information, which is individually identifiable information, namely information that identifies an individual or may with reasonable effort identify an individual. Such information includes Device Information, Registration information, Membership information, and Payment and reoccurring payment information."
        },
        {
            title: "Retention",
            content: "We will retain your personal information for as long as necessary to provide our services, and as necessary to comply with our legal obligations, resolve disputes, and enforce our policies. Retention periods will be determined taking into account the type of information that is collected and the purpose for which it is collected. Under applicable regulations, we will keep records containing client personal data, account opening documents, communications, and anything else as required by applicable laws and regulations."
        },
        {
            title: "User Rights",
            content: "You may request to: Receive confirmation as to whether or not personal information concerning you is being processed; Receive a copy of personal information you directly volunteer to us; Request rectification of your personal information; Request erasure of your personal information; Object to the processing of personal information by us; Request to restrict processing of your personal information; Lodge a complaint with a supervisory authority."
        }
    ];

    return (
        <div className="pt-20 bg-deep-black min-h-screen">
            {/* Hero Header */}
            <section className="relative py-24 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full checkered-bg opacity-5 pointer-events-none" />
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-racing-blue/10 blur-[120px] rounded-full" />
                <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-neon-green/10 blur-[120px] rounded-full" />

                <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-6"
                    >
                        <Shield size={16} className="text-racing-blue" />
                        <span className="text-[10px] font-black uppercase tracking-widest text-white/60">Data Protection Protocol</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="font-display font-black text-6xl md:text-7xl italic uppercase tracking-tighter mb-6"
                    >
                        PRIVACY <span className="text-racing-blue">POLICY</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-white/40 font-bold uppercase tracking-widest text-sm"
                    >
                        Last Modified: Nov 07, 2024
                    </motion.p>
                </div>
            </section>

            {/* Policy Content */}
            <section className="pb-32 relative">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="space-y-12">
                        {sections.map((section, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="glass p-8 md:p-12 rounded-[40px] border border-white/5 relative group hover:border-racing-blue/30 transition-colors"
                            >
                                <div className="flex items-start gap-6">
                                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-racing-blue/10 transition-colors">
                                        <FileText className="text-racing-blue" size={24} />
                                    </div>
                                    <div className="space-y-4">
                                        <h2 className="font-display font-black text-2xl uppercase italic tracking-tight text-white group-hover:text-racing-blue transition-colors">
                                            {section.title}
                                        </h2>
                                        <p className="text-white/60 leading-relaxed font-medium">
                                            {section.content}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}

                        {/* Contact Section in Policy */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="glass p-8 md:p-12 rounded-[40px] border-2 border-racing-blue/20 bg-gradient-to-br from-racing-blue/5 to-transparent"
                        >
                            <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
                                <div className="space-y-2">
                                    <h3 className="font-display font-black text-2xl uppercase italic tracking-tight">Questions?</h3>
                                    <p className="text-white/40 text-sm font-bold uppercase tracking-widest">Reach our Data Protection Officer</p>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <a href="mailto:cleanfinishcarwash@gmail.com" className="bg-racing-blue text-white px-8 py-4 rounded-2xl font-display font-black uppercase tracking-widest text-sm hover:scale-105 transition-transform flex items-center gap-3">
                                        <Lock size={18} />
                                        Secure Contact
                                    </a>
                                    <p className="text-[10px] text-white/30 text-center font-black uppercase italic tracking-widest mt-2 px-12 opacity-50">
                                        OhmCo • 920-383-1193
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Footnote */}
                        <div className="text-center space-y-4 pt-12">
                            <p className="text-[10px] font-black uppercase tracking-[0.5em] text-neon-green italic">
                                Consistency • Reliability • Quality
                            </p>
                            <div className="w-20 h-1 bg-gradient-to-r from-racing-blue to-neon-green mx-auto rounded-full opacity-30" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
