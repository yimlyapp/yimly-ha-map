import React, { useState } from 'react';
import { Shield, Key, ArrowRight, Home, X, Info } from 'lucide-react';
import { HA_DEFAULT_URL } from '../../services/ha-connection.ts';

interface HaAuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStartOAuth: () => void;
  onConnectToken: (token: string, url: string) => Promise<void>;
  statusMessage?: string;
  isConnecting: boolean;
  isEmbeddedInHa?: boolean;
}

export const HaAuthModal: React.FC<HaAuthModalProps> = ({
  isOpen,
  onClose,
  onStartOAuth,
  onConnectToken,
  statusMessage,
  isConnecting,
  isEmbeddedInHa,
}) => {
  const [mode, setMode] = useState<'oauth' | 'dev_token'>('oauth');
  const [tokenInput, setTokenInput] = useState('');
  const [instanceUrl, setInstanceUrl] = useState(HA_DEFAULT_URL);
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // If embedded in Home Assistant custom panel, NEVER show external auth modal
  if (!isOpen || isEmbeddedInHa) return null;

  const handleTokenSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!tokenInput.trim()) return;

    setSubmitting(true);
    setErrorMsg('');
    try {
      await onConnectToken(tokenInput.trim(), instanceUrl.trim());
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : 'Failed to connect');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[700] flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-md animate-in fade-in duration-200">
      <div className="w-full max-w-md overflow-hidden rounded-3xl border border-white/80 bg-white shadow-2xl backdrop-blur-xl">
        {/* Header */}
        <div className="relative bg-gradient-to-b from-indigo-50/80 to-white px-6 pt-7 pb-4 text-center">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full text-slate-400 hover:bg-slate-100 active:scale-95"
            title="Dismiss preview banner"
          >
            <X className="h-4 w-4" />
          </button>

          <div className="mx-auto mb-3 flex h-13 w-13 items-center justify-center rounded-2xl bg-slate-900 text-white shadow-lg shadow-slate-900/10">
            <Home className="h-6 w-6" />
          </div>

          <div className="inline-flex items-center gap-1.5 rounded-full bg-indigo-100/70 px-2.5 py-0.5 text-[10px] font-semibold text-indigo-800 mb-2">
            <span>Standalone Preview Mode</span>
          </div>

          <h2 className="text-lg font-bold tracking-tight text-slate-900">
            Connect to Home Assistant
          </h2>
          <p className="mt-1 text-xs text-slate-500 max-w-xs mx-auto leading-relaxed">
            Inside Home Assistant, Yimly opens automatically via your authenticated session with zero login.
          </p>
        </div>

        {/* Content */}
        <div className="p-6 pt-2 space-y-4">
          {/* Status / Error Banner */}
          {(statusMessage || errorMsg) && (
            <div
              className={`rounded-2xl p-3 text-xs font-medium ${
                errorMsg
                  ? 'border border-rose-200 bg-rose-50 text-rose-800'
                  : 'border border-indigo-100 bg-indigo-50/70 text-indigo-900'
              }`}
            >
              {errorMsg || statusMessage}
            </div>
          )}

          {/* Architecture note */}
          <div className="flex items-start gap-2 rounded-2xl border border-slate-200/60 bg-slate-50/80 p-3 text-xs text-slate-600">
            <Info className="h-4 w-4 text-indigo-600 shrink-0 mt-0.5" />
            <p className="text-[11px] leading-relaxed text-slate-600">
              In production, Yimly runs as a native Home Assistant Custom Panel. No passwords or tokens are ever stored in browser persistence.
            </p>
          </div>

          {/* Segmented Options for Dev Preview */}
          <div className="flex rounded-xl bg-slate-100 p-1">
            <button
              type="button"
              onClick={() => setMode('oauth')}
              className={`flex-1 rounded-lg py-2 text-xs font-semibold transition-all ${
                mode === 'oauth'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              HA OAuth Login
            </button>
            <button
              type="button"
              onClick={() => setMode('dev_token')}
              className={`flex-1 rounded-lg py-2 text-xs font-semibold transition-all ${
                mode === 'dev_token'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Dev Session Token
            </button>
          </div>

          {mode === 'oauth' ? (
            <div className="space-y-4">
              <div className="rounded-2xl border border-slate-200/70 bg-slate-50/60 p-3.5 text-xs text-slate-600 space-y-1.5">
                <div className="flex items-center gap-2 font-semibold text-slate-800">
                  <Shield className="h-4 w-4 text-indigo-600" />
                  <span>Direct Home Assistant OAuth</span>
                </div>
                <p className="text-[11px] leading-relaxed text-slate-500">
                  Authenticate on <span className="font-mono font-medium text-slate-700">home.robinhort.link</span>.
                  Yimly never handles or stores your password.
                </p>
              </div>

              <button
                type="button"
                onClick={onStartOAuth}
                disabled={isConnecting}
                className="flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-900 py-3.5 text-xs font-semibold text-white shadow-md transition-all hover:bg-slate-800 active:scale-95 disabled:opacity-50"
              >
                <span>Log in with Home Assistant</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          ) : (
            <form onSubmit={handleTokenSubmit} className="space-y-3.5">
              <div className="rounded-xl bg-amber-50/80 border border-amber-200/70 p-2.5 text-[11px] text-amber-900">
                <span className="font-semibold">In-Memory Only:</span> Token is held strictly in volatile RAM for this active session and is never persisted to browser storage.
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                  Home Assistant Instance URL
                </label>
                <input
                  type="text"
                  value={instanceUrl}
                  onChange={(e) => setInstanceUrl(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-mono text-slate-800 focus:border-slate-900 focus:outline-none"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="block text-[11px] font-semibold text-slate-700">
                    Home Assistant Access Token
                  </label>
                  <span className="text-[10px] text-slate-500 font-medium">
                    Profile → Security → Long-Lived Tokens
                  </span>
                </div>
                <textarea
                  rows={2}
                  value={tokenInput}
                  onChange={(e) => setTokenInput(e.target.value)}
                  placeholder="Paste Home Assistant access token"
                  className="w-full rounded-xl border border-slate-200 bg-white p-2.5 text-xs font-mono text-slate-800 focus:border-slate-900 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={submitting || !tokenInput.trim()}
                className="flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-900 py-3 text-xs font-semibold text-white shadow-md transition-all hover:bg-slate-800 active:scale-95 disabled:opacity-50 cursor-pointer"
              >
                <Key className="h-3.5 w-3.5" />
                <span>{submitting ? 'Connecting...' : 'Connect to Home Assistant'}</span>
              </button>
            </form>
          )}

          <div className="pt-1 text-center">
            <button
              type="button"
              onClick={onClose}
              className="text-[11px] text-slate-500 hover:text-slate-800 underline underline-offset-2 cursor-pointer"
            >
              Dismiss
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
