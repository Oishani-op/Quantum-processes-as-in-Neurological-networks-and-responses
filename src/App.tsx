import React, { useState, useEffect } from 'react';
import { ActiveTab, QuantumSynapticParameters } from './types';
import { DEFAULT_PARAMETERS, calculateQuantumMetrics } from './lib/quantumModel';
import { Navbar } from './components/Navbar';
import { QuantumSynapseCanvas } from './components/QuantumSynapseCanvas';
import { MLModelStudio } from './components/MLModelStudio';
import { InterventionsExplorer } from './components/InterventionsExplorer';
import { MathematicalFramework } from './components/MathematicalFramework';
import { ExperimentalProtocols } from './components/ExperimentalProtocols';
import { ReceiverThesisExplorer } from './components/ReceiverThesisExplorer';
import { AISynthesizerPanel } from './components/AISynthesizerPanel';
import { 
  BrainCircuit, 
  Sparkles, 
  Radio, 
  Atom, 
  Binary, 
  FlaskConical, 
  Cpu, 
  BookOpen,
  ArrowRight
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('synapse_sim');
  const [parameters, setParameters] = useState<QuantumSynapticParameters>(DEFAULT_PARAMETERS);
  const [hasApiKey, setHasApiKey] = useState(false);
  const [aiPresetTopic, setAiPresetTopic] = useState<string | undefined>(undefined);
  const [aiPresetTech, setAiPresetTech] = useState<string | undefined>(undefined);

  // Compute live real-time quantum physics & cognitive metrics
  const metrics = calculateQuantumMetrics(parameters);

  // Check health & API key on mount
  useEffect(() => {
    fetch('/api/health')
      .then((res) => res.json())
      .then((data) => {
        if (data.hasApiKey) setHasApiKey(true);
      })
      .catch((err) => console.log('Server health check:', err));
  }, []);

  const handleApplyIntervention = (deltaParams: Partial<QuantumSynapticParameters>) => {
    setParameters((prev) => ({
      ...prev,
      ...deltaParams,
    }));
    setActiveTab('synapse_sim');
  };

  const handleSelectForAIAnalysis = (title: string, tech: string) => {
    setAiPresetTopic(title);
    setAiPresetTech(tech);
    setActiveTab('ai_synthesizer');
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-indigo-500 selection:text-white">
      {/* Top Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        hasApiKey={hasApiKey}
        predictedDeltaIQ={metrics.predictedDeltaIQ}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {activeTab === 'synapse_sim' && (
          <QuantumSynapseCanvas
            parameters={parameters}
            setParameters={setParameters}
            metrics={metrics}
          />
        )}

        {activeTab === 'ml_model' && (
          <MLModelStudio currentParameters={parameters} />
        )}

        {activeTab === 'interventions' && (
          <InterventionsExplorer
            parameters={parameters}
            setParameters={setParameters}
            onApplyIntervention={handleApplyIntervention}
          />
        )}

        {activeTab === 'math_framework' && <MathematicalFramework />}

        {activeTab === 'experiments' && (
          <ExperimentalProtocols onSelectForAIAnalysis={handleSelectForAIAnalysis} />
        )}

        {activeTab === 'receiver_thesis' && <ReceiverThesisExplorer />}

        {activeTab === 'ai_synthesizer' && (
          <AISynthesizerPanel
            parameters={parameters}
            initialTopic={aiPresetTopic}
            initialTech={aiPresetTech}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold text-xs">
                Ψ
              </div>
              <span className="font-semibold text-slate-700">
                Quantum Synaptic ML &amp; Cognitive Architecture
              </span>
              <span>&mdash; Based on the &quot;Receiver or Generator?&quot; Thesis</span>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-slate-400">
              <span>Penrose-Hameroff Orch-OR</span>
              <span>&bull;</span>
              <span>Posner Molecule Quantum Spin</span>
              <span>&bull;</span>
              <span>Pim van Lommel (Lancet)</span>
              <span>&bull;</span>
              <span>Huxley Reducing Valve</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
