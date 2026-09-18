import React, { useState, useEffect, useRef } from 'react';
import { QuantumSynapticParameters, QuantumSimulationMetrics } from '../types';
import { 
  Zap, 
  Atom, 
  Activity, 
  ShieldCheck, 
  Gauge, 
  RefreshCw, 
  ArrowRight,
  TrendingUp,
  Layers,
  Sparkles
} from 'lucide-react';

interface QuantumSynapseCanvasProps {
  parameters: QuantumSynapticParameters;
  setParameters: React.Dispatch<React.SetStateAction<QuantumSynapticParameters>>;
  metrics: QuantumSimulationMetrics;
}

export const QuantumSynapseCanvas: React.FC<QuantumSynapseCanvasProps> = ({
  parameters,
  setParameters,
  metrics,
}) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [selectedElement, setSelectedElement] = useState<string>('snare_superposition');
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Handle parameter changes
  const updateParam = (key: keyof QuantumSynapticParameters, value: number) => {
    setParameters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  // Canvas animation loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const render = () => {
      time += 0.035;
      const width = canvas.width;
      const height = canvas.height;

      // Clear canvas with subtle gradient
      ctx.fillStyle = '#0f172a'; // Deep slate background
      ctx.fillRect(0, 0, width, height);

      // Draw subtle grid
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.04)';
      ctx.lineWidth = 1;
      for (let x = 0; x < width; x += 30) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += 30) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Presynaptic Membrane Boundary (Top)
      const preY = 160;
      ctx.strokeStyle = '#38bdf8';
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(40, preY);
      ctx.bezierCurveTo(width * 0.3, preY - 15, width * 0.7, preY + 15, width - 40, preY);
      ctx.stroke();

      // Presynaptic Terminal Region Label
      ctx.fillStyle = '#94a3b8';
      ctx.font = '11px sans-serif';
      ctx.fillText('PRESYNAPTIC TERMINAL (AXON BOUTON)', 50, 40);

      // Microtubule Scaffolding (Filaments)
      ctx.strokeStyle = 'rgba(129, 140, 248, 0.35)';
      ctx.lineWidth = 3;
      for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        ctx.moveTo(50, 60 + i * 20);
        ctx.lineTo(width - 50, 60 + i * 20);
        ctx.stroke();

        // Tubulin Dimers
        for (let x = 70; x < width - 70; x += 35) {
          const phase = Math.sin(time * 2 + x * 0.05 + i);
          ctx.fillStyle = phase > 0 ? '#818cf8' : '#6366f1';
          ctx.beginPath();
          ctx.arc(x, 60 + i * 20, 5, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Voltage-Gated Calcium Channels (Left & Right)
      const channelX = 140;
      ctx.fillStyle = '#f59e0b';
      ctx.fillRect(channelX - 14, preY - 24, 28, 48);
      ctx.fillStyle = '#fbbf24';
      ctx.font = '10px sans-serif';
      ctx.fillText('VGCC (Ca²⁺)', channelX - 28, preY - 32);

      // Quantum Tunneling Wavepacket across Channel Pore
      const barrierWidthPx = parameters.tunnelingBarrierWidthNm * 20;
      ctx.fillStyle = 'rgba(245, 158, 11, 0.18)';
      ctx.fillRect(channelX - barrierWidthPx / 2, preY - 12, barrierWidthPx, 24);

      // Tunneling Ca2+ Wavepacket
      const waveX = channelX - 25 + ((time * 40) % 50);
      const probAmp = metrics.tunnelingProbability;
      ctx.strokeStyle = `rgba(251, 191, 36, ${probAmp})`;
      ctx.lineWidth = 2;
      ctx.beginPath();
      for (let dx = -15; dx <= 15; dx++) {
        const dy = Math.sin((dx + time * 10) * 0.6) * 6 * probAmp;
        if (dx === -15) ctx.moveTo(waveX + dx, preY + dy);
        else ctx.lineTo(waveX + dx, preY + dy);
      }
      ctx.stroke();

      // Synaptic Vesicles in Superposition |0> + |1>
      const vesiclePositions = [
        { x: width * 0.42, y: 115 },
        { x: width * 0.58, y: 125 },
        { x: width * 0.74, y: 105 },
      ];

      vesiclePositions.forEach((v, idx) => {
        const coherenceGlow = parameters.coherenceTimePs / 25;
        // Superposition ghost shadow (|0> state)
        ctx.fillStyle = `rgba(56, 189, 248, ${0.15 + coherenceGlow * 0.15})`;
        ctx.beginPath();
        const ghostOffset = Math.sin(time * 3 + idx) * 8 * coherenceGlow;
        ctx.arc(v.x + ghostOffset, v.y, 22, 0, Math.PI * 2);
        ctx.fill();

        // Primary Vesicle Membrane (|1> state)
        const grad = ctx.createRadialGradient(v.x, v.y, 4, v.x, v.y, 22);
        grad.addColorStop(0, '#38bdf8');
        grad.addColorStop(0.7, '#0284c7');
        grad.addColorStop(1, '#0369a1');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(v.x, v.y, 20, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = '#bae6fd';
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // SNARE complex helical coils pinning vesicle to membrane
        ctx.strokeStyle = '#a855f7';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(v.x - 6, v.y + 18);
        ctx.lineTo(v.x - 8, preY);
        ctx.moveTo(v.x + 6, v.y + 18);
        ctx.lineTo(v.x + 8, preY);
        ctx.stroke();

        // Superposition state label
        ctx.fillStyle = '#e0f2fe';
        ctx.font = '9px monospace';
        ctx.fillText('α|0⟩+β|1⟩', v.x - 18, v.y + 4);
      });

      // Synaptic Cleft (Middle Zone, ~20 nm)
      const postY = 280;
      ctx.fillStyle = 'rgba(15, 23, 42, 0.6)';
      ctx.fillRect(40, preY + 4, width - 80, postY - preY - 8);

      // Cleft label
      ctx.fillStyle = '#64748b';
      ctx.font = '10px sans-serif';
      ctx.fillText('SYNAPTIC CLEFT (~20 nm) & ORDERED HYDRATION CLATHRATE LATTICE', width * 0.28, preY + 28);

      // Posner Molecules (Ca9(PO4)6) Entangled Pairs
      const posnerCount = Math.floor(parameters.posnerMoleculeDensity / 15) + 3;
      for (let p = 0; p < posnerCount; p++) {
        const px = 100 + (p * ((width - 200) / posnerCount)) + Math.sin(time + p) * 10;
        const py = preY + 40 + (p % 2) * 35 + Math.cos(time * 1.5 + p) * 8;

        // Entanglement connection line between pairs
        if (p % 2 === 0 && p + 1 < posnerCount) {
          const nextPx = 100 + ((p + 1) * ((width - 200) / posnerCount)) + Math.sin(time + p + 1) * 10;
          const nextPy = preY + 40 + ((p + 1) % 2) * 35 + Math.cos(time * 1.5 + p + 1) * 8;

          ctx.strokeStyle = `rgba(236, 72, 153, ${metrics.entanglementWitnessNegativity * 0.8})`;
          ctx.lineWidth = 1.5;
          ctx.setLineDash([4, 4]);
          ctx.beginPath();
          ctx.moveTo(px, py);
          ctx.lineTo(nextPx, nextPy);
          ctx.stroke();
          ctx.setLineDash([]);
        }

        // Posner Cluster Sphere
        ctx.fillStyle = '#ec4899';
        ctx.beginPath();
        ctx.arc(px, py, 9, 0, Math.PI * 2);
        ctx.fill();

        // 31-P Nuclear Spin Vector (Spin-1/2)
        const spinAngle = time * 4 + p * 1.8;
        ctx.strokeStyle = '#fdf2f8';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(px, py);
        ctx.lineTo(px + Math.cos(spinAngle) * 11, py + Math.sin(spinAngle) * 11);
        ctx.stroke();
      }

      // Neurotransmitter Molecules Exocytosed into Cleft
      const neurotransmitters = 22;
      for (let n = 0; n < neurotransmitters; n++) {
        const nx = width * 0.35 + (n * 16) % (width * 0.45) + Math.sin(time * 2 + n) * 8;
        const ny = preY + 25 + ((time * 30 + n * 18) % 85);
        ctx.fillStyle = '#22c55e';
        ctx.beginPath();
        ctx.arc(nx, ny, 3.5, 0, Math.PI * 2);
        ctx.fill();
      }

      // Postsynaptic Membrane (Bottom)
      ctx.strokeStyle = '#10b981';
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(40, postY);
      ctx.bezierCurveTo(width * 0.3, postY + 12, width * 0.7, postY - 12, width - 40, postY);
      ctx.stroke();

      // Postsynaptic Receptors (AMPA & NMDA)
      for (let r = 0; r < 8; r++) {
        const rx = 120 + r * ((width - 240) / 7);
        ctx.fillStyle = '#059669';
        ctx.fillRect(rx - 10, postY - 8, 20, 24);
        ctx.fillStyle = '#34d399';
        ctx.fillRect(rx - 6, postY - 14, 12, 6);
      }

      // Postsynaptic Density & Dendritic Spine
      ctx.fillStyle = '#94a3b8';
      ctx.font = '11px sans-serif';
      ctx.fillText('POSTSYNAPTIC DENDRITIC SPINE (RECEIVER TUNING ANTENNA)', 50, postY + 45);

      if (isPlaying) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isPlaying, parameters, metrics]);

  return (
    <div className="space-y-6">
      {/* Top Banner / Concept Hook */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 border border-slate-800 rounded-2xl p-6 text-white shadow-xl">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <div className="inline-flex items-center space-x-2 px-2.5 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-semibold mb-2 border border-indigo-400/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Biophysical Quantum Simulation</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Quantum Synaptic Dynamics &amp; Signal Processing
            </h1>
            <p className="text-slate-300 text-sm mt-1 max-w-3xl leading-relaxed">
              Explore how <strong>calcium ion tunneling</strong>, <strong>SNARE conformational superposition</strong>, and <strong>Posner molecule nuclear spin entanglement</strong> overcome classical diffusion bottlenecks to exponentially accelerate synaptic information throughput.
            </p>
          </div>

          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className={`flex items-center justify-center space-x-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition shadow-md self-start lg:self-center ${
              isPlaying 
                ? 'bg-amber-500 hover:bg-amber-600 text-slate-950'
                : 'bg-indigo-600 hover:bg-indigo-700 text-white'
            }`}
          >
            <RefreshCw className={`w-4 h-4 ${isPlaying ? 'animate-spin' : ''}`} />
            <span>{isPlaying ? 'Pause Dynamic Flux' : 'Resume Simulation'}</span>
          </button>
        </div>
      </div>

      {/* Main Grid: Interactive Canvas + Live Real-Time Dashboard */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: 2D Interactive Quantum Canvas */}
        <div className="lg:col-span-8 bg-slate-900 border border-slate-800 rounded-2xl p-4 shadow-lg flex flex-col">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <div className="flex items-center space-x-2">
              <Atom className="w-5 h-5 text-cyan-400 animate-pulse" />
              <span className="text-sm font-semibold text-slate-200">
                Active Biological Junction Model (T = {parameters.temperatureKelvin} K)
              </span>
            </div>
            <div className="flex items-center space-x-3 text-xs text-slate-400">
              <span className="flex items-center space-x-1">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400"></span>
                <span>Vesicle |0⟩+|1⟩</span>
              </span>
              <span className="flex items-center space-x-1">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                <span>Ca²⁺ Tunnel</span>
              </span>
              <span className="flex items-center space-x-1">
                <span className="w-2.5 h-2.5 rounded-full bg-pink-500"></span>
                <span>Posner Spin</span>
              </span>
            </div>
          </div>

          {/* Canvas Viewport */}
          <div className="relative mt-3 rounded-xl overflow-hidden bg-slate-950 border border-slate-800/80">
            <canvas
              ref={canvasRef}
              width={780}
              height={360}
              className="w-full h-auto object-cover block"
            />
          </div>

          {/* Interactive Inspection Selector */}
          <div className="mt-4 pt-3 border-t border-slate-800 grid grid-cols-3 gap-2">
            {[
              { id: 'snare_superposition', title: 'SNARE Superposition', desc: 'Vesicle fusion multi-pathway sampling' },
              { id: 'ca_tunneling', title: 'Ion Channel Tunneling', desc: 'WKB transmission through Ca²⁺ pore' },
              { id: 'posner_entanglement', title: 'Posner Cluster Entanglement', desc: '³¹P nuclear spin non-local synchrony' },
            ].map((el) => (
              <button
                key={el.id}
                onClick={() => setSelectedElement(el.id)}
                className={`text-left p-2.5 rounded-xl border text-xs transition ${
                  selectedElement === el.id
                    ? 'bg-indigo-900/40 border-indigo-500 text-indigo-200'
                    : 'bg-slate-800/50 border-slate-800 text-slate-400 hover:bg-slate-800'
                }`}
              >
                <p className="font-semibold">{el.title}</p>
                <p className="text-[10px] text-slate-400 line-clamp-1 mt-0.5">{el.desc}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Right: Key Physical Metrics Card */}
        <div className="lg:col-span-4 space-y-4">
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center space-x-2 mb-4">
              <Activity className="w-4 h-4 text-indigo-600" />
              <span>Synaptic Quantum Performance</span>
            </h3>

            <div className="space-y-3.5">
              {/* Transmission Delay */}
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-500 block">Transmission Latency</span>
                  <div className="flex items-baseline space-x-1.5 mt-0.5">
                    <span className="text-xl font-extrabold text-slate-900">
                      {metrics.synapticTransmissionDelayUs} μs
                    </span>
                    <span className="text-xs text-emerald-600 font-semibold">
                      ({metrics.quantumSpeedupFactor}x faster)
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[11px] text-slate-400 block line-through">
                    1200 μs classical
                  </span>
                  <span className="text-xs font-semibold text-indigo-600">
                    -{1200 - metrics.synapticTransmissionDelayUs} μs jitter
                  </span>
                </div>
              </div>

              {/* Tunneling Probability & Entanglement */}
              <div className="grid grid-cols-2 gap-2">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="text-[11px] text-slate-500 block">Tunneling Prob (P)</span>
                  <span className="text-lg font-bold text-amber-600 mt-0.5 block">
                    {(metrics.tunnelingProbability * 100).toFixed(1)}%
                  </span>
                  <span className="text-[10px] text-slate-400">WKB transmission</span>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="text-[11px] text-slate-500 block">Entanglement Neg</span>
                  <span className="text-lg font-bold text-pink-600 mt-0.5 block">
                    {metrics.entanglementWitnessNegativity}
                  </span>
                  <span className="text-[10px] text-slate-400">Witness &gt; 0 = quantum</span>
                </div>
              </div>

              {/* Holevo Channel Capacity */}
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-500">Holevo Channel Capacity</span>
                  <span className="font-bold text-slate-900">
                    {metrics.holevoChannelCapacityBitsPerSynapse} bits/synapse
                  </span>
                </div>
                <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden mt-2">
                  <div
                    className="bg-gradient-to-r from-cyan-500 to-indigo-600 h-full rounded-full transition-all duration-300"
                    style={{ width: `${Math.min(100, (metrics.holevoChannelCapacityBitsPerSynapse / 15) * 100)}%` }}
                  />
                </div>
                <span className="text-[10px] text-slate-400 block mt-1">
                  vs {metrics.classicalShannonCapacityBits} bits/synapse classical Shannon limit
                </span>
              </div>

              {/* Predicted IQ Impact Box */}
              <div className="p-4 rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-200/80">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-indigo-900 flex items-center space-x-1.5">
                    <TrendingUp className="w-4 h-4 text-indigo-600" />
                    <span>Predicted Cognitive Impact</span>
                  </span>
                  <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-indigo-600 text-white">
                    +{metrics.predictedDeltaIQ} IQ pts
                  </span>
                </div>
                <div className="mt-2.5 text-xs text-indigo-950 space-y-1">
                  <p className="flex justify-between">
                    <span>Fluid Reasoning (G_f):</span>
                    <span className="font-bold">+{metrics.fluidIntelligenceGainGf} SD</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Working Memory Span:</span>
                    <span className="font-bold">+{metrics.workingMemoryExpansionPercent}%</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Receiver Tuning Fidelity:</span>
                    <span className="font-bold">{metrics.receiverTuningFidelity}%</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Biophysical Parameter Sliders */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-base font-bold text-slate-900">
              Synaptic Biophysical Parameters &amp; Quantum Controls
            </h2>
            <p className="text-xs text-slate-500">
              Adjust variables to simulate biological interventions (tPEMF, isotopic nutrition, 40Hz biofeedback, hydration shielding).
            </p>
          </div>
          <button
            onClick={() => {
              setParameters({
                coherenceTimePs: 4.8,
                temperatureKelvin: 310.15,
                tunnelingBarrierWidthNm: 0.65,
                posnerMoleculeDensity: 35,
                emFieldStrengthMicroT: 45,
                emFieldFrequencyMHz: 8.2,
                gammaCoherenceIndex: 0.42,
                hydrationShieldingEfficiency: 0.55,
                isotope6LiFraction: 0.075,
              });
            }}
            className="text-xs text-indigo-600 hover:text-indigo-800 font-semibold underline"
          >
            Reset to Baseline
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Slider 1: Coherence Time */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="font-medium text-slate-700">Coherence Lifetime (τ_coh)</span>
              <span className="font-bold text-indigo-600">{parameters.coherenceTimePs} ps</span>
            </div>
            <input
              type="range"
              min={0.5}
              max={25.0}
              step={0.1}
              value={parameters.coherenceTimePs}
              onChange={(e) => updateParam('coherenceTimePs', parseFloat(e.target.value))}
              className="w-full accent-indigo-600 h-1.5 bg-slate-200 rounded-lg cursor-pointer"
            />
            <span className="text-[10px] text-slate-400 block">
              Protected by hydrophobic tubulin pockets and hydration clathrates
            </span>
          </div>

          {/* Slider 2: Tunneling Barrier Width */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="font-medium text-slate-700">Ion Pore Barrier Width (d)</span>
              <span className="font-bold text-amber-600">{parameters.tunnelingBarrierWidthNm} nm</span>
            </div>
            <input
              type="range"
              min={0.2}
              max={1.4}
              step={0.02}
              value={parameters.tunnelingBarrierWidthNm}
              onChange={(e) => updateParam('tunnelingBarrierWidthNm', parseFloat(e.target.value))}
              className="w-full accent-amber-600 h-1.5 bg-slate-200 rounded-lg cursor-pointer"
            />
            <span className="text-[10px] text-slate-400 block">
              Ca²⁺ selectivity filter width; thinner width exponentially raises tunneling
            </span>
          </div>

          {/* Slider 3: Posner Molecule Density */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="font-medium text-slate-700">Posner Cluster Density</span>
              <span className="font-bold text-pink-600">{parameters.posnerMoleculeDensity}%</span>
            </div>
            <input
              type="range"
              min={0}
              max={100}
              step={1}
              value={parameters.posnerMoleculeDensity}
              onChange={(e) => updateParam('posnerMoleculeDensity', parseInt(e.target.value))}
              className="w-full accent-pink-600 h-1.5 bg-slate-200 rounded-lg cursor-pointer"
            />
            <span className="text-[10px] text-slate-400 block">
              Ca₉(PO₄)₆ nanoclusters carrying entangled ³¹P nuclear spin pairs
            </span>
          </div>

          {/* Slider 4: EM Field Frequency (tPEMF) */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="font-medium text-slate-700">EM Field Frequency (tPEMF)</span>
              <span className="font-bold text-indigo-600">{parameters.emFieldFrequencyMHz} MHz</span>
            </div>
            <input
              type="range"
              min={0}
              max={25}
              step={0.2}
              value={parameters.emFieldFrequencyMHz}
              onChange={(e) => updateParam('emFieldFrequencyMHz', parseFloat(e.target.value))}
              className="w-full accent-indigo-600 h-1.5 bg-slate-200 rounded-lg cursor-pointer"
            />
            <span className="text-[10px] text-slate-400 block">
              Resonates with tubulin dipole vibrational modes at ~8.2 MHz
            </span>
          </div>

          {/* Slider 5: 40Hz Gamma Phase Index */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="font-medium text-slate-700">40Hz Gamma Phase Locking</span>
              <span className="font-bold text-emerald-600">{(parameters.gammaCoherenceIndex * 100).toFixed(0)}%</span>
            </div>
            <input
              type="range"
              min={0}
              max={1}
              step={0.02}
              value={parameters.gammaCoherenceIndex}
              onChange={(e) => updateParam('gammaCoherenceIndex', parseFloat(e.target.value))}
              className="w-full accent-emerald-600 h-1.5 bg-slate-200 rounded-lg cursor-pointer"
            />
            <span className="text-[10px] text-slate-400 block">
              Biofeedback synchronization reducing electrical field gradient jitter
            </span>
          </div>

          {/* Slider 6: 6-Li Isotope Fraction */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="font-medium text-slate-700">⁶Li Isotope Fraction</span>
              <span className="font-bold text-purple-600">{(parameters.isotope6LiFraction * 100).toFixed(1)}%</span>
            </div>
            <input
              type="range"
              min={0.05}
              max={0.95}
              step={0.01}
              value={parameters.isotope6LiFraction}
              onChange={(e) => updateParam('isotope6LiFraction', parseFloat(e.target.value))}
              className="w-full accent-purple-600 h-1.5 bg-slate-200 rounded-lg cursor-pointer"
            />
            <span className="text-[10px] text-slate-400 block">
              Nuclear spin-1 isotope shielding ³¹P spins from magnetic dephasing
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
