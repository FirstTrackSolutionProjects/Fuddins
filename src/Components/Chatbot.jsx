import { useEffect, useRef, useState } from "react";
import { X, Send, Star, Phone, Copy, Check } from "lucide-react";

const BOT_DELAY = 600;
const TYPING_DELAY = 900;

const OPTIONS = {
  "Order Issue": {
    icon: "📦",
    options: [
      "Where is my order?",
      "Order not received",
      "Wrong item delivered",
      "Order arrived cold / spoiled",
    ],
    replies: {
      "Where is my order?":
        "You can track your order live from the 'My Orders' section in the app. Tracking updates are also sent to your registered number. Standard delivery takes 20–45 minutes depending on your location.",
      "Order not received":
        "We're sorry to hear that! If your expected delivery time has passed, we'll investigate immediately and either resend your order or process a full refund.",
      "Wrong item delivered":
        "We sincerely apologise for this mix-up! Please keep the item and we'll dispatch the correct order within the shortest possible time at no extra cost.",
      "Order arrived cold / spoiled":
        "That's not the Fuddins standard! Please share a photo of the item and we'll send a fresh replacement or process a full refund right away.",
    },
  },
  "Payment Issue": {
    icon: "💳",
    options: [
      "Charged but order not placed",
      "Refund not received",
      "Payment failed",
      "Incorrect amount charged",
    ],
    replies: {
      "Charged but order not placed":
        "If payment was deducted but the order wasn't confirmed, the amount will be automatically refunded within 48 hours. No action is needed from your side.",
      "Refund not received":
        "Refunds typically take 5–7 business days depending on your bank. We're checking the status of your refund right now and will update you shortly.",
      "Payment failed":
        "Payment failures are usually due to bank-side issues. Please retry with a different payment method — your previous attempt was not charged.",
      "Incorrect amount charged":
        "We're reviewing your transaction. If there's any discrepancy, a refund for the difference will be processed within 3 business days.",
    },
  },
  "Delivery Issue": {
    icon: "🛵",
    options: [
      "Delivery partner not responding",
      "Delivery taking too long",
      "Change delivery address",
      "Delivery not available in my area",
    ],
    replies: {
      "Delivery partner not responding":
        "We apologise for this inconvenience. We'll contact the delivery partner on your behalf immediately and share a live update within 5 minutes.",
      "Delivery taking too long":
        "Estimated delivery times can vary due to traffic or high demand. We'll escalate your order and provide a firm delivery update right away.",
      "Change delivery address":
        "Address changes are only possible before the order is picked up. Please contact us immediately with your order ID and new address.",
      "Delivery not available in my area":
        "We're expanding rapidly! Enter your pincode on the app to check availability. We'll notify you as soon as Fuddins launches in your area.",
    },
  },
  "Returns & Refunds": {
    icon: "🔄",
    options: [
      "How do I cancel my order?",
      "Refund status check",
      "Partial refund query",
      "Coupon not applied",
    ],
    replies: {
      "How do I cancel my order?":
        "Orders can be cancelled within 2 minutes of placing them from 'My Orders → Cancel'. Once the restaurant starts preparing your food, cancellation may not be possible.",
      "Refund status check":
        "Once your cancellation or return is approved, refunds are processed within 5–7 business days to your original payment method. We'll send you a confirmation email.",
      "Partial refund query":
        "Partial refunds are issued when only part of the order is affected. We'll review your case and process the correct amount within 48 hours.",
      "Coupon not applied":
        "If a valid coupon wasn't applied at checkout, we'll honour the discount as a Fuddins wallet credit. Please share your order ID and coupon code.",
    },
  },
  "Account & Login": {
    icon: "👤",
    options: [
      "Can't log into my account",
      "OTP not received",
      "Update my address",
      "Delete my account",
    ],
    replies: {
      "Can't log into my account":
        "Please try resetting via 'Forgot Password'. If you're still unable to log in, our team will verify your identity and restore access within 24 hours.",
      "OTP not received":
        "OTPs can take up to 60 seconds. Check your spam folder if using email OTP. We can resend the OTP or use an alternate verification method.",
      "Update my address":
        "You can update your delivery address from Account → Saved Addresses. For an active order, please contact us immediately before it's dispatched.",
      "Delete my account":
        "We're sorry to see you go! Account deletion is permanent and removes all order history. Please confirm and our team will process it within 48 hours.",
    },
  },
  "Food & Menu": {
    icon: "🍽️",
    options: [
      "Allergen / ingredient info",
      "Customise my order",
      "Item unavailable",
      "Nutrition information",
    ],
    replies: {
      "Allergen / ingredient info":
        "Allergen details are listed on each product page. If you have a severe allergy, we strongly recommend contacting the restaurant directly before ordering.",
      "Customise my order":
        "Many items support customisation (spice level, extras, no onion etc.). Look for the 'Customise' option on the item page before adding to cart.",
      "Item unavailable":
        "Some items may be unavailable due to stock or preparation time. Try refreshing the app or checking back a little later — stock updates in real time.",
      "Nutrition information":
        "Nutritional details are available on individual product pages. For detailed dietary advice, we recommend consulting a qualified nutritionist.",
    },
  },
};

