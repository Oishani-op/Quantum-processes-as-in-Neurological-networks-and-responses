export interface PaperCoreConcept {
  id: string;
  title: string;
  category: 'Neuroscience' | 'Edge Cases' | 'Quantum Physics' | 'Philosophy';
  quote: string;
  summary: string;
  quantumSynapticLink: string;
  keyFigures: string[];
}

export const PAPER_CONCEPTS: PaperCoreConcept[] = [
  {
    id: 'receiver-model',
    title: 'The Brain as a Receiver (Transceiver Hypothesis)',
    category: 'Philosophy',
    quote: "The brain might be working just like a radio, receiving and converting the signals already present... not the source of all these, but merely the receiver of consciousness signals.",
    summary: "Challenges the classical neuro-computational dogma that consciousness is an emergent epiphenomenon generated purely from local electrochemical neuron firing. Compares the brain to a radio receiver tuned to an underlying universal informational field.",
    quantumSynapticLink: "In this paradigm, synapses act as resonant quantum tuning gates. Interventions that enhance synaptic quantum coherence don't 'create' intelligence out of thin air; they increase the bandwidth, tuning sensitivity, and signal-to-noise ratio (SNR) of the biological antenna.",
    keyFigures: ['John Locke', 'Aldous Huxley', 'William James', 'Henri Bergson'],
  },
  {
    id: 'reducing-valve',
    title: "Aldous Huxley's 'Reducing Valve' & Psychedelic De-filtering",
    category: 'Neuroscience',
    quote: "Aldous Huxley referred to the brain as a reducing valve, not generating mind, but just filtering out a much broader, universal awareness into usable form... Psychedelics like DMT or psilocybin show not heightened activity, but often a decrease in normal brain networking.",
    summary: "The brain's evolutionary function is to constrain and filter infinite experiential data to focus solely on physical survival. When default mode network (DMN) constraints collapse under psychedelics or deep meditation, broader non-local information flows through.",
    quantumSynapticLink: "Synaptic plasticity and gating act as variable-aperture quantum filters. Classical synaptic inhibition restricts the state space. Quantum coherent superpositions expand the aperture, enabling parallel multi-dimensional state sampling and associative leaps.",
    keyFigures: ['Aldous Huxley', 'Robin Carhart-Harris', 'Franz Vollenweider'],
  },
  {
    id: 'nde-flatline',
    title: 'Near-Death Experiences (NDEs) During Flatline EEG',
    category: 'Edge Cases',
    quote: "Dr. Pim van Lommel's research, published in The Lancet, documented cases of patients who fell into cardiac flatline, narrating seemingly impossible yet verifiable experiences... while their brains showed no measurable electrical activity.",
    summary: "Clinically confirmed cases where patients with zero cortical EEG activity, flatline EKG, and absent brainstem reflexes recall structured, verifiable events and panoramic memories. Directly undermines the premise that macroscopic electric impulses are the sole substrate of perception.",
    quantumSynapticLink: "If classical action potentials are silent, non-local quantum correlations (such as long-lived nuclear spin states in Posner molecules or topological quantum storage in cytoskeletal microtubules) provide the only known physical explanation capable of preserving information without active ATP-driven electrical currents.",
    keyFigures: ['Dr. Pim van Lommel (The Lancet, 2001)', 'Dr. Sam Parnia', 'Dr. Peter Fenwick'],
  },
  {
    id: 'orch-or',
    title: 'Penrose-Hameroff Orch-OR & Microtubular Quantum States',
    category: 'Quantum Physics',
    quote: "Physicists like Roger Penrose and Stuart Hameroff have proposed that quantum processes within the microtubules might be responsible for consciousness... as a bridge to a deeper, and possibly universal, level of reality.",
    summary: "Orchestrated Objective Reduction (Orch-OR) posits that tubulin dimers in neuronal microtubules enter quantum superpositions, isolated within hydrophobic pockets, until reaching the gravitational threshold ($\hbar / E_G$), triggering a conscious moment.",
    quantumSynapticLink: "Microtubules connect directly to presynaptic active zones and post-synaptic dendritic spines via MAP2 proteins. Quantum states in microtubules regulate neurotransmitter exocytosis timing, coordinating synapses across vast cortical distances without conduction delays.",
    keyFigures: ['Sir Roger Penrose', 'Dr. Stuart Hameroff', 'Anirban Bandyopadhyay'],
  },
  {
    id: 'hard-problem',
    title: "David Chalmers' Hard Problem & The Middle Path",
    category: 'Philosophy',
    quote: "How can we explain the richness of subjective experience — the feeling of being you — when neural activity seems insufficient to produce it? The brain might function not as a generator, but as an interpreter — a living biological interface.",
    summary: "Physical descriptions of matter, voltage gates, and sodium fluxes cannot explain qualia (the redness of red, the subjective feeling of thought). The 'middle path' synthesizes physics and non-duality (Advaita Vedanta, Buddhism) by viewing consciousness as a fundamental cosmic layer like spacetime or gravity.",
    quantumSynapticLink: "Quantum measurement directly bridges the subjective observer and objective physical wave function collapse. Synaptic quantum dynamics represent the exact biological boundary where the universal field interfaces with physical neurochemistry.",
    keyFigures: ['David Chalmers', 'Thomas Nagel', 'Erwin Schrödinger', 'Advaita Vedanta'],
  },
];
