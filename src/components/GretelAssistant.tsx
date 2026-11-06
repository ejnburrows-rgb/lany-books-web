import { useState, useRef, useEffect, type FormEvent } from 'react';
import {
  answerShop,
  byId,
  SHOP_TOPICS,
  type Lang,
  type ShopLink,
  type ShopReply,
} from '../lib/gretel-lany';

type Message = {
  from: 'user' | 'gretel';
  text: string;
  links?: ShopLink[];
  lang?: Lang;
  next?: string[];
};

type Props = {
  initialLang: Lang;
  onNavigateSection?: (hash: string) => void;
};

const GRETEL_IMG = '/images/gretel/gretel-headset.jpg';

const INTRO: Record<Lang, { greeting: string; subtitle: string; placeholder: string; buttonLabel: string; prompt: string }> = {
  es: {
    greeting: '¡Hola! Soy Gretel. Te ayudo a conocer los libros y materiales de LANY Books. ¿Qué te gustaría saber?',
    subtitle: 'Asistente LANY Books',
    placeholder: 'Escribe tu pregunta…',
    buttonLabel: 'Pregúntale a Gretel',
    prompt: '¿Dudas sobre los materiales? ¡Pregúntame!',
  },
  en: {
    greeting: "Hi! I'm Gretel. I can help you learn about LANY Books materials and teaching kits. What would you like to explore?",
    subtitle: 'LANY Books Assistant',
    placeholder: 'Type your question…',
    buttonLabel: 'Ask Gretel',
    prompt: 'Questions about materials? Ask me!',
  },
};

function playVoice(text: string, lang: Lang) {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = lang === 'en' ? 'en-US' : 'es-ES';
  utterance.rate = 0.95;
  utterance.pitch = 1.15;
  window.speechSynthesis.speak(utterance);
}