const MAIN_CATEGORIES = [
  ...Object.keys(OPTIONS).map((k) => ({ label: k, icon: OPTIONS[k].icon })),
  { label: "Other", icon: "💬" },
];

function TypingIndicator() {
  return (
    <div className="flex items-end gap-2">
      <div className="w-7 h-7 rounded-full bg-green-500 flex items-center justify-center text-white text-xs font-black flex-shrink-0">F</div>
      <div className="bg-slate-100 border border-slate-200 rounded-2xl rounded-bl-sm px-4 py-3 flex gap-1.5 items-center">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="w-1.5 h-1.5 rounded-full bg-green-500"
            style={{ animation: `bounce 1.2s ease-in-out ${i * 0.2}s infinite` }}
          />
        ))}
      </div>
    </div>
  );
}

function StarRating({ onRate }) {
  const [hovered, setHovered] = useState(0);
  const [selected, setSelected] = useState(0);
  return (
    <div className="flex flex-col gap-2 mt-1">
      <p className="text-slate-500 text-xs">Rate your support experience:</p>
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((s) => (
          <button
            key={s}
            onMouseEnter={() => setHovered(s)}
            onMouseLeave={() => setHovered(0)}
            onClick={() => {
              setSelected(s);
              onRate(s);
            }}
            className="transition-transform hover:scale-125"
          >
            <Star
              size={24}
              className={s <= (hovered || selected) ? "text-green-500 fill-green-500" : "text-slate-300"}
            />
          </button>
        ))}
      </div>
    </div>
  );
}

