export type ActiveTab = 
  | 'overview'
  | 'synapse_sim'
  | 'ml_model'
  | 'interventions'
  | 'math_framework'
  | 'experiments'
  | 'receiver_thesis'
  | 'ai_synthesizer';

export interface QuantumSynapticParameters {
  coherenceTimePs: number; // 0.1 to 50 ps (or up to ns with Posner shield)
  temperatureKelvin: number; // 290 to 315 K (physiological ~310 K)
  tunnelingBarrierWidthNm: number; // 0.2 to 1.5 nm
  posnerMoleculeDensity: number; // 0 to 100%
  emFieldStrengthMicroT: number; // 0 to 500 uT
  emFieldFrequencyMHz: number; // 0 to 50 MHz (tubulin resonance harmonics)
  gammaCoherenceIndex: number; // 0 to 1.0 (biofeedback phase-locking)
  hydrationShieldingEfficiency: number; // 0 to 1.0 (ordered water clathrate layer)
  isotope6LiFraction: number; // 0 to 1.0 (enriched 6-Li vs 7-Li)
}

export interface QuantumSimulationMetrics {
  decoherenceRateGHz: number;
  tunnelingProbability: number;
  entanglementWitnessNegativity: number;
  synapticTransmissionDelayUs: number; // microseconds
  classicalDelayUs: number; // classical ~1200 us (1.2 ms)
  holevoChannelCapacityBitsPerSynapse: number;
  classicalShannonCapacityBits: number;
  quantumSpeedupFactor: number;
  snrGainDb: number;
  predictedDeltaIQ: number; // estimated increase in IQ points
  fluidIntelligenceGainGf: number; // standard deviation fraction
  workingMemoryExpansionPercent: number;
  receiverTuningFidelity: number; // 0 to 100% (radio metaphor from paper)
}

export interface InterventionDefinition {
  id: string;
  name: string;
  category: 'field_stimulation' | 'nutritional_isotope' | 'biofeedback' | 'hydration_lattice';
  subtitle: string;
  quantumTarget: string;
  mechanism: string;
  decoherenceMitigation: string;
  theoreticalIqYield: string;
  predictedDeltaIqRange: [number, number];
  biologicalFeasibility: 'Established' | 'High' | 'Exploratory' | 'Theoretical';
  recommendedProtocol: string;
  parametersImpact: Partial<QuantumSynapticParameters>;
}

export interface ExperimentalDesign {
  id: string;
  title: string;
  targetPhenomenon: string;
  apparatus: string[];
  noiseIsolationMethod: string;
  biologicalModel: string;
  primaryEndpoints: string[];
  cognitiveTranslation: string;
  falsificationCriteria: string;
  statusAndReadiness: string;
}

export interface MLTrainingSample {
  id: number;
  coherencePs: number;
  barrierNm: number;
  emFieldMHz: number;
  posnerDensity: number;
  gammaIndex: number;
  isotopeRatio: number;
  groundTruthDeltaIq: number;
  predictedDeltaIq: number;
  channelCapacityBits: number;
  error: number;
}

export interface MLModelMetrics {
  epoch: number;
  trainLoss: number;
  valLoss: number;
  r2Score: number;
  meanAbsoluteError: number;
  isTraining: boolean;
  modelArchitecture: string;
}
