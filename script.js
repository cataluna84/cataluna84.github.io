// Data for the portfolio sections

const portfolioData = {
  tier1Projects: [
    {
      id: "llm-serving-kernels",
      featuredOrder: 1,
      title: "LLM Serving & GPU Kernel Engineering",
      description: "Engineered custom CUDA C++ and OpenAI Triton kernels for attention and activation operators, then optimized vLLM serving by separating prompt prefill from autoregressive decode and pooling PagedAttention KV caches on A100/H100 GPUs.",
      tags: ["CUDA C++", "Triton", "vLLM", "GPU Systems", "Inference"],
      links: [],
      metrics: "38% lower TTFT · 3.2× request throughput"
    },
    {
      id: "nanogpt-jax",
      period: "Jul 2026 – Present",
      featuredOrder: 2,
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
      period: "Feb 2026 – Apr 2026",
      featuredOrder: 4,
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
      period: "Apr 2026 – Present",
      featuredOrder: 7,
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
      period: "Jan 2026 – Aug 2026",
      featuredOrder: 5,
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
      period: "Feb 2026 – Jul 2026",
      featuredOrder: 3,
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
      period: "Apr 2026 – Jun 2026",
      featuredOrder: 6,
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
    { title: "CLIP-RSICD — Remote Sensing Vision-Language", desc: "Fine-tuned CLIP on satellite imagery and captions for image-text retrieval; placed third in the Hugging Face Flax/JAX Community Sprint.", tags: ["JAX", "CLIP", "Computer Vision"], url: "https://huggingface.co/blog/fine-tune-clip-rsicd" },
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
    "Deep Learning & Research": ["PyTorch", "JAX/Flax", "Diffusion, GANs & VAEs", "Transformers & VLMs", "LoRA / QLoRA", "Mechanistic Interpretability", "RL & Sim2Real"],
    "ML Systems & MLOps": ["CUDA C++ / Triton", "vLLM", "TensorRT", "TPU Training", "PyTorch DDP / FSDP", "Weights & Biases", "TFX", "Quantization & Distillation"],
    "Computer Vision & Edge": ["Detection & Segmentation", "Visual Anomaly Detection", "OOD & Drift Monitoring", "DeepStream SDK", "CoreML / iOS", "CLIP & Vision Transformers", "3D / RGB-D"],
    "Languages & Tools": ["Python", "C++", "uv", "Make", "Git", "Linux"]
  },

  experience: [
    { role: "Founder, CEO & Principal AI Research Engineer", company: "OM Enterprises — AI Research & Engineering Labs", period: "Apr 2021 – Present", desc: "Direct research and engineering across robust computer vision, generative image and video systems, and interactive multimodal models. Focus on data-scarce settings, domain shift, reliable evaluation, and low-latency deployment.", bullets: ["Advise and collaborate on 50+ AI research papers, including experimental design, controlled ablations, systems scaling, and hardware/software trade-offs", "Build computer-vision and multimodal pipelines for industrial inspection, video analytics, healthcare, and robotics; account for data drift, illumination changes, confidence degradation, and out-of-distribution behavior", "Lead distributed training and evaluation on Google TPU Research Cloud and TPU Builder resources", "Develop high-throughput inference systems, custom GPU kernels, model compression pipelines, and low-latency multimodal speech systems", "Fine-tuned CLIP for satellite image and caption retrieval; placed third in the Hugging Face Flax/JAX Community Sprint"], tags: ["Research Engineering", "Generative AI", "Computer Vision", "Multimodal Systems"] },
    { role: "Lead Consultant & Computer Vision Systems Engineer", company: "InfoBeans Technologies", period: "May 2017 – Mar 2021", desc: "Built real-time computer-vision systems for edge video inspection, generative imaging, and spatial AI.", bullets: ["Developed NVIDIA DeepStream and TensorRT pipelines for concurrent camera feeds, occupancy and anomaly detection, and license-plate recognition", "Trained image-to-image and style-transfer models; compressed models for Apple CoreML with reported inference below 25 ms", "Built synthetic simulation and Sim2Real experiments for autonomous and robotics applications", "Worked with Apple ARKit/LiDAR and Intel RealSense RGB-D data for 3D mesh, point-cloud, and human-pose pipelines", "Founded weekly Innovation Tuesday research seminars for engineering teams"], tags: ["Computer Vision", "DeepStream", "TensorRT", "Edge AI", "3D Vision"] },
    { role: "Android Systems & OS Engineer", company: "Independent Systems Research", period: "Dec 2016 – Apr 2017", desc: "Built a customized Android OS from AOSP source, including Linux kernel compilation, cross-compilation toolchains, and hardware abstraction integration; also developed stereoscopic VR prototypes.", tags: ["AOSP", "Linux Kernel", "Android", "VR"] },
    { role: "Java Systems Engineer & Consultant", company: "Broadleaf Commerce", period: "Jan 2016 – Nov 2016", desc: "Built enterprise e-commerce backend modules and improved database indexing, connection pooling, and transaction caching for high-concurrency workloads.", tags: ["Java", "Enterprise Systems", "Performance"] },
    { role: "System Engineer", company: "Tata Consultancy Services", period: "May 2012 – Dec 2015", desc: "Built enterprise platforms, data migration services, and high-concurrency voice and ETL systems across TCS teams in Lucknow, Noida, and Hyderabad.", bullets: ["Architected Java batch schedulers, REST services, and relational schemas for HP ALM, ServiceNow, JIRA, and E-Assure", "Built Walgreens ESS-IVR modules and nightly pipelines streaming Avaya data into Oracle", "Recognized with Star of the Learners Group and Star of the Month (twice)"], tags: ["Java", "Spring", "REST APIs", "ETL", "Oracle"] },
  ]
};

// DOM Injection Functions

function createProjectCard(project) {
  return `
    <div class="project-card glass">
      ${project.period ? `<div class="project-period">${project.period}</div>` : ''}
      <div class="project-card-header">
        <div class="project-icon">🔬</div>
        <div class="project-links">
          ${project.links.map(link => `<a href="${link.url}" target="_blank" rel="noopener" title="${link.label}" aria-label="${link.label} — ${project.title}">${link.icon}</a>`).join('')}
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
  document.getElementById('projectsGrid').innerHTML = [...portfolioData.tier1Projects]
    .sort((a, b) => (a.featuredOrder || 99) - (b.featuredOrder || 99))
    .map(createProjectCard).join('');
  document.getElementById('arcGrid').innerHTML = createARCGrid(portfolioData.arcAgi);
  document.getElementById('kaggleTable').innerHTML = createKaggleTable(portfolioData.kaggleCompetitions);
  document.getElementById('githubGrid').innerHTML = portfolioData.githubProjects.map(createGithubCard).join('');
  document.getElementById('contribGrid').innerHTML = portfolioData.contributions.map(createCommunityCard).join('');
  document.getElementById('hfGrid').innerHTML = portfolioData.hfModels.map(createHFCard).join('');
  document.getElementById('timeline').innerHTML = createTimeline(portfolioData.experience);
  
  // Note: For community section I'm mirroring the contributions logic or we can add MLT/LucknowAI here
  const extraCommunity = [
    { org: "Cohere Labs", role: "Open-Science Community Lead — Computer Vision · Feb 2025–Present", desc: "Lead the computer-vision sub-field, curate research talks, and mentor BIRDS researchers on experimental design, vision-language fine-tuning, and benchmark evaluation." },
    { org: "Yannic Kilcher's ML Community", role: "Presenter & Research Contributor · Jan 2024–Present", desc: "Present computer-vision, generative-model, and interpretability paper discussions; contribute to an ARC visual-reasoning research group." },
    { org: "TWiML (This Week in ML & AI)", role: "Research Contributor & Technical Community Lead · Sep 2020–Present", desc: "Lead weekly research sessions on Generative AI, multimodal models, and deployment; contribute to the TWIML-RAG open-source project and study cohorts." },
    { org: "Machine Learning Tokyo (MLT)", role: "Research Contributor & Study Group Lead · Jul 2019–Jun 2023", desc: "Co-led CNN implementation and generative deep-learning cohorts, and organized paper dissections and study groups in ML mathematics and high-performance Python." },
    { org: "Lucknow AI Labs", role: "Community Advisor & Core AI R&D Lead · Oct 2024–Present", desc: "Lead research reading groups and applied experiments across open-weight vision-language models, parameter-efficient adapters, and edge deployment." }
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