export default function Chatbot() {
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [currentOptions, setCurrentOptions] = useState([]);
  const [step, setStep] = useState("WELCOME");
  const [currentCategory, setCurrentCategory] = useState("");
  const [showInput, setShowInput] = useState(false);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showRating, setShowRating] = useState(false);
  const [rated, setRated] = useState(false);
  const [showTicketForm, setShowTicketForm] = useState(false);
  const [orderId, setOrderId] = useState("");
  const [copied, setCopied] = useState(false);
  const [unread, setUnread] = useState(0);

  const TICKET_REF = "FUD-" + Math.random().toString(36).slice(2, 8).toUpperCase();

  const scrollToBottom = () => bottomRef.current?.scrollIntoView({ behavior: "smooth" });

  const addBot = (text, extra = {}) => {
    setIsTyping(false);
    setMessages((prev) => [...prev, { from: "bot", text, ...extra }]);
    if (!open) setUnread((u) => u + 1);
  };

  const addUser = (text) =>
    setMessages((prev) => [...prev, { from: "user", text }]);

  const botSay = (text, delay = BOT_DELAY, extra = {}) => {
    setTimeout(() => {
      setIsTyping(true);
      setTimeout(() => addBot(text, extra), TYPING_DELAY);
    }, delay);
  };

  useEffect(() => { scrollToBottom(); }, [messages, isTyping, currentOptions]);

  useEffect(() => {
    if (open) {
      setUnread(0);
      if (messages.length === 0) initChat();
    }
  }, [open]);

  const initChat = () => {
    botSay("👋 Hey there! Welcome to Fuddins Support.", 300);
    setTimeout(() => {
      botSay("I'm here to help you with your orders, payments, delivery, and more. How can I assist you today?", 300 + TYPING_DELAY + 400);
      setTimeout(() => {
        setCurrentOptions(MAIN_CATEGORIES);
        setStep("MAIN");
      }, 300 + TYPING_DELAY * 2 + 600);
    }, 0);
  };

  const handleOption = (option) => {
    const label = typeof option === "string" ? option : option.label;
    addUser(label);
    setCurrentOptions([]);
    setShowInput(false);

    if (step === "MAIN") {
      if (label === "Other") {
        botSay("Please describe your issue below and our team will get back to you:");
        setTimeout(() => setShowInput(true), BOT_DELAY + TYPING_DELAY + 200);
      } else {
        setCurrentCategory(label);
        botSay(`Got it — "${label}". Please choose a specific issue:`);
        setTimeout(() => {
          setCurrentOptions(OPTIONS[label].options.map((o) => o));
          setStep("SUB");
        }, BOT_DELAY + TYPING_DELAY + 200);
      }
    } else if (step === "SUB") {
      botSay(OPTIONS[currentCategory].replies[label]);
      setTimeout(() => askSolved(), BOT_DELAY + TYPING_DELAY + 400);
    } else if (step === "SOLVED") {
      handleSolved(label);
    }
  };

  const askSolved = () => {
    botSay("Was this helpful? Is your issue resolved?", 0);
    setTimeout(() => {
      setCurrentOptions(["✅ Yes, resolved", "❌ No, still have issue", "🎧 Talk to live agent"]);
      setStep("SOLVED");
    }, TYPING_DELAY + 200);
  };

  const handleSolved = (answer) => {
    if (answer === "✅ Yes, resolved") {
      botSay("That's great! 🎉 Thank you for choosing Fuddins. Enjoy your meal!", 0, { showRating: true });
      setTimeout(() => setShowRating(true), TYPING_DELAY + 200);
      setStep("DONE");
    } else if (answer === "🎧 Talk to live agent") {
      botSay("Connecting you to our support team. Please hold on...", 0);
      setTimeout(() => {
        botSay("Our support team is available at:", 0, { showAgent: true });
        setStep("AGENT");
      }, TYPING_DELAY + 500);
    } else {
      botSay("I'm sorry to hear that. Let me raise a support ticket for you.", 0);
      setTimeout(() => {
        setShowTicketForm(true);
        setStep("TICKET");
      }, TYPING_DELAY + 300);
    }
  };

  const submitTicket = () => {
    if (!orderId.trim()) return;
    addUser(`Order ID: ${orderId}`);
    setShowTicketForm(false);
    setOrderId("");
    botSay(
      `✅ Ticket raised! Your ticket ID is **${TICKET_REF}**. Our support team will reach you within 30 minutes.`,
      0,
      { ticketRef: TICKET_REF }
    );
    setTimeout(() => setShowRating(true), TYPING_DELAY + 500);
    setStep("DONE");
  };

  const submitFreeText = () => {
    if (!inputText.trim()) return;
    addUser(inputText);
    setShowInput(false);
    setInputText("");
    botSay("Thank you! Let me raise a support ticket for you.", 0);
    setTimeout(() => {
      setShowTicketForm(true);
      setStep("TICKET");
    }, TYPING_DELAY + 300);
  };

  const copyTicket = () => {
    navigator.clipboard.writeText(TICKET_REF).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const restartChat = () => {
    setMessages([]);
    setCurrentOptions([]);
    setStep("WELCOME");
    setCurrentCategory("");
    setShowInput(false);
    setInputText("");
    setIsTyping(false);
    setShowRating(false);
    setRated(false);
    setShowTicketForm(false);
    setOrderId("");
    setTimeout(() => initChat(), 100);
  };

  return (
    <>
      <style>{`
        @keyframes bounce {
          0%,60%,100% { transform: translateY(0); }
          30% { transform: translateY(-6px); }
        }
        @keyframes fadeSlideUp {
          from { opacity:0; transform:translateY(16px) scale(0.97); }
          to   { opacity:1; transform:translateY(0) scale(1); }
        }
        @keyframes pulse-ring {
          0%   { transform: scale(1);   opacity: 0.6; }
          100% { transform: scale(1.5); opacity: 0; }
        }
        .chat-window { animation: fadeSlideUp 0.3s cubic-bezier(0.34,1.2,0.64,1) forwards; }
        .pulse-ring  { animation: pulse-ring 1.5s ease-out infinite; }
      `}</style>

      {/* Floating Button — sits above bottom nav */}
      <div className="fixed bottom-24 md:bottom-6 right-4 z-[100] flex flex-col items-end gap-3">
        {!open && (
          <div className="relative">
            <div className="pulse-ring absolute inset-0 rounded-full bg-green-400 pointer-events-none" />
            <button
              onClick={() => setOpen(true)}
              className="relative w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-green-600 to-green-400 text-white flex items-center justify-center shadow-[0_8px_32px_rgba(34,197,94,0.45)] transition-all active:scale-95 hover:shadow-[0_8px_40px_rgba(34,197,94,0.6)]"
            >
              {/* Fork & knife icon */}
              <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                <path d="M9 4v5c0 1.66 1.34 3 3 3v9" stroke="white" strokeWidth="2" strokeLinecap="round" />
                <path d="M17 4v18" stroke="white" strokeWidth="2" strokeLinecap="round" />
                <path d="M14 4v4h6V4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {unread > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-500 text-white text-[10px] font-black flex items-center justify-center">
                  {unread}
                </span>
              )}
            </button>
          </div>
        )}

        {/* Chat Window */}
        {open && (
          <div
            className="chat-window flex flex-col bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-[0_24px_80px_rgba(34,197,94,0.18)]"
            style={{
              width: "min(360px, calc(100vw - 20px))",
              height: "min(520px, calc(100dvh - 220px))",
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-green-700 to-green-500 border-b border-green-700/30">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-white font-black text-sm border border-white/30">
                  🍽️
                </div>
                <div>
                  <p className="text-white text-sm font-bold leading-none">Fuddins Support</p>
                  <p className="text-green-100 text-[10px] flex items-center gap-1 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-300 inline-block" />
                    Online · Replies instantly
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={restartChat}
                  className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:text-white transition-all text-xs font-bold"
                  title="Restart chat"
                >
                  ↺
                </button>
                <button
                  onClick={() => setOpen(false)}
                  className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:text-white transition-all"
                >
                  <X size={14} />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div
              className="flex-1 overflow-y-auto px-3 py-4 flex flex-col gap-3 bg-slate-50/50"
              style={{ scrollbarWidth: "none" }}
            >
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.from === "user" ? "justify-end" : "items-end gap-2"}`}>
                  {msg.from === "bot" && (
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-green-600 to-green-400 flex items-center justify-center text-white text-xs font-black flex-shrink-0">
                      F
                    </div>
                  )}
                  <div
                    className={[
                      "px-3 py-2.5 rounded-2xl text-sm max-w-[80%] leading-relaxed",
                      msg.from === "user"
                        ? "bg-gradient-to-r from-green-600 to-green-400 text-white font-semibold rounded-br-sm"
                        : "bg-white border border-slate-200 text-slate-700 rounded-bl-sm shadow-sm",
                    ].join(" ")}
                  >
                    {msg.text}

                    {/* Ticket ref copy */}
                    {msg.ticketRef && (
                      <div className="mt-2 flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2">
                        <span className="text-green-600 text-xs font-black">{msg.ticketRef}</span>
                        <button onClick={copyTicket} className="ml-auto text-slate-400 hover:text-green-600 transition-colors">
                          {copied ? <Check size={13} /> : <Copy size={13} />}
                        </button>
                      </div>
                    )}

                    {/* Live agent info */}
                    {msg.showAgent && (
                      <div className="mt-2 flex flex-col gap-2">
                        <a
                          href="tel:+911800123456"
                          className="flex items-center gap-2 bg-gradient-to-r from-green-600 to-green-400 text-white px-3 py-2 rounded-xl text-xs font-bold hover:opacity-90 transition-all"
                        >
                          <Phone size={13} /> Call: 1800-FUD-HELP
                        </a>
                        <a
                          href="https://wa.me/911800123456"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 px-3 py-2 rounded-xl text-xs font-bold hover:bg-green-100 transition-all"
                        >
                          💬 WhatsApp Support
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {/* Typing indicator */}
              {isTyping && <TypingIndicator />}

              {/* Option buttons */}
              {!isTyping && currentOptions.length > 0 && (
                <div className="flex flex-col gap-2 ml-9">
                  {currentOptions.map((opt, i) => {
                    const label = typeof opt === "string" ? opt : opt.label;
                    const icon = typeof opt === "object" ? opt.icon : null;
                    return (
                      <button
                        key={i}
                        onClick={() => handleOption(opt)}
                        className="flex items-center gap-2.5 w-full text-left bg-white border border-slate-200 hover:border-green-400 hover:bg-green-50 text-slate-700 text-xs font-semibold px-3.5 py-2.5 rounded-xl transition-all duration-200 active:scale-[0.98] shadow-sm"
                      >
                        {icon && <span className="text-sm">{icon}</span>}
                        {label}
                      </button>
                    );
                  })}
                </div>
              )}

              {/* Free text input */}
              {showInput && (
                <div className="ml-9 flex gap-2">
                  <input
                    ref={inputRef}
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && submitFreeText()}
                    placeholder="Describe your issue..."
                    className="flex-1 bg-white border border-slate-200 focus:border-green-400 rounded-xl px-3 py-2.5 text-sm text-slate-700 placeholder-slate-400 outline-none transition-all"
                  />
                  <button
                    onClick={submitFreeText}
                    className="w-10 h-10 rounded-xl bg-gradient-to-r from-green-600 to-green-400 text-white flex items-center justify-center transition-all active:scale-95 flex-shrink-0 hover:shadow-md"
                  >
                    <Send size={15} />
                  </button>
                </div>
              )}

              {/* Ticket form */}
              {showTicketForm && (
                <div className="ml-9 bg-white border border-green-200 rounded-2xl p-3 flex flex-col gap-2 shadow-sm">
                  <p className="text-green-600 text-[10px] font-bold tracking-widest uppercase">Raise a Ticket</p>
                  <input
                    value={orderId}
                    onChange={(e) => setOrderId(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && submitTicket()}
                    placeholder="Enter Order ID (e.g. FUD-12345)"
                    className="bg-slate-50 border border-slate-200 focus:border-green-400 rounded-xl px-3 py-2.5 text-sm text-slate-700 placeholder-slate-400 outline-none transition-all"
                  />
                  <button
                    onClick={submitTicket}
                    className="w-full bg-gradient-to-r from-green-600 to-green-400 hover:opacity-90 text-white font-bold text-sm py-2.5 rounded-xl transition-all active:scale-[0.98]"
                  >
                    Submit Ticket
                  </button>
                </div>
              )}

              {/* Star rating */}
              {showRating && !rated && (
                <div className="ml-9 bg-white border border-slate-200 rounded-2xl p-3 shadow-sm">
                  <StarRating
                    onRate={(r) => {
                      setRated(true);
                      setShowRating(false);
                      addUser(`Rated: ${"⭐".repeat(r)}`);
                      botSay(
                        r >= 4
                          ? "🌟 Thank you for the great rating! We're glad we could help. Enjoy your Fuddins meal!"
                          : "Thank you for your feedback. We'll keep improving our service. Happy eating! 💚"
                      );
                    }}
                  />
                </div>
              )}

              <div ref={bottomRef} />
            </div>

            {/* Bottom bar */}
            <div className="px-4 py-2 border-t border-slate-100 flex items-center justify-center bg-white">
              <p className="text-slate-400 text-[10px] tracking-wide">
                Powered by <span className="text-green-600 font-bold">Fuddins</span> · Your Comfort Partner
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}