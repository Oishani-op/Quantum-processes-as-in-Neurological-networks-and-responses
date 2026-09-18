import React from 'react';
import { ActiveTab } from '../types';
import { 
  Atom, 
  Cpu, 
  Sparkles, 
  Binary, 
  FlaskConical, 
  Radio, 
  BrainCircuit,
  Bot
} from 'lucide-react';

interface NavbarProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  hasApiKey: boolean;
  predictedDeltaIQ: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  hasApiKey,
  predictedDeltaIQ,
}) => {
  const navItems: { id: ActiveTab; label: string; icon: React.FC<{ className?: string }> }[] = [
    { id: 'synapse_sim', label: 'Quantum Synapse', icon: Atom },
    { id: 'ml_model', label: 'ML Model Studio', icon: Cpu },
    { id: 'interventions', label: 'Interventions & IQ', icon: Sparkles },
    { id: 'math_framework', label: 'Mathematical Model', icon: Binary },
    { id: 'experiments', label: 'Experimental Labs', icon: FlaskConical },
    { id: 'receiver_thesis', label: 'Receiver vs Generator', icon: Radio },
    { id: 'ai_synthesizer', label: 'AI Synthesizer', icon: Bot },
  ];

  return (
    <header className="border-b border-slate-200 bg-white/95 backdrop-blur sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Title */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-600 via-indigo-600 to-violet-700 flex items-center justify-center text-white shadow-md shadow-indigo-100">
              <BrainCircuit className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-bold text-slate-900 tracking-tight text-base sm:text-lg">
                  SynaptoQuantum ML
                </span>
                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-indigo-50 text-indigo-700 border border-indigo-200/60">
                  Orch-OR &middot; Posner &middot; QNN
                </span>
              </div>
              <p className="text-xs text-slate-500 hidden sm:block">
                Quantum Synaptic Cognitive Modeling &amp; Intervention Framework
              </p>
            </div>
          </div>

          {/* Quick Metrics Badge & Status */}
          <div className="flex items-center space-x-3">
            <div className="hidden md:flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-emerald-50 border border-emerald-200 text-xs text-emerald-800">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="font-semibold">Simulated Yield:</span>
              <span className="font-bold text-emerald-900">+{predictedDeltaIQ} IQ pts</span>
            </div>

            <div className="flex items-center space-x-1.5 px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200 text-xs text-slate-600">
              <Bot className="w-3.5 h-3.5 text-indigo-600" />
              <span>Gemini 3.8:</span>
              <span className="font-medium text-emerald-700">Ready</span>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav className="flex space-x-1 overflow-x-auto no-scrollbar py-2 border-t border-slate-100">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center space-x-2 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap transition-colors duration-150 ${
                  isActive
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-500'}`} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
