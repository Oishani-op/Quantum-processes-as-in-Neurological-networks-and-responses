import React, { useState } from 'react';
import { QuantumSynapticParameters } from '../types';
import { 
  Bot, 
  Send, 
  Sparkles, 
  RefreshCw, 
  FlaskConical, 
  CheckCircle2, 
  AlertCircle,
  HelpCircle,
  Copy,
  BookOpen
} from 'lucide-react';

interface AISynthesizerPanelProps {
  parameters: QuantumSynapticParameters;
  initialTopic?: string;
  initialTech?: string;
}

export const AISynthesizerPanel: React.FC<AISynthesizerPanelProps> = ({
  parameters,
  initialTopic,
  initialTech,
}) => {
  const [activeMode, setActiveMode] = useState<'synthesize' | 'protocol'>('synthesize');
  const [topicInput, setTopicInput] = useState<string>(
    initialTopic || 'Targeted 8.2 MHz Transcranial PEMF coupled with 40Hz Gamma Phase Locking'
  );
  const [technologyInput, setTechnologyInput] = useState<string>(
    initialTech || 'Nanoscale Diamond NV Center Magnetometry'
  );
  const [isLoading, setIsLoading] = useState(false);
  const [synthesisOutput, setSynthesisOutput] = useState<string | null>(null);
  const [protocolOutput, setProtocolOutput] = useState<any | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const samplePrompts = [
    'How do Posner molecules protect 31-P nuclear spin entanglement from 310 K thermal collisions?',
    'What specific nutritional isotopes besides 6-Li could stabilize synaptic quantum states?',
    'Can optical 810nm transcranial photobiomodulation synchronize tubulin aromatic tryptophan networks?',
    'Analyze Dr. Pim van Lommel Lancet NDE observations through quantum non-local state preservation.',
  ];

  const handleSynthesize = async (overridePrompt?: string) => {
    setIsLoading(true);
    setErrorMsg(null);
    const targetTopic = overridePrompt || topicInput;

    try {
      const res = await fetch('/api/gemini/synthesize', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          topic: targetTopic,
          parameters,
        }),
      });

      const data = await res.json();
      if (!data.success) {
        throw new Error(data.error || 'Failed to synthesize');
      }

      setSynthesisOutput(data.content);
    } catch (err: any) {
      console.error(err);
      setErrorMsg(err.message || 'Error communicating with AI synthesis service');
    } finally {
      setIsLoading(false);
    }
  };

  const handleGenerateProtocol = async () => {
    setIsLoading(true);
    setErrorMsg(null);

    try {
      const res = await fetch('/api/gemini/generate-protocol', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          targetEffect: topicInput,
          technology: technologyInput,
        }),
      });

      const data = await res.json();
      if (!data.success) {
        throw new Error(data.error || 'Failed to generate protocol');
      }

      setProtocolOutput(data.protocol);
    } catch (err: any) {
      console.error(err);
      setErrorMsg(err.message || 'Error generating protocol');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 border border-slate-800 rounded-2xl p-6 text-white shadow-xl">
        <div className="inline-flex items-center space-x-2 px-2.5 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-semibold mb-2 border border-indigo-400/30">
          <Bot className="w-3.5 h-3.5" />
          <span>Gemini 3.8 Flash Scientific Synthesis</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
          AI Quantum Hypothesis &amp; Protocol Synthesizer
        </h1>
        <p className="text-slate-300 text-sm mt-1 max-w-3xl leading-relaxed">
          Deep theoretical reasoning powered by Gemini 3.8 Flash to evaluate quantum synaptic mechanisms, critique intervention feasibility, or auto-generate peer-review ready experimental testing frameworks.
        </p>
      </div>

      {/* Mode Switcher */}
      <div className="flex space-x-2 border-b border-slate-200 pb-2">
        <button
          onClick={() => setActiveMode('synthesize')}
          className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition ${
            activeMode === 'synthesize'
              ? 'bg-indigo-600 text-white shadow-sm'
              : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          <Sparkles className="w-4 h-4" />
          <span>Hypothesis &amp; Intervention Reasoning</span>
        </button>

        <button
          onClick={() => setActiveMode('protocol')}
          className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition ${
            activeMode === 'protocol'
              ? 'bg-indigo-600 text-white shadow-sm'
              : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          <FlaskConical className="w-4 h-4" />
          <span>Automated Experimental Protocol Designer</span>
        </button>
      </div>

      {/* Interactive Input Form */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
            {activeMode === 'synthesize' ? 'Target Quantum Phenomenon / Intervention to Analyze:' : 'Target Effect to Measure in Lab:'}
          </label>
          <input
            type="text"
            value={topicInput}
            onChange={(e) => setTopicInput(e.target.value)}
            placeholder="e.g. Proton tunneling in NMDA receptor selectivity filters under 8.2 MHz field stimulation..."
            className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        {activeMode === 'protocol' && (
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Primary Lab Technology / Instrumentation Platform:
            </label>
            <input
              type="text"
              value={technologyInput}
              onChange={(e) => setTechnologyInput(e.target.value)}
              placeholder="e.g. Diamond NV Center Magnetometry, Ultrafast 2D Electronic Spectroscopy..."
              className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        )}

        {/* Quick Suggestion Chips */}
        <div>
          <span className="text-[11px] font-semibold text-slate-500 block mb-2">
            Suggested Scientific Prompts:
          </span>
          <div className="flex flex-wrap gap-2">
            {samplePrompts.map((prompt, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setTopicInput(prompt);
                  handleSynthesize(prompt);
                }}
                className="text-left text-xs px-3 py-1.5 rounded-lg bg-slate-50 hover:bg-indigo-50 border border-slate-200 hover:border-indigo-200 text-slate-700 hover:text-indigo-700 transition"
              >
                {prompt}
              </button>
            ))}
          </div>
        </div>

        <div className="pt-2 flex justify-end">
          <button
            onClick={() => activeMode === 'synthesize' ? handleSynthesize() : handleGenerateProtocol()}
            disabled={isLoading || !topicInput.trim()}
            className="flex items-center space-x-2 px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold shadow-md transition disabled:opacity-50"
          >
            {isLoading ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin" />
                <span>Synthesizing with Gemini 3.8...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4" />
                <span>{activeMode === 'synthesize' ? 'Run AI Deep Analysis' : 'Generate Full Lab Protocol'}</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Error Message */}
      {errorMsg && (
        <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-800 flex items-center space-x-2">
          <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
          <span>{errorMsg}</span>
        </div>
      )}

      {/* Output Display */}
      {synthesisOutput && activeMode === 'synthesize' && (
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div className="flex items-center space-x-2">
              <Sparkles className="w-5 h-5 text-indigo-600" />
              <h2 className="text-base font-bold text-slate-900">
                Gemini 3.8 Biophysical Evaluation
              </h2>
            </div>
            <button
              onClick={() => navigator.clipboard.writeText(synthesisOutput)}
              className="flex items-center space-x-1 text-xs text-slate-500 hover:text-slate-800 transition"
            >
              <Copy className="w-3.5 h-3.5" />
              <span>Copy</span>
            </button>
          </div>

          <div className="text-xs sm:text-sm text-slate-700 leading-relaxed whitespace-pre-wrap font-sans space-y-3">
            {synthesisOutput}
          </div>
        </div>
      )}

      {protocolOutput && activeMode === 'protocol' && (
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-5">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div className="flex items-center space-x-2">
              <FlaskConical className="w-5 h-5 text-indigo-600" />
              <h2 className="text-base font-bold text-slate-900">
                {protocolOutput.title || 'Generated Experimental Protocol'}
              </h2>
            </div>
            <span className="px-2.5 py-0.5 rounded text-xs font-semibold bg-emerald-100 text-emerald-800">
              Peer-Review Ready
            </span>
          </div>

          <div className="space-y-4 text-xs">
            {protocolOutput.hypothesis && (
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                <strong className="block text-slate-900 font-bold mb-1">Scientific Hypothesis:</strong>
                <p className="text-slate-600">{protocolOutput.hypothesis}</p>
              </div>
            )}

            {protocolOutput.biologicalModel && (
              <div>
                <strong className="block text-slate-900 font-bold mb-1">Biological Model:</strong>
                <p className="text-slate-600">{protocolOutput.biologicalModel}</p>
              </div>
            )}

            {protocolOutput.requiredApparatus && (
              <div>
                <strong className="block text-slate-900 font-bold mb-1">Required Instrumentation:</strong>
                <ul className="list-disc pl-5 space-y-1 text-slate-600">
                  {protocolOutput.requiredApparatus.map((item: string, i: number) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {protocolOutput.isolationTechniques && (
              <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200/80 text-amber-950">
                <strong className="block text-amber-900 font-bold mb-1">Thermal Noise Isolation at 310 K:</strong>
                <ul className="list-disc pl-5 space-y-1 text-amber-900">
                  {protocolOutput.isolationTechniques.map((item: string, i: number) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {protocolOutput.iqCorrelationMetric && (
              <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-950">
                <strong className="block text-emerald-900 font-bold mb-1">Cognitive / IQ Mapping:</strong>
                <p className="text-emerald-800">{protocolOutput.iqCorrelationMetric}</p>
              </div>
            )}

            {protocolOutput.falsificationCriteria && (
              <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-950">
                <strong className="block text-rose-900 font-bold mb-1">Falsification Criteria:</strong>
                <p className="text-rose-800">{protocolOutput.falsificationCriteria}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
