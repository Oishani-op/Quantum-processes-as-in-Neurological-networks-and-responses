import React from 'react';
import { PAPER_CONCEPTS } from '../data/paperConcepts';
import { 
  Radio, 
  Brain, 
  Eye, 
  Atom, 
  Sparkles, 
  Quote, 
  CheckCircle2, 
  ArrowRight,
  BookOpen
} from 'lucide-react';

export const ReceiverThesisExplorer: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 border border-slate-800 rounded-2xl p-6 text-white shadow-xl">
        <div className="inline-flex items-center space-x-2 px-2.5 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-semibold mb-2 border border-indigo-400/30">
          <Radio className="w-3.5 h-3.5" />
          <span>Core Document Thesis Analysis</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
          Receiver or Generator? Exploring Consciousness &amp; Synapses
        </h1>
        <p className="text-slate-300 text-sm mt-1 max-w-3xl leading-relaxed">
          Synthesizing the core arguments from the attached thesis: Is consciousness generated strictly from electrochemical neuron firing, or is the brain an active biological receiver—a resonant antenna and filter for a deeper non-local informational field?
        </p>
      </div>

      {/* Dual Paradigm Comparison Matrix */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Generator Paradigm */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
          <div className="flex items-center space-x-2 text-slate-800">
            <span className="p-2 rounded-xl bg-slate-100 text-slate-700">
              <Brain className="w-5 h-5" />
            </span>
            <div>
              <h2 className="text-base font-bold text-slate-900">The Materialist Generator Paradigm</h2>
              <span className="text-xs text-slate-500">Standard Electrochemical Neuroscience</span>
            </div>
          </div>

          <p className="text-xs text-slate-600 leading-relaxed">
            Consciousness is an emergent epiphenomenon resulting from billions of classical electrochemical interactions between neurons via neurotransmitters and action potentials. As fire emerges from friction, the mind is built from physical hardware.
          </p>

          <div className="space-y-2 text-xs text-slate-700">
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
              <strong className="block text-slate-900 font-semibold mb-0.5">Brain Lesion &amp; Anesthesia Evidence:</strong>
              When frontal or temporal cortex is damaged or blood flow is cut off, conscious awareness vanishes or fragments. Anesthetics reliably disrupt mental experience.
            </div>
            <div className="p-3 rounded-xl bg-rose-50 border border-rose-100 text-rose-900">
              <strong className="block text-rose-950 font-semibold mb-0.5">The Unsolved Paradox (Chalmers&apos; Hard Problem):</strong>
              Purely physical ion exchanges cannot explain <em>qualia</em>—why does physical processing feel like anything from the inside?
            </div>
          </div>
        </div>

        {/* Receiver Paradigm */}
        <div className="bg-white border border-indigo-200 rounded-2xl p-6 shadow-sm space-y-4 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-full blur-3xl -z-0"></div>
          <div className="flex items-center space-x-2 text-indigo-900 relative z-10">
            <span className="p-2 rounded-xl bg-indigo-100 text-indigo-700">
              <Radio className="w-5 h-5" />
            </span>
            <div>
              <h2 className="text-base font-bold text-slate-900">The Transceiver / Receiver Paradigm</h2>
              <span className="text-xs text-indigo-600 font-medium">Huxley, Penrose-Hameroff &amp; Non-Duality</span>
            </div>
          </div>

          <p className="text-xs text-slate-600 leading-relaxed relative z-10">
            The brain acts as a resonant biological transceiver. Just as a radio catches invisible electromagnetic broadcasts without generating music itself, the brain tunes, filters, and translates an underlying universal informational field into human experiential form.
          </p>

          <div className="space-y-2 text-xs text-slate-700 relative z-10">
            <div className="p-3 rounded-xl bg-indigo-50/70 border border-indigo-100 text-indigo-950">
              <strong className="block text-indigo-900 font-semibold mb-0.5">Huxley&apos;s &quot;Reducing Valve&quot;:</strong>
              The brain&apos;s primary task is to eliminate 99.9% of universal sensory input, restricting attention to biological survival. Psychedelics (DMT, psilocybin) quiet the default mode network, widening the aperture.
            </div>
            <div className="p-3 rounded-xl bg-indigo-50/70 border border-indigo-100 text-indigo-950">
              <strong className="block text-indigo-900 font-semibold mb-0.5">Cardiac Flatline NDE Anomalies:</strong>
              Dr. Pim van Lommel&apos;s Lancet study documented lucid, structured awareness during clinically verified zero-EEG/zero-blood flow states—suggesting consciousness is non-local.
            </div>
          </div>
        </div>
      </div>

      {/* Core Themes from Attached Document */}
      <div className="space-y-4">
        <h3 className="text-base font-bold text-slate-900 flex items-center space-x-2">
          <BookOpen className="w-5 h-5 text-indigo-600" />
          <span>Detailed Analysis of Core Document Concepts</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PAPER_CONCEPTS.map((concept) => (
            <div
              key={concept.id}
              className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-3 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="px-2 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700">
                    {concept.category}
                  </span>
                  <div className="flex items-center space-x-1 text-[11px] text-slate-400">
                    {concept.keyFigures.join(', ')}
                  </div>
                </div>

                <h4 className="text-base font-bold text-slate-900 leading-snug">
                  {concept.title}
                </h4>

                {/* Document Quote */}
                <div className="mt-3 p-3 rounded-xl bg-slate-50 border-l-4 border-indigo-600 text-xs italic text-slate-700">
                  <Quote className="w-3.5 h-3.5 text-indigo-500 inline mr-1 -mt-1" />
                  &ldquo;{concept.quote}&rdquo;
                </div>

                <p className="mt-3 text-xs text-slate-600 leading-relaxed">
                  {concept.summary}
                </p>

                {/* Direct Link to Quantum Synaptic Model */}
                <div className="mt-3 p-3 rounded-xl bg-indigo-50/60 border border-indigo-100 text-xs text-indigo-950 leading-relaxed">
                  <strong className="block text-indigo-900 font-semibold mb-0.5">
                    Quantum Synaptic Modeling Link:
                  </strong>
                  {concept.quantumSynapticLink}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* The Middle Path Synthesis */}
      <div className="bg-gradient-to-br from-indigo-900 to-slate-950 text-white rounded-2xl p-6 sm:p-8 shadow-lg space-y-4">
        <h3 className="text-xl font-bold tracking-tight flex items-center space-x-2 text-indigo-200">
          <Sparkles className="w-5 h-5 text-cyan-400" />
          <span>The Collaborative &quot;Middle Path&quot;: Brain as Stained Glass</span>
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-4xl">
          As the thesis beautifully concludes: <em>&quot;The most intriguing path forward lies not in choosing one theory over the other, but in considering the possibility that both perspectives hold partial truths. Just as a stained-glass window colors the sunlight streaming through it, the brain might filter, structure, and personalize a broader field of consciousness into something uniquely human.&quot;</em>
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-3 border-t border-indigo-800/80 text-xs text-slate-300">
          <div>
            <strong className="text-white block mb-1">1. The Sun (The Field)</strong>
            Non-local quantum informational substrate spanning space and time.
          </div>
          <div>
            <strong className="text-white block mb-1">2. Stained Glass (The Synapse)</strong>
            Quantum coherent molecular gates (SNARE, Posner clusters, tubulin) filtering the light.
          </div>
          <div>
            <strong className="text-white block mb-1">3. The Floor Pattern (IQ / Mind)</strong>
            The structured, individualized human intelligence and conscious experience.
          </div>
        </div>
      </div>
    </div>
  );
};
