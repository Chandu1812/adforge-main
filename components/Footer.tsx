import React from 'react';
import { Zap, Twitter, Linkedin, Instagram } from 'lucide-react';
import { APP_NAME } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
             <div className="flex items-center gap-2 mb-4">
                <div className="bg-neutral-900 p-1 rounded-md">
                    <Zap className="w-4 h-4 text-white" fill="currentColor" />
                </div>
                <span className="font-heading font-bold text-lg text-neutral-900">{APP_NAME}</span>
             </div>
             <p className="text-neutral-500 text-sm max-w-xs mb-6">
               The first brand launcher designed for high-intent founders. Stop waiting, start validating.
             </p>
             <div className="flex gap-4 text-neutral-400">
                <a href="#" className="hover:text-primary transition-colors"><Twitter className="w-5 h-5" /></a>
                <a href="#" className="hover:text-primary transition-colors"><Linkedin className="w-5 h-5" /></a>
                <a href="#" className="hover:text-primary transition-colors"><Instagram className="w-5 h-5" /></a>
             </div>
          </div>
          
          <div>
            <h5 className="font-bold text-neutral-900 mb-4 text-sm">Product</h5>
            <ul className="space-y-2 text-sm text-neutral-500">
                <li><a href="#" className="hover:text-primary">Methodology</a></li>
                <li><a href="#" className="hover:text-primary">Case Studies</a></li>
                <li><a href="#" className="hover:text-primary">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-neutral-900 mb-4 text-sm">Legal</h5>
            <ul className="space-y-2 text-sm text-neutral-500">
                <li><a href="#" className="hover:text-primary">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary">Terms of Service</a></li>
                <li><a href="#" className="hover:text-primary">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-neutral-400 text-xs">© 2024 {APP_NAME}. All rights reserved.</p>
            <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-xs font-medium text-neutral-600">Systems Operational</span>
            </div>
        </div>
      </div>
    </footer>
  );
};