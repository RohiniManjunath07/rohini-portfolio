// Healthcare
import healthcareHome from "@/assets/healthcare/homepage.png";
import healthcareChat from "@/assets/healthcare/chat-demo.png";
import healthcareRetrieval from "@/assets/healthcare/retrieval-debug.png";

// Biometric
import bioHome from "@/assets/biometric/home.png";
import bioRegister from "@/assets/biometric/register-face.png";
import bioAuthenticate from "@/assets/biometric/authenticate-face.png";
import bioResult from "@/assets/biometric/register-face-success.png";

// Sign Language
import signPrediction from "@/assets/sign-language/amer_sign2.png";
import signDataset from "@/assets/sign-language/training-and-validation-accuracy.png";
import signTraining from "@/assets/sign-language/training-and-validation-loss.png";

// Causal
import causalDashboard from "@/assets/causal/dashboard.png";
import causalOutcome from "@/assets/causal/outcome-distribution-hist.png";
import causalTreatment from "@/assets/causal/treatment-group-distribution.png";

export type ProjectSlug =
  | "healthcare-rag"
  | "biometric-authentication"
  | "sign-language"
  | "causal-inference"
  | "autocaller"
  | "sbams";

export type Project = {
  slug: ProjectSlug;
  index: string;
  title: string;
  tagline: string;
  summary: string;
  category: string;
  status: "Shipped" | "In Development" | "Coming Soon";
  accent: string; // tailwind gradient classes
  tech: string[];
  surface: "web" | "mobile" | "research";
  overview?: string;
  problem?: string;
  research?: string;
  architecture?: { node: string; detail?: string }[];
  workflow?: string[];
  implementation?: string[];
  challenges?: { title: string; body: string }[];
  results?: string[];
  lessons?: string[];
  future?: string[];
  metrics?: { label: string; value: string }[];
  github?: string;
  screenshots?: string[];
};

