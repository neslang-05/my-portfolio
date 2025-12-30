'use client';

import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { Save, RefreshCw, Trash2, AlertTriangle } from 'lucide-react';

export default function AdminSettingsPage() {
  const { user } = useAuth();
  const [syncing, setSyncing] = useState(false);

  const handleSync = async () => {
    setSyncing(true);
    // Simulate sync
    await new Promise(resolve => setTimeout(resolve, 2000));
    setSyncing(false);
    alert('Data synced successfully!');
  };

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-zinc-500 mt-1 font-mono text-sm">
          Manage your site settings and preferences
        </p>
      </div>

      <div className="max-w-2xl space-y-8">
        {/* Account Info */}
        <div className="border border-zinc-800 p-6">
          <h2 className="text-lg font-bold mb-4">Account</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-mono text-zinc-400 mb-2">Admin Email</label>
              <input
                type="email"
                value={user?.email || ''}
                disabled
                className="w-full bg-zinc-900 border border-zinc-800 px-4 py-3 text-zinc-400 cursor-not-allowed"
              />
              <p className="text-xs text-zinc-600 mt-2">Email cannot be changed</p>
            </div>
          </div>
        </div>

        {/* Data Management */}
        <div className="border border-zinc-800 p-6">
          <h2 className="text-lg font-bold mb-4">Data Management</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between py-3 border-b border-zinc-900">
              <div>
                <p className="font-medium">Sync Data</p>
                <p className="text-zinc-500 text-sm">Sync local data with Firestore</p>
              </div>
              <button
                onClick={handleSync}
                disabled={syncing}
                className="bg-zinc-800 text-white px-4 py-2 hover:bg-zinc-700 transition-colors flex items-center gap-2 disabled:opacity-50"
              >
                <RefreshCw className={`w-4 h-4 ${syncing ? 'animate-spin' : ''}`} />
                {syncing ? 'Syncing...' : 'Sync Now'}
              </button>
            </div>
            
            <div className="flex items-center justify-between py-3 border-b border-zinc-900">
              <div>
                <p className="font-medium">Export Data</p>
                <p className="text-zinc-500 text-sm">Download all your data as JSON</p>
              </div>
              <button className="bg-zinc-800 text-white px-4 py-2 hover:bg-zinc-700 transition-colors">
                Export
              </button>
            </div>

            <div className="flex items-center justify-between py-3">
              <div>
                <p className="font-medium">Import Data</p>
                <p className="text-zinc-500 text-sm">Import data from a JSON file</p>
              </div>
              <button className="bg-zinc-800 text-white px-4 py-2 hover:bg-zinc-700 transition-colors">
                Import
              </button>
            </div>
          </div>
        </div>

        {/* Site Settings */}
        <div className="border border-zinc-800 p-6">
          <h2 className="text-lg font-bold mb-4">Site Settings</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-mono text-zinc-400 mb-2">Site Title</label>
              <input
                type="text"
                defaultValue="Nilambar Elangbam — Developer"
                className="w-full bg-black border border-zinc-800 px-4 py-3 text-white focus:outline-none focus:border-zinc-600"
              />
            </div>
            <div>
              <label className="block text-sm font-mono text-zinc-400 mb-2">Site Description</label>
              <textarea
                defaultValue="Computer Science Engineering Student | IoT Developer | Full Stack Web Developer"
                className="w-full bg-black border border-zinc-800 px-4 py-3 text-white focus:outline-none focus:border-zinc-600 h-20"
              />
            </div>
          </div>
          <button className="mt-4 bg-white text-black px-4 py-2 font-bold hover:bg-zinc-200 transition-colors flex items-center gap-2">
            <Save className="w-4 h-4" />
            Save Settings
          </button>
        </div>

        {/* Danger Zone */}
        <div className="border border-red-900/50 p-6">
          <div className="flex items-center gap-2 mb-4">
            <AlertTriangle className="w-5 h-5 text-red-500" />
            <h2 className="text-lg font-bold text-red-500">Danger Zone</h2>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between py-3 border-b border-zinc-900">
              <div>
                <p className="font-medium">Clear All Data</p>
                <p className="text-zinc-500 text-sm">Permanently delete all your data</p>
              </div>
              <button className="bg-red-900 text-red-100 px-4 py-2 hover:bg-red-800 transition-colors flex items-center gap-2">
                <Trash2 className="w-4 h-4" />
                Clear Data
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
