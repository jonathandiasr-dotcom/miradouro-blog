/* @ds-bundle: {"format":4,"namespace":"MeritisDesignSystem_198a6a","components":[{"name":"Accordion","sourcePath":"components/content/Accordion.jsx"},{"name":"Badge","sourcePath":"components/content/Badge.jsx"},{"name":"Card","sourcePath":"components/content/Card.jsx"},{"name":"ExpertiseCard","sourcePath":"components/content/ExpertiseCard.jsx"},{"name":"PhotoFrame","sourcePath":"components/content/PhotoFrame.jsx"},{"name":"Quote","sourcePath":"components/content/Quote.jsx"},{"name":"SectionHeader","sourcePath":"components/content/SectionHeader.jsx"},{"name":"StatBlock","sourcePath":"components/content/StatBlock.jsx"},{"name":"WaveBullet","sourcePath":"components/content/WaveBullet.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Logo","sourcePath":"components/core/Logo.jsx"},{"name":"TextLink","sourcePath":"components/core/TextLink.jsx"},{"name":"Wave","sourcePath":"components/core/Wave.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"}],"sourceHashes":{"components/content/Accordion.jsx":"b067d2582f24","components/content/Badge.jsx":"f60d135e8060","components/content/Card.jsx":"1ee638231092","components/content/ExpertiseCard.jsx":"941e645f119e","components/content/PhotoFrame.jsx":"f8f287a3a0f0","components/content/Quote.jsx":"0e7521a7a915","components/content/SectionHeader.jsx":"06194ff12e67","components/content/StatBlock.jsx":"0f02e4c5b437","components/content/WaveBullet.jsx":"be9f1c8085ef","components/core/Button.jsx":"eb8db8d7a2cb","components/core/Icon.jsx":"8504a6e1bc29","components/core/IconButton.jsx":"2e2ab82452e4","components/core/Logo.jsx":"4717622e6608","components/core/TextLink.jsx":"66ab7b1f16e0","components/core/Wave.jsx":"8508929d68e3","components/forms/Checkbox.jsx":"32415ff81b85","components/forms/Field.jsx":"c7629c36aeb9","components/forms/Select.jsx":"2715ef6f6ca6"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.MeritisDesignSystem_198a6a = window.MeritisDesignSystem_198a6a || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const BADGE_TONES = {
  blue: {
    background: 'var(--mrt-blue)',
    color: 'var(--mrt-beige)'
  },
  gold: {
    background: 'var(--mrt-gold)',
    color: 'var(--mrt-beige)'
  },
  soft: {
    background: 'var(--mrt-grey-100)',
    color: 'var(--mrt-blue)'
  },
  outline: {
    background: 'transparent',
    color: 'var(--mrt-blue)',
    boxShadow: 'inset 0 0 0 1px var(--mrt-grey-200)'
  }
};
function Badge({
  tone = 'soft',
  uppercase = false,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      padding: '5px 12px',
      borderRadius: 'var(--radius-sm)',
      fontFamily: 'var(--font-core)',
      fontWeight: 'var(--weight-bold)',
      fontSize: 'var(--text-2xs)',
      letterSpacing: uppercase ? 'var(--tracking-eyebrow)' : 0,
      textTransform: uppercase ? 'uppercase' : 'none',
      ...BADGE_TONES[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Badge.jsx", error: String((e && e.message) || e) }); }

// components/content/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  tone = 'light',
  padding,
  hoverable = false,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const TONES = {
    light: {
      background: 'var(--mrt-white)',
      color: 'var(--mrt-blue)',
      border: '1px solid transparent'
    },
    beige: {
      background: 'var(--mrt-beige)',
      color: 'var(--mrt-blue)',
      border: '1px solid transparent'
    },
    outline: {
      background: 'transparent',
      color: 'var(--mrt-blue)',
      border: '1px solid var(--mrt-grey-200)'
    },
    dark: {
      background: 'var(--mrt-blue)',
      color: 'var(--mrt-beige)',
      border: '1px solid transparent'
    },
    gold: {
      background: 'var(--mrt-gold)',
      color: 'var(--mrt-beige)',
      border: '1px solid transparent'
    }
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    className: tone === 'dark' ? 'mrt-on-dark' : tone === 'gold' ? 'mrt-on-gold' : undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: 'relative',
      overflow: 'hidden',
      borderRadius: 'var(--radius-lg)',
      padding: padding || 'var(--pad-card)',
      transition: 'transform var(--dur-base) var(--ease-standard),box-shadow var(--dur-base) var(--ease-standard)',
      transform: hoverable && hover ? 'translateY(var(--lift-hover))' : 'none',
      boxShadow: hoverable && hover ? 'var(--shadow-md)' : 'none',
      ...TONES[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Card.jsx", error: String((e && e.message) || e) }); }

// components/content/PhotoFrame.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function PhotoFrame({
  src,
  alt = '',
  shape = 'rect',
  treatment = 'bw',
  ratio = '4 / 3',
  height,
  style,
  ...rest
}) {
  const radius = shape === 'quarter' ? 'var(--radius-quarter)' : shape === 'circle' ? 'var(--radius-pill)' : shape === 'rounded' ? 'var(--radius-lg)' : '0';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: 'relative',
      overflow: 'hidden',
      borderRadius: radius,
      aspectRatio: height ? undefined : ratio,
      height,
      background: 'var(--mrt-grey-100)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      filter: treatment === 'bw' ? 'var(--filter-photo-bw)' : 'saturate(.92)'
    }
  }));
}
Object.assign(__ds_scope, { PhotoFrame });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/PhotoFrame.jsx", error: String((e && e.message) || e) }); }

// components/content/Quote.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Quote({
  children,
  author,
  role,
  tone = 'light',
  style,
  ...rest
}) {
  const onDark = tone === 'dark';
  return /*#__PURE__*/React.createElement("figure", _extends({
    style: {
      margin: 0,
      display: 'flex',
      gap: 'var(--space-5)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      fontFamily: 'var(--font-core)',
      fontWeight: 'var(--weight-black)',
      fontSize: 84,
      lineHeight: .8,
      color: onDark ? 'var(--mrt-gold)' : 'var(--mrt-gold-12)'
    }
  }, "\u201C"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-core)',
      fontStyle: 'italic',
      fontSize: 'var(--text-lg)',
      lineHeight: 'var(--leading-loose)',
      color: onDark ? 'var(--mrt-beige)' : 'var(--mrt-blue)',
      maxWidth: 'var(--measure-body)'
    }
  }, children), author && /*#__PURE__*/React.createElement("figcaption", {
    style: {
      fontFamily: 'var(--font-core)',
      fontSize: 'var(--text-sm)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 'var(--weight-bold)',
      color: 'var(--mrt-gold)'
    }
  }, author), role && /*#__PURE__*/React.createElement("span", {
    style: {
      color: onDark ? 'var(--mrt-grey-100)' : 'var(--mrt-graphite)'
    }
  }, ' · ' + role))));
}
Object.assign(__ds_scope, { Quote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Quote.jsx", error: String((e && e.message) || e) }); }

// components/content/SectionHeader.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SectionHeader({
  eyebrow,
  title,
  intro,
  align = 'left',
  tone = 'light',
  style,
  ...rest
}) {
  const onDark = tone === 'dark';
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)',
      alignItems: align === 'center' ? 'center' : 'flex-start',
      textAlign: align,
      ...style
    }
  }, rest), eyebrow && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-core)',
      fontWeight: 'var(--weight-bold)',
      fontSize: 'var(--text-xs)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-eyebrow)',
      color: 'var(--mrt-gold)'
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-core)',
      fontWeight: 'var(--weight-black)',
      fontSize: 'var(--text-2xl)',
      lineHeight: 'var(--leading-heading)',
      color: onDark ? 'var(--mrt-beige)' : 'var(--mrt-blue)',
      maxWidth: '22ch',
      textWrap: 'balance'
    }
  }, title), intro && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-core)',
      fontSize: 'var(--text-md)',
      lineHeight: 'var(--leading-body)',
      color: onDark ? 'var(--mrt-grey-100)' : 'var(--mrt-graphite)',
      maxWidth: 'var(--measure-body)',
      textWrap: 'pretty'
    }
  }, intro));
}
Object.assign(__ds_scope, { SectionHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/SectionHeader.jsx", error: String((e && e.message) || e) }); }

// components/content/StatBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function StatBlock({
  value,
  label,
  tone = 'blue',
  align = 'left',
  style,
  ...rest
}) {
  const valueColor = tone === 'gold' ? 'var(--mrt-gold)' : tone === 'on-dark' ? 'var(--mrt-gold)' : 'var(--mrt-blue)';
  const labelColor = tone === 'on-dark' ? 'var(--mrt-beige)' : 'var(--mrt-graphite)';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-1)',
      textAlign: align,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-core)',
      fontWeight: 'var(--weight-black)',
      fontSize: 'var(--text-3xl)',
      lineHeight: 1,
      color: valueColor
    }
  }, value), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-core)',
      fontWeight: 'var(--weight-regular)',
      fontSize: 'var(--text-sm)',
      lineHeight: 1.35,
      color: labelColor
    }
  }, label));
}
Object.assign(__ds_scope, { StatBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/StatBlock.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Line pictograms. The charte specifies The Noun Project (Made x Made) line icons, which are not
// redistributable here — we substitute Lucide (CDN, same single-weight line style). See readme ICONOGRAPHY.
const LUCIDE = 'https://unpkg.com/lucide-static@0.544.0/icons/';
function Icon({
  name,
  size = 24,
  stroke = 1.5,
  color = 'currentColor',
  style,
  ...rest
}) {
  const url = `url("${LUCIDE}${name}.svg")`;
  return /*#__PURE__*/React.createElement("span", _extends({
    "aria-hidden": "true",
    "data-icon": name,
    style: {
      display: 'inline-block',
      width: size,
      height: size,
      flex: '0 0 auto',
      backgroundColor: color,
      WebkitMaskImage: url,
      maskImage: url,
      WebkitMaskRepeat: 'no-repeat',
      maskRepeat: 'no-repeat',
      WebkitMaskSize: 'contain',
      maskSize: 'contain',
      opacity: stroke < 1.5 ? 0.9 : 1,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/content/Accordion.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Accordion({
  items = [],
  defaultOpen = -1,
  tone = 'light',
  style,
  ...rest
}) {
  const [open, setOpen] = React.useState(defaultOpen);
  const onDark = tone === 'dark';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      ...style
    }
  }, rest), items.map((it, i) => {
    const isOpen = open === i;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        borderBottom: `1px solid ${onDark ? 'var(--mrt-white-16)' : 'var(--mrt-grey-200)'}`
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setOpen(isOpen ? -1 : i),
      "aria-expanded": isOpen,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-4)',
        width: '100%',
        padding: 'var(--space-5) 0',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        textAlign: 'left',
        fontFamily: 'var(--font-core)',
        fontWeight: 'var(--weight-bold)',
        fontSize: 'var(--text-lg)',
        color: onDark ? 'var(--mrt-beige)' : 'var(--mrt-blue)'
      }
    }, it.icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: it.icon,
      size: 32,
      color: "var(--mrt-gold)"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }, it.title), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: isOpen ? 'minus' : 'plus',
      size: 20,
      color: "var(--mrt-gold)"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateRows: isOpen ? '1fr' : '0fr',
        transition: 'grid-template-rows var(--dur-base) var(--ease-standard)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        paddingBottom: 'var(--space-5)',
        maxWidth: 'var(--measure-body)',
        fontFamily: 'var(--font-core)',
        fontSize: 'var(--text-md)',
        lineHeight: 'var(--leading-body)',
        color: onDark ? 'var(--mrt-grey-100)' : 'var(--mrt-graphite)'
      }
    }, it.body))));
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/content/ExpertiseCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ExpertiseCard({
  icon,
  title,
  items = [],
  tone = 'light',
  href,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const onDark = tone === 'dark';
  const Tag = href ? 'a' : 'div';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      gap: 'var(--space-5)',
      alignItems: 'flex-start',
      textDecoration: 'none',
      color: 'inherit',
      transition: 'transform var(--dur-base) var(--ease-standard)',
      transform: href && hover ? 'translateY(var(--lift-hover))' : 'none',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 48,
    color: onDark ? 'var(--mrt-grey-100)' : 'var(--mrt-gold)',
    style: {
      marginTop: 2
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-core)',
      fontWeight: 'var(--weight-bold)',
      fontSize: 'var(--text-lg)',
      color: 'var(--mrt-gold)'
    }
  }, title), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-1)'
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      fontFamily: 'var(--font-core)',
      fontSize: 'var(--text-sm)',
      lineHeight: 1.45,
      color: onDark ? 'var(--mrt-beige)' : 'var(--mrt-blue)'
    }
  }, it)))));
}
Object.assign(__ds_scope, { ExpertiseCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ExpertiseCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const PADS = {
  sm: {
    padding: '9px 18px',
    fontSize: 'var(--text-sm)'
  },
  md: {
    padding: 'var(--pad-button-y) var(--pad-button-x)',
    fontSize: 'var(--text-md)'
  },
  lg: {
    padding: '18px 36px',
    fontSize: 'var(--text-lg)'
  }
};
const SKINS = {
  primary: {
    background: 'var(--mrt-blue)',
    color: 'var(--mrt-beige)',
    border: '1px solid var(--mrt-blue)'
  },
  gold: {
    background: 'var(--mrt-gold)',
    color: 'var(--mrt-beige)',
    border: '1px solid var(--mrt-gold)'
  },
  outline: {
    background: 'transparent',
    color: 'var(--mrt-blue)',
    border: '1px solid var(--mrt-blue)'
  },
  'outline-gold': {
    background: 'transparent',
    color: 'var(--mrt-gold)',
    border: '1px solid var(--mrt-gold)'
  },
  'on-dark': {
    background: 'transparent',
    color: 'var(--mrt-beige)',
    border: '1px solid var(--mrt-beige)'
  }
};
const HOVERS = {
  primary: {
    background: 'var(--mrt-blue-deep)',
    borderColor: 'var(--mrt-blue-deep)'
  },
  gold: {
    background: 'var(--mrt-gold-deep)',
    borderColor: 'var(--mrt-gold-deep)'
  },
  outline: {
    background: 'var(--mrt-blue)',
    color: 'var(--mrt-beige)'
  },
  'outline-gold': {
    background: 'var(--mrt-gold)',
    color: 'var(--mrt-beige)'
  },
  'on-dark': {
    background: 'var(--mrt-beige)',
    color: 'var(--mrt-blue)'
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'left',
  disabled,
  fullWidth,
  as = 'button',
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const Tag = as;
  const skin = SKINS[variant] || SKINS.primary;
  const hoverSkin = hover && !disabled ? HOVERS[variant] : null;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    disabled: Tag === 'button' ? disabled : undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: {
      display: fullWidth ? 'flex' : 'inline-flex',
      width: fullWidth ? '100%' : undefined,
      alignItems: 'center',
      justifyContent: 'center',
      gap: 'var(--space-3)',
      fontFamily: 'var(--font-core)',
      fontWeight: 'var(--weight-bold)',
      lineHeight: 1.2,
      textDecoration: 'none',
      cursor: disabled ? 'not-allowed' : 'pointer',
      borderRadius: 'var(--radius-sm)',
      transition: 'background var(--dur-fast) var(--ease-standard),color var(--dur-fast) var(--ease-standard),border-color var(--dur-fast) var(--ease-standard),transform var(--dur-instant) var(--ease-standard)',
      transform: press && !disabled ? 'scale(var(--press-scale))' : 'none',
      opacity: disabled ? 0.42 : 1,
      ...PADS[size],
      ...skin,
      ...hoverSkin,
      ...style
    }
  }, rest), icon && iconPosition === 'left' && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: size === 'sm' ? 16 : 20
  }), /*#__PURE__*/React.createElement("span", null, children), icon && iconPosition === 'right' && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: size === 'sm' ? 16 : 20
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const IB_SKINS = {
  gold: {
    background: 'var(--mrt-gold)',
    color: 'var(--mrt-beige)'
  },
  blue: {
    background: 'var(--mrt-blue)',
    color: 'var(--mrt-beige)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--mrt-blue)'
  }
};
function IconButton({
  icon,
  variant = 'blue',
  size = 44,
  label,
  round = false,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": label,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: size,
      height: size,
      padding: 0,
      cursor: 'pointer',
      border: variant === 'ghost' ? '1px solid var(--mrt-blue)' : 'none',
      borderRadius: round ? 'var(--radius-pill)' : 'var(--radius-sm)',
      transition: 'filter var(--dur-fast) var(--ease-standard),background var(--dur-fast) var(--ease-standard)',
      filter: hover ? 'brightness(.92)' : 'none',
      ...IB_SKINS[variant],
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: Math.round(size * 0.45)
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Resolve the design-system root from the <script src=".../_ds_bundle.js"> tag so assets load
// correctly whatever depth the consuming page sits at.
function dsRoot() {
  if (typeof window !== 'undefined' && window.MERITIS_DS_ROOT) return window.MERITIS_DS_ROOT;
  if (typeof document !== 'undefined') {
    const tag = document.querySelector('script[src*="_ds_bundle.js"]');
    if (tag) return tag.getAttribute('src').replace(/_ds_bundle\.js.*$/, '');
    const link = document.querySelector('link[rel="stylesheet"][href*="styles.css"]');
    if (link) return link.getAttribute('href').replace(/styles\.css.*$/, '');
  }
  return '';
}
const FILES = {
  'principal/color': 'logo-principal-color.png',
  'principal/white': 'logo-principal-white.png',
  'principal/black': 'logo-principal-black.png',
  'secondaire/color': 'logo-secondaire-color.png',
  'secondaire/white': 'logo-secondaire-white.png',
  'secondaire/black': 'logo-secondaire-black.png'
};
function Logo({
  lockup = 'secondaire',
  tone = 'color',
  height = 40,
  assetBase,
  style,
  ...rest
}) {
  const src = (assetBase || dsRoot() + 'assets/logos/') + (FILES[`${lockup}/${tone}`] || FILES['secondaire/color']);
  return /*#__PURE__*/React.createElement("img", _extends({
    src: src,
    alt: "Meritis",
    style: {
      height,
      width: 'auto',
      display: 'block',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/TextLink.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function TextLink({
  tone = 'blue',
  icon,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const base = tone === 'gold' ? 'var(--mrt-gold-deep)' : 'var(--mrt-blue)';
  const alt = tone === 'gold' ? 'var(--mrt-blue)' : 'var(--mrt-gold-deep)';
  const onDark = tone === 'on-dark';
  return /*#__PURE__*/React.createElement("a", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      fontFamily: 'var(--font-core)',
      fontWeight: 'var(--weight-bold)',
      fontSize: 'var(--text-md)',
      color: onDark ? hover ? 'var(--mrt-beige)' : 'var(--mrt-gold)' : hover ? alt : base,
      textDecoration: 'underline',
      textUnderlineOffset: 3,
      textDecorationThickness: 1,
      transition: 'color var(--dur-fast) var(--ease-standard)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", null, children), icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 16
  }));
}
Object.assign(__ds_scope, { TextLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/TextLink.jsx", error: String((e && e.message) || e) }); }

// components/core/Wave.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Resolve the design-system root from the <script src=".../_ds_bundle.js"> tag so assets load
// correctly whatever depth the consuming page sits at.
function dsRoot() {
  if (typeof window !== 'undefined' && window.MERITIS_DS_ROOT) return window.MERITIS_DS_ROOT;
  if (typeof document !== 'undefined') {
    const tag = document.querySelector('script[src*="_ds_bundle.js"]');
    if (tag) return tag.getAttribute('src').replace(/_ds_bundle\.js.*$/, '');
    const link = document.querySelector('link[rel="stylesheet"][href*="styles.css"]');
    if (link) return link.getAttribute('href').replace(/styles\.css.*$/, '');
  }
  return '';
}
const FILES = {
  'arcs/blue': 'onde-arcs-bleue.png',
  'arcs/gold': 'onde-arcs-doree.png',
  'arcs/beige': 'onde-arcs-beige.png',
  'arcs/light': 'onde-arcs-claire.png',
  'arcs/grey': 'onde-arcs-grise.png',
  'pleine/blue': 'onde-pleine-bleue.png',
  'pleine/gold': 'onde-pleine-doree.png',
  'pleine/beige': 'onde-pleine-beige.png',
  'pleine/light': 'onde-pleine-claire.png',
  'pleine/grey': 'onde-pleine-grise.png'
};
function Wave({
  shape = 'arcs',
  color = 'blue',
  size = 200,
  rotate = 0,
  opacity = 1,
  assetBase,
  style,
  ...rest
}) {
  const file = FILES[`${shape}/${color}`] || FILES['arcs/blue'];
  const src = (assetBase || dsRoot() + 'assets/waves/') + file;
  const turn = [0, 90, 180, 270].includes(rotate) ? rotate : 0;
  return /*#__PURE__*/React.createElement("span", _extends({
    "aria-hidden": "true",
    style: {
      display: 'block',
      width: size,
      height: size,
      opacity,
      backgroundImage: `url("${src}")`,
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      transform: turn ? `rotate(${turn}deg)` : undefined,
      pointerEvents: 'none',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Wave });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Wave.jsx", error: String((e && e.message) || e) }); }

// components/content/WaveBullet.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function WaveBullet({
  shape = 'arcs',
  color = 'blue',
  size = 22,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("li", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      listStyle: 'none',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Wave, {
    shape: shape,
    color: color,
    size: size,
    rotate: 90,
    style: {
      flex: '0 0 auto'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-core)',
      fontWeight: 'var(--weight-bold)',
      fontSize: 'var(--text-lg)',
      color: 'var(--mrt-blue)'
    }
  }, children));
}
Object.assign(__ds_scope, { WaveBullet });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/WaveBullet.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  label,
  checked,
  onChange,
  tone = 'light',
  style,
  ...rest
}) {
  const onDark = tone === 'dark';
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'flex-start',
      gap: 'var(--space-3)',
      cursor: 'pointer',
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: checked,
    onChange: onChange,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 1,
      height: 1
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 20,
      height: 20,
      flex: '0 0 auto',
      marginTop: 2,
      borderRadius: 'var(--radius-xs)',
      border: `1px solid ${checked ? 'var(--mrt-blue)' : onDark ? 'var(--mrt-white-16)' : 'var(--mrt-grey-200)'}`,
      background: checked ? 'var(--mrt-blue)' : 'transparent',
      transition: 'background var(--dur-fast) var(--ease-standard),border-color var(--dur-fast) var(--ease-standard)'
    }
  }, checked && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 14,
    color: "var(--mrt-beige)"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-core)',
      fontSize: 'var(--text-sm)',
      lineHeight: 1.45,
      color: onDark ? 'var(--mrt-beige)' : 'var(--mrt-graphite)'
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Field({
  label,
  hint,
  error,
  as = 'input',
  tone = 'light',
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const Tag = as === 'textarea' ? 'textarea' : 'input';
  const onDark = tone === 'dark';
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-core)',
      fontWeight: 'var(--weight-bold)',
      fontSize: 'var(--text-sm)',
      color: onDark ? 'var(--mrt-beige)' : 'var(--mrt-blue)'
    }
  }, label), /*#__PURE__*/React.createElement(Tag, _extends({
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    rows: as === 'textarea' ? 4 : undefined,
    style: {
      fontFamily: 'var(--font-core)',
      fontSize: 'var(--text-md)',
      padding: 'var(--pad-field-y) var(--pad-field-x)',
      borderRadius: 'var(--radius-sm)',
      border: `1px solid ${error ? 'var(--mrt-gold-deep)' : focus ? 'var(--mrt-blue)' : onDark ? 'var(--mrt-white-16)' : 'var(--mrt-grey-200)'}`,
      background: onDark ? 'transparent' : 'var(--mrt-white)',
      color: onDark ? 'var(--mrt-beige)' : 'var(--mrt-blue)',
      outline: 'none',
      resize: as === 'textarea' ? 'vertical' : undefined,
      transition: 'border-color var(--dur-fast) var(--ease-standard)'
    }
  }, rest)), (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-core)',
      fontSize: 'var(--text-xs)',
      color: error ? 'var(--mrt-gold-deep)' : onDark ? 'var(--mrt-grey-100)' : 'var(--mrt-graphite)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  label,
  options = [],
  tone = 'light',
  style,
  ...rest
}) {
  const onDark = tone === 'dark';
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-core)',
      fontWeight: 'var(--weight-bold)',
      fontSize: 'var(--text-sm)',
      color: onDark ? 'var(--mrt-beige)' : 'var(--mrt-blue)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    style: {
      appearance: 'none',
      width: '100%',
      fontFamily: 'var(--font-core)',
      fontSize: 'var(--text-md)',
      padding: 'var(--pad-field-y) 44px var(--pad-field-y) var(--pad-field-x)',
      borderRadius: 'var(--radius-sm)',
      border: `1px solid ${onDark ? 'var(--mrt-white-16)' : 'var(--mrt-grey-200)'}`,
      background: onDark ? 'transparent' : 'var(--mrt-white)',
      color: onDark ? 'var(--mrt-beige)' : 'var(--mrt-blue)',
      cursor: 'pointer'
    }
  }, rest), options.map(o => {
    const value = typeof o === 'string' ? o : o.value;
    const text = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: value,
      value: value
    }, text);
  })), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 18,
    color: "var(--mrt-gold)",
    style: {
      position: 'absolute',
      right: 14,
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none'
    }
  })));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.ExpertiseCard = __ds_scope.ExpertiseCard;

__ds_ns.PhotoFrame = __ds_scope.PhotoFrame;

__ds_ns.Quote = __ds_scope.Quote;

__ds_ns.SectionHeader = __ds_scope.SectionHeader;

__ds_ns.StatBlock = __ds_scope.StatBlock;

__ds_ns.WaveBullet = __ds_scope.WaveBullet;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.TextLink = __ds_scope.TextLink;

__ds_ns.Wave = __ds_scope.Wave;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Select = __ds_scope.Select;

})();
