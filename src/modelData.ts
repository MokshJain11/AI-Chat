

export const modelData = {
    openai: {
        name: "openai",
        icon: "◉",
        models: [
            {
                name: "GPT-5.6 Sol",
                description: "Frontier model for complex reasoning, coding, and professional work.",
                price: "$$$",
                isNew: true
            },
            {
                name: "GPT-5.6 Terra",
                description: "Balanced GPT-5.6 model for strong intelligence at lower cost.",
                price: "$$",
                isNew: true
            },
            {
                name: "GPT-5.6 Luna",
                description: "Cost-efficient GPT-5.6 model for high-volume workloads.",
                price: "$$",
                isNew: true
            },
            {
                name: "GPT-5.5",
                description: "General-purpose model for coding and professional tasks.",
                price: "$$$",
                isNew: false
            },
            {
                name: "GPT-5.5 Pro",
                description: "Higher-compute version designed for more precise responses.",
                price: "$$$",
                isNew: false
            },
            {
                name: "GPT-5.4",
                description: "Efficient model for coding and professional workflows.",
                price: "$$",
                isNew: false
            },
            {
                name: "GPT-5.4 Mini",
                description: "Fast compact model for coding and lightweight agents.",
                price: "$$",
                isNew: false
            },
            {
                name: "GPT-5.4 nano",
                description: "Low-cost model optimized for simple high-volume tasks.",
                price: "$",
                isNew: false
            },
            {
                name: "GPT-5.3-Codex",
                description: "Agentic coding model designed for long-horizon development tasks.",
                price: "$$$",
                isNew: false
            },
            {
                name: "GPT-4.1",
                description: "Strong non-reasoning model for general-purpose applications.",
                price: "$$",
                isNew: false
            }
        ]
    },

    anthropic: {
        name: "anthropic",
        icon: "✦",
        models: [
            {
                name: "Claude Opus 5",
                description: "Anthropic's most capable model for demanding reasoning and agentic work.",
                price: "$$$",
                isNew: true
            },
            {
                name: "Claude Sonnet 5",
                description: "Balanced model combining strong reasoning with practical speed.",
                price: "$$$",
                isNew: true
            },
            {
                name: "Claude Opus 4.8",
                description: "Advanced reasoning model for complex professional workflows.",
                price: "$$$",
                isNew: true
            },
            {
                name: "Claude Opus 4.7",
                description: "High-end model built for complex reasoning and coding.",
                price: "$$$",
                isNew: false
            },
            {
                name: "Claude Sonnet 4.6",
                description: "Balanced model for coding, analysis, and everyday work.",
                price: "$$",
                isNew: false
            },
            {
                name: "Claude Opus 4.6",
                description: "Powerful reasoning model for difficult knowledge work.",
                price: "$$$",
                isNew: false
            },
            {
                name: "Claude Opus 4.5",
                description: "Advanced model for demanding reasoning and agentic tasks.",
                price: "$$$",
                isNew: false
            },
            {
                name: "Claude Sonnet 4.5",
                description: "High-performance model balancing intelligence and efficiency.",
                price: "$$",
                isNew: false
            },
            {
                name: "Claude Haiku 4.5",
                description: "Fast and efficient model for latency-sensitive applications.",
                price: "$",
                isNew: false
            },
            {
                name: "Claude Sonnet 3.7",
                description: "Reasoning-capable model designed for coding and analysis.",
                price: "$$",
                isNew: false
            }
        ]
    },

    google: {
        name: "google",
        icon: "◆",
        models: [
            {
                name: "Gemini 3.6 Pro",
                description: "Advanced multimodal model for complex reasoning and professional work.",
                price: "$$$",
                isNew: true
            },
            {
                name: "Gemini 3.6 Flash",
                description: "Efficient multimodal model optimized for fast responses.",
                price: "$$",
                isNew: true
            },
            {
                name: "Gemini 3.5 Flash",
                description: "Fast general-purpose model with strong reasoning capabilities.",
                price: "$$",
                isNew: false
            },
            {
                name: "Gemini 3 Pro",
                description: "Advanced reasoning model for difficult multimodal tasks.",
                price: "$$$",
                isNew: false
            },
            {
                name: "Gemini 3 Flash",
                description: "Lightning-fast model designed for everyday AI workloads.",
                price: "$",
                isNew: false
            },
            {
                name: "Gemini 2.5 Pro",
                description: "Strong reasoning model for coding and complex problem solving.",
                price: "$$$",
                isNew: false
            },
            {
                name: "Gemini 2.5 Flash",
                description: "Fast reasoning model balancing quality and efficiency.",
                price: "$$",
                isNew: false
            },
            {
                name: "Gemini 2.5 Flash-Lite",
                description: "Lightweight model optimized for low-cost high-volume workloads.",
                price: "$",
                isNew: false
            },
            {
                name: "Gemini 2.0 Flash",
                description: "Multimodal workhorse model with fast responses and tool support.",
                price: "$",
                isNew: false
            },
            {
                name: "Gemini 2.0 Flash-Lite",
                description: "Compact Gemini model optimized for speed and cost.",
                price: "$",
                isNew: false
            }
        ]
    },

    meta: {
        name: "meta",
        icon: "∞",
        models: [
            {
                name: "Llama 4 Maverick",
                description: "Multimodal model designed for fast responses and efficient deployment.",
                price: "$$",
                isNew: true
            },
            {
                name: "Llama 4 Scout",
                description: "Efficient multimodal model with an extremely long context window.",
                price: "$",
                isNew: true
            },
            {
                name: "Llama 4 Behemoth",
                description: "Large teacher model designed for advanced intelligence research.",
                price: "$$$",
                isNew: false
            },
            {
                name: "Llama 3.3 70B",
                description: "High-quality instruction model for general-purpose applications.",
                price: "$$",
                isNew: false
            },
            {
                name: "Llama 3.2 90B Vision",
                description: "Large multimodal model for image and text understanding.",
                price: "$$",
                isNew: false
            },
            {
                name: "Llama 3.2 11B Vision",
                description: "Compact multimodal model for image understanding and reasoning.",
                price: "$",
                isNew: false
            },
            {
                name: "Llama 3.2 3B",
                description: "Small language model designed for efficient deployment.",
                price: "$",
                isNew: false
            },
            {
                name: "Llama 3.2 1B",
                description: "Tiny language model optimized for edge and mobile workloads.",
                price: "$",
                isNew: false
            },
            {
                name: "Llama 3.1 405B",
                description: "Large open-weight model designed for advanced reasoning workloads.",
                price: "$$$",
                isNew: false
            },
            {
                name: "Llama 3.1 70B",
                description: "Powerful open-weight model for general-purpose AI applications.",
                price: "$$",
                isNew: false
            }
        ]
    },

    deepseek: {
        name: "deepseek",
        icon: "◇",
        models: [
            {
                name: "DeepSeek-V4-Pro",
                description: "Advanced model with enhanced reasoning and agent capabilities.",
                price: "$$$",
                isNew: true
            },
            {
                name: "DeepSeek-V4-Flash",
                description: "Fast V4 model supporting reasoning and high-volume workloads.",
                price: "$",
                isNew: true
            },
            {
                name: "DeepSeek-V3.2",
                description: "Advanced reasoning model for coding and complex tasks.",
                price: "$$",
                isNew: false
            },
            {
                name: "DeepSeek-V3.1",
                description: "Efficient model combining reasoning and general-purpose capabilities.",
                price: "$$",
                isNew: false
            },
            {
                name: "DeepSeek-R1",
                description: "Reasoning-focused model designed for complex problem solving.",
                price: "$$",
                isNew: false
            },
            {
                name: "DeepSeek-V3",
                description: "General-purpose model optimized for reasoning and coding.",
                price: "$$",
                isNew: false
            },
            {
                name: "DeepSeek-Coder-V2",
                description: "Specialized open model for programming and code generation.",
                price: "$$",
                isNew: false
            },
            {
                name: "DeepSeek-V2.5",
                description: "General-purpose model combining chat and coding capabilities.",
                price: "$",
                isNew: false
            },
            {
                name: "DeepSeek-VL2",
                description: "Vision-language model for image understanding and multimodal tasks.",
                price: "$$",
                isNew: false
            },
            {
                name: "DeepSeek-Math",
                description: "Mathematics-focused model designed for advanced mathematical reasoning.",
                price: "$",
                isNew: false
            }
        ]
    },

    xai: {
        name: "xai",
        icon: "𝕏",
        models: [
            {
                name: "Grok 4.6",
                description: "Flagship model for coding, reasoning, and agentic tool use.",
                price: "$$$",
                isNew: true
            },
            {
                name: "Grok 4.5",
                description: "High-performance model built for coding and knowledge work.",
                price: "$$$",
                isNew: true
            },
            {
                name: "Grok 4",
                description: "Advanced reasoning model for complex questions and coding.",
                price: "$$$",
                isNew: false
            },
            {
                name: "Grok 4 Fast",
                description: "Faster Grok variant optimized for efficient everyday workloads.",
                price: "$$",
                isNew: false
            },
            {
                name: "Grok 3",
                description: "General-purpose reasoning model with strong knowledge capabilities.",
                price: "$$",
                isNew: false
            },
            {
                name: "Grok 3 Mini",
                description: "Smaller reasoning model designed for faster responses.",
                price: "$",
                isNew: false
            },
            {
                name: "Grok 2",
                description: "Multimodal model capable of understanding text and images.",
                price: "$$",
                isNew: false
            },
            {
                name: "Grok 2 Mini",
                description: "Compact Grok model optimized for speed and cost.",
                price: "$",
                isNew: false
            },
            {
                name: "Grok-1.5",
                description: "Earlier Grok generation with expanded reasoning and context.",
                price: "$$",
                isNew: false
            },
            {
                name: "Grok-1",
                description: "Original open-weight Grok language model from xAI.",
                price: "$",
                isNew: false
            }
        ]
    },

    zai: {
        name: "zai",
        icon: "✺",
        models: [
            {
                name: "GLM-5",
                description: "Agentic engineering model designed for coding and complex reasoning.",
                price: "$$$",
                isNew: true
            },
            {
                name: "GLM-4.7",
                description: "Advanced hybrid reasoning model for coding and agentic tasks.",
                price: "$$$",
                isNew: false
            },
            {
                name: "GLM-4.6",
                description: "Strong general-purpose model for reasoning and software engineering.",
                price: "$$",
                isNew: false
            },
            {
                name: "GLM-4.5",
                description: "Frontier model combining reasoning, coding, and agent capabilities.",
                price: "$$",
                isNew: false
            },
            {
                name: "GLM-4.5-Air",
                description: "Smaller GLM model optimized for efficient agentic workloads.",
                price: "$",
                isNew: false
            },
            {
                name: "GLM-4-Plus",
                description: "Enhanced GLM foundation model for advanced general-purpose tasks.",
                price: "$$",
                isNew: false
            },
            {
                name: "GLM-4",
                description: "General-purpose foundation model for reasoning and conversation.",
                price: "$$",
                isNew: false
            },
            {
                name: "GLM-4V",
                description: "Vision-language model capable of understanding visual inputs.",
                price: "$$",
                isNew: false
            },
            {
                name: "GLM-4-Voice",
                description: "Voice model designed for conversational audio interactions.",
                price: "$$",
                isNew: false
            },
            {
                name: "GLM-Realtime",
                description: "Realtime multimodal model supporting interactive applications.",
                price: "$$",
                isNew: false
            }
        ]
    },

    moonshot: {
        name: "moonshot",
        icon: "☾",
        models: [
            {
                name: "Kimi K3",
                description: "Frontier multimodal model for coding, reasoning, and knowledge work.",
                price: "$$$",
                isNew: true
            },
            {
                name: "Kimi K2.7",
                description: "Coding-focused model optimized for efficient software development.",
                price: "$$",
                isNew: true
            },
            {
                name: "Kimi K2.6",
                description: "Advanced open model built for long-horizon coding and agents.",
                price: "$$$",
                isNew: false
            },
            {
                name: "Kimi K2.5",
                description: "Multimodal model designed for visual reasoning and professional coding.",
                price: "$$$",
                isNew: false
            },
            {
                name: "Kimi K2 Thinking",
                description: "Reasoning model designed for complex multi-step agentic tasks.",
                price: "$$$",
                isNew: false
            },
            {
                name: "Kimi K2 Thinking Turbo",
                description: "High-speed reasoning variant for tool-heavy workflows.",
                price: "$$",
                isNew: false
            },
            {
                name: "Kimi K2",
                description: "Open-weight model designed for coding and agentic applications.",
                price: "$$",
                isNew: false
            },
            {
                name: "Kimi K2 Turbo",
                description: "High-speed K2 variant optimized for coding workloads.",
                price: "$$",
                isNew: false
            },
            {
                name: "Kimi K1.5",
                description: "Multimodal reasoning model for complex problem solving.",
                price: "$$",
                isNew: false
            },
            {
                name: "Kimi K1",
                description: "Earlier Kimi generation designed for long-context conversations.",
                price: "$",
                isNew: false
            }
        ]
    },

    inclusionai: {
        name: "inclusionai",
        icon: "◈",
        models: [
            {
                name: "Ling-2.5",
                description: "Advanced reasoning model for coding and complex knowledge tasks.",
                price: "$$$",
                isNew: true
            },
            {
                name: "Ling-2",
                description: "General-purpose reasoning model for demanding workflows.",
                price: "$$",
                isNew: false
            },
            {
                name: "Ling-1T",
                description: "Large-scale reasoning model designed for agentic applications.",
                price: "$$$",
                isNew: false
            },
            {
                name: "Ling-1T Long",
                description: "Long-context variant designed for large documents and codebases.",
                price: "$$$",
                isNew: false
            },
            {
                name: "Ling-1T Lite",
                description: "Efficient Ling variant for faster and lower-cost inference.",
                price: "$$",
                isNew: false
            },
            {
                name: "Aquila",
                description: "General-purpose language model for conversational applications.",
                price: "$$",
                isNew: false
            },
            {
                name: "Aquila2",
                description: "Improved language model for reasoning and general-purpose tasks.",
                price: "$$",
                isNew: false
            },
            {
                name: "Aquila2-70B",
                description: "Large-scale model for demanding language understanding tasks.",
                price: "$$$",
                isNew: false
            },
            {
                name: "Aquila2-34B",
                description: "Mid-sized model balancing capability and inference efficiency.",
                price: "$$",
                isNew: false
            },
            {
                name: "Aquila2-7B",
                description: "Compact model optimized for efficient deployment.",
                price: "$",
                isNew: false
            }
        ]
    }
};