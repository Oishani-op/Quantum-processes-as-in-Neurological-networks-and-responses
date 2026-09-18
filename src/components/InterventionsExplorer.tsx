import React from 'react';
import { INTERVENTIONS } from '../data/interventions';
import { QuantumSynapticParameters } from '../types';
import { 
  Sparkles, 
  Radio, 
  Salad, 
  Activity, 
  Droplet, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight,
  ShieldCheck,
  Zap
} from 'lucide-react';

interface InterventionsExplorerProps {
  parameters: QuantumSynapticParameters;
  setParameters: React.Dispatch<React.SetStateAction<QuantumSynapticParameters>>;
  onApplyIntervention: (params: Partial<QuantumSynapticParameters>) => void;
}

export const InterventionsExplorer: React.FC<InterventionsExplorerProps> = ({
  parameters,
  setParameters,
  onApplyIntervention,
}) => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'field_stimulation':
        return <Radio className="w-5 h-5 text-indigo-600" />;
      case 'nutritional_isotope':
        return <Salad className="w-5 h-5 text-emerald-600" />;
      case 'biofeedback':
        return <Activity className="w-5 h-5 text-purple-600" />;
      case 'hydration_lattice':
        return <Droplet className="w-5 h-5 text-cyan-600" />;
      default:
        return <Sparkles className="w-5 h-5 text-indigo-600" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 border border-slate-800 rounded-2xl p-6 text-white shadow-xl">
        <div className="inline-flex items-center space-x-2 px-2.5 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-semibold mb-2 border border-indigo-400/30">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Cognitive Enhancement Interventions</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
          Theoretical Quantum Interventions &amp; IQ Yield
        </h1>
        <p className="text-slate-300 text-sm mt-1 max-w-3xl leading-relaxed">
          Brainstormed biophysical mechanisms designed to protect quantum coherence in synaptic active zones, overcome warm biological decoherence (310 K), and directly scale human intelligence quotient metrics.
        </p>
      </div>

      {/* Interventions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {INTERVENTIONS.map((intervention) => {
          return (
            <div
              key={intervention.id}
              className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="p-2.5 rounded-xl bg-slate-100 border border-slate-200/80">
                      {getCategoryIcon(intervention.category)}
                    </div>
                    <div>
                      <h2 className="text-base font-bold text-slate-900 leading-snug">
                        {intervention.name}
                      </h2>
                      <p className="text-xs text-slate-500">{intervention.subtitle}</p>
                    </div>
                  </div>
                  <span className={`px-2.5 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider shrink-0 ${
                    intervention.biologicalFeasibility === 'Established'
                      ? 'bg-emerald-100 text-emerald-800'
                      : intervention.biologicalFeasibility === 'High'
                      ? 'bg-indigo-100 text-indigo-800'
                      : 'bg-amber-100 text-amber-800'
                  }`}>
                    {intervention.biologicalFeasibility} Feasibility
                  </span>
                </div>

                {/* Quantum Target */}
                <div className="mt-3 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs space-y-1">
                  <span className="font-semibold text-slate-700 flex items-center space-x-1.5">
                    <Zap className="w-3.5 h-3.5 text-amber-500" />
                    <span>Target Quantum Domain:</span>
                  </span>
                  <p className="text-slate-600 font-mono text-[11px]">{intervention.quantumTarget}</p>
                </div>

                {/* Mechanism Breakdown */}
                <div className="mt-4 space-y-2 text-xs text-slate-600 leading-relaxed">
                  <p>
                    <strong className="text-slate-800">Biophysical Action: </strong>
                    {intervention.mechanism}
                  </p>
                  <p>
                    <strong className="text-slate-800">Decoherence Defense: </strong>
                    {intervention.decoherenceMitigation}
                  </p>
                </div>

                {/* Cognitive / IQ Translation Box */}
                <div className="mt-4 p-3.5 rounded-xl bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200/80 text-xs">
                  <div className="flex items-center justify-between font-bold text-emerald-900 mb-1">
                    <span className="flex items-center space-x-1.5">
                      <TrendingUp className="w-4 h-4 text-emerald-600" />
                      <span>Projected Cognitive Gain:</span>
                    </span>
                    <span className="text-sm">
                      +{intervention.predictedDeltaIqRange[0]} to +{intervention.predictedDeltaIqRange[1]} IQ pts
                    </span>
                  </div>
                  <p className="text-emerald-800 text-[11px] leading-relaxed">
                    {intervention.theoreticalIqYield}
                  </p>
                </div>

                {/* Recommended Lab / In Vivo Protocol */}
                <div className="mt-3 text-[11px] text-slate-500">
                  <strong className="text-slate-700">Protocol Specification: </strong>
                  {intervention.recommendedProtocol}
                </div>
              </div>

              {/* Action Button: Apply to Simulation */}
              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500">
                  Injects calibrated parameters into physical model
                </span>
                <button
                  onClick={() => onApplyIntervention(intervention.parametersImpact)}
                  className="flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold shadow-sm transition"
                >
                  <span>Apply to Model</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Synthesis Summary on IQ Scaling */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
        <h3 className="text-base font-bold text-slate-900 mb-3 flex items-center space-x-2">
          <ShieldCheck className="w-5 h-5 text-indigo-600" />
          <span>How Quantum Synaptic Optimization Translates into Measurable IQ Gains</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-600 leading-relaxed">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-1.5">
            <span className="font-bold text-slate-800 text-sm block">1. Neural Processing Speed (NPS)</span>
            <p>
              In classical psychometrics, neural inspection time and reaction latency account for ~20-30% of variance in general intelligence ($g$). Replacing stochastic vesicle diffusion with quantum tunneling reduces synaptic jitter from 1.2 ms to &lt;350 μs, drastically accelerating feedforward visual reasoning.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-1.5">
            <span className="font-bold text-slate-800 text-sm block">2. Working Memory Capacity (WMC)</span>
            <p>
              Working memory is limited by cross-synaptic interference during active chunk maintenance. Long-lived nuclear spin entanglement in Posner molecules allows simultaneous multi-dendritic binding without decaying during delay periods, lifting the classical 7 ± 2 item Miller bottleneck.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-1.5">
            <span className="font-bold text-slate-800 text-sm block">3. Associative Insight &amp; Fluid Intelligence (G_f)</span>
            <p>
              Complex problem solving (e.g. Raven&apos;s Advanced Progressive Matrices) requires searching high-dimensional semantic spaces. Grover-like quantum superposition across synaptic weight configurations enables O(√N) parallel associative search rather than serial trial-and-error.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
