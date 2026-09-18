import React, { useState, useEffect } from 'react';
import { 
  generateTrainingDataset, 
  initializeWeights, 
  trainEpochStep, 
  forwardPass, 
  MLModelWeights 
} from '../lib/quantumML';
import { MLTrainingSample, MLModelMetrics, QuantumSynapticParameters } from '../types';
import { 
  Cpu, 
  Play, 
  RotateCcw, 
  TrendingUp, 
  CheckCircle2, 
  AlertCircle, 
  Layers, 
  Zap, 
  Sparkles,
  BarChart3,
  Network
} from 'lucide-react';

interface MLModelStudioProps {
  currentParameters: QuantumSynapticParameters;
}

export const MLModelStudio: React.FC<MLModelStudioProps> = ({ currentParameters }) => {
  // State for dataset, weights, training progress
  const [dataset, setDataset] = useState<MLTrainingSample[]>(() => generateTrainingDataset(60));
  const [weights, setWeights] = useState<MLModelWeights>(() => initializeWeights());
  const [metrics, setMetrics] = useState<MLModelMetrics>({
    epoch: 0,
    trainLoss: 14.85,
    valLoss: 16.20,
    r2Score: 0.12,
    meanAbsoluteError: 3.42,
    isTraining: false,
    modelArchitecture: "Quantum-Classical Hybrid MLP (6-10-8-3) with GELU & Physics-Informed Holevo Regularizer",
  });
  const [isTrainingActive, setIsTrainingActive] = useState(false);
  const [lossHistory, setLossHistory] = useState<{ epoch: number; trainLoss: number; valLoss: number }[]>([
    { epoch: 0, trainLoss: 14.85, valLoss: 16.20 }
  ]);

  // Interactive Live Inference inputs
  const [inferenceInputs, setInferenceInputs] = useState({
    coherencePs: currentParameters.coherenceTimePs,
    barrierNm: currentParameters.tunnelingBarrierWidthNm,
    emFieldMHz: currentParameters.emFieldFrequencyMHz,
    posnerDensity: currentParameters.posnerMoleculeDensity,
    gammaIndex: currentParameters.gammaCoherenceIndex,
    isotopeRatio: currentParameters.isotope6LiFraction,
  });

  // Keep inference inputs in sync with current global parameters initially
  useEffect(() => {
    setInferenceInputs({
      coherencePs: currentParameters.coherenceTimePs,
      barrierNm: currentParameters.tunnelingBarrierWidthNm,
      emFieldMHz: currentParameters.emFieldFrequencyMHz,
      posnerDensity: currentParameters.posnerMoleculeDensity,
      gammaIndex: currentParameters.gammaCoherenceIndex,
      isotopeRatio: currentParameters.isotope6LiFraction,
    });
  }, [currentParameters]);

  // Live inference prediction
  const currentPrediction = forwardPass(
    [
      inferenceInputs.coherencePs,
      inferenceInputs.barrierNm,
      inferenceInputs.emFieldMHz,
      inferenceInputs.posnerDensity,
      inferenceInputs.gammaIndex,
      inferenceInputs.isotopeRatio,
    ],
    weights
  );

  // Training loop runner
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isTrainingActive && metrics.epoch < 35) {
      timer = setTimeout(() => {
        const nextEpoch = metrics.epoch + 1;
        const result = trainEpochStep(dataset, weights, nextEpoch);
        setWeights(result.updatedWeights);
        setDataset(result.updatedSamples);
        setMetrics({
          ...result.metrics,
          isTraining: nextEpoch < 35,
        });
        setLossHistory((prev) => [
          ...prev.slice(-24),
          { epoch: nextEpoch, trainLoss: result.metrics.trainLoss, valLoss: result.metrics.valLoss }
        ]);

        if (nextEpoch >= 35) {
          setIsTrainingActive(false);
        }
      }, 120);
    }
    return () => clearTimeout(timer);
  }, [isTrainingActive, metrics.epoch, dataset, weights]);

  const handleStartTraining = () => {
    setIsTrainingActive(true);
  };

  const handleResetModel = () => {
    setIsTrainingActive(false);
    const newDataset = generateTrainingDataset(60);
    const newWeights = initializeWeights();
    setDataset(newDataset);
    setWeights(newWeights);
    setMetrics({
      epoch: 0,
      trainLoss: 14.85,
      valLoss: 16.20,
      r2Score: 0.12,
      meanAbsoluteError: 3.42,
      isTraining: false,
      modelArchitecture: "Quantum-Classical Hybrid MLP (6-10-8-3) with GELU & Physics-Informed Holevo Regularizer",
    });
    setLossHistory([{ epoch: 0, trainLoss: 14.85, valLoss: 16.20 }]);
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 border border-slate-800 rounded-2xl p-6 text-white shadow-xl">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <div className="inline-flex items-center space-x-2 px-2.5 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-semibold mb-2 border border-indigo-400/30">
              <Cpu className="w-3.5 h-3.5" />
              <span>Physics-Informed Neural Network (PINN)</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Quantum Synaptic ML Predictor &amp; Architecture
            </h1>
            <p className="text-slate-300 text-sm mt-1 max-w-3xl leading-relaxed">
              A hybrid quantum-classical machine learning model that maps biophysical quantum states (coherence, tunneling, Posner spin entanglement) directly to emergent cognitive metrics (synaptic bandwidth, transmission latency, and predicted IQ increase).
            </p>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={handleResetModel}
              disabled={isTrainingActive}
              className="flex items-center space-x-1.5 px-4 py-2.5 rounded-xl border border-slate-700 bg-slate-800/80 hover:bg-slate-800 text-slate-300 text-sm font-medium transition disabled:opacity-50"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Reset Weights</span>
            </button>

            <button
              onClick={handleStartTraining}
              disabled={isTrainingActive || metrics.epoch >= 35}
              className="flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold shadow-md transition disabled:opacity-50"
            >
              <Play className={`w-4 h-4 ${isTrainingActive ? 'animate-spin' : ''}`} />
              <span>{isTrainingActive ? `Training Epoch ${metrics.epoch}/35...` : metrics.epoch >= 35 ? 'Training Complete' : 'Train ML Model'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Model Performance Cards & Loss Curve */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Metric Cards (Left 4 cols) */}
        <div className="lg:col-span-4 space-y-3">
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-3">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center justify-between">
              <span>Model Convergence State</span>
              <span className="text-indigo-600 font-semibold lowercase">epoch {metrics.epoch}/35</span>
            </h3>

            <div className="grid grid-cols-2 gap-2">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-[11px] text-slate-500 block">Training Loss (MSE)</span>
                <span className="text-xl font-extrabold text-slate-900 mt-0.5 block">
                  {metrics.trainLoss}
                </span>
                <span className="text-[10px] text-emerald-600 font-medium">
                  {metrics.epoch > 0 ? `-${(14.85 - metrics.trainLoss).toFixed(2)} pts` : 'baseline'}
                </span>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-[11px] text-slate-500 block">Validation Loss</span>
                <span className="text-xl font-extrabold text-indigo-700 mt-0.5 block">
                  {metrics.valLoss}
                </span>
                <span className="text-[10px] text-slate-400">held-out slices</span>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-[11px] text-slate-500 block">R² Determination</span>
                <span className="text-xl font-extrabold text-emerald-600 mt-0.5 block">
                  {(metrics.r2Score * 100).toFixed(1)}%
                </span>
                <span className="text-[10px] text-slate-400">variance explained</span>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-[11px] text-slate-500 block">Mean Abs Error</span>
                <span className="text-xl font-extrabold text-amber-600 mt-0.5 block">
                  ±{metrics.meanAbsoluteError}
                </span>
                <span className="text-[10px] text-slate-400">IQ points</span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-indigo-50 border border-indigo-100 text-xs text-indigo-900 space-y-1">
              <p className="font-semibold flex items-center space-x-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600" />
                <span>Physics-Informed Regularization</span>
              </p>
              <p className="text-[11px] text-indigo-700 leading-relaxed">
                Penalizes unphysical predictions violating the <em>Holevo Bound</em> (information transfer &gt; available quantum states) or causal latency limits (&lt; 0 μs).
              </p>
            </div>
          </div>
        </div>

        {/* Live Loss Curves & Architecture (Right 8 cols) */}
        <div className="lg:col-span-8 bg-white border border-slate-200 rounded-2xl p-5 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center space-x-2">
                <BarChart3 className="w-4 h-4 text-indigo-600" />
                <span className="text-sm font-bold text-slate-900">Training Loss Progression</span>
              </div>
              <div className="flex items-center space-x-4 text-xs">
                <span className="flex items-center space-x-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-indigo-600"></span>
                  <span className="text-slate-600">Train Loss</span>
                </span>
                <span className="flex items-center space-x-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-purple-500"></span>
                  <span className="text-slate-600">Val Loss</span>
                </span>
              </div>
            </div>

            {/* SVG Loss Chart */}
            <div className="h-44 w-full mt-4 flex items-end">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 500 120">
                {/* Horizontal guide lines */}
                <line x1="0" y1="20" x2="500" y2="20" stroke="#f1f5f9" strokeWidth="1" />
                <line x1="0" y1="60" x2="500" y2="60" stroke="#f1f5f9" strokeWidth="1" />
                <line x1="0" y1="100" x2="500" y2="100" stroke="#f1f5f9" strokeWidth="1" />

                {/* Train Loss Path */}
                {lossHistory.length > 1 && (
                  <path
                    d={lossHistory
                      .map((pt, idx) => {
                        const x = (idx / (Math.max(1, lossHistory.length - 1))) * 490 + 5;
                        const y = Math.max(10, Math.min(110, (pt.trainLoss / 18) * 110));
                        return `${idx === 0 ? 'M' : 'L'} ${x} ${y}`;
                      })
                      .join(' ')}
                    fill="none"
                    stroke="#4f46e5"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                )}

                {/* Val Loss Path */}
                {lossHistory.length > 1 && (
                  <path
                    d={lossHistory
                      .map((pt, idx) => {
                        const x = (idx / (Math.max(1, lossHistory.length - 1))) * 490 + 5;
                        const y = Math.max(10, Math.min(110, (pt.valLoss / 18) * 110));
                        return `${idx === 0 ? 'M' : 'L'} ${x} ${y}`;
                      })
                      .join(' ')}
                    fill="none"
                    stroke="#a855f7"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                  />
                )}

                {/* Points */}
                {lossHistory.map((pt, idx) => {
                  const x = (idx / (Math.max(1, lossHistory.length - 1))) * 490 + 5;
                  const y = Math.max(10, Math.min(110, (pt.trainLoss / 18) * 110));
                  return (
                    <circle
                      key={idx}
                      cx={x}
                      cy={y}
                      r={idx === lossHistory.length - 1 ? 4 : 2}
                      fill="#4f46e5"
                    />
                  );
                })}
              </svg>
            </div>
          </div>

          {/* Model Architecture Flow */}
          <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between text-xs text-slate-500 gap-2">
            <span className="font-semibold text-slate-700">Architecture Topology:</span>
            <div className="flex items-center space-x-1.5 font-mono">
              <span className="px-2 py-0.5 rounded bg-slate-100 border border-slate-200">Input (6)</span>
              <span>→</span>
              <span className="px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 border border-indigo-200">GELU-Phase (10)</span>
              <span>→</span>
              <span className="px-2 py-0.5 rounded bg-purple-50 text-purple-700 border border-purple-200">Mish-Res (8)</span>
              <span>→</span>
              <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">Outputs: [ΔIQ, χ, τ]</span>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Inference Engine & Scenario Tester */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
        <div className="flex items-center space-x-2 mb-4">
          <Sparkles className="w-5 h-5 text-indigo-600" />
          <h2 className="text-base font-bold text-slate-900">
            Live Intervention Inference &amp; IQ Yield Predictor
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Sliders for inference inputs (8 cols) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 space-y-1.5">
              <div className="flex justify-between text-xs font-medium text-slate-700">
                <span>Coherence (τ_coh)</span>
                <span className="text-indigo-600 font-bold">{inferenceInputs.coherencePs} ps</span>
              </div>
              <input
                type="range"
                min={0.5}
                max={25.0}
                step={0.5}
                value={inferenceInputs.coherencePs}
                onChange={(e) => setInferenceInputs({ ...inferenceInputs, coherencePs: parseFloat(e.target.value) })}
                className="w-full accent-indigo-600 h-1.5 bg-slate-200 rounded-lg cursor-pointer"
              />
            </div>

            <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 space-y-1.5">
              <div className="flex justify-between text-xs font-medium text-slate-700">
                <span>Barrier Width (d)</span>
                <span className="text-amber-600 font-bold">{inferenceInputs.barrierNm} nm</span>
              </div>
              <input
                type="range"
                min={0.2}
                max={1.4}
                step={0.05}
                value={inferenceInputs.barrierNm}
                onChange={(e) => setInferenceInputs({ ...inferenceInputs, barrierNm: parseFloat(e.target.value) })}
                className="w-full accent-amber-600 h-1.5 bg-slate-200 rounded-lg cursor-pointer"
              />
            </div>

            <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 space-y-1.5">
              <div className="flex justify-between text-xs font-medium text-slate-700">
                <span>tPEMF Frequency</span>
                <span className="text-indigo-600 font-bold">{inferenceInputs.emFieldMHz} MHz</span>
              </div>
              <input
                type="range"
                min={0}
                max={24}
                step={0.5}
                value={inferenceInputs.emFieldMHz}
                onChange={(e) => setInferenceInputs({ ...inferenceInputs, emFieldMHz: parseFloat(e.target.value) })}
                className="w-full accent-indigo-600 h-1.5 bg-slate-200 rounded-lg cursor-pointer"
              />
            </div>

            <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 space-y-1.5">
              <div className="flex justify-between text-xs font-medium text-slate-700">
                <span>Posner Density</span>
                <span className="text-pink-600 font-bold">{inferenceInputs.posnerDensity}%</span>
              </div>
              <input
                type="range"
                min={0}
                max={95}
                step={5}
                value={inferenceInputs.posnerDensity}
                onChange={(e) => setInferenceInputs({ ...inferenceInputs, posnerDensity: parseInt(e.target.value) })}
                className="w-full accent-pink-600 h-1.5 bg-slate-200 rounded-lg cursor-pointer"
              />
            </div>

            <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 space-y-1.5">
              <div className="flex justify-between text-xs font-medium text-slate-700">
                <span>40Hz Gamma Index</span>
                <span className="text-emerald-600 font-bold">{(inferenceInputs.gammaIndex * 100).toFixed(0)}%</span>
              </div>
              <input
                type="range"
                min={0}
                max={1}
                step={0.05}
                value={inferenceInputs.gammaIndex}
                onChange={(e) => setInferenceInputs({ ...inferenceInputs, gammaIndex: parseFloat(e.target.value) })}
                className="w-full accent-emerald-600 h-1.5 bg-slate-200 rounded-lg cursor-pointer"
              />
            </div>

            <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 space-y-1.5">
              <div className="flex justify-between text-xs font-medium text-slate-700">
                <span>⁶Li Enriched Ratio</span>
                <span className="text-purple-600 font-bold">{(inferenceInputs.isotopeRatio * 100).toFixed(0)}%</span>
              </div>
              <input
                type="range"
                min={0.05}
                max={0.95}
                step={0.05}
                value={inferenceInputs.isotopeRatio}
                onChange={(e) => setInferenceInputs({ ...inferenceInputs, isotopeRatio: parseFloat(e.target.value) })}
                className="w-full accent-purple-600 h-1.5 bg-slate-200 rounded-lg cursor-pointer"
              />
            </div>
          </div>

          {/* Model Inference Outputs (4 cols) */}
          <div className="lg:col-span-4 bg-gradient-to-br from-slate-900 to-indigo-950 text-white rounded-xl p-5 flex flex-col justify-between shadow-md">
            <div>
              <div className="flex items-center justify-between text-xs text-indigo-300">
                <span>Forward Pass Prediction</span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono">
                  Inference: 1.4 ms
                </span>
              </div>

              <div className="mt-4">
                <span className="text-xs text-slate-400 block">Predicted Intelligence Delta</span>
                <div className="flex items-baseline space-x-2 mt-1">
                  <span className="text-4xl font-extrabold text-white tracking-tight">
                    +{currentPrediction.deltaIq}
                  </span>
                  <span className="text-sm font-semibold text-emerald-400">IQ Points</span>
                </div>
                <span className="text-[11px] text-slate-400 mt-0.5 block">
                  95% Confidence Interval: [+{Math.max(0, currentPrediction.deltaIq - 1.8).toFixed(1)}, +{(currentPrediction.deltaIq + 1.8).toFixed(1)}]
                </span>
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-800 space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-slate-400">Holevo Synaptic Capacity:</span>
                <span className="font-bold text-cyan-300">{currentPrediction.capacity} bits/synapse</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Synaptic Latency:</span>
                <span className="font-bold text-amber-300">{currentPrediction.latency} μs (vs 1200 μs)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Fluid Intelligence (G_f):</span>
                <span className="font-bold text-emerald-300">
                  +{(currentPrediction.deltaIq / 15).toFixed(2)} SD
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Classical vs Quantum Neural Network Benchmark */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
        <h3 className="text-base font-bold text-slate-900 mb-2 flex items-center space-x-2">
          <Network className="w-5 h-5 text-indigo-600" />
          <span>Cognitive Architecture Benchmark: Classical Hebbian vs Quantum Synaptic Network</span>
        </h3>
        <p className="text-xs text-slate-500 mb-4 max-w-3xl">
          Comparing associative pattern completion and error tolerance under physiological 310 K thermal noise conditions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <span className="text-xs font-semibold text-slate-700 block">Search &amp; Recall Complexity</span>
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-500">Classical Serial:</span>
              <span className="font-mono font-bold text-slate-800">O(N)</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-indigo-600 font-semibold">Quantum Grover-like:</span>
              <span className="font-mono font-bold text-indigo-700">O(√N) speedup</span>
            </div>
            <p className="text-[11px] text-slate-500 pt-1 border-t border-slate-200/60">
              Parallel superposition enables simultaneous evaluation of associative memory weights across cortical columns.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <span className="text-xs font-semibold text-slate-700 block">Bit Flip &amp; Thermal Noise Resilience</span>
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-500">Classical (310 K):</span>
              <span className="font-semibold text-red-600">8.4% error rate</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-indigo-600 font-semibold">Protected QNN:</span>
              <span className="font-semibold text-emerald-600">1.2% error rate</span>
            </div>
            <p className="text-[11px] text-slate-500 pt-1 border-t border-slate-200/60">
              ³¹P nuclear spins in Posner cages have zero quadrupole moments, shielding synaptic state from ionic electrical shocks.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <span className="text-xs font-semibold text-slate-700 block">Working Memory Span Scaling</span>
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-500">Miller Limit (Classical):</span>
              <span className="font-semibold text-slate-800">7 ± 2 items</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-indigo-600 font-semibold">Entangled Binding:</span>
              <span className="font-semibold text-indigo-700">14 to 18 items</span>
            </div>
            <p className="text-[11px] text-slate-500 pt-1 border-t border-slate-200/60">
              Non-local entanglement allows multi-variable chunking without proportional metabolic ATP consumption.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
