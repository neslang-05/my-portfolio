"use client";

import React from "react";
import { GitHubStats } from "@/lib/data";
import { FolderGit2, Globe, Lock, Code2, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

interface GithubStatsProps {
  stats: GitHubStats;
  githubUrl: string;
}

export function GithubStatsSection({ stats, githubUrl }: GithubStatsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" as const }}
      className="bg-zinc-950 border border-zinc-800 p-6 md:p-8 relative overflow-hidden shadow-xl"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-zinc-800">
        <div>
          <div className="flex items-center gap-2.5 mb-2">
            <span className="p-1.5 bg-zinc-900 border border-zinc-800 text-white">
              <FolderGit2 className="w-5 h-5" />
            </span>
            <h2 className="text-xl font-bold tracking-tight text-white uppercase font-sans">
              GitHub Metrics Overview
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-xl">
            Live metrics synchronized across 118 public open-source and private client/institutional repositories.
          </p>
        </div>

        <motion.a
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-xs font-sans text-zinc-200 transition-all group"
        >
          <span>@neslang-05 on GitHub</span>
          <ExternalLink className="w-3.5 h-3.5 text-zinc-400 group-hover:text-white transition-colors" />
        </motion.a>
      </div>

      {/* Stats Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
        <motion.div
          whileHover={{ y: -2 }}
          className="bg-zinc-900/60 border border-zinc-800 p-4 flex items-center justify-between"
        >
          <div>
            <p className="text-xs font-sans text-zinc-500 uppercase tracking-wider">Total Repositories</p>
            <p className="text-2xl font-bold text-white mt-1 font-sans">{stats.totalRepos}</p>
          </div>
          <div className="p-2.5 bg-zinc-800 text-zinc-300">
            <FolderGit2 className="w-5 h-5" />
          </div>
        </motion.div>

        <motion.div
          whileHover={{ y: -2 }}
          className="bg-zinc-900/60 border border-zinc-800 p-4 flex items-center justify-between"
        >
          <div>
            <p className="text-xs font-sans text-zinc-500 uppercase tracking-wider">Public Repositories</p>
            <p className="text-2xl font-bold text-white mt-1 font-sans">{stats.publicRepos}</p>
          </div>
          <div className="p-2.5 bg-zinc-900 border border-zinc-800 text-zinc-300">
            <Globe className="w-5 h-5" />
          </div>
        </motion.div>

        <motion.div
          whileHover={{ y: -2 }}
          className="bg-zinc-900/60 border border-zinc-800 p-4 flex items-center justify-between"
        >
          <div>
            <p className="text-xs font-sans text-zinc-500 uppercase tracking-wider">Private & Client Repos</p>
            <p className="text-2xl font-bold text-white mt-1 font-sans">{stats.privateRepos}</p>
          </div>
          <div className="p-2.5 bg-zinc-900 border border-zinc-800 text-zinc-300">
            <Lock className="w-5 h-5" />
          </div>
        </motion.div>
      </div>

      {/* Languages Breakdown */}
      <div>
        <h3 className="text-xs font-sans uppercase tracking-wider text-zinc-400 mb-3 flex items-center gap-2">
          <Code2 className="w-4 h-4 text-zinc-300" />
          Top Languages & Tech Distribution
        </h3>
        <div className="flex flex-wrap gap-2">
          {stats.topLanguages.map((lang, idx) => (
            <motion.div
              key={lang.name}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.05, duration: 0.3 }}
              className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 px-3 py-1.5 text-xs font-sans hover:border-zinc-700 transition-colors"
            >
              <span className="w-2 h-2 bg-white" />
              <span className="text-zinc-200">{lang.name}</span>
              <span className="text-zinc-500 bg-zinc-800 px-1.5 py-0.5 text-[10px] font-bold">
                {lang.count} repos
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
