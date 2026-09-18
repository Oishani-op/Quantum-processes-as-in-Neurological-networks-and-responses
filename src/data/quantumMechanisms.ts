export interface QuantumPhenomenonDetail {
  id: string;
  name: string;
  subcellularLocation: string;
  physicalMechanism: string;
  classicalLimitation: string;
  quantumSpeedupAndEfficiency: string;
  mathematicalExpression: string;
  decoherenceChallengeAndSolution: string;
}

export const QUANTUM_PHENOMENA: QuantumPhenomenonDetail[] = [
  {
    id: 'superposition',
    name: 'Quantum Superposition in Vesicle Fusion & SNARE Complexes',
    subcellularLocation: 'Presynaptic active zone (SNARE protein complex & synaptotagmin-1)',
    physicalMechanism: 'The conformational state of the helical SNARE bundle (syntaxin-1, SNAP-25, synaptobrevin) exists in a quantum coherent superposition of unzippered (|0⟩) and zippered fusion-ready (|1⟩) states: |Ψ⟩ = α|0⟩ + β|1⟩. A wavepacket of conformational states samples multiple binding orientations simultaneously.',
    classicalLimitation: 'Classical thermal activation models require slow, stochastic thermal fluctuations to surmount the ~35 k_B T electrostatic barrier of lipid bilayer fusion, causing unpredictable latency and high transmission jitter (0.8 - 2.5 ms).',
    quantumSpeedupAndEfficiency: 'Coherent superposition enables parallel multi-pathway search for the minimum energy fusion pore configuration. Rather than sequential steric collisions, the fusion complex collapses into the open-pore state quasi-instantaneously once calcium ions bind, decreasing synaptic latency to under 350 microseconds.',
    mathematicalExpression: '|Ψ_{SNARE}(t)⟩ = \\sum_{k=1}^N c_k(t) |k\\rangle, \\quad i\\hbar \\frac{\\partial |\\Psi\\rangle}{\\partial t} = \\hat{H}_{conf} |\\Psi\\rangle',
    decoherenceChallengeAndSolution: 'Thermal dephasing at 310 K is shielded by hydrophobic pocket cavities within the four-helix bundle and ordered hydration clathrates that isolate dipolar interactions from bulk cytosolic ionic collisions.',
  },
  {
    id: 'tunneling',
    name: 'Quantum Tunneling in Voltage-Gated Ion Channels & Protons',
    subcellularLocation: 'Voltage-gated calcium channels (VGCC / Ca_v2.1) and NMDA receptor selectivity filters',
    physicalMechanism: 'Calcium ions (Ca2+) and hydrogen bond protons traverse electrostatic potential energy barriers within the narrow selectivity pore (~0.3 nm diameter) via quantum mechanical wavepacket tunneling, governed by the WKB transmission probability.',
    classicalLimitation: 'Classical Kramers reaction rate theory dictates that an ion must possess kinetic energy exceeding the peak barrier height (E > V_0), which depends strictly on classical thermal Boltzmann tails (exp(-ΔV/k_BT)), creating severe rate limitations during rapid action potential trains.',
    quantumSpeedupAndEfficiency: 'Tunneling allows non-zero probability of barrier penetration even when E < V_0. This yields an exponential increase in ion flux initiation velocity (10^7 ions/sec) and allows ultralow-voltage threshold gating, reducing metabolic ATP consumption by up to 40%.',
    mathematicalExpression: 'P_{tunnel} \\approx \\exp\\left( -\\frac{2}{\\hbar} \\int_{x_1}^{x_2} \\sqrt{2m(V(x) - E)} \\, dx \\right)',
    decoherenceChallengeAndSolution: 'Sub-nanometer pore geometry acts as a quantum waveguide. The dehydrated coordination sphere with carbonyl oxygen rings provides a frictionless, non-dissipative potential well preventing thermal phonon scattering.',
  },
  {
    id: 'entanglement',
    name: 'Quantum Entanglement in Posner Molecules (Ca_9(PO_4)_6)',
    subcellularLocation: 'Synaptic cleft, presynaptic vesicle clusters, and postsynaptic density (PSD-95)',
    physicalMechanism: 'Phosphorus-31 (31-P) nuclei carry a nuclear spin of I = 1/2 with zero electric quadrupole moment. When pyrophosphate hydrolyzes into two phosphate ions, their nuclear spins are prepared in an entangled Bell state: |Ψ^+⟩ = (|↑↓⟩ + |↓↑⟩)/√2, embedded within stable spherical Posner nanoclusters.',
    classicalLimitation: 'Classical chemical diffusion across the synaptic cleft (20 nm) and inter-synaptic coordination across dendritic arborizations relies on chemical diffusion (D ≈ 0.4 μm^2/ms), which is strictly local, slow, and degrades with distance.',
    quantumSpeedupAndEfficiency: 'Entangled Posner clusters can be endocytosed into distinct pre- and postsynaptic terminals or neighboring synapses. When cellular calcium influx triggers cluster dissolution, non-local quantum measurements synchronize neurotransmitter release across thousands of synapses simultaneously, enabling instant holographic associative recall.',
    mathematicalExpression: '\\hat{\\rho}_{AB} = \\frac{1}{4} \\left( \\hat{I} \\otimes \\hat{I} + \\sum_{i,j} T_{ij} \\hat{\\sigma}_i \\otimes \\hat{\\sigma}_j \\right), \\quad \\mathcal{N}(\\rho) > 0',
    decoherenceChallengeAndSolution: 'Because 31-P nuclear spins do not interact with electric fields and have minimal magnetic moments, they possess extraordinarily long coherence times—potentially hours to days in biological fluids.',
  },
  {
    id: 'capacity-speedup',
    name: 'Quantum vs Classical Information Transfer: Holevo Speedup',
    subcellularLocation: 'Global Cortical Synaptic Network & Dendritic Computation Branches',
    physicalMechanism: 'Information capacity is bounded classically by Shannon channel capacity C_S = B log2(1 + SNR). In quantum synaptic networks, entangled multi-qubit states and superdense coding obey the Holevo bound: χ = S(ρ) - ∑ p_i S(ρ_i) ≥ C_S.',
    classicalLimitation: 'Classical synapses transmit binary or graded stochastic vesicle packets with high noise (channel capacity ≈ 2.5 to 5 bits/sec per synapse), requiring immense redundancy to prevent bit flips.',
    quantumSpeedupAndEfficiency: 'Quantum coherent superposition allows associative search in synaptic memory matrices to execute in Grover-like O(√N) time steps rather than classical serial O(N). An ensemble of 10^11 synapses operates as a distributed quantum simulator, processing associative cognitive loads with exponential state density 2^N.',
    mathematicalExpression: '\\chi(\\mathcal{E}) = S\\left( \\sum_i p_i \\hat{\\rho}_i \\right) - \\sum_i p_i S(\\hat{\\rho}_i) \\le S(\\hat{\\rho})',
    decoherenceChallengeAndSolution: 'Topological protection in cytoskeletal lattice geometries (tubulin Fibonacci helical phyllotaxis) and error-correcting codes via cross-frequency oscillatory phase resets (40 Hz gamma).',
  },
];
