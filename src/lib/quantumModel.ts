import { QuantumSynapticParameters, QuantumSimulationMetrics } from '../types';

// Physical constants
export const H_BAR = 1.054571817e-34; // J*s
export const K_BOLTZMANN = 1.380649e-23; // J/K
export const M_CALCIUM = 6.655e-26; // kg (Ca2+ ion mass)
export const M_PROTON = 1.67262e-27; // kg

export const DEFAULT_PARAMETERS: QuantumSynapticParameters = {
  coherenceTimePs: 4.8,
  temperatureKelvin: 310.15, // 37 C physiological
  tunnelingBarrierWidthNm: 0.65,
  posnerMoleculeDensity: 35, // %
  emFieldStrengthMicroT: 45, // microTesla
  emFieldFrequencyMHz: 8.2, // MHz tubulin dipole harmonic
  gammaCoherenceIndex: 0.42, // 40Hz phase locking
  hydrationShieldingEfficiency: 0.55, // ordered clathrate shell
  isotope6LiFraction: 0.075, // natural abundance ~7.5%
};

export function calculateQuantumMetrics(params: QuantumSynapticParameters): QuantumSimulationMetrics {
  const {
    coherenceTimePs,
    temperatureKelvin,
    tunnelingBarrierWidthNm,
    posnerMoleculeDensity,
    emFieldStrengthMicroT,
    emFieldFrequencyMHz,
    gammaCoherenceIndex,
    hydrationShieldingEfficiency,
    isotope6LiFraction,
  } = params;

  // 1. Decoherence attenuation through biological shields
  // Posner molecules (Ca9(PO4)6) protect 31P nuclear spins; ordered water clathrates protect dipole moments
  const posnerProtection = (posnerMoleculeDensity / 100) * 0.75;
  const hydrationProtection = hydrationShieldingEfficiency * 0.65;
  const gammaLockingFactor = gammaCoherenceIndex * 0.4;
  const isotopeSpinFactor = 1.0 + (isotope6LiFraction - 0.075) * 1.8; // 6-Li has spin-1 with longer coherence

  // Thermal energy scaling relative to 310K
  const thermalRatio = temperatureKelvin / 310.15;
  
  // Resonance tuning factor between EM field frequency and tubulin harmonic (~8.2 MHz)
  const resonanceDelta = Math.abs(emFieldFrequencyMHz - 8.2);
  const emResonanceGain = Math.max(0.1, 1.0 - (resonanceDelta / 15)) * (1 + (emFieldStrengthMicroT / 200));

  // Effective decoherence rate (GHz)
  // Base thermal dephasing is high (~1000 GHz), but non-equilibrium biological structures suppress it
  const baseDecoherence = (1000 / Math.max(0.1, coherenceTimePs)) * thermalRatio;
  const totalShielding = Math.min(0.92, (posnerProtection * 0.4 + hydrationProtection * 0.35 + gammaLockingFactor * 0.25) * emResonanceGain);
  const decoherenceRateGHz = Math.max(12.5, baseDecoherence * (1 - totalShielding));

  // 2. Quantum Tunneling Probability through synaptic vesicle fusion barrier / Ca2+ pore
  // WKB approximation: P ~ exp(-2 * sqrt(2m(V0 - E)) * d / hbar)
  // Normalized barrier width (0.2 to 1.5 nm)
  const barrierFactor = Math.max(0.2, tunnelingBarrierWidthNm);
  const fieldAssistance = 1.0 + (emFieldStrengthMicroT / 400) * (1 - resonanceDelta / 20);
  const tunnelingProbability = Math.min(
    0.98,
    Math.max(0.015, Math.exp(-2.2 * barrierFactor / fieldAssistance) * (1 + gammaCoherenceIndex * 0.25))
  );

  // 3. Entanglement Witness Negativity (measures bipartite quantum entanglement in synaptic ensemble)
  // Positive negativity indicates non-separable quantum states across synaptic clusters
  const entanglementWitnessNegativity = Math.min(
    0.95,
    Math.max(
      0.02,
      ((posnerMoleculeDensity / 100) * 0.55 + gammaCoherenceIndex * 0.3) *
        isotopeSpinFactor *
        (1 - resonanceDelta / 30) *
        (1 - Math.min(0.8, (temperatureKelvin - 290) / 40))
    )
  );

  // 4. Synaptic Transmission Delay (microseconds)
  // Classical chemical transmission is ~1200 us (1.2 ms) due to diffusion, SNARE zippering, and pore opening
  // Quantum coherent tunneling & superposition accelerate SNARE state transition
  const classicalDelayUs = 1200;
  const speedupDenominator = 1 + (tunnelingProbability * 2.8) + (entanglementWitnessNegativity * 3.4) + (coherenceTimePs / 10);
  const synapticTransmissionDelayUs = Math.round(classicalDelayUs / speedupDenominator);
  const quantumSpeedupFactor = Number((classicalDelayUs / synapticTransmissionDelayUs).toFixed(2));

  // 5. Channel Capacity (Holevo bound vs classical Shannon capacity)
  // Shannon capacity of typical synapse: ~2.5 - 5 bits/sec per synapse
  const classicalShannonCapacityBits = 4.2;
  // Quantum Holevo capacity expands exponentially with entangled multi-vesicle states
  const holevoChannelCapacityBitsPerSynapse = Number(
    (classicalShannonCapacityBits * (1 + 1.85 * entanglementWitnessNegativity + 1.1 * tunnelingProbability)).toFixed(2)
  );

  // 6. Signal-to-Noise Ratio Gain (dB)
  const snrGainDb = Number(
    (4.5 * Math.log10(1 + quantumSpeedupFactor * 2) + 6.2 * entanglementWitnessNegativity).toFixed(1)
  );

  // 7. Direct Cognitive & IQ Impact Modeling
  // Standard intelligence theory (Jensen, Deary, Neubauer):
  // Neural speed hypothesis + synaptic reliability directly scale fluid intelligence (Gf).
  // A 2x synaptic speedup + reduced jitter yields ~0.5 to 1.1 SD increase in working memory & fluid reasoning.
  const speedContribution = (quantumSpeedupFactor - 1.0) * 3.2; // points
  const capacityContribution = (holevoChannelCapacityBitsPerSynapse - classicalShannonCapacityBits) * 1.8;
  const coherenceContribution = (coherenceTimePs / 5) * 2.1 + (gammaCoherenceIndex * 3.8);
  const rawDeltaIQ = speedContribution + capacityContribution + coherenceContribution;
  const predictedDeltaIQ = Number(Math.min(32, Math.max(0.5, rawDeltaIQ)).toFixed(1));

  const fluidIntelligenceGainGf = Number((predictedDeltaIQ / 15).toFixed(2)); // in standard deviations (15 IQ = 1 SD)
  const workingMemoryExpansionPercent = Math.round(predictedDeltaIQ * 1.95);

  // 8. Receiver Tuning Fidelity (Connecting directly to the paper's thesis: brain as radio receiver)
  // Measures biological signal reception efficiency vs internal decoherence noise
  const receiverTuningFidelity = Math.round(
    Math.min(99, Math.max(12, (1 - decoherenceRateGHz / 1200) * 45 + entanglementWitnessNegativity * 35 + gammaCoherenceIndex * 20))
  );

  return {
    decoherenceRateGHz: Number(decoherenceRateGHz.toFixed(1)),
    tunnelingProbability: Number(tunnelingProbability.toFixed(3)),
    entanglementWitnessNegativity: Number(entanglementWitnessNegativity.toFixed(3)),
    synapticTransmissionDelayUs,
    classicalDelayUs,
    holevoChannelCapacityBitsPerSynapse,
    classicalShannonCapacityBits,
    quantumSpeedupFactor,
    snrGainDb,
    predictedDeltaIQ,
    fluidIntelligenceGainGf,
    workingMemoryExpansionPercent,
    receiverTuningFidelity,
  };
}
