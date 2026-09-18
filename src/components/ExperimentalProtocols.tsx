import React, { useState } from 'react';
import { EXPERIMENTAL_DESIGNS } from '../data/experimentalDesigns';
import { ExperimentalDesign } from '../types';
import { 
  FlaskConical, 
  Microscope, 
  ShieldAlert, 
  CheckCircle2, 
  Sparkles, 
  HelpCircle,
  FileText,
  Activity,
  Zap,
  Target
} from 'lucide-react';

interface ExperimentalProtocolsProps {
  onSelectForAIAnalysis: (title: string, tech: string) => void;
}

export const ExperimentalProtocols: React.FC<ExperimentalProtocolsProps> = ({
  onSelectForAIAnalysis,
}) => {
  const [selectedDesignId, setSelectedDesignId] = useState<string>(EXPERIMENTAL_DESIGNS[0].id);

  const selectedDesign = EXPERIMENTAL_DESIGNS.find((d) => d.id === selectedDesignId) || EXPERIMENTAL_DESIGNS[0];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 border border-slate-800 rounded-2xl p-6 text-white shadow-xl">
        <div className="inline-flex items-center space-x-2 px-2.5 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-semibold mb-2 border border-indigo-400/30">
          <FlaskConical className="w-3.5 h-3.5" />
          <span>Falsifiable Empirical Methodologies</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
          Experimental Designs &amp; Quantum Biological Testing
        </h1>
        <p className="text-slate-300 text-sm mt-1 max-w-3xl leading-relaxed">
          Rigorous laboratory protocols, required cutting-edge technologies, biological noise-isolation strategies at 310 K, and strict falsification criteria to validate or refute quantum synaptic signal processing.
        </p>
      </div>

      {/* Protocol Selector Tabs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {EXPERIMENTAL_DESIGNS.map((exp, idx) => {
          const isSelected = exp.id === selectedDesignId;
          return (
            <button
              key={exp.id}
              onClick={() => setSelectedDesignId(exp.id)}
              className={`text-left p-4 rounded-2xl border transition flex flex-col justify-between ${
                isSelected
                  ? 'bg-indigo-600 text-white border-indigo-600 shadow-md'
                  : 'bg-white text-slate-800 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
              }`}
            >
              <div>
                <span className={`text-[11px] font-bold uppercase tracking-wider block mb-1 ${
                  isSelected ? 'text-indigo-200' : 'text-indigo-600'
                }`}>
                  Experiment 0{idx + 1}
                </span>
                <h3 className="text-sm font-bold leading-snug line-clamp-2">
                  {exp.title}
                </h3>
              </div>
              <span className={`text-[11px] mt-3 block ${
                isSelected ? 'text-indigo-200' : 'text-slate-400'
              }`}>
                {exp.statusAndReadiness}
              </span>
            </button>
          );
        })}
      </div>

      {/* Selected Protocol Deep Dive */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 pb-4 border-b border-slate-100">
          <div>
            <div className="flex items-center space-x-2 text-xs font-semibold text-indigo-600 mb-1">
              <Microscope className="w-4 h-4" />
              <span>Target Quantum Phenomenon:</span>
            </div>
            <h2 className="text-xl font-bold text-slate-900">
              {selectedDesign.title}
            </h2>
            <p className="text-xs text-slate-600 mt-1 max-w-3xl">
              {selectedDesign.targetPhenomenon}
            </p>
          </div>

          <button
            onClick={() => onSelectForAIAnalysis(selectedDesign.title, selectedDesign.apparatus[0])}
            className="flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-700 hover:bg-indigo-100 text-xs font-bold transition shadow-sm self-start lg:self-center"
          >
            <Sparkles className="w-4 h-4 text-indigo-600" />
            <span>Refine via Gemini AI</span>
          </button>
        </div>

        {/* 2-Column Grid: Apparatus & Biological Noise Isolation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left: Required Apparatus & Technology */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center space-x-2">
              <FlaskConical className="w-4 h-4 text-indigo-600" />
              <span>Required Technologies &amp; Instrumentation</span>
            </h3>
            <div className="space-y-2">
              {selectedDesign.apparatus.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-start space-x-2.5 text-xs text-slate-700"
                >
                  <span className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="p-3 rounded-xl bg-slate-100/70 text-xs text-slate-600">
              <strong>Biological Test Model: </strong>
              {selectedDesign.biologicalModel}
            </div>
          </div>

          {/* Right: Noise Isolation & Thermal Shielding at 310 K */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center space-x-2">
              <Zap className="w-4 h-4 text-amber-500" />
              <span>Isolating Quantum Effects from Warm 310 K Biological Noise</span>
            </h3>
            <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/80 text-xs text-amber-950 leading-relaxed space-y-2">
              <strong className="block text-amber-900 font-semibold">
                Decoherence Discrimination Protocol:
              </strong>
              <p>{selectedDesign.noiseIsolationMethod}</p>
            </div>

            {/* Primary Measured Endpoints */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-2">
              <strong className="text-xs font-bold text-slate-800 block">
                Primary Experimental Endpoints:
              </strong>
              <ul className="space-y-1.5 text-xs text-slate-600">
                {selectedDesign.primaryEndpoints.map((ep, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 mt-1.5 shrink-0"></span>
                    <span>{ep}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section: Cognitive Translation & Strict Falsification Criteria */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-100">
          {/* Cognitive Translation */}
          <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200/80 text-xs text-emerald-950 space-y-1.5">
            <span className="font-bold text-emerald-900 flex items-center space-x-1.5 text-sm">
              <Target className="w-4 h-4 text-emerald-700" />
              <span>Cognitive &amp; IQ Translation Metric</span>
            </span>
            <p className="leading-relaxed text-emerald-800">
              {selectedDesign.cognitiveTranslation}
            </p>
          </div>

          {/* Falsification Criteria */}
          <div className="p-4 rounded-xl bg-rose-50 border border-rose-200/80 text-xs text-rose-950 space-y-1.5">
            <span className="font-bold text-rose-900 flex items-center space-x-1.5 text-sm">
              <ShieldAlert className="w-4 h-4 text-rose-700" />
              <span>Popperian Falsification Criteria</span>
            </span>
            <p className="leading-relaxed text-rose-800">
              {selectedDesign.falsificationCriteria}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