export function GretelAssistant({ initialLang, onNavigateSection }: Props) {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState<Lang>(initialLang);
  const [messages, setMessages] = useState<Message[]>([
    {
      from: 'gretel',
      text: INTRO[initialLang].greeting,
      lang: initialLang,
      next: SHOP_TOPICS,
    },
  ]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const [autoVoice, setAutoVoice] = useState(false);
  const [listening, setListening] = useState(false);
  const [hasSpeechRecognition, setHasSpeechRecognition] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setLang(initialLang);
  }, [initialLang]);

  useEffect(() => {
    const w = window as unknown as Record<string, unknown>;
    setHasSpeechRecognition(Boolean(w.SpeechRecognition || w.webkitSpeechRecognition));
  }, []);

  useEffect(() => {
    if (open) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, typing, open]);

  const switchLanguage = (newLang: Lang) => {
    setLang(newLang);
    window.speechSynthesis?.cancel();
    setMessages([
      {
        from: 'gretel',
        text: INTRO[newLang].greeting,
        lang: newLang,
        next: SHOP_TOPICS,
      },
    ]);
  };

  const handleAsk = (questionText: string) => {
    const trimmed = questionText.trim();
    if (!trimmed || typing) return;

    setMessages((prev) => [...prev, { from: 'user', text: trimmed }]);
    setInput('');
    setTyping(true);

    const reply: ShopReply = answerShop(trimmed, lang);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          from: 'gretel',
          text: reply.text,
          links: reply.links,
          lang: reply.lang,
          next: reply.next,
        },
      ]);
      setTyping(false);

      if (autoVoice) {
        playVoice(reply.text, reply.lang);
      }
    }, 450);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    handleAsk(input);
  };

  const handleLinkClick = (href: string) => {
    if (onNavigateSection) {
      onNavigateSection(href);
    } else {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const startListening = () => {
    const w = window as unknown as Record<string, new () => any>;
    const SR = w.SpeechRecognition || w.webkitSpeechRecognition;
    if (!SR) return;

    const recognizer = new SR();
    recognizer.lang = lang === 'en' ? 'en-US' : 'es-ES';
    recognizer.interimResults = false;
    recognizer.onresult = (event: any) => {
      const text = event.results[0][0].transcript;
      handleAsk(text);
    };
    recognizer.onend = () => setListening(false);
    recognizer.onerror = () => setListening(false);
    setListening(true);
    recognizer.start();
  };

  const lastMessage = messages[messages.length - 1];

  return (
    <div className="gretelContainer">
      {!open && (
        <button
          type="button"
          className="gretelLauncher"
          onClick={() => setOpen(true)}
          aria-expanded={false}
          aria-label={INTRO[lang].buttonLabel}
        >
          <img src={GRETEL_IMG} alt="" className="gretelLauncherAvatar" />
          <span className="gretelLauncherText">
            <span className="gretelLauncherTitle">Gretel</span>
            <span className="gretelLauncherPrompt">{INTRO[lang].prompt}</span>
          </span>
        </button>
      )}

      {open && (
        <aside
          className="gretelDrawer"
          role="dialog"
          aria-modal="true"
          aria-label={INTRO[lang].subtitle}
        >
          <header className="gretelDrawerHeader">
            <div className="gretelHeaderProfile">
              <img src={GRETEL_IMG} alt="Gretel" className="gretelHeaderAvatar" />
              <div>
                <h2 className="gretelHeaderTitle">Gretel</h2>
                <p className="gretelHeaderSub">{INTRO[lang].subtitle}</p>
              </div>
            </div>

            <div className="gretelHeaderActions">
              <button
                type="button"
                className={`gretelVoiceToggle ${autoVoice ? 'active' : ''}`}
                onClick={() => setAutoVoice((v) => !v)}
                aria-pressed={autoVoice}
                title={lang === 'en' ? 'Auto read aloud' : 'Lectura automática en voz alta'}
                aria-label={lang === 'en' ? 'Toggle speech voice' : 'Alternar voz en audio'}
              >
                🔊
              </button>

              <div className="gretelLangPills">
                <button
                  type="button"
                  className={lang === 'es' ? 'active' : ''}
                  onClick={() => switchLanguage('es')}
                >
                  ES
                </button>
                <button
                  type="button"
                  className={lang === 'en' ? 'active' : ''}
                  onClick={() => switchLanguage('en')}
                >
                  EN
                </button>
              </div>

              <button
                type="button"
                className="gretelCloseBtn"
                onClick={() => {
                  window.speechSynthesis?.cancel();
                  setOpen(false);
                }}
                aria-label={lang === 'en' ? 'Close Gretel' : 'Cerrar Gretel'}
              >
                ✕
              </button>
            </div>
          </header>

          <div className="gretelMessages" tabIndex={0} aria-live="polite">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`gretelMsgRow ${m.from === 'user' ? 'userRow' : 'gretelRow'}`}
              >
                {m.from === 'gretel' && (
                  <img src={GRETEL_IMG} alt="" className="gretelMsgAvatar" />
                )}
                <div className={`gretelBubble ${m.from === 'user' ? 'userBubble' : 'gretelBubbleStyle'}`}>
                  <p className="gretelBubbleText">{m.text}</p>

                  {m.links && m.links.length > 0 && (
                    <div className="gretelLinkList">
                      {m.links.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          className="gretelSectionLink"
                          onClick={(e) => {
                            e.preventDefault();
                            handleLinkClick(link.href);
                          }}
                        >
                          → {link.label[lang]}
                        </a>
                      ))}
                    </div>
                  )}

                  {m.from === 'gretel' && (
                    <button
                      type="button"
                      className="gretelPlayAudioBtn"
                      onClick={() => playVoice(m.text, m.lang ?? lang)}
                      aria-label={lang === 'en' ? 'Listen to answer' : 'Escuchar respuesta'}
                      title={lang === 'en' ? 'Listen to answer' : 'Escuchar respuesta'}
                    >
                      ▶ {lang === 'en' ? 'Listen' : 'Escuchar'}
                    </button>
                  )}
                </div>
              </div>
            ))}

            {typing && (
              <div className="gretelMsgRow gretelRow">
                <img src={GRETEL_IMG} alt="" className="gretelMsgAvatar" />
                <div className="gretelBubble gretelBubbleStyle gretelTyping">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {!typing && lastMessage?.from === 'gretel' && lastMessage.next && (
            <div className="gretelChipsBar" aria-label="Temas sugeridos">
              {lastMessage.next.map((topicId) => {
                const topic = byId(topicId);
                if (!topic) return null;
                const label = topic.ask[lang];
                return (
                  <button
                    key={topicId}
                    type="button"
                    className="gretelTopicChip"
                    onClick={() => handleAsk(label)}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          )}

          <form className="gretelInputBar" onSubmit={handleSubmit}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={listening ? (lang === 'en' ? 'Listening…' : 'Escuchando…') : INTRO[lang].placeholder}
              aria-label={INTRO[lang].placeholder}
              disabled={typing}
            />

            {hasSpeechRecognition && (
              <button
                type="button"
                className={`gretelMicBtn ${listening ? 'listening' : ''}`}
                onClick={startListening}
                disabled={typing || listening}
                aria-label={lang === 'en' ? 'Voice dictation' : 'Dictar por voz'}
              >
                🎤
              </button>
            )}

            <button
              type="submit"
              className="gretelSendBtn"
              disabled={!input.trim() || typing}
              aria-label={lang === 'en' ? 'Send message' : 'Enviar mensaje'}
            >
              ➤
            </button>
          </form>
        </aside>
      )}
    </div>
  );
}
