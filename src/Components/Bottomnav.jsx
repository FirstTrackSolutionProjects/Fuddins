import { Home, ShoppingCart, ClipboardList, User, Search } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const NAV_ITEMS = [
  { label: "Home",    icon: Home,          href: "/"        },
  { label: "Search",  icon: Search,        href: "/search"  },
  { label: "Cart",    icon: ShoppingCart,  href: "/cart", badge: 3 },
  { label: "Orders",  icon: ClipboardList, href: "/orders"  },
  { label: "Profile", icon: User,          href: "/login"   },
];

export default function BottomNav() {
  const location = useLocation();

  const isActive = (href) =>
    href === "/" ? location.pathname === "/" : location.pathname.startsWith(href);

  return (
    <>
      <style>{`
        @keyframes navPop {
          0%   { transform: translateY(2px) scale(0.92); opacity: 0.6; }
          60%  { transform: translateY(-3px) scale(1.08); }
          100% { transform: translateY(0) scale(1); opacity: 1; }
        }
        .nav-active-icon { animation: navPop 0.28s cubic-bezier(0.34,1.4,0.64,1) forwards; }
      `}</style>

      {/* Spacer so page content isn't hidden behind nav — mobile only */}
      <div className="h-20 md:hidden" />

      {/* md:hidden = only visible on screens smaller than 768px */}
      <nav
        className="fixed bottom-0 left-0 right-0 z-[90] bg-white border-t border-gray-100 md:hidden"
        style={{ boxShadow: "0 -4px 24px rgba(34,197,94,0.10)" }}
      >
        <div className="flex items-center justify-around px-2 py-2">
          {NAV_ITEMS.map(({ label, icon: Icon, href, badge }) => {
            const active = isActive(href);
            return (
              <Link
                key={label}
                to={href}
                className="flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-2xl transition-all duration-200 group relative"
                style={{ minWidth: 52 }}
              >
                {/* Active pill background */}
                {active && (
                  <span
                    className="absolute inset-0 rounded-2xl"
                    style={{ background: "rgba(34,197,94,0.10)" }}
                  />
                )}

                {/* Icon */}
                <span className="relative flex items-center justify-center">
                  <Icon
                    size={22}
                    strokeWidth={active ? 2.3 : 1.8}
                    className={[
                      "transition-colors duration-200",
                      active
                        ? "text-green-500 nav-active-icon"
                        : "text-gray-400 group-hover:text-green-400",
                    ].join(" ")}
                  />
                  {/* Cart badge */}
                  {badge && (
                    <span className="absolute -top-1.5 -right-2 w-4 h-4 rounded-full bg-green-500 text-white text-[9px] font-black flex items-center justify-center leading-none">
                      {badge}
                    </span>
                  )}
                </span>

                {/* Label */}
                <span
                  className={[
                    "text-[10px] font-semibold tracking-wide transition-colors duration-200 relative",
                    active
                      ? "text-green-600"
                      : "text-gray-400 group-hover:text-green-400",
                  ].join(" ")}
                >
                  {label}
                </span>

                {/* Active dot */}
                {active && (
                  <span className="absolute -bottom-1 w-1 h-1 rounded-full bg-green-500" />
                )}
              </Link>
            );
          })}
        </div>

        {/* iOS safe area */}
        <div style={{ height: "env(safe-area-inset-bottom, 0px)" }} className="bg-white" />
      </nav>
    </>
  );
}