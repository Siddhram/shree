'use client';

import { motion } from 'framer-motion';
import { Download, Star } from 'lucide-react';
import dynamic from 'next/dynamic';

const PhoneModel = dynamic(() => import('./PhoneModel'), { ssr: false });

export default function HeroSection() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/app.apk';
    link.download = 'ShreeGames.apk';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-sky-100/50 via-transparent to-blue-100/30 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-8 z-10"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-sky-100 rounded-full"
            >
              <Star className="w-4 h-4 text-sky-600 fill-sky-600" />
              <span className="text-sm font-medium text-sky-700">Premium Gaming Experience</span>
            </motion.div>

            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight"
            >
              <span className="bg-gradient-to-r from-sky-600 via-blue-600 to-blue-700 bg-clip-text text-transparent">
                Shree Games
              </span>
              <br />
              <span className="text-gray-800">Your Ultimate Gaming Hub</span>
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-gray-600 leading-relaxed max-w-xl"
            >
              Experience the most thrilling collection of games all in one place. Download now and start your gaming adventure!
            </motion.p>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(14, 165, 233, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDownload}
                className="group relative px-8 py-4 bg-gradient-to-r from-sky-500 via-blue-600 to-blue-700 text-white font-bold text-lg rounded-2xl shadow-2xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-sky-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center justify-center gap-3">
                  <Download className="w-6 h-6" />
                  Download Shree Games APK
                </span>
              </motion.button>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center justify-center gap-3 px-8 py-4 bg-white rounded-2xl shadow-lg border border-sky-100"
              >
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-sky-300 to-blue-500 border-2 border-white"
                    />
                  ))}
                </div>
                <div className="text-left">
                  <div className="font-bold text-gray-800">4K+</div>
                  <div className="text-sm text-gray-500">Active Players</div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="relative h-[500px] sm:h-[600px] lg:h-[700px] flex items-center justify-center"
          >
            <PhoneModel />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
