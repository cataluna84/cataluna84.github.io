// Data for the portfolio sections

const portfolioData = {
  tier1Projects: [
    {
      id: "lid",
      title: "LID — Layer-Wise Multilingual Language ID",
      description: "Layer-wise dynamics of multilingual language identification (67 languages) in compact foundation models. Features training, layer-wise inference, and optimization-strategy benchmarks on H100 with W&B logging.",
      tags: ["PyTorch", "Mechanistic Interpretability", "LoRA", "HuggingFace"],
      links: [
        { url: "https://github.com/cataluna84/lid", icon: "🐙", label: "GitHub" }
      ],
      metrics: "Macro F1: 0.97+"
    },
    {
      id: "arc-agi-3",
      title: "ARC Prize 2026 (ARC-AGI-3)",
      description: "Public lab notebook for the $850K ARC-AGI-3 competition. Contains agent zoo, FORGE, BFS, CNN, frame segmenter. Currently at D16 of the competition with multiple evaluation traces.",
      tags: ["Python", "Reinforcement Learning", "Search Algorithms"],
      links: [
        { url: "https://github.com/cataluna84/arc-agi-3", icon: "🐙", label: "GitHub" }
      ],
      metrics: "LB: 0.24 (Best)"
    },
    {
      id: "generative-deep-learning",
      title: "Generative Deep Learning",
      description: "Generative Modeling implementations spanning Variational Autoencoders (VAEs), Generative Adversarial Networks (GANs), and Diffusion models for image synthesis.",
      tags: ["Jupyter", "GANs", "Diffusion", "VAE"],
      links: [
        { url: "https://github.com/cataluna84/Generative_Deep_Learning", icon: "🐙", label: "GitHub" }
      ],
      metrics: "Extensive Model Suite"
    },
    {
      id: "tiny-aya-translation",
      title: "Tiny Aya Simultaneous Translation",
      description: "End-to-end simultaneous speech-to-text translation pipeline. Includes continuous integration of chunked audio processing, sequence modeling, and low-latency decoding for streaming architectures.",
      tags: ["Speech", "Streaming", "Real-time", "CUDA"],
      links: [
        { url: "https://github.com/tiny-aya-simulatenous-translation", icon: "🐙", label: "GitHub Org" }
      ],
      metrics: "Low-Latency Streaming"
    },
    {
      id: "codec-finetuning",
      title: "Codec Fine-tuning (Tiny Aya)",
      description: "Benchmark for fine-tuning neural speech codecs on low-resource languages. Fine-tunes Mimi, DualCodec, and Kanade on Turkish/Hindi with 8 optimizers and W&B Bayesian sweeps.",
      tags: ["Speech", "Audio Codecs", "W&B Sweeps", "CUDA"],
      links: [
        { url: "https://github.com/cataluna84/codec-finetuning", icon: "🐙", label: "GitHub" }
      ],
      metrics: "8 Optimizers Evaluated"
    },
    {
      id: "tiny-aya-under-hood",
      title: "Tiny Aya Under the Hood",
      description: "Deep-dive mechanistic interpretability and architectural breakdown of the Tiny Aya model. Analyzes attention heads, MLP layers, and cross-lingual transfer mechanisms.",
      tags: ["Mechanistic Interpretability", "LLMs", "Analysis"],
      links: [
        { url: "https://github.com/rsk2327/Tiny-Aya-Under-the-hood", icon: "🐙", label: "GitHub" }
      ],
      metrics: "Deep Architectural Analysis"
    },
    {
      id: "cohere-misalignment",
      title: "Crosslingual Emergent Misalignment",
      description: "Research conducted with Cohere Labs investigating how safety guardrails degrade or misalign when translating prompts across high and low-resource languages.",
      tags: ["AI Safety", "Cohere", "Crosslingual", "Research"],
      links: [
        { url: "https://github.com/Cohere-Labs-Community/crosslingual-emergent-misalignment", icon: "🐙", label: "GitHub" }
      ],
      metrics: "Multilingual Safety Benchmark"
    },
    {
      id: "worldmodels",
      title: "World Models (Ha & Schmidhuber)",
      description: "Implementation of World Models combining Variational Autoencoders (VAE), MDN-RNNs, and CMA-ES for reinforcement learning in the OpenAI Car Racing environment.",
      tags: ["Generative", "RL", "VAE"],
      links: [
        { url: "https://github.com/cataluna84/WorldModels_v1.0", icon: "🐙", label: "GitHub" }
      ],
      metrics: "CMA-ES Evolution"
    },
    {
      id: "jamba",
      title: "Jamba: Hybrid Transformer-Mamba",
      description: "PyTorch Implementation of Jamba, exploring the integration of Mamba's state space models with standard Transformer attention heads for infinite-context language modeling.",
      tags: ["PyTorch", "Mamba", "SSM", "LLMs"],
      links: [
        { url: "https://github.com/cataluna84/jamba", icon: "🐙", label: "GitHub" }
      ],
      metrics: "Hybrid Architecture"
    },
    {
      id: "football-ntap",
      title: "Football Tactical Next-Action Prediction",
      description: "Shipd Project Eris. 4-component ensemble with task-coupling: DeBERTa-v3, cross-encoder MCQ scorer, zero-shot NLI, and a MoE fusion (Qwen3.5-35B + Gemma-4-26B) with PRM rerank.",
      tags: ["NLP", "MoE", "Ensemble", "W&B"],
      links: [
        { url: "https://github.com/cataluna84/football-ntap", icon: "🐙", label: "GitHub" }
      ],
      metrics: "Combined Score: 0.65+"
    }
  ],

  arcAgi: [
    {
      year: "2026",
      title: "ARC Prize 2026 (Active)",
      placement: "Active Competitor",
      description: "Currently iterating with agent zoos, frame segmenters, and BFS trigger algorithms.",
      medal: "🔄"
    },
    {
      year: "2025",
      title: "ARC Prize 2025",
      placement: "87th / 1,455",
      description: "Created an AI capable of novel reasoning.",
      medal: "🥉 Bronze"
    },
    {
      year: "2024",
      title: "ARC Prize 2024",
      placement: "24th / 1,427",
      description: "Created an AI capable of solving reasoning tasks it has never seen before.",
      medal: "🥈 Silver"
    }
  ],

  kaggleCompetitions: [
    { name: "ARC Prize 2024", placement: "24/1427", type: "Featured", time: "2024", medal: "Silver" },
    { name: "Dog Breed Identification", placement: "53/72", type: "Community", time: "2023", medal: "" },
    { name: "ARC Prize 2025", placement: "87/1455", type: "Featured", time: "2025", medal: "Bronze" },
    { name: "Google Universal Image Embedding", placement: "213/1022", type: "Research", time: "2023", medal: "" },
    { name: "Feedback Prize - English Language Learning", placement: "245/2654", type: "Featured", time: "2023", medal: "Bronze" },
    { name: "Vesuvius Challenge - Ink Detection", placement: "260/1249", type: "Featured", time: "2023", medal: "Bronze" },
    { name: "RSNA Screening Mammography", placement: "345/1687", type: "Featured", time: "2023", medal: "" },
    { name: "Feedback Prize - Effective Arguments", placement: "373/1557", type: "Featured", time: "2022", medal: "" },
    { name: "Make Data Count", placement: "393/1282", type: "Research", time: "2025", medal: "" },
    { name: "Optiver - Trading at the Close", placement: "434/4436", type: "Featured", time: "2024", medal: "" },
    { name: "Google - Isolated Sign Language", placement: "473/1165", type: "Research", time: "2023", medal: "" },
    { name: "UM - Game-Playing Strength MCTS", placement: "485/1608", type: "Research", time: "2025", medal: "" },
    { name: "Google - ASL Fingerspelling", placement: "572/1314", type: "Research", time: "2023", medal: "" },
    { name: "Automated Essay Scoring 2.0", placement: "717/2706", type: "Featured", time: "2024", medal: "" },
    { name: "CMI - Detect Behavior with Sensor Data", placement: "723/2657", type: "Featured", time: "2025", medal: "" },
    { name: "Kaggle - LLM Science Exam", placement: "730/2664", type: "Featured", time: "2024", medal: "" },
    { name: "HMS - Harmful Brain Activity", placement: "761/2767", type: "Research", time: "2024", medal: "" },
    { name: "LLM - Detect AI Generated Text", placement: "931/4358", type: "Featured", time: "2024", medal: "" },
    { name: "AI Mathematical Olympiad", placement: "1068/2212", type: "Featured", time: "2025", medal: "" },
    { name: "Parkinson's Freezing of Gait", placement: "1069/1379", type: "Research", time: "2023", medal: "" }
  ],

  githubProjects: [
    { title: "Generative_Deep_Learning", desc: "Generative Modeling notebooks covering GANs, Diffusion, and VAEs.", tags: ["Jupyter", "GANs"], url: "https://github.com/cataluna84/Generative_Deep_Learning" },
    { title: "S5", desc: "Simplified State Space Layers for Sequence Modeling.", tags: ["SSM", "Sequence Modeling"], url: "https://github.com/cataluna84/S5" },
    { title: "s4", desc: "Structured State Space Sequence Models codebase updates.", tags: ["SSM", "Time Series"], url: "https://github.com/cataluna84/s4" }
  ],

  contributions: [
    { org: "Google DeepMind (penzai)", role: "Contributor", desc: "Contributions to the JAX-based neural network library." },
    { org: "TransformerLens", role: "Contributor", desc: "Contributions to the mechanistic interpretability library for language models." },
    { org: "Kyutai Labs (moshi)", role: "Contributor", desc: "Contributions to the open-source speech-text foundation model." }
  ],

  hfModels: [
    { title: "Unconditional Image Generation", desc: "Custom model architecture for image synthesis. (12 likes)", type: "Image Generation" },
    { title: "7B Text Generation Model", desc: "Large language model fine-tuned for high-quality text output.", type: "Text Generation" },
    { title: "Token Classification Suite", desc: "Suite of 6 models fine-tuned for Named Entity Recognition tasks.", type: "NLP" },
    { title: "Text Classification Models", desc: "Specialized models for text categorization and sentiment.", type: "NLP" }
  ],

  blog: [
    { title: "Fine tuning CLIP with Remote Sensing (Satellite) images and captions", venue: "HuggingFace Blog", date: "Oct 2021", url: "https://huggingface.co/blog/fine-tune-clip-rsicd", desc: "Collaborative project during the Flax/JAX Community Week training models on TPUs." }
  ],

  skills: {
    "Deep Learning & Research": ["PyTorch", "JAX/Flax", "State Space Models (S4/S5/Mamba)", "Transformers", "Mechanistic Interpretability", "RL & CMA-ES"],
    "ML Engineering & MLOps": ["CUDA/Triton", "Weights & Biases", "Docker", "Model Quantization (INT4/INT8/FP8)", "FlashAttention", "HuggingFace"],
    "Computer Vision & Edge": ["DeepStream SDK", "On-Device Inference (iOS)", "Vision Transformers", "CLIP"],
    "Languages & Tools": ["Python", "C++", "uv", "Make", "Git", "Linux"]
  },

  experience: [
    { role: "Founder & CEO", company: "OM Enterprises — AI Research & Engineering Labs", period: "Present", desc: "Leading cutting-edge ML research and providing enterprise services focused on multimodal data (audio, text, video) with high throughput and low latency.", tags: ["Leadership", "Research", "Applied ML"] },
    { role: "Community Lead & Researcher", company: "Cohere Labs", period: "Present", desc: "Leading community initiatives and conducting research on LLMs, multilinguality, and mechanistic interpretability.", tags: ["Community", "LLMs"] },
    { role: "Contributor Lead", company: "TWiML (This Week in ML)", period: "5+ years", desc: "Leading weekly Generative AI meetups, coordinating study groups, and organizing community engineering projects.", tags: ["Community", "GenAI"] },
    { role: "Previous Roles", company: "InfoBeans, TCS", period: "Pre-2020", desc: "14+ years of software engineering and development experience building scalable enterprise systems before transitioning fully to AI research.", tags: ["Software Engineering", "Architecture"] }
  ]
};

