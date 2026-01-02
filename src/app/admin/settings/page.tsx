'use client';

import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { Save, RefreshCw, Trash2, AlertTriangle, Download, Upload, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { getSiteData } from '@/lib/data';
import { fetchSiteData, updateSiteData } from '@/lib/siteData';

export default function AdminSettingsPage() {
  const { user } = useAuth();
  const [syncing, setSyncing] = useState(false);
  const [status, setStatus] = useState<'idle' | 'saved' | 'error'>('idle');
  const [error, setError] = useState('');

  const handleSync = async () => {
    setSyncing(true);
    setStatus('idle');
    setError('');
    try {
      const localData = getSiteData();
      await updateSiteData(localData, user?.email);
      setStatus('saved');
    } catch (err) {
      console.error('Sync failed', err);
      setError('Sync failed. Please try again.');
      setStatus('error');
    } finally {
      setSyncing(false);
    }
  };

  const handleExport = async () => {
    try {
      const data = await fetchSiteData();
      const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'portfolio-data.json';
      a.click();
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error('Export failed', err);
      alert('Export failed');
    }
  };

  const handleImport = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      const text = await file.text();
      const data = JSON.parse(text);
      await updateSiteData(data, user?.email);
      setStatus('saved');
      alert('Data imported successfully!');
    } catch (err) {
      console.error('Import failed', err);
      alert('Import failed. Invalid JSON.');
    }
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

      {error && (
        <div className="mb-4 flex items-center gap-2 rounded border border-red-900/50 bg-red-950/40 px-4 py-3 text-sm text-red-200">
          <AlertCircle className="h-4 w-4" />
          {error}
        </div>
      )}

      {status === 'saved' && !error && (
        <div className="mb-4 flex items-center gap-2 rounded border border-emerald-900/50 bg-emerald-950/40 px-4 py-3 text-sm text-emerald-200">
          <CheckCircle2 className="h-4 w-4" />
          Operation completed successfully.
        </div>
      )}

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
                <p className="text-zinc-500 text-sm">Push local defaults to Firestore</p>
              </div>
              <button
                onClick={handleSync}
                disabled={syncing}
                className="bg-zinc-800 text-white px-4 py-2 hover:bg-zinc-700 transition-colors flex items-center gap-2 disabled:opacity-50"
              >
                {syncing ? <Loader2 className="w-4 h-4 animate-spin" /> : <RefreshCw className="w-4 h-4" />}
                {syncing ? 'Syncing...' : 'Sync Now'}
              </button>
            </div>
            
            <div className="flex items-center justify-between py-3 border-b border-zinc-900">
              <div>
                <p className="font-medium">Export Data</p>
                <p className="text-zinc-500 text-sm">Download all your data as JSON</p>
              </div>
              <button
                onClick={handleExport}
                className="bg-zinc-800 text-white px-4 py-2 hover:bg-zinc-700 transition-colors flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                Export
              </button>
            </div>

            <div className="flex items-center justify-between py-3">
              <div>
                <p className="font-medium">Import Data</p>
                <p className="text-zinc-500 text-sm">Import data from a JSON file</p>
              </div>
              <label className="bg-zinc-800 text-white px-4 py-2 hover:bg-zinc-700 transition-colors flex items-center gap-2 cursor-pointer">
                <Upload className="w-4 h-4" />
                Import
                <input type="file" accept=".json" onChange={handleImport} className="hidden" />
              </label>
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