export const projects: Project[] = [
  {
    slug: "healthcare-rag",
    index: "01",
    title: "Healthcare RAG Assistant",
    tagline: "Grounded medical answers from a private knowledge base.",
    summary:
      "A retrieval-augmented clinical assistant that grounds every answer in cited medical sources, with similarity scoring and analytics for clinicians.",
    category: "AI · Retrieval",
    status: "Shipped",
    accent: "from-violet-500/30 via-fuchsia-500/20 to-blue-500/20",
    surface: "web",
    tech: [
      "Python",
      "LangChain",
      "ChromaDB",
      "Sentence Transformers",
      "Groq",
      "Llama",
      "Streamlit",
    ],
    overview:
      "A clinician-facing assistant that answers natural language questions over a private medical corpus. Every answer carries citations, similarity scores, and an audit trail.",
    problem:
      "LLMs hallucinate. In a clinical setting that is unacceptable. The system needed to be fast, grounded in real documents, and transparent about its sources.",
    research:
      "Compared dense vs hybrid retrieval, evaluated chunking strategies (fixed window, semantic, sentence-aware), and benchmarked embedding models on a held-out medical Q&A set.",
    architecture: [
      { node: "User Query", detail: "Natural language question from the clinician UI." },
      { node: "Embedding Model", detail: "Sentence-Transformers MiniLM encodes the question." },
      { node: "Vector Database", detail: "ChromaDB returns top-k chunks via cosine similarity." },
      { node: "Retriever + Reranker", detail: "Filters by threshold and reorders by relevance." },
      { node: "LLM (Llama via Groq)", detail: "Prompted with retrieved context and guardrails." },
      { node: "Grounded Answer", detail: "Response with citations and similarity badges." },
    ],
    workflow: [
      "Ingest PDFs and clinical notes, normalize and split into semantic chunks.",
      "Generate dense embeddings and store vectors with metadata in ChromaDB.",
      "On query, embed, retrieve top-k, filter by similarity threshold.",
      "Build a constrained prompt with retrieved evidence and answer template.",
      "Stream the grounded answer back with citations and confidence.",
    ],
    implementation: [
      "Chunking: 512-token semantic chunks with 64-token overlap.",
      "Embeddings: all-MiniLM-L6-v2 for speed, swappable for domain models.",
      "Prompting: structured system prompt with refusal-when-uncertain rules.",
      "Hallucination control: hard threshold on similarity + 'cite or refuse' policy.",
      "UI: Streamlit shell with chat, retrieved-document panel, analytics, and config sidebar.",
    ],
    challenges: [
      {
        title: "Hallucinations",
        body: "Solved with strict grounding prompts and a minimum similarity gate before answering.",
      },
      {
        title: "Latency",
        body: "Moved inference to Groq for sub-second token streaming on Llama.",
      },
      {
        title: "Chunking quality",
        body: "Semantic-aware splitting outperformed fixed windows on recall@5.",
      },
    ],
    results: [
      "Sub-second first token with Groq inference.",
      "Every answer paired with cited chunks and similarity scores.",
      "Refusal path engaged when retrieved evidence falls below threshold.",
    ],
    lessons: [
      "Retrieval quality dominates generation quality.",
      "The prompt is the product — small changes shift behavior significantly.",
      "Transparency (citations, scores) is what makes clinicians trust the system.",
    ],
    future: [
      "Domain-specific embedding fine-tuning.",
      "Hybrid BM25 + dense retrieval.",
      "Conversation memory with patient-scoped namespaces.",
    ],
    metrics: [
      { label: "Avg. retrieval k", value: "5" },
      { label: "Chunk size", value: "512" },
      { label: "Refusal policy", value: "Threshold-based" },
    ],
    screenshots: [healthcareHome, healthcareChat, healthcareRetrieval],
  },
  {
    slug: "biometric-authentication",
    index: "02",
    title: "Biometric Authentication System",
    tagline: "On-device face and voice authentication, fully offline.",
    summary:
      "A Flutter app that authenticates users with face and voice biometrics using TensorFlow Lite — all inference runs on the device, nothing leaves the phone.",
    category: "Mobile · Edge AI",
    status: "Shipped",
    accent: "from-blue-500/30 via-cyan-500/20 to-emerald-500/20",
    surface: "mobile",
    tech: [
      "Flutter",
      "TensorFlow Lite",
      "MobileFaceNet",
      "Voice Embeddings",
      "SQLite",
      "On-device ML",
    ],
    overview:
      "Dual-factor biometric auth that runs entirely on the device. Face and voice embeddings are generated locally and compared with stored templates — no cloud calls, no PII leaves the phone.",
    problem:
      "Cloud biometric services raise privacy and compliance concerns. The goal was production-quality auth with zero network dependency.",
    research:
      "Evaluated MobileFaceNet vs. FaceNet for on-device inference, benchmarked TFLite quantized models, and compared voice embedding approaches.",
    architecture: [
      { node: "Camera / Mic", detail: "Capture frames or audio with privacy prompts." },
      { node: "Preprocessing", detail: "Face detect + crop, or MFCC feature extraction." },
      { node: "TFLite Model", detail: "MobileFaceNet (face) or voice encoder (audio)." },
      { node: "Embedding", detail: "Compact vector representation generated on device." },
      { node: "Similarity", detail: "Cosine similarity against stored template in SQLite." },
      { node: "Decision", detail: "Threshold gate returns success or failure with confidence." },
    ],
    workflow: [
      "Register: capture multiple samples, generate embeddings, store locally.",
      "Authenticate: capture sample, generate embedding, compare to template.",
      "Compute cosine similarity, gate against threshold, return decision.",
    ],
    implementation: [
      "Flutter UI with separate Register and Authenticate flows for face and voice.",
      "MobileFaceNet TFLite for face embeddings; custom audio pipeline for voice.",
      "SQLite for local template storage; no remote sync.",
      "Threshold tuning per modality based on FAR/FRR trade-off.",
    ],
    challenges: [
      {
        title: "Model size",
        body: "Quantized models to fit mobile memory and warm-start within milliseconds.",
      },
      {
        title: "Lighting & noise",
        body: "Captured multiple enrolment samples and averaged embeddings to stabilize.",
      },
      {
        title: "False accepts",
        body: "Tuned the similarity threshold per modality to balance security and UX.",
      },
    ],
    results: [
      "Fully offline — no network calls during auth.",
      "Dual-factor face + voice option available.",
      "Confidence shown to the user on every authentication.",
    ],
    lessons: [
      "Edge AI changes the privacy contract entirely.",
      "Enrolment quality determines authentication accuracy.",
      "Small UX details (live confidence, retry guidance) matter more than raw accuracy.",
    ],
    future: [
      "Liveness detection to defeat photo spoofs.",
      "Adaptive thresholds based on recent attempts.",
      "Secure enclave storage for templates.",
    ],
    screenshots: [bioHome, bioRegister, bioAuthenticate, bioResult],
  },
  {
    slug: "sign-language",
    index: "03",
    title: "Sign Language Recognition",
    tagline: "Computer vision for accessible communication.",
    summary:
      "A CNN that recognizes static sign-language gestures from images, with a full training pipeline, evaluation suite, and live prediction interface.",
    category: "Computer Vision",
    status: "Shipped",
    accent: "from-emerald-500/30 via-teal-500/20 to-blue-500/20",
    surface: "research",
    tech: ["Python", "TensorFlow", "Keras", "OpenCV", "NumPy", "Matplotlib"],
    overview:
      "An end-to-end vision pipeline that turns hand-sign images into letters. The notebook tells the full story: data → augmentation → architecture → training → evaluation → live predictions.",
    problem:
      "Make sign language recognition approachable with a small, well-trained CNN that runs on commodity hardware.",
    research:
      "Surveyed dataset variations, image preprocessing strategies, and lightweight CNN architectures suitable for real-time inference.",
    architecture: [
      { node: "Image Input", detail: "RGB hand-sign image, resized and normalized." },
      {
        node: "Augmentation",
        detail: "Rotations, shifts, zoom, flips to expand the training set.",
      },
      { node: "CNN Backbone", detail: "Stacked Conv-Pool blocks with batch norm and dropout." },
      { node: "Dense Head", detail: "Fully connected layers ending in softmax over classes." },
      { node: "Prediction", detail: "Top-1 letter with class probabilities." },
    ],
    workflow: [
      "Load dataset, visualize class distribution, build augmentation pipeline.",
      "Define CNN, compile with categorical cross-entropy and Adam.",
      "Train with checkpoints, plot learning curves, evaluate on test set.",
      "Render confusion matrix and classification report.",
      "Run live predictions on individual images.",
    ],
    implementation: [
      "Image generators with on-the-fly augmentation.",
      "Conv-BN-ReLU-Pool blocks tuned for the input resolution.",
      "Per-class metrics: precision, recall, F1.",
      "Confusion matrix heatmap for error analysis.",
    ],
    challenges: [
      { title: "Class imbalance", body: "Stratified splits and class-weighted loss." },
      { title: "Look-alike signs", body: "Stronger augmentation and a deeper feature head." },
    ],
    results: [
      "Trained CNN with reported accuracy / precision / recall / F1 in the notebook.",
      "Confusion matrix highlights the hardest classes.",
      "Live prediction demo for single-image inputs.",
    ],
    lessons: [
      "Data quality and augmentation matter more than model depth.",
      "Always look at the confusion matrix, not just accuracy.",
    ],
    future: ["Sequence models for dynamic signs.", "Real-time webcam inference."],
    screenshots: [signPrediction, signDataset, signTraining],
  },
  {
    slug: "causal-inference",
    index: "04",
    title: "Causal Inference Dashboard",
    tagline: "From correlation to causation — interactively.",
    summary:
      "A premium analytics dashboard that estimates treatment effects with PSM and Doubly Robust methods, visualizing ATE, ITE, and counterfactuals.",
    category: "Data Science",
    status: "Shipped",
    accent: "from-fuchsia-500/30 via-violet-500/20 to-emerald-500/20",
    surface: "web",
    tech: ["Python", "DoWhy", "EconML", "Pandas", "Plotly", "Streamlit"],
    overview:
      "An interactive workbench for causal analysis. Upload a dataset, pick treatment and outcome, choose an estimator, and explore population and individual effects with publication-quality charts.",
    problem:
      "Causal questions are easy to ask and hard to answer. Standard ML dashboards conflate prediction with effect estimation. This tool keeps them separate.",
    research:
      "Compared matching, IPW, and doubly robust estimators on synthetic and real datasets, and read DoWhy/EconML best practices.",
    architecture: [
      { node: "Dataset Upload", detail: "Tabular CSV with treatment, outcome, and covariates." },
      { node: "Propensity Score", detail: "Logistic model over covariates estimates P(T|X)." },
      { node: "Matching / Weighting", detail: "PSM, IPW, or Doubly Robust." },
      { node: "Effect Estimation", detail: "ATE for the population, ITE per unit." },
      { node: "Visualization", detail: "Distributions, counterfactuals, treatment vs control." },
    ],
    workflow: [
      "Load data, profile feature distributions, inspect outcomes.",
      "Configure treatment, outcome, and confounder columns.",
      "Run propensity scoring and matching diagnostics.",
      "Estimate ATE and ITE with DoWhy / EconML.",
      "Explore counterfactual scenarios and export insights.",
    ],
    implementation: [
      "Streamlit shell with a left configuration sidebar and a multi-panel main view.",
      "DoWhy for the identification / estimation / refutation flow.",
      "EconML for ITE with machine-learning estimators.",
      "Plotly for distributions, balance plots, and effect intervals.",
    ],
    challenges: [
      {
        title: "Identification",
        body: "Made assumptions (overlap, unconfoundedness) explicit in the UI.",
      },
      {
        title: "Interpretation",
        body: "Paired every effect estimate with a refutation test and clear copy.",
      },
    ],
    results: [
      "Single workbench covering PSM, IPW, and Doubly Robust estimators.",
      "ATE and ITE views with feature and outcome distributions.",
      "Insights panel summarizing assumptions and findings.",
    ],
    lessons: [
      "Causal tooling needs to teach as it computes.",
      "Visualizing balance and overlap is half the work.",
    ],
    future: [
      "Sensitivity analysis surface.",
      "Bayesian uncertainty for ITE.",
      "Saved-experiment workspaces.",
    ],
    screenshots: [causalDashboard, causalOutcome, causalTreatment],
  },
  {
    slug: "autocaller",
    index: "05",
    title: "AutoCaller",
    tagline: "Voice-first automation for outbound calling.",
    summary: "In development. A polished case study will live here soon.",
    category: "Voice AI",
    status: "Coming Soon",
    accent: "from-amber-500/20 via-rose-500/15 to-violet-500/20",
    surface: "web",
    tech: ["Python", "Voice AI"],
    github: undefined,
  },
  {
    slug: "sbams",
    index: "06",
    title: "SBAMS Parent Application",
    tagline: "School-bus alert and monitoring, for parents.",
    summary: "In development. A polished case study will live here soon.",
    category: "Mobile · Realtime",
    status: "Coming Soon",
    accent: "from-cyan-500/20 via-blue-500/15 to-violet-500/20",
    surface: "mobile",
    tech: ["Flutter", "Firebase"],
    github: undefined,
  },
];

export const projectBySlug = (slug: string) =>
  projects.find((p) => p.slug === (slug as ProjectSlug));

export const GITHUB_URL = "https://github.com/RohiniManjunath07";
export const LINKEDIN_URL = "https://www.linkedin.com/in/rohinim-";
export const EMAIL = "mrohini0704@gmail.com";
export const PHONE = "+91 77607 91428";
