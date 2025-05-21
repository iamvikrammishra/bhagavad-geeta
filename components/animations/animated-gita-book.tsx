"use client"

import React from 'react';
import { motion } from 'framer-motion';

export function AnimatedGitaBook() {
  return (
    <div className="relative h-64 w-64">
      {/* Book */}
      <motion.div
        initial={{ rotateY: -30, scale: 0.9, opacity: 0.6 }}
        animate={{ 
          rotateY: [0, -30, 0, -30, 0], 
          scale: [0.9, 1, 1, 1, 1], 
          opacity: [0.6, 1, 1, 1, 1] 
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          repeatType: "loop" 
        }}
        className="absolute inset-0 rounded-lg bg-gradient-to-br from-orange-600 to-amber-700 shadow-xl"
        style={{ 
          transformStyle: 'preserve-3d',
          transformOrigin: 'left center'
        }}
      >
        <div className="absolute inset-2 rounded bg-amber-100 dark:bg-amber-900/80 p-4 flex items-center justify-center">
          <div className="text-center">
            <div className="font-poppins font-bold text-amber-950 dark:text-amber-100 text-2xl mb-2">
              भगवद् गीता
            </div>
            <div className="font-poppins font-medium text-amber-900 dark:text-amber-200 mb-4">
              Bhagavad Gita
            </div>
            <div className="w-20 h-1 bg-amber-600 dark:bg-amber-400 mx-auto rounded-full mb-2"></div>
            <div className="w-12 h-1 bg-amber-600 dark:bg-amber-400 mx-auto rounded-full"></div>
          </div>
        </div>
      </motion.div>

      {/* Pages flipping animation */}
      <motion.div
        initial={{ rotateY: -30, opacity: 0 }}
        animate={{ 
          rotateY: [-30, 0, 30, 0, -30],
          opacity: [0, 1, 1, 1, 0]
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          repeatType: "loop",
          delay: 0.3
        }}
        className="absolute inset-0 rounded-lg bg-white dark:bg-slate-800"
        style={{ 
          transformStyle: 'preserve-3d',
          transformOrigin: 'left center'
        }}
      >
        <div className="absolute inset-4 flex items-center justify-center">
          <div className="text-center font-poppins">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: [0, 1, 1, 0], y: [10, 0, 0, -10] }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                repeatType: "loop"
              }}
              className="text-lg font-medium text-amber-800 dark:text-amber-200"
            >
              कर्मण्येवाधिकारस्ते
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Light rays */}
      <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: [0, 0.7, 0], scale: [0.5, 1.2, 1.5] }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            repeatType: "loop"
          }}
          className="w-64 h-64 rounded-full bg-gradient-to-r from-amber-200 to-amber-400 dark:from-amber-500 dark:to-amber-700 blur-xl"
        />
      </div>
    </div>
  );
}