// DOM Injection Functions

function createProjectCard(project) {
  return `
    <div class="project-card glass">
      <div class="project-card-header">
        <div class="project-icon">🔬</div>
        <div class="project-links">
          ${project.links.map(link => `<a href="${link.url}" target="_blank" title="${link.label}">${link.icon}</a>`).join('')}
        </div>
      </div>
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      ${project.metrics ? `<div class="project-result">📊 ${project.metrics}</div><br>` : ''}
      <div class="project-tags">
        ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
      </div>
    </div>
  `;
}

function createARCGrid(items) {
  return items.map(item => `
    <div class="research-card glass">
      <div class="venue">${item.year} — ${item.medal || item.placement}</div>
      <h3>${item.title}</h3>
      <p>${item.description}</p>
      <div class="tag" style="display:inline-block; margin-top:10px;">${item.placement}</div>
    </div>
  `).join('');
}

function createKaggleTable(items) {
  const rows = items.map(item => `
    <tr style="border-bottom: 1px solid var(--border-glass);">
      <td style="padding: 1rem 0;"><strong>${item.name}</strong></td>
      <td style="padding: 1rem 0; color: var(--text-secondary);">${item.type}</td>
      <td style="padding: 1rem 0; color: var(--accent-secondary); font-family: var(--font-mono);">${item.placement}</td>
      <td style="padding: 1rem 0;">${item.medal ? `<span class="project-result">🏅 ${item.medal}</span>` : ''}</td>
    </tr>
  `).join('');

  return `
    <div style="overflow-x: auto; margin-top: 2rem;">
      <table style="width: 100%; text-align: left; border-collapse: collapse;">
        <thead>
          <tr style="border-bottom: 2px solid var(--border-hover);">
            <th style="padding-bottom: 1rem;">Competition</th>
            <th style="padding-bottom: 1rem;">Type</th>
            <th style="padding-bottom: 1rem;">Rank</th>
            <th style="padding-bottom: 1rem;">Medal</th>
          </tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>
      <p style="margin-top: 1rem; font-size: 0.85rem; color: var(--text-muted);">
        Showing 20 of 52 completed competitions. Rank 1,532 / 202,876 globally.
      </p>
    </div>
  `;
}

