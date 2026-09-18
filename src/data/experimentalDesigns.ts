import { ExperimentalDesign } from '../types';

export const EXPERIMENTAL_DESIGNS: ExperimentalDesign[] = [
  {
    id: 'nv-diamond-magnetometry',
    title: 'Nanoscale NV-Diamond Magnetometry in Live Synaptic Active Zones',
    targetPhenomenon: 'Single-spin quantum coherence, Posner molecule nuclear spin states, and magnetic dipole dynamics during vesicle exocytosis.',
    apparatus: [
      'Scanning probe diamond tip with single Nitrogen-Vacancy (NV) center defects (spatial resolution < 5 nm)',
      'Confocal optically detected magnetic resonance (ODMR) microscope with 532 nm laser excitation',
      'Micro-fabricated patch-clamp perfusion chamber for organotypic hippocampal slices',
      'Mu-metal multi-layer magnetic shielding chamber (attenuation > 80 dB)',
      'Sub-nanosecond single photon avalanche diode (SPAD) detector array'
    ],
    noiseIsolationMethod: 'Uses dynamical decoupling pulse sequences (e.g. Carr-Purcell-Meiboom-Gill / CPMG and XY8) to filter out low-frequency classical 1/f thermal and biological noise, isolating narrow-band quantum Larmor precession frequencies of 31-P nuclear spins and electron dipoles at 310 K.',
    biologicalModel: 'Acute hippocampal slice preparations (CA1-CA3 pyramidal neuron synapses) from transgenic mice expressing fluorescent vesicle markers.',
    primaryEndpoints: [
      'Transverse spin relaxation time (T2*) of phosphorus-31 clusters under baseline vs stimulated action potentials',
      'Detection of non-classical magnetic field phase shifts (ΔB < 1 nT) occurring prior to physical vesicle membrane fusion',
      'Quantum entanglement witness measurement (negativity N > 0) between adjacent synaptic active zones'
    ],
    cognitiveTranslation: 'Correlating single-synapse spin coherence metrics with in vivo cognitive performance on the Barnes maze and Morris water navigation test across test cohorts.',
    falsificationCriteria: 'If measured magnetic field and spin dynamics follow purely classical Poissonian Maxwell-Boltzmann diffusion without detectable coherence (T2* < 10 femtoseconds) under CPMG decoupling, the quantum synaptic exocytosis hypothesis is falsified.',
    statusAndReadiness: 'Technology exists in quantum diamond labs (Harvard Lukin group, Stuttgart Wrachtrup group); needs adaptation to live biological brain slices.'
  },
  {
    id: 'isotope-substitution-slices',
    title: 'Isotopic Modulation (6-Li vs 7-Li & 31-P vs 32-P) in Long-Term Potentiation',
    targetPhenomenon: 'Quantum spin-dependent synaptic plasticity (LTP/LTD) and channel conductance modulation by nuclear spin variance.',
    apparatus: [
      'Multi-electrode array (MEA-60) electrophysiology system with sub-microsecond sampling rate',
      'Two-photon laser scanning fluorescence microscope (Olympus FVMPE-RS)',
      'Inductively coupled plasma mass spectrometer (ICP-MS) for precise slice isotopic quantification',
      'Custom microfluidic rapid-exchange perfusion system (< 5 ms fluid exchange latency)'
    ],
    noiseIsolationMethod: 'Controls for chemical charge, ionic radius, and hydration enthalpy (which are virtually identical between isotopes like 6-Li and 7-Li, differing only in nuclear spin I=1 vs I=3/2 and nuclear magnetic moment). Any statistically significant divergence in synaptic transmission velocity or LTP amplitude can ONLY be attributed to quantum nuclear spin effects.',
    biologicalModel: 'Organotypic mouse cortical slices and human induced pluripotent stem cell (iPSC)-derived cortical organoids.',
    primaryEndpoints: [
      'Paired-pulse facilitation (PPF) ratio and miniature excitatory postsynaptic current (mEPSC) frequency under 6-Li vs 7-Li incubation',
      'LTP induction magnitude following theta-burst stimulation (TBS)',
      'Quantal vesicle release jitter (standard deviation of synaptic latency)'
    ],
    cognitiveTranslation: 'Sub-cohort rodent behavioral assays testing working memory retention and cognitive flexibility; human trials tracking Ravens Progressive Matrices scores.',
    falsificationCriteria: 'If 6-Li and 7-Li exhibit identical synaptic transmission kinetics, quantal release probabilities, and LTP amplitudes within p < 0.05 margin, quantum nuclear spin mechanisms are ruled out as causal drivers of synaptic efficiency.',
    statusAndReadiness: 'Ready for immediate laboratory deployment using commercial MEA and isotope salts.'
  },
  {
    id: '2d-electronic-spectroscopy',
    title: 'Ultrafast 2D Electronic Spectroscopy (2DES) of Microtubule Dipoles',
    targetPhenomenon: 'Quantum coherence and exciton energy transfer along aromatic tryptophan ring lattices in neuronal tubulin and synaptic scaffold proteins (PSD-95).',
    apparatus: [
      'Titanium-sapphire femtosecond laser amplifier (10 fs pulse width, 80 MHz repetition rate)',
      'Diffractive optics-based four-wave mixing interferometer (beam geometry in BOXCARS configuration)',
      'Cryogenic and physiological temperature-controlled micro-spectroscopy liquid cell',
      'High-resolution imaging spectrometer with cryogenic EM-CCD camera'
    ],
    noiseIsolationMethod: 'Two-dimensional Fourier transform spectroscopy separates electronic coupling pathways along excitation and emission frequency axes. Quantum beats (oscillating cross-peaks) with persistent phase memory can be distinguished cleanly from purely incoherent classical population decay.',
    biologicalModel: 'Reconstituted mammalian brain tubulin polymers, taxol-stabilized microtubules, and intact synaptosome membrane fractions.',
    primaryEndpoints: [
      'Persistence of cross-peak quantum coherence oscillations (τ_coh) at 310 K versus cryo temperatures (77 K)',
      'Exciton delocalization length across tryptophan arrays (> 8 tubulin dimers)',
      'Perturbation of quantum beat frequencies by volatile anesthetics (halothane, isoflurane, propofol)'
    ],
    cognitiveTranslation: 'Maps anesthetic potency directly to the suppression of quantum electronic coherence, explaining the transition from conscious processing to unconsciousness.',
    falsificationCriteria: 'Absence of oscillating cross-peaks or decay of quantum beats within < 20 fs at 310 K, indicating that thermal bath fluctuations destroy electronic coherence before any biological signaling can take place.',
    statusAndReadiness: 'Utilizes established ultrafast quantum biology methodology (used for photosynthesis FMO complexes by Engel & Fleming).'
  },
  {
    id: 'clinical-meg-iq-trial',
    title: 'Double-Blind Clinical Trial: Targeted tPEMF + 40Hz Biofeedback vs IQ',
    targetPhenomenon: 'Macro-scale translation of quantum synaptic coherence interventions to measurable human fluid intelligence (Gf) and neural processing speed.',
    apparatus: [
      '306-channel whole-head Magnetoencephalography (MEG) system (Elekta Neuromag) with optical sensor co-registration',
      'Custom non-invasive transcranial pulsed electromagnetic field (tPEMF) generator with active sham control',
      'Computerized cognitive battery: Wechsler Adult Intelligence Scale (WAIS-IV) and Ravens Advanced Progressive Matrices (RAPM)',
      'High-resolution structural and diffusion tensor 7-Tesla MRI for fiber tractography'
    ],
    noiseIsolationMethod: 'Quadruple-blind randomized sham-controlled crossover design (N = 180 subjects). Active sham device reproduces identical acoustic humming and sensory skin contact without magnetic field emission.',
    biologicalModel: 'Healthy human adult participants aged 20-35 balanced for baseline cognitive metrics.',
    primaryEndpoints: [
      'Pre-to-post intervention delta in Full Scale IQ (FSIQ), Perceptual Reasoning Index (PRI), and Processing Speed Index (PSI)',
      'P300 and N200 event-related potential (ERP) latency during n-back working memory tasks',
      'Global MEG phase-locking value (PLV) in 40 Hz gamma band and cross-frequency coupling strength'
    ],
    cognitiveTranslation: 'Direct empirical validation of whether theoretically predicted quantum synaptic interventions generate measurable, statistically significant increases in real-world human intelligence.',
    falsificationCriteria: 'Failure to demonstrate statistically significant cognitive improvement (ΔIQ > 2.5 points, p > 0.05) or zero change in neural processing speed latency compared to active sham.',
    statusAndReadiness: 'Protocol ready for IRB ethics submission and clinical trial registration.'
  }
];
