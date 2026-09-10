// Data for the portfolio sections

const portfolioData = {
  tier1Projects: [
    {
      id: "nanogpt-jax",
      title: "NanoGPT with JAX",
      description: "Pure-JAX implementation and research codebase for scalable LLM architectures, spanning NanoGPT-style training and extensions for Cloud TPU workflows. Includes launch tooling for long-horizon sequence-to-sequence translation and language-modeling runs.",
      tags: ["JAX", "Large Language Models", "Cloud TPU", "Distributed Training"],
      links: [
        { url: "https://github.com/cataluna84/llm-architectures", icon: "🐙", label: "GitHub" },
        { url: "https://www.youtube.com/watch?v=iGJNnUMGHJk", icon: "🎥", label: "RAW Worklog Part 51" },
        { url: "https://www.youtube.com/watch?v=5c03fmryQoc", icon: "🎬", label: "RAW Worklog Part 52" }
      ],
      metrics: "TPU v5e-64 & v6e-16"
    },
    {
      id: "lid",
      title: "LID — Layer-Wise Multilingual Language ID",
      description: "Unified mechanistic-interpretability and systems study of how language identification emerges through depth in compact foundation models (~0.6B–8B), across Tiny Aya, Gemma 4, Qwen 3 and Qwen 3.5. Covers 67 languages with code-mixing and transliteration stress tests, per-layer quantization, circuit-preserving pruning, script-first early exit, and MatFormer elastic-depth inference.",
      tags: ["PyTorch", "Mechanistic Interpretability", "Model Compression", "Quantization", "Pruning"],
      links: [
        { url: "https://github.com/cataluna84/lid", icon: "🐙", label: "GitHub" },
        { url: "https://github.com/cataluna84/lid/blob/main/docs/paperback.md", icon: "📄", label: "Project Paperback" }
      ],
      metrics: "30–50% faster inference, no F1 loss"
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
      id: "vision-interpretability",
      title: "Vision Interpretability Project",
      description: "Community-driven effort to reproduce, consolidate and extend core visualizations from the Circuits thread for InceptionV1 — activation maximization, dataset-driven neuron exemplars, curve-detector visualizations and circuit discovery — as one well-documented open-source codebase with reusable notebooks and reproducible pipelines.",
      tags: ["Computer Vision", "Mechanistic Interpretability", "InceptionV1", "Applied ML"],
      links: [
        { url: "https://github.com/Cohere-Labs-Community/Vision-Interpretability", icon: "🐙", label: "GitHub" },
        { url: "https://huggingface.co/spaces/akankshanc/inception-v1-microscope", icon: "🤗", label: "InceptionV1 Microscope Space" },
        { url: "https://www.notion.so/Vision-Interpretability-Project-30edf04eb8358007b59ed8fea617b18e", icon: "📓", label: "Notion" }
      ],
      metrics: "Circuits Thread Reproduction"
    },
    {
      id: "tiny-aya-translation",
      title: "TinyAya: Simultaneous Translation",
      description: "Turkish↔Hindi speech-to-speech translation for an extremely low-resource language pair. LoRA-adapts a Cohere2 backbone to drive a frozen Moshi depth decoder over Mimi audio codes, with a parallel text \"inner-monologue\" stream. Built the end-to-end corpus, synthetic-speech, audio-token, training and checkpoint pipeline; trained 76,250 steps (2.07 epochs) on a Cloud TPU v6e-16.",
      tags: ["Speech Translation", "Multilingual LLMs", "LoRA", "TPU Training"],
      links: [
        { url: "https://github.com/tiny-aya-simultaneous-translation", icon: "🐙", label: "GitHub Org" },
        { url: "https://cohere-labs-community.github.io/blog/2026/adapting-moshi-low-resource-speech-translation/", icon: "📝", label: "Cohere Labs Blog" },
        { url: "https://huggingface.co/tiny-aya-translate", icon: "🤗", label: "HF Dataset & Weights" }
      ],
      metrics: "Val composite 2.8199 @ step 76k"
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
      tags: ["Mechanistic Interpretability", "Multilingual Representation Learning", "CKA"],
      links: [
        { url: "https://github.com/rsk2327/Tiny-Aya-Under-the-hood", icon: "🐙", label: "GitHub" },
        { url: "https://github.com/rsk2327/Tiny-Aya-Under-the-hood/blob/main/analysis/cross_lingual_embedding_alignment/paperback.md", icon: "📄", label: "Research Paperback" }
      ],
      metrics: "3.35B params, 36 layers"
    },
    {
      id: "cohere-misalignment",
      title: "Cross-Lingual Emergent Misalignment",
      description: "Does harmful behavior induced in one language transfer through shared representations? Fine-tunes the 3.35B-parameter Tiny Aya family on insecure English text, then measures emergent-misalignment transfer across English, Portuguese, Turkish, Hindi, Marathi, Urdu, Hausa and Yoruba. Finds evidence of a shared internal misalignment direction concentrated in a middle band of layers, confirmed by activation steering using a direction extracted from English data alone.",
      tags: ["AI Safety", "Mechanistic Interpretability", "Multilingual LLMs", "Representation Steering"],
      links: [
        { url: "https://github.com/Cohere-Labs-Community/crosslingual-emergent-misalignment", icon: "🐙", label: "GitHub" },
        { url: "https://github.com/Cohere-Labs-Community/crosslingual-emergent-misalignment/blob/main/experimental/mechanistic_analysis/paper/paperback.md", icon: "📄", label: "Mechanistic Analysis Paperback" },
        { url: "https://openreview.net/forum?id=JjtZl9jTSW", icon: "🎓", label: "ICML 2026 Workshop Poster" }
      ],
      metrics: "ICML 2026 MechInterp Workshop"
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
      description: "Tactical next-action and reasoning prediction over 348 football match contexts from Shipd Project Eris. Task-coupled four-component ensemble: DeBERTa-v3 base and large, a cross-encoder multiple-choice scorer, zero-shot NLI, and three-pass MoE fusion (Qwen3.5-35B-A3B-Int4 + Gemma-4-26B-A4B-it) with process-reward-model reranking, instrumented in W&B.",
      tags: ["NLP", "Model Ensembling", "Sports Analytics", "LLM Reasoning", "W&B"],
      links: [
        { url: "https://github.com/cataluna84/football-ntap", icon: "🐙", label: "GitHub" }
      ],
      metrics: "Target: 0.80 combined score"
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

  // Placements, years and medals mirror mayank_bhaskar_projects.md, which is the
  // source of truth. `slug` is the Kaggle competition slug: it links each row and
  // gives scripts/check_content_sync.py an exact key to join on, so a display-name
  // tweak here can never silently break the drift check.
  kaggleCompetitions: [
    { name: "ARC Prize 2024", slug: "arc-prize-2024", placement: "24/1427", type: "Featured", time: "2024", medal: "Silver" },
    { name: "Dog Breed Identification", slug: "dog-breed-identification-mlbootcamp", placement: "53/72", type: "Invitation Only", time: "2022", medal: "" },
    { name: "Email Spam Classification", slug: "email-spam-classify", placement: "69/113", type: "Invitation Only", time: "2022", medal: "" },
    { name: "ARC Prize 2025", slug: "arc-prize-2025", placement: "87/1455", type: "Featured", time: "2025", medal: "Bronze" },
    { name: "Google Universal Image Embedding", slug: "google-universal-image-embedding", placement: "213/1022", type: "Research", time: "2022", medal: "" },
    { name: "Feedback Prize - English Language Learning", slug: "feedback-prize-english-language-learning", placement: "245/2654", type: "Featured", time: "2022", medal: "Bronze" },
    { name: "Vesuvius Challenge - Ink Detection", slug: "vesuvius-challenge-ink-detection", placement: "260/1249", type: "Featured", time: "2023", medal: "" },
    { name: "RSNA Screening Mammography", slug: "rsna-breast-cancer-detection", placement: "345/1687", type: "Featured", time: "2023", medal: "" },
    { name: "Feedback Prize - Effective Arguments", slug: "feedback-prize-effectiveness", placement: "373/1557", type: "Featured", time: "2022", medal: "" },
    { name: "Make Data Count", slug: "make-data-count-finding-data-references", placement: "393/1282", type: "Research", time: "2024", medal: "" },
    { name: "Optiver - Trading at the Close", slug: "optiver-trading-at-the-close", placement: "434/4436", type: "Featured", time: "2023", medal: "Bronze" },
    { name: "Google - Isolated Sign Language", slug: "asl-signs", placement: "473/1165", type: "Research", time: "2023", medal: "" },
    { name: "UM - Game-Playing Strength MCTS", slug: "um-game-playing-strength-of-mcts-variants", placement: "485/1608", type: "Research", time: "2024", medal: "" },
    { name: "Google - ASL Fingerspelling", slug: "asl-fingerspelling", placement: "572/1314", type: "Research", time: "2023", medal: "" },
    { name: "Automated Essay Scoring 2.0", slug: "learning-agency-lab-automated-essay-scoring-2", placement: "717/2706", type: "Featured", time: "2024", medal: "" },
    { name: "CMI - Detect Behavior with Sensor Data", slug: "cmi-detect-behavior-with-sensor-data", placement: "723/2657", type: "Featured", time: "2024", medal: "" },
    { name: "Kaggle - LLM Science Exam", slug: "kaggle-llm-science-exam", placement: "730/2664", type: "Featured", time: "2023", medal: "" },
    { name: "HMS - Harmful Brain Activity", slug: "hms-harmful-brain-activity-classification", placement: "761/2767", type: "Research", time: "2024", medal: "" },
    { name: "LLM - Detect AI Generated Text", slug: "llm-detect-ai-generated-text", placement: "931/4358", type: "Featured", time: "2023", medal: "" },
    { name: "AI Mathematical Olympiad", slug: "ai-mathematical-olympiad-progress-prize-2", placement: "1068/2212", type: "Featured", time: "2024", medal: "" },
    { name: "Parkinson's Freezing of Gait", slug: "tlvmc-parkinsons-freezing-gait-prediction", placement: "1069/1379", type: "Research", time: "2023", medal: "" }
  ],

  githubProjects: [
    { title: "Generative_Deep_Learning", desc: "Generative Modeling notebooks covering GANs, Diffusion, and VAEs.", tags: ["Jupyter", "GANs"], url: "https://github.com/cataluna84/Generative_Deep_Learning" },
    { title: "S5", desc: "Simplified State Space Layers for Sequence Modeling.", tags: ["SSM", "Sequence Modeling"], url: "https://github.com/cataluna84/S5" },
    { title: "s4", desc: "Structured State Space Sequence Models codebase updates.", tags: ["SSM", "Time Series"], url: "https://github.com/cataluna84/s4" },
    { title: "DistAya", desc: "Expeditions Aya (Cohere For AI): pruning, sparsity, knowledge distillation and quantization of multilingual LLMs to run at large batch sizes on cloud, mobile and edge.", tags: ["Distillation", "Pruning", "Quantization"], url: "https://huggingface.co/DistAya" },
    { title: "TWIML-RAG", desc: "TWIML Generative AI community project: a transcription pipeline over the TWIML podcast plus a dialog agent answering questions about episodes and their subject areas.", tags: ["RAG", "Community", "LLMs"], url: "https://github.com/TWIML/TWIML-RAG" },
    { title: "llm-rag-eval", desc: "Google AI Hackathon: fine-tuning RAGAS metrics with DSPy so RAG evaluation is optimized for the domain the system actually operates in.", tags: ["DSPy", "RAG Eval", "Prompt Engineering"], url: "https://devpost.com/software/llm-rag-eval" },
    { title: "Deep-KRR", desc: "CoSubmitting Summer @ ICLR 2022 proposal on Deep Banach Space Kernels — a representer theorem for compositional reproducing kernel Banach spaces whose solution set contains ReLU nets.", tags: ["Kernel Methods", "Mathematics", "Theory"], url: "https://github.com/MrityunjayBhardwaj/Deep-KRR" },
    { title: "LLM Cohort — Multilingual Long Context", desc: "Orchestrated six Cohere Labs sessions on enhancing multilingual long-context processing: RoPE, NoPE and Long RoPE variants over MoEs, plus hybrid Transformer/SSM models.", tags: ["RoPE", "MoE", "SSM"], url: "https://sites.google.com/cohere.com/coherelabs-community/community-programs/birds/llm-cohort" }
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
    { title: "Cross-Lingual Emergent Misalignment: A Shared Direction Propagates Safety Failures Across Languages", venue: "ICML 2026 Mechanistic Interpretability Workshop", date: "Jun 2026", url: "https://openreview.net/forum?id=JjtZl9jTSW", desc: "Virtual poster. Structured, nonuniform transfer of induced misalignment across eight typologically diverse languages." },
    { title: "Adapting Moshi for Low-Resource Speech Translation", venue: "Cohere Labs Blog", date: "2026", url: "https://cohere-labs-community.github.io/blog/2026/adapting-moshi-low-resource-speech-translation/", desc: "How TinyAya drives a frozen Moshi depth decoder over Mimi audio codes for Turkish↔Hindi speech-to-speech translation." },
    { title: "Layer-Wise Multilingual LID in Compact Foundation Models", venue: "Project Paperback", date: "Apr 2026", url: "https://github.com/cataluna84/lid/blob/main/docs/paperback.md", desc: "Interpretability-guided compression across 67 languages and models from 0.6B to 8B parameters." },
    { title: "Cross-Lingual Embedding Alignment in Tiny Aya Global", venue: "Research Paperback", date: "Apr 2026", url: "https://github.com/rsk2327/Tiny-Aya-Under-the-hood/blob/main/analysis/cross_lingual_embedding_alignment/paperback.md", desc: "CKA analysis of how language-agnostic processing and region-specific specialization emerge across 36 layers." },
    { title: "Fine tuning CLIP with Remote Sensing (Satellite) images and captions", venue: "HuggingFace Blog", date: "Oct 2021", url: "https://huggingface.co/blog/fine-tune-clip-rsicd", desc: "Collaborative project during the Flax/JAX Community Week training models on TPUs. 3rd place in the Hugging Face JAX Global Sprint." }
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
    { role: "Contributor Lead", company: "TWiML (This Week in ML)", period: "5+ years", desc: "Leading the weekly Generative AI Problem Solving, Research & Impact meetup, coordinating study groups, and organizing community engineering projects.", tags: ["Community", "GenAI"] },
    {
      role: "Innovation Day — Deep Learning R&D",
      company: "InfoBeans",
      period: "Sep 2018 – Jan 2019",
      desc: "Built streaming analytics applications on NVIDIA's DeepStream SDK and 3D human modeling on the Intel RealSense D435i depth camera.",
      bullets: [
        "Wrote custom kernels and handled training, fine-tuning and inference optimization for vision models",
        "Detected cars in full versus empty parking spots from live camera feeds",
        "Streamed live traffic-intersection data to detect number plates and vehicle features",
        "Developed 3D mesh-based human modeling systems on RealSense depth input"
      ],
      tags: ["C++", "Python", "DeepStream SDK", "Computer Vision", "GPU Programming"]
    },
    {
      role: "MySelfies — iOS Computer Vision",
      company: "InfoBeans",
      period: "Jul 2017 – Apr 2018",
      desc: "Developed the story feature for a consumer selfie app, with plans to bring ARKit in.",
      bullets: [
        "Trained computer vision models via style transfer in a Lua-based environment",
        "Pruned, distilled and quantized models for Apple's on-device iOS ecosystem",
        "Project stalled on the decision not to rewrite the app from the ground up, so the CV models never reached production"
      ],
      tags: ["Swift", "Lua", "Style Transfer", "Model Optimization"]
    },
    {
      role: "E-Assure, Android R&D & Data Migration",
      company: "Tata Consultancy Services — CoE Automation Lab, Lucknow",
      period: "May 2013 – Dec 2015",
      desc: "Product development across three mandates: the E-Assure test-automation and analytics product, an Android integration feasibility study, and a cross-tool data migration product.",
      bullets: [
        "E-Assure: logical and physical data modeling, plus base architecture on Spring, Hibernate, connection pooling and Jasig CAS single sign-on",
        "E-Assure: automation over HP ALM test cases, an analytics layer, and role-based user management",
        "E-Assure: designed the scheduler and licensing mechanism, deployed on Tomcat with Apache Commons Daemon, built with Maven and covered by Spring JUnit tests",
        "Android R&D: assessed Android architecture, hardware and software requirements for integration with existing enterprise applications, including parsers and REST-based Java web services",
        "Data Migration: feasibility analysis of HP ALM, ServiceNow and Atlassian JIRA, then a batch scheduler architecture consuming and producing REST services"
      ],
      tags: ["Java", "Spring Security", "Hibernate", "REST APIs", "Maven", "JUnit"]
    },
    {
      role: "ESS-IVR — Java Developer",
      company: "Tata Consultancy Services — Walgreens, Noida",
      period: "May 2012 – Apr 2013",
      desc: "Built and maintained an Interactive Voice Response system in VXML for Walgreens pharmacy operations.",
      bullets: [
        "Architected the business layer and data management components of the VXML-based system",
        "Developed entity and session beans, customer flows and server-side J2EE components",
        "Collaborated on a cache layer for faster database retrieval",
        "Maintained a reporting tool spanning multiple Walgreens pharmacy stores, fed by a nightly batch extracting from Avaya into Oracle RDBMS",
        "Maintained the distributed batch system and configured WebSphere for mailing"
      ],
      tags: ["Java", "VXML", "J2EE", "Oracle", "WebSphere"]
    },
    {
      role: "Telecom Inventory Management System",
      company: "Tata Consultancy Services — ILP, Hyderabad",
      period: "Jan 2012 – May 2012",
      desc: "Developed web software letting wholesalers sell products to retailers.",
      bullets: [
        "User interface module for the retailer-facing experience",
        "Stock management: product and accessory storage, offer creation, defective-product replacement and quantity updates",
        "Order management: placing and cancelling orders"
      ],
      tags: ["Java", "Java Enterprise Edition", "Web Development"]
    }
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
      <td style="padding: 1rem 0;"><strong><a href="https://www.kaggle.com/competitions/${item.slug}" target="_blank" rel="noopener">${item.name}</a></strong></td>
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
        All 21 completed competitions. Rank 1,532 / 202,856 globally.
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
      ${item.bullets ? `<ul class="timeline-bullets">${item.bullets.map(b => `<li>${b}</li>`).join('')}</ul>` : ''}
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