function createGithubCard(item) {
  return `
    <div class="project-card glass" style="padding: 1.5rem;">
      <h3><a href="${item.url}" target="_blank">${item.title}</a></h3>
      <p style="font-size: 0.85rem;">${item.desc}</p>
      <div class="project-tags">
        ${item.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
      </div>
    </div>
  `;
}

function createCommunityCard(item) {
  return `
    <div class="community-card glass">
      <div class="icon">🤝</div>
      <h3>${item.org}</h3>
      <div class="role">${item.role}</div>
      <p>${item.desc}</p>
    </div>
  `;
}

function createHFCard(item) {
  return `
    <div class="research-card glass">
      <div class="venue">${item.type}</div>
      <h3>${item.title}</h3>
      <p>${item.desc}</p>
    </div>
  `;
}

function createTimeline(items) {
  return items.map((item, index) => `
    <div class="timeline-item ${index === 0 ? 'current' : ''}">
      <div class="timeline-header">
        <div class="timeline-role">${item.role}</div>
        <div class="timeline-company">@ ${item.company}</div>
        <div class="timeline-period">${item.period}</div>
      </div>
      <p class="timeline-desc">${item.desc}</p>
      <div class="timeline-tags">
        ${item.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

function createSkills(skillsObj) {
  return Object.entries(skillsObj).map(([category, skills]) => `
    <div class="skill-category">
      <h3>${category}</h3>
      <div class="skill-pills">
        ${skills.map(skill => `<span class="skill-pill">${skill}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

// Initialization
document.addEventListener('DOMContentLoaded', () => {
  // Inject Content
  document.getElementById('projectsGrid').innerHTML = portfolioData.tier1Projects.map(createProjectCard).join('');
  document.getElementById('arcGrid').innerHTML = createARCGrid(portfolioData.arcAgi);
  document.getElementById('kaggleTable').innerHTML = createKaggleTable(portfolioData.kaggleCompetitions);
  document.getElementById('githubGrid').innerHTML = portfolioData.githubProjects.map(createGithubCard).join('');
  document.getElementById('contribGrid').innerHTML = portfolioData.contributions.map(createCommunityCard).join('');
  document.getElementById('hfGrid').innerHTML = portfolioData.hfModels.map(createHFCard).join('');
  document.getElementById('timeline').innerHTML = createTimeline(portfolioData.experience);
  
  // Note: For community section I'm mirroring the contributions logic or we can add MLT/LucknowAI here
  const extraCommunity = [
    { org: "Lucknow AI Labs", role: "Core Organizer", desc: "Fostering AI research and development community in Lucknow, India." },
    { org: "Machine Learning Tokyo (MLT)", role: "Contributor", desc: "Participating in Japan's premier AI engineering community." }
  ];
  document.getElementById('communityGrid').innerHTML = extraCommunity.map(createCommunityCard).join('');
  
  document.getElementById('skillsWrapper').innerHTML = createSkills(portfolioData.skills);
  
  document.getElementById('blogGrid').innerHTML = portfolioData.blog.map(item => `
    <div class="research-card glass">
      <div class="venue">${item.date} | ${item.venue}</div>
      <h3><a href="${item.url}" target="_blank">${item.title}</a></h3>
      <p>${item.desc}</p>
    </div>
  `).join('');

  // Mobile Nav Toggle
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');
  
  toggle.addEventListener('click', () => {
    links.classList.toggle('open');
  });

  // Nav Background on Scroll
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  });

  // Reveal Animations
  const reveals = document.querySelectorAll('.reveal');
  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    const elementVisible = 150;
    
    reveals.forEach(reveal => {
      const elementTop = reveal.getBoundingClientRect().top;
      if (elementTop < windowHeight - elementVisible) {
        reveal.classList.add('visible');
      }
    });
  };

  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll(); // Trigger on load
});
