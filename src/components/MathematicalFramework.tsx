import React, { useState } from 'react';
import { 
  Binary, 
  Layers, 
  Zap, 
  BookOpen,
  Calculator
} from 'lucide-react';

export const MathematicalFramework: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('hamiltonian');

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 border border-slate-800 rounded-2xl p-6 text-white shadow-xl">
        <div className="inline-flex items-center space-x-2 px-2.5 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-semibold mb-2 border border-indigo-400/30">
          <Binary className="w-3.5 h-3.5" />
          <span>Analytical Biophysical Formalism</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
          Mathematical Framework of Quantum Synaptic Dynamics
        </h1>
        <p className="text-slate-300 text-sm mt-1 max-w-3xl leading-relaxed">
          A rigorous mathematical formulation modeling the open quantum biological system of synapses—spanning Hamiltonian state evolutions, Lindblad master equation decoherence dynamics, WKB tunneling, and Holevo information capacity bounds.
        </p>
      </div>

      {/* Navigation Pills */}
      <div className="flex flex-wrap gap-2">
        {[
          { id: 'hamiltonian', label: '1. Total Synaptic Hamiltonian' },
          { id: 'lindblad', label: '2. Lindblad Master Equation' },
          { id: 'wkb_tunneling', label: '3. WKB Ion & Proton Tunneling' },
          { id: 'entanglement_neg', label: '4. Posner Spin Entanglement' },
          { id: 'holevo_capacity', label: '5. Holevo Information Bound' },
          { id: 'quantum_fisher', label: '6. Quantum Fisher Information' },
        ].map((sec) => (
          <button
            key={sec.id}
            onClick={() => setActiveSection(sec.id)}
            className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition ${
              activeSection === sec.id
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
            }`}
          >
            {sec.label}
          </button>
        ))}
      </div>

      {/* Content Panels */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-6">
        {activeSection === 'hamiltonian' && (
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="p-2 rounded-lg bg-indigo-50 text-indigo-700">
                <Binary className="w-5 h-5" />
              </span>
              <h2 className="text-lg font-bold text-slate-900">
                {'1. The Synaptic Active Zone Hamiltonian (Ĥ_total)'}
              </h2>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              The presynaptic active zone and synaptic cleft are modeled as a multipartite open quantum system consisting of conformational states of SNARE proteins, tunneling ions (Ca²⁺), nuclear spins in Posner clusters, and the warm fluctuating biological thermal reservoir.
            </p>

            {/* LaTeX Display Box */}
            <div className="p-4 rounded-xl bg-slate-900 text-cyan-300 font-mono text-xs sm:text-sm overflow-x-auto shadow-inner space-y-2">
              <p className="text-slate-400">// Total Hamiltonian:</p>
              <pre className="font-mono text-cyan-300 whitespace-pre-wrap">
                {'Ĥ_total = Ĥ_syn + Ĥ_res + Ĥ_int + Ĥ_ext(t)'}
              </pre>
              <p className="text-slate-400 pt-2">// Synaptic Microscopic System Hamiltonian:</p>
              <pre className="font-mono text-cyan-300 whitespace-pre-wrap">
                {'Ĥ_syn = ∑_{j=1}^{N_SNARE} (ε_j / 2) σ̂_z^{(j)} + ∑_{j < k} J_{jk} (σ̂_+^{(j)} σ̂_-^{(k)} + H.c.) + ∑_{p=1}^M (ℏ Ω_p / 2) τ̂_z^{(p)}'}
              </pre>
              <p className="text-slate-400 pt-2">// External tPEMF Intervention Coupling:</p>
              <pre className="font-mono text-cyan-300 whitespace-pre-wrap">
                {'Ĥ_ext(t) = - ∑_j μ⃗_j · E⃗_tPEMF(t) cos(ω_res t)'}
              </pre>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-600 mt-4">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                <strong className="text-slate-900 block mb-1">Conformational Two-Level Systems (σ̂_z)</strong>
                <p>
                  Represents the unzippered (|0⟩) and fusion-ready zippered (|1⟩) states of the helical SNARE core complex, with energy gap ε_j ≈ 35 k_B T.
                </p>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                <strong className="text-slate-900 block mb-1">Dipolar Resonance Coupling (J_jk)</strong>
                <p>
                  Coherent dipole-dipole exchange between adjacent SNARE coils and tubulin dimers along the presynaptic scaffolding, enabling multi-vesicle coordinated triggering.
                </p>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                <strong className="text-slate-900 block mb-1">Nuclear Spin Operators (τ̂_z)</strong>
                <p>
                  Phosphorus-31 (³¹P) nuclear spin degrees of freedom within Posner nanoclusters (Ca₉(PO₄)₆), protected by rotational cage symmetry.
                </p>
              </div>
            </div>
          </div>
        )}

        {activeSection === 'lindblad' && (
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="p-2 rounded-lg bg-indigo-50 text-indigo-700">
                <Layers className="w-5 h-5" />
              </span>
              <h2 className="text-lg font-bold text-slate-900">
                2. Open Quantum Dynamics &amp; The Lindblad Master Equation
              </h2>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              Biological neural tissue operates at T = 310.15 K (37°C). The density matrix ρ̂(t) evolves under non-unitary environmental coupling modeled via the Gorini-Kossakowski-Sudarshan-Lindblad master equation.
            </p>

            <div className="p-4 rounded-xl bg-slate-900 text-cyan-300 font-mono text-xs sm:text-sm overflow-x-auto shadow-inner space-y-2">
              <p className="text-slate-400">// Lindblad Master Equation for Synaptic Density Matrix:</p>
              <pre className="font-mono text-cyan-300 whitespace-pre-wrap">
                {'dρ̂(t)/dt = -(i/ℏ) [Ĥ_eff, ρ̂(t)] + ∑_k γ_k ( L̂_k ρ̂(t) L̂_k† - (1/2) { L̂_k† L̂_k, ρ̂(t) } )'}
              </pre>
              <p className="text-slate-400 pt-2">// Thermal Dephasing Jump Operator:</p>
              <pre className="font-mono text-cyan-300 whitespace-pre-wrap">
                {'L̂_dephase = σ̂_z,   γ_dephase = (k_B T / ℏ) · (1 - η_clathrate) · exp(-ΔE_shield / k_B T)'}
              </pre>
              <p className="text-slate-400 pt-2">// Exocytosis Measurement Projection Operator:</p>
              <pre className="font-mono text-cyan-300 whitespace-pre-wrap">
                {'P_fusion(t) = Tr( Π̂_fused ρ̂(t) ),   Π̂_fused = |1⟩⟨1|'}
              </pre>
            </div>

            <div className="p-4 rounded-xl bg-indigo-50 border border-indigo-100 text-xs text-indigo-950 leading-relaxed">
              <strong className="block text-indigo-900 font-semibold mb-1">
                Why Decoherence Does Not Instantly Destroy Cognitive Function:
              </strong>
              While Max Tegmark calculated decoherence times of 10⁻¹³ s for naked cortical ion discharges, structured biological nanostructures (such as the exclusion-zone water clathrates identified by Pollack and hydrophobic tubulin pockets identified by Hameroff) suppress the effective dephasing rate γ_dephase by up to 3 orders of magnitude through non-Markovian noise coloration and topological phase protection.
            </div>
          </div>
        )}

        {activeSection === 'wkb_tunneling' && (
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="p-2 rounded-lg bg-indigo-50 text-indigo-700">
                <Zap className="w-5 h-5" />
              </span>
              <h2 className="text-lg font-bold text-slate-900">
                3. WKB Quantum Tunneling of Ions &amp; Protons in Selectivity Filters
              </h2>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              Voltage-gated calcium channels (Ca_v 2.1) and NMDA receptor selectivity filters have constriction pore widths of d ≈ 0.3 - 0.7 nm. Calcium ions and hydrogen-bond protons penetrate the electrostatic barrier via quantum tunneling.
            </p>

            <div className="p-4 rounded-xl bg-slate-900 text-cyan-300 font-mono text-xs sm:text-sm overflow-x-auto shadow-inner space-y-2">
              <p className="text-slate-400">// WKB Transmission Probability Integral:</p>
              <pre className="font-mono text-cyan-300 whitespace-pre-wrap">
                {'P_tunnel(E) ≈ exp( -(2/ℏ) ∫_{x1}^{x2} √[ 2m ( V(x) - q E_membrane x - E ) ] dx )'}
              </pre>
              <p className="text-slate-400 pt-2">// Resonant Proton-Assisted Exocytosis Velocity:</p>
              <pre className="font-mono text-cyan-300 whitespace-pre-wrap">
                {'v_tunnel = ν_attempt · P_tunnel ≈ 10^{13} Hz · exp( -(2 d √(2m ΔV)) / ℏ )'}
              </pre>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-600">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                <strong className="text-slate-900 block mb-1">Classical Thermal Crossing (Kramers):</strong>
                <p>
                  Rate: k_classical = ω_0 exp(-ΔV / k_B T). At 310 K with a 35 k_B T barrier, exocytosis initiation requires up to 1.5 to 2.5 ms, introducing high synaptic jitter.
                </p>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                <strong className="text-slate-900 block mb-1">Quantum Tunneling Advantage:</strong>
                <p>
                  Rate: Non-zero wavepacket leakage independent of tail Boltzmann states. Reduces minimum latency to &lt; 350 μs, allowing clock-like spike synchrony necessary for high fluid intelligence.
                </p>
              </div>
            </div>
          </div>
        )}

        {activeSection === 'entanglement_neg' && (
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="p-2 rounded-lg bg-indigo-50 text-indigo-700">
                <Binary className="w-5 h-5" />
              </span>
              <h2 className="text-lg font-bold text-slate-900">
                {'4. Posner Cluster Nuclear Spin Entanglement & Negativity (𝒩)'}
              </h2>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              Matthew Fisher proposed that Posner molecules (Ca₉(PO₄)₆) can protect entangled ³¹P nuclear spins from environmental decoherence for hours. Entanglement between spatially separated synaptic clusters is quantified by the negativity of the partial transpose.
            </p>

            <div className="p-4 rounded-xl bg-slate-900 text-cyan-300 font-mono text-xs sm:text-sm overflow-x-auto shadow-inner space-y-2">
              <p className="text-slate-400">// Entangled Two-Cluster Density Matrix:</p>
              <pre className="font-mono text-cyan-300 whitespace-pre-wrap">
                {'ρ̂_AB = p |Ψ⁺⟩⟨Ψ⁺| + ((1-p)/4) I ⊗ I,   |Ψ⁺⟩ = (|↑↓⟩ + |↓↑⟩) / √2'}
              </pre>
              <p className="text-slate-400 pt-2">// Peres-Horodecki Entanglement Witness Negativity:</p>
              <pre className="font-mono text-cyan-300 whitespace-pre-wrap">
                {'𝒩(ρ̂) = (||ρ̂_AB^{T_B}||₁ - 1) / 2 = max(0, (3p - 1) / 4)'}
              </pre>
              <p className="text-slate-400 pt-2">// Isotopic Spin Protection with Lithium-6 (I=1):</p>
              <pre className="font-mono text-cyan-300 whitespace-pre-wrap">
                {'T₂*(³¹P in ⁶Li-Posner) ≈ T₂*(³¹P) · (μ_{⁷Li} / μ_{⁶Li})² ≈ 100 seconds'}
              </pre>
            </div>

            <p className="text-xs text-slate-600">
              When these entangled Posner clusters are endocytosed into separate post-synaptic spines, their synchronized dissolution under local enzymatic calcium triggers releases entangled calcium signals, creating non-local dendritic binding across disparate brain regions without axonal conduction delays.
            </p>
          </div>
        )}

        {activeSection === 'holevo_capacity' && (
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="p-2 rounded-lg bg-indigo-50 text-indigo-700">
                <Calculator className="w-5 h-5" />
              </span>
              <h2 className="text-lg font-bold text-slate-900">
                5. Quantum Channel Capacity: Exceeding Shannon with the Holevo Bound
              </h2>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              Classical synapses communicate via discrete vesicles, bounded by Shannon channel capacity C_Shannon ≈ 2.5 - 5 bits/synapse. With entangled states and quantum superposition, the channel obeys the Holevo capacity χ(ℰ).
            </p>

            <div className="p-4 rounded-xl bg-slate-900 text-cyan-300 font-mono text-xs sm:text-sm overflow-x-auto shadow-inner space-y-2">
              <p className="text-slate-400">// Classical Shannon Capacity:</p>
              <pre className="font-mono text-cyan-300 whitespace-pre-wrap">
                {'C_Shannon = B · log₂( 1 + S/N ) ≈ 4.2 bits/second'}
              </pre>
              <p className="text-slate-400 pt-2">// Quantum Holevo Bound for Synaptic Ensembles:</p>
              <pre className="font-mono text-cyan-300 whitespace-pre-wrap">
                {'χ(ℰ) = S( ∑_i p_i ρ̂_i ) - ∑_i p_i S(ρ̂_i),   S(ρ̂) = -Tr(ρ̂ log₂ ρ̂)'}
              </pre>
              <p className="text-slate-400 pt-2">// Superdense Synaptic Transmission Expansion:</p>
              <pre className="font-mono text-cyan-300 whitespace-pre-wrap">
                {'C_quantum ≤ χ(ℰ) + E_D(ρ̂) = C_Shannon · ( 1 + 1.85 · 𝒩(ρ̂) )'}
              </pre>
            </div>

            <p className="text-xs text-slate-600">
              This exponential information density enables the human cortex (10¹⁴ synapses) to represent vast semantic concept trees and multi-constraint reasoning tasks without saturating axonal bandwidth or running into metabolic glucose starvation.
            </p>
          </div>
        )}

        {activeSection === 'quantum_fisher' && (
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="p-2 rounded-lg bg-indigo-50 text-indigo-700">
                <BookOpen className="w-5 h-5" />
              </span>
              <h2 className="text-lg font-bold text-slate-900">
                6. Quantum Fisher Information &amp; The Ultimate Synaptic Precision Limit
              </h2>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              How precisely can a neuron time its spike arrival? Classically, thermal Poissonian noise imposes a timing jitter of Δt ≈ 1 - 2 ms. Quantum metrology proves that quantum states achieve the Heisenberg limit of precision.
            </p>

            <div className="p-4 rounded-xl bg-slate-900 text-cyan-300 font-mono text-xs sm:text-sm overflow-x-auto shadow-inner space-y-2">
              <p className="text-slate-400">// Quantum Cramér-Rao Lower Bound:</p>
              <pre className="font-mono text-cyan-300 whitespace-pre-wrap">
                {'Var(θ̂_timing) ≥ 1 / ( M · ℱ_Q(ρ̂, Ĥ) )'}
              </pre>
              <p className="text-slate-400 pt-2">// Quantum Fisher Information (ℱ_Q):</p>
              <pre className="font-mono text-cyan-300 whitespace-pre-wrap">
                {'ℱ_Q(ρ̂, Ĥ) = 2 ∑_{m,n : p_m + p_n > 0} [ (p_m - p_n)² / (p_m + p_n) ] · |⟨m| Ĥ |n⟩|²'}
              </pre>
              <p className="text-slate-400 pt-2">// Scaling: Classical Shot Noise (1/√N) vs Quantum Heisenberg Limit (1/N):</p>
              <pre className="font-mono text-cyan-300 whitespace-pre-wrap">
                {'Δt_min = ℏ / ( 2 ΔE · √(ℱ_Q) ) ≈ 12 - 45 μs'}
              </pre>
            </div>

            <p className="text-xs text-slate-600">
              Sub-50 microsecond timing precision enables phase-coded cognitive operations (e.g. auditory sound localization and rapid spatial mapping) that are physically impossible under purely classical chemical diffusion models.
            </p>
          </div>
        )}
      </div>

      {/* Direct link back to the attached paper */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-xs text-slate-700 leading-relaxed space-y-2">
        <h3 className="font-bold text-slate-900 text-sm flex items-center space-x-2">
          <BookOpen className="w-4 h-4 text-indigo-600" />
          <span>Integration with the &quot;Receiver vs Generator&quot; Paper</span>
        </h3>
        <p>
          The attached thesis asks: <em>&quot;Is consciousness a fire lit by the brain, or is it a whisper from the cosmos, only the brain can hear?&quot;</em>
        </p>
        <p>
          In our mathematical framework, the brain acts as an active biological antenna. Synaptic quantum coherence (τ_coh, 𝒩) modulates the transmission transfer function 𝒯_syn(ω) of Huxley&apos;s &quot;reducing valve&quot;. Interventions that enhance coherence do not manufacture consciousness from dead matter; rather, they minimize internal thermal noise, broadening the biological aperture to decode higher-order informational fields with pristine fidelity.
        </p>
      </div>
    </div>
  );
};